const express = require("express");
const cors = require("cors");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;

const JWT_SECRET = "academia_industry_portal_secret_2026";

app.use(cors());
app.use(express.json());

const frontendPath = path.join(
    __dirname,
    "..",
    "academia_industry_portal"
);

app.use(express.static(frontendPath));

const dbPath = path.join(__dirname, "portal.db");
const db = new sqlite3.Database(dbPath);

console.log("Database:", dbPath);

/* =========================================================
   DATABASE INITIALIZATION
========================================================= */

db.serialize(() => {

    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            role TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS assessments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            programming INTEGER DEFAULT 0,
            communication INTEGER DEFAULT 0,
            problem_solving INTEGER DEFAULT 0,
            technical_score REAL DEFAULT 0,
            project_score REAL DEFAULT 0,
            total_score REAL DEFAULT 0,
            technical_skills TEXT DEFAULT '',
            target_role TEXT DEFAULT '',
            project_experience REAL DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id)
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS technical_test_results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            skill TEXT NOT NULL,
            score REAL NOT NULL,
            correct INTEGER DEFAULT 0,
            total INTEGER DEFAULT 0,
            completed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id)
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS applications (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            opportunity_title TEXT NOT NULL,
            company TEXT NOT NULL,
            status TEXT DEFAULT 'Applied',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY(user_id) REFERENCES users(id)
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS opportunities (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT NOT NULL,
            title TEXT NOT NULL,
            company TEXT NOT NULL,
            skills TEXT DEFAULT '',
            location TEXT DEFAULT ''
        )
    `);

    /* Migration support for older databases */

    db.all(
        `PRAGMA table_info(assessments)`,
        (err, columns) => {

            if (err) {
                console.error(err);
                return;
            }

            const names = columns.map(column => column.name);

            if (!names.includes("technical_skills")) {
                db.run(
                    `ALTER TABLE assessments ADD COLUMN technical_skills TEXT DEFAULT ''`
                );
            }

            if (!names.includes("target_role")) {
                db.run(
                    `ALTER TABLE assessments ADD COLUMN target_role TEXT DEFAULT ''`
                );
            }

            if (!names.includes("project_experience")) {
                db.run(
                    `ALTER TABLE assessments ADD COLUMN project_experience REAL DEFAULT 0`
                );
            }
        }
    );

    seedUsers();
    seedOpportunities();
});

/* =========================================================
   SEED USERS
========================================================= */

async function seedUsers() {

    const users = [
        {
            name: "Demo Student",
            email: "student@test.com",
            password: "123456",
            role: "Student"
        },
        {
            name: "Demo Academician",
            email: "academician@test.com",
            password: "123456",
            role: "Academician"
        },
        {
            name: "Demo Industry",
            email: "industry@test.com",
            password: "123456",
            role: "Industry"
        },
        {
            name: "Demo Institution",
            email: "institution@test.com",
            password: "123456",
            role: "Institution"
        }
    ];

    for (const user of users) {

        const hashedPassword = await bcrypt.hash(
            user.password,
            10
        );

        db.get(
            `SELECT id FROM users WHERE email = ?`,
            [user.email],
            (err, existing) => {

                if (err) {
                    console.error(err);
                    return;
                }

                if (!existing) {

                    db.run(
                        `
                        INSERT INTO users
                        (name, email, password, role)
                        VALUES (?, ?, ?, ?)
                        `,
                        [
                            user.name,
                            user.email,
                            hashedPassword,
                            user.role
                        ],
                        error => {

                            if (error) {
                                console.error(
                                    "User seed error:",
                                    error
                                );
                            }
                        }
                    );
                }
            }
        );
    }
}

/* =========================================================
   SEED OPPORTUNITIES
========================================================= */

function seedOpportunities() {

    const opportunities = [
        [
            "Internship",
            "Frontend Developer Intern",
            "TechNova Solutions",
            "HTML, CSS, JavaScript, React",
            "Hyderabad"
        ],
        [
            "Internship",
            "Data Analytics Intern",
            "InsightWorks",
            "Python, SQL, Power BI",
            "Remote"
        ],
        [
            "Job",
            "Junior Software Developer",
            "CodeSphere Technologies",
            "Java, SQL, Git",
            "Hyderabad"
        ],
        [
            "Training",
            "AI & Machine Learning Bootcamp",
            "FutureTech Academy",
            "Python, Machine Learning, Data Science",
            "Online"
        ],
        [
            "Internship",
            "Cyber Security Intern",
            "SecureNet Labs",
            "Networking, Linux, Cyber Security",
            "Bengaluru"
        ],
        [
            "Job",
            "Graduate Engineer Trainee",
            "Innovate Industries",
            "Problem Solving, Communication",
            "Chennai"
        ]
    ];

    db.get(
        `SELECT COUNT(*) AS count FROM opportunities`,
        (err, row) => {

            if (err) {
                console.error(err);
                return;
            }

            if (row.count === 0) {

                const stmt = db.prepare(`
                    INSERT INTO opportunities
                    (type, title, company, skills, location)
                    VALUES (?, ?, ?, ?, ?)
                `);

                opportunities.forEach(item => {
                    stmt.run(item);
                });

                stmt.finalize();

                console.log("Demo opportunities added.");
            }
        }
    );
}

/* =========================================================
   AUTHENTICATION
========================================================= */

function authenticateToken(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Authentication required."
        });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Invalid authentication token."
        });
    }

    jwt.verify(
        token,
        JWT_SECRET,
        (err, user) => {

            if (err) {
                return res.status(403).json({
                    message: "Token expired or invalid."
                });
            }

            req.user = user;
            next();
        }
    );
}

/* =========================================================
   HEALTH CHECK
========================================================= */

app.get("/api/health", (req, res) => {

    res.json({
        success: true,
        message: "SkillBridge backend is running.",
        database: "Connected"
    });
});

/* =========================================================
   LOGIN
========================================================= */

app.post("/api/login", (req, res) => {

    const {
        email,
        password,
        role
    } = req.body;

    if (!email || !password || !role) {
        return res.status(400).json({
            message: "Email, password and role are required."
        });
    }

    db.get(
        `
        SELECT *
        FROM users
        WHERE email = ?
        AND role = ?
        `,
        [email, role],
        async (err, user) => {

            if (err) {
                console.error(err);

                return res.status(500).json({
                    message: "Database error."
                });
            }

            if (!user) {
                return res.status(401).json({
                    message: "Invalid email, password or role."
                });
            }

            const passwordMatch =
                await bcrypt.compare(
                    password,
                    user.password
                );

            if (!passwordMatch) {
                return res.status(401).json({
                    message: "Invalid email, password or role."
                });
            }

            const token = jwt.sign(
                {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },
                JWT_SECRET,
                {
                    expiresIn: "7d"
                }
            );

            res.json({
                success: true,
                message: "Login successful.",
                token,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            });
        }
    );
});

/* =========================================================
   CURRENT USER
========================================================= */

app.get(
    "/api/me",
    authenticateToken,
    (req, res) => {

        db.get(
            `
            SELECT id, name, email, role, created_at
            FROM users
            WHERE id = ?
            `,
            [req.user.id],
            (err, user) => {

                if (err) {
                    return res.status(500).json({
                        message: "Database error."
                    });
                }

                if (!user) {
                    return res.status(404).json({
                        message: "User not found."
                    });
                }

                res.json({
                    success: true,
                    user
                });
            }
        );
    }
);

/* =========================================================
   OPPORTUNITIES
========================================================= */

app.get(
    "/api/opportunities",
    (req, res) => {

        db.all(
            `
            SELECT *
            FROM opportunities
            ORDER BY id DESC
            `,
            [],
            (err, rows) => {

                if (err) {
                    return res.status(500).json({
                        message: "Could not load opportunities."
                    });
                }

                res.json({
                    success: true,
                    opportunities: rows
                });
            }
        );
    }
);

/* =========================================================
   SAVE STUDENT ASSESSMENT
========================================================= */

app.post(
    "/api/assessment",
    authenticateToken,
    (req, res) => {

        const {
            programming = 0,
            communication = 0,
            problemSolving = 0,
            technicalScore = 0,
            projectScore = 0,
            projectExperience = projectScore,
            score,
            technicalSkills = "",
            targetRole = ""
        } = req.body;

        let totalScore;

        if (
            score !== undefined &&
            score !== null
        ) {
            totalScore = Number(score);
        } else {

            totalScore =
                (
                    Number(programming) +
                    Number(communication) +
                    Number(problemSolving)
                ) / 3 * 20;
        }

        db.run(
            `
            INSERT INTO assessments
            (
                user_id,
                programming,
                communication,
                problem_solving,
                technical_score,
                project_score,
                total_score,
                technical_skills,
                target_role,
                project_experience
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `,
            [
                req.user.id,
                programming,
                communication,
                problemSolving,
                technicalScore,
                projectScore,
                totalScore,
                technicalSkills,
                targetRole,
                projectExperience
            ],
            function (err) {

                if (err) {
                    console.error(err);

                    return res.status(500).json({
                        message: "Could not save assessment."
                    });
                }

                res.json({
                    success: true,
                    message: "Assessment saved successfully.",
                    assessmentId: this.lastID
                });
            }
        );
    }
);

/* =========================================================
   GET LATEST ASSESSMENT
========================================================= */

app.get(
    "/api/assessment",
    authenticateToken,
    (req, res) => {

        db.get(
            `
            SELECT *
            FROM assessments
            WHERE user_id = ?
            ORDER BY id DESC
            LIMIT 1
            `,
            [req.user.id],
            (err, assessment) => {

                if (err) {
                    return res.status(500).json({
                        message: "Database error."
                    });
                }

                res.json({
                    success: true,
                    assessment: assessment || null
                });
            }
        );
    }
);

/* =========================================================
   SAVE TECHNICAL TEST
========================================================= */

app.post(
    "/api/technical-tests",
    authenticateToken,
    (req, res) => {

        const {
            skill,
            score,
            correct,
            total
        } = req.body;

        if (
            !skill ||
            score === undefined ||
            correct === undefined ||
            total === undefined
        ) {
            return res.status(400).json({
                message: "Skill, score, correct and total are required."
            });
        }

        db.run(
            `
            INSERT INTO technical_test_results
            (
                user_id,
                skill,
                score,
                correct,
                total
            )
            VALUES (?, ?, ?, ?, ?)
            `,
            [
                req.user.id,
                skill,
                Number(score),
                Number(correct),
                Number(total)
            ],
            function (err) {

                if (err) {
                    console.error(err);

                    return res.status(500).json({
                        message: "Could not save technical test."
                    });
                }

                res.json({
                    success: true,
                    message: "Technical test saved.",
                    testId: this.lastID
                });
            }
        );
    }
);

/* =========================================================
   GET LATEST TECHNICAL RESULTS
========================================================= */

app.get(
    "/api/technical-tests",
    authenticateToken,
    (req, res) => {

        db.all(
            `
            SELECT t.*
            FROM technical_test_results t
            INNER JOIN (
                SELECT
                    LOWER(skill) AS skill_key,
                    MAX(id) AS latest_id
                FROM technical_test_results
                WHERE user_id = ?
                GROUP BY LOWER(skill)
            ) latest
            ON t.id = latest.latest_id
            WHERE t.user_id = ?
            ORDER BY t.id DESC
            `,
            [
                req.user.id,
                req.user.id
            ],
            (err, rows) => {

                if (err) {
                    console.error(err);

                    return res.status(500).json({
                        message: "Could not load technical tests."
                    });
                }

                res.json({
                    success: true,
                    results: rows
                });
            }
        );
    }
);

/* =========================================================
   TECHNICAL TEST HISTORY
========================================================= */

app.get(
    "/api/technical-tests/history",
    authenticateToken,
    (req, res) => {

        db.all(
            `
            SELECT *
            FROM technical_test_results
            WHERE user_id = ?
            ORDER BY id DESC
            `,
            [req.user.id],
            (err, rows) => {

                if (err) {
                    return res.status(500).json({
                        message: "Could not load test history."
                    });
                }

                res.json({
                    success: true,
                    results: rows
                });
            }
        );
    }
);

/* =========================================================
   APPLY FOR OPPORTUNITY
========================================================= */

app.post(
    "/api/applications",
    authenticateToken,
    (req, res) => {

        const {
            opportunityTitle,
            company
        } = req.body;

        if (!opportunityTitle || !company) {
            return res.status(400).json({
                message: "Opportunity title and company are required."
            });
        }

        db.run(
            `
            INSERT INTO applications
            (
                user_id,
                opportunity_title,
                company
            )
            VALUES (?, ?, ?)
            `,
            [
                req.user.id,
                opportunityTitle,
                company
            ],
            function (err) {

                if (err) {
                    console.error(err);

                    return res.status(500).json({
                        message: "Could not submit application."
                    });
                }

                res.json({
                    success: true,
                    message: "Application submitted successfully.",
                    applicationId: this.lastID
                });
            }
        );
    }
);

/* =========================================================
   GET APPLICATIONS
========================================================= */

app.get(
    "/api/applications",
    authenticateToken,
    (req, res) => {

        db.all(
            `
            SELECT *
            FROM applications
            WHERE user_id = ?
            ORDER BY id DESC
            `,
            [req.user.id],
            (err, rows) => {

                if (err) {
                    return res.status(500).json({
                        message: "Could not load applications."
                    });
                }

                res.json({
                    success: true,
                    applications: rows
                });
            }
        );
    }
);

/* =========================================================
   DASHBOARD DATA
========================================================= */

app.get(
    "/api/dashboard",
    authenticateToken,
    (req, res) => {

        db.get(
            `
            SELECT COUNT(*) AS applicationCount
            FROM applications
            WHERE user_id = ?
            `,
            [req.user.id],
            (err, applicationRow) => {

                if (err) {
                    return res.status(500).json({
                        message: "Database error."
                    });
                }

                db.get(
                    `
                    SELECT COUNT(*) AS testCount
                    FROM technical_test_results
                    WHERE user_id = ?
                    `,
                    [req.user.id],
                    (testErr, testRow) => {

                        if (testErr) {
                            return res.status(500).json({
                                message: "Database error."
                            });
                        }

                        db.get(
                            `
                            SELECT *
                            FROM assessments
                            WHERE user_id = ?
                            ORDER BY id DESC
                            LIMIT 1
                            `,
                            [req.user.id],
                            (assessmentErr, assessment) => {

                                if (assessmentErr) {
                                    return res.status(500).json({
                                        message: "Database error."
                                    });
                                }

                                res.json({
                                    success: true,
                                    applicationCount:
                                        applicationRow.applicationCount,
                                    testCount:
                                        testRow.testCount,
                                    assessment:
                                        assessment || null
                                });
                            }
                        );
                    }
                );
            }
        );
    }
);

/* =========================================================
   RECOMMENDATIONS
========================================================= */

app.post(
    "/api/recommendations",
    authenticateToken,
    (req, res) => {

        const {
            targetRole = "",
            technicalSkills = [],
            technicalScore = 0,
            programming = 0,
            communication = 0,
            problemSolving = 0,
            projectExperience = 0
        } = req.body;

        db.all(
            `SELECT * FROM opportunities`,
            [],
            (err, opportunities) => {

                if (err) {
                    return res.status(500).json({
                        message: "Could not load opportunities."
                    });
                }

                const selectedSkills =
                    technicalSkills.map(skill =>
                        skill.toLowerCase().trim()
                    );

                const softSkillAverage =
                    (
                        Number(programming) +
                        Number(communication) +
                        Number(problemSolving) +
                        Number(projectExperience)
                    ) / 4;

                const recommendations =
                    opportunities.map(opportunity => {

                        const requiredSkills =
                            opportunity.skills
                                .split(",")
                                .map(skill =>
                                    skill.trim()
                                );

                        const requiredLower =
                            requiredSkills.map(skill =>
                                skill.toLowerCase()
                            );

                        const matchedSkills =
                            requiredSkills.filter(
                                skill =>
                                    selectedSkills.includes(
                                        skill.toLowerCase()
                                    )
                            );

                        const missingSkills =
                            requiredSkills.filter(
                                skill =>
                                    !selectedSkills.includes(
                                        skill.toLowerCase()
                                    )
                            );

                        let matchScore = 0;

                        if (requiredSkills.length > 0) {

                            matchScore +=
                                (
                                    matchedSkills.length /
                                    requiredSkills.length
                                ) * 60;
                        }

                        matchScore +=
                            Math.min(
                                Number(technicalScore),
                                100
                            ) * 0.20;

                        matchScore +=
                            Math.min(
                                softSkillAverage * 20,
                                100
                            ) * 0.20;

                        if (
                            targetRole &&
                            opportunity.title
                                .toLowerCase()
                                .includes(
                                    targetRole
                                        .toLowerCase()
                                        .split(" ")[0]
                                )
                        ) {
                            matchScore += 5;
                        }

                        matchScore =
                            Math.min(
                                Math.round(matchScore),
                                100
                            );

                        let recommendationLevel;

                        if (matchScore >= 80) {
                            recommendationLevel = "Excellent Match";
                        } else if (matchScore >= 60) {
                            recommendationLevel = "Good Match";
                        } else if (matchScore >= 40) {
                            recommendationLevel = "Develop Skills";
                        } else {
                            recommendationLevel = "Needs Preparation";
                        }

                        return {
                            ...opportunity,
                            requiredSkills,
                            matchedSkills,
                            missingSkills,
                            matchPercentage: matchScore,
                            recommendationLevel
                        };
                    });

                recommendations.sort(
                    (a, b) =>
                        b.matchPercentage -
                        a.matchPercentage
                );

                res.json({
                    success: true,
                    recommendations:
                        recommendations.slice(0, 5)
                });
            }
        );
    }
);

/* =========================================================
   FRONTEND ROUTING
========================================================= */

app.get(
    "*",
    (req, res) => {

        if (req.path.startsWith("/api/")) {
            return res.status(404).json({
                message: "API endpoint not found."
            });
        }

        res.sendFile(
            path.join(
                frontendPath,
                "index.html"
            )
        );
    }
);

/* =========================================================
   START SERVER
========================================================= */

app.listen(
    PORT,
    () => {

        console.log("");
        console.log("======================================");
        console.log(" SkillBridge Backend Started");
        console.log("======================================");
        console.log(
            ` Website: http://localhost:${PORT}`
        );
        console.log(
            ` API:     http://localhost:${PORT}/api/health`
        );
        console.log("======================================");
        console.log("");
    }
);