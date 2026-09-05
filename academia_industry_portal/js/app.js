// =====================================================
// SKILLBRIDGE
// ACADEMIA–INDUSTRY PLACEMENT PORTAL
// FRONTEND JAVASCRIPT
// =====================================================


// =====================================================
// OPPORTUNITIES
// =====================================================

const opportunities = [
    {
        id: 1,
        type: "Internship",
        title: "Frontend Developer Intern",
        company: "TechNova Solutions",
        skills: "HTML, CSS, JavaScript, React",
        location: "Hyderabad"
    },
    {
        id: 2,
        type: "Internship",
        title: "Data Analytics Intern",
        company: "InsightWorks",
        skills: "Python, SQL, Power BI",
        location: "Remote"
    },
    {
        id: 3,
        type: "Job",
        title: "Junior Software Developer",
        company: "CodeSphere Technologies",
        skills: "Java, SQL, Git",
        location: "Hyderabad"
    },
    {
        id: 4,
        type: "Training",
        title: "AI & Machine Learning Bootcamp",
        company: "FutureTech Academy",
        skills: "Python, ML, Data Science",
        location: "Online"
    },
    {
        id: 5,
        type: "Internship",
        title: "Cyber Security Intern",
        company: "SecureNet Labs",
        skills: "Networking, Linux, Security",
        location: "Bengaluru"
    },
    {
        id: 6,
        type: "Job",
        title: "Graduate Engineer Trainee",
        company: "Innovate Industries",
        skills: "Problem Solving, Communication",
        location: "Chennai"
    }
];


// =====================================================
// RENDER OPPORTUNITIES
// =====================================================

function renderOpportunities(data = opportunities) {

    const list =
        document.getElementById("opportunityList");

    if (!list) return;


    if (data.length === 0) {

        list.innerHTML = `
            <div class="result">
                No matching opportunities found.
            </div>
        `;

        return;
    }


    list.innerHTML = data.map(opportunity => {

        return `
            <article class="opportunity">

                <span class="tag">
                    ${opportunity.type}
                </span>

                <h3>
                    ${opportunity.title}
                </h3>

                <p>
                    <b>${opportunity.company}</b>
                    • ${opportunity.location}
                </p>

                <p>
                    Required skills:
                    ${opportunity.skills}
                </p>

                <button
                    class="apply"
                    onclick="applyOpportunity(${opportunity.id})"
                >
                    Apply / View
                </button>

            </article>
        `;

    }).join("");
}


// =====================================================
// SEARCH AND FILTER
// =====================================================

function filterOpportunities() {

    const searchBox =
        document.getElementById("searchBox");

    const typeFilter =
        document.getElementById("typeFilter");

    if (!searchBox || !typeFilter) return;


    const query =
        searchBox.value.toLowerCase().trim();

    const selectedType =
        typeFilter.value;


    const filtered =
        opportunities.filter(opportunity => {

            const matchesType =
                selectedType === "all" ||
                opportunity.type === selectedType;


            const searchableText = `
                ${opportunity.title}
                ${opportunity.company}
                ${opportunity.skills}
                ${opportunity.location}
            `.toLowerCase();


            return (
                matchesType &&
                searchableText.includes(query)
            );

        });


    renderOpportunities(filtered);
}


// =====================================================
// APPLY FOR OPPORTUNITY
// =====================================================

async function applyOpportunity(id) {

    const opportunity =
        opportunities.find(
            item => item.id === id
        );


    if (!opportunity) return;


    const token =
        localStorage.getItem("portalToken");


    if (!token) {

        alert(
            "Please login before applying for an opportunity."
        );

        openModal();

        return;
    }


    try {

        const response =
            await fetch(
                "/api/applications",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                        "Authorization":
                            `Bearer ${token}`
                    },

                    body: JSON.stringify({

                        opportunityTitle:
                            opportunity.title,

                        company:
                            opportunity.company
                    })
                }
            );


        const data =
            await response.json();


        if (response.ok && data.success) {

            alert(
                "Application submitted successfully!"
            );

        } else {

            alert(
                data.message ||
                "Could not submit application."
            );

        }

    } catch (error) {

        console.error(
            "Application error:",
            error
        );

        alert(
            "Unable to connect to the backend.\n\n" +
            "Make sure server.js is running."
        );
    }
}


// =====================================================
// SKILL ASSESSMENT
// =====================================================

async function calculateScore() {

    const programmingElement =
        document.getElementById("programming");

    const communicationElement =
        document.getElementById("communication");

    const problemElement =
        document.getElementById("problem");


    if (
        !programmingElement ||
        !communicationElement ||
        !problemElement
    ) {

        return;
    }


    const programming =
        Number(programmingElement.value);

    const communication =
        Number(communicationElement.value);

    const problemSolving =
        Number(problemElement.value);


    const average =
        (
            programming +
            communication +
            problemSolving
        ) / 3;


    const roundedAverage =
        average.toFixed(1);


    let level;


    if (average >= 4) {

        level = "Industry Ready";

    } else if (average >= 3) {

        level = "Developing";

    } else {

        level = "Needs Improvement";
    }


    const result =
        document.getElementById("scoreResult");


    if (result) {

        result.innerHTML = `
            Average Skill Score:
            <b>${roundedAverage}/5</b>

            <br>

            <small>
                Status: ${level}
            </small>

            <br><br>

            <small>
                Checking login status...
            </small>
        `;
    }


    const token =
        localStorage.getItem("portalToken");


    if (!token) {

        if (result) {

            result.innerHTML = `
                Average Skill Score:
                <b>${roundedAverage}/5</b>

                <br>

                <small>
                    Status: ${level}
                </small>

                <br><br>

                <small>
                    Login to save your assessment.
                </small>
            `;

        }

        return;
    }


    try {

        const response =
            await fetch(
                "/api/assessment",
                {
                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json",

                        "Authorization":
                            `Bearer ${token}`
                    },

                    body: JSON.stringify({

                        programming:
                            programming,

                        communication:
                            communication,

                        problemSolving:
                            problemSolving,

                        technicalScore:
                            0,

                        projectScore:
                            0
                    })
                }
            );


        const data =
            await response.json();


        if (response.ok && data.success) {

            if (result) {

                result.innerHTML = `
                    Average Skill Score:
                    <b>${roundedAverage}/5</b>

                    <br>

                    <small>
                        Status: ${level}
                    </small>

                    <br><br>

                    <small>
                        ✓ Assessment saved to your profile.
                    </small>
                `;
            }

        } else {

            if (result) {

                result.innerHTML = `
                    Average Skill Score:
                    <b>${roundedAverage}/5</b>

                    <br>

                    <small>
                        Status: ${level}
                    </small>

                    <br><br>

                    <small>
                        Assessment calculated,
                        but could not be saved.
                    </small>
                `;
            }
        }

    } catch (error) {

        console.error(
            "Assessment error:",
            error
        );


        if (result) {

            result.innerHTML = `
                Average Skill Score:
                <b>${roundedAverage}/5</b>

                <br>

                <small>
                    Status: ${level}
                </small>

                <br><br>

                <small>
                    Could not connect to backend.
                </small>
            `;
        }
    }
}


// =====================================================
// SMOOTH SCROLL
// =====================================================

function scrollToSection(id) {

    const section =
        document.getElementById(id);


    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// =====================================================
// LOGIN MODAL
// =====================================================

function openModal() {

    const modal =
        document.getElementById("modal");


    if (modal) {

        modal.classList.add("show");

        const email =
            document.getElementById("loginEmail");

        if (email) {
            setTimeout(() => {
                email.focus();
            }, 200);
        }
    }
}


function closeModal() {

    const modal =
        document.getElementById("modal");


    if (modal) {

        modal.classList.remove("show");
    }
}


// =====================================================
// LOGIN
// IMPORTANT:
// This function reads the role from #loginRole
// =====================================================

async function loginUser() {

    const emailInput =
        document.getElementById("loginEmail");

    const passwordInput =
        document.getElementById("loginPassword");

    const roleInput =
        document.getElementById("loginRole");

    const message =
        document.getElementById("loginMessage");


    // -----------------------------------------------
    // CHECK LOGIN FORM
    // -----------------------------------------------

    if (
        !emailInput ||
        !passwordInput ||
        !roleInput
    ) {

        alert(
            "Login form was not found.\n\n" +
            "Please check index.html."
        );

        return;
    }


    // -----------------------------------------------
    // GET VALUES
    // -----------------------------------------------

    const email =
        emailInput.value.trim();

    const password =
        passwordInput.value;

    const role =
        roleInput.value;


    // -----------------------------------------------
    // VALIDATE
    // -----------------------------------------------

    if (!email || !password || !role) {

        if (message) {

            message.textContent =
                "Email, password and role are required.";

        } else {

            alert(
                "Email, password and role are required."
            );
        }

        return;
    }


    // -----------------------------------------------
    // SHOW LOADING
    // -----------------------------------------------

    if (message) {

        message.textContent =
            "Logging in...";
    }


    try {

        // -------------------------------------------
        // SEND LOGIN REQUEST
        // -------------------------------------------

        const response =
            await fetch(
                "/api/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({

                        email:
                            email,

                        password:
                            password,

                        role:
                            role
                    })
                }
            );


        // -------------------------------------------
        // READ SERVER RESPONSE
        // -------------------------------------------

        const data =
            await response.json();


        // -------------------------------------------
        // LOGIN FAILED
        // -------------------------------------------

        if (!response.ok || !data.success) {

            if (message) {

                message.textContent =
                    data.message ||
                    "Invalid email, password or role.";

            } else {

                alert(
                    data.message ||
                    "Invalid email, password or role."
                );
            }

            return;
        }


        // -------------------------------------------
        // LOGIN SUCCESS
        // -------------------------------------------

        localStorage.setItem(
            "portalToken",
            data.token
        );


        localStorage.setItem(
            "portalUser",
            JSON.stringify(data.user)
        );


        if (message) {

            message.textContent =
                "✓ Login successful! Redirecting...";
        }


        // -------------------------------------------
        // REDIRECT
        // -------------------------------------------

        setTimeout(() => {

            redirectToDashboard(
                data.user.role
            );

        }, 500);


    } catch (error) {

        console.error(
            "Login error:",
            error
        );


        if (message) {

            message.textContent =
                "Cannot connect to backend. " +
                "Make sure server.js is running.";

        } else {

            alert(
                "Cannot connect to backend.\n\n" +
                "Make sure server.js is running."
            );
        }
    }
}


// =====================================================
// DASHBOARD REDIRECTION
// =====================================================

function redirectToDashboard(role) {

    let dashboard = "";


    switch (role) {

        case "Student":

            dashboard =
                "dashboard/student-dashboard.html";

            break;


        case "Academician":

            dashboard =
                "dashboard/academician-dashboard.html";

            break;


        case "Industry":

            dashboard =
                "dashboard/industry-dashboard.html";

            break;


        case "Institution":

            dashboard =
                "dashboard/institution-dashboard.html";

            break;


        default:

            alert(
                "Unknown user role: " + role
            );

            return;
    }


    window.location.href =
        dashboard;
}


// =====================================================
// LOGOUT
// =====================================================

function logoutUser() {

    localStorage.removeItem(
        "portalToken"
    );

    localStorage.removeItem(
        "portalUser"
    );


    window.location.href =
        "../index.html";
}


// =====================================================
// GET CURRENT USER
// =====================================================

async function getCurrentUser() {

    const token =
        localStorage.getItem(
            "portalToken"
        );


    if (!token) {

        return null;
    }


    try {

        const response =
            await fetch(
                "/api/me",
                {
                    headers: {
                        "Authorization":
                            `Bearer ${token}`
                    }
                }
            );


        if (!response.ok) {

            localStorage.removeItem(
                "portalToken"
            );

            localStorage.removeItem(
                "portalUser"
            );

            return null;
        }


        const data =
            await response.json();


        return data.user;


    } catch (error) {

        console.error(
            "Current user error:",
            error
        );

        return null;
    }
}


// =====================================================
// LOAD DASHBOARD USER
// =====================================================

async function loadDashboardUser() {

    const user =
        await getCurrentUser();


    // -----------------------------------------------
    // NOT LOGGED IN
    // -----------------------------------------------

    if (!user) {

        alert(
            "Please login to access this dashboard."
        );


        window.location.href =
            "../index.html";

        return;
    }


    // -----------------------------------------------
    // USER NAME
    // -----------------------------------------------

    document
        .querySelectorAll(
            "[data-user-name]"
        )
        .forEach(element => {

            element.textContent =
                user.name;
        });


    // -----------------------------------------------
    // USER ROLE
    // -----------------------------------------------

    document
        .querySelectorAll(
            "[data-user-role]"
        )
        .forEach(element => {

            element.textContent =
                user.role;
        });


    // -----------------------------------------------
    // USER EMAIL
    // -----------------------------------------------

    document
        .querySelectorAll(
            "[data-user-email]"
        )
        .forEach(element => {

            element.textContent =
                user.email;
        });


    // -----------------------------------------------
    // CHECK DASHBOARD ROLE
    // -----------------------------------------------

    const dashboardRole =
        document.body.dataset.dashboard;


    if (
        dashboardRole &&
        dashboardRole !== user.role
    ) {

        alert(
            "You cannot access this dashboard."
        );


        redirectToDashboard(
            user.role
        );
    }
}


// =====================================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// =====================================================

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("modal");


        if (
            modal &&
            event.target === modal
        ) {

            closeModal();
        }

    }
);


// =====================================================
// ENTER KEY LOGIN
// =====================================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key !== "Enter") {
            return;
        }


        const modal =
            document.getElementById("modal");


        if (
            modal &&
            modal.classList.contains("show")
        ) {

            loginUser();
        }

    }
);


// =====================================================
// PAGE LOAD
// =====================================================

window.addEventListener(
    "DOMContentLoaded",
    function() {

        // Homepage opportunities
        renderOpportunities();


        // Dashboard
        const dashboard =
            document.body.dataset.dashboard;


        if (dashboard) {

            loadDashboardUser();

            initializeRecommendations();

        }

    }
);

// =====================================================
// SMART JOB RECOMMENDATION ENGINE
// =====================================================

async function getJobRecommendations() {

    const token =
        localStorage.getItem("portalToken");


    if (!token) {

        console.log(
            "Login required for job recommendations."
        );

        return [];

    }


    // -------------------------------------------------
    // GET STUDENT DATA
    // -------------------------------------------------

    const targetRoleElement =
        document.getElementById("targetRole");


    const targetRole =
        targetRoleElement
            ? targetRoleElement.value
            : "";


    if (!targetRole) {

        console.log(
            "No target role selected."
        );

        return [];

    }


    // -------------------------------------------------
    // TECHNICAL SKILLS
    // -------------------------------------------------

    const technicalSkillElements =
        document.querySelectorAll(
            ".technical-skill:checked"
        );


    const technicalSkills =
        Array.from(
            technicalSkillElements
        ).map(
            element => element.value
        );


    // -------------------------------------------------
    // TECHNICAL TEST SCORE
    // -------------------------------------------------

    let technicalScore = 0;


    if (
        typeof calculateOverallTechnicalScore ===
        "function"
    ) {

        const score =
            calculateOverallTechnicalScore();


        if (score !== null) {

            technicalScore =
                Number(score);

        }

    }


    // -------------------------------------------------
    // SELF ASSESSMENT
    // -------------------------------------------------

    const programming =
        Number(
            document.getElementById(
                "programming"
            )?.value || 0
        );


    const problemSolving =
        Number(
            document.getElementById(
                "problem"
            )?.value || 0
        );


    const communication =
        Number(
            document.getElementById(
                "communication"
            )?.value || 0
        );


    const projectExperience =
        Number(
            document.getElementById(
                "projectExperience"
            )?.value || 0
        );


    // -------------------------------------------------
    // SEND TO BACKEND
    // -------------------------------------------------

    try {

        const response =
            await fetch(
                "/api/recommendations",
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json",

                        "Authorization":
                            `Bearer ${token}`

                    },

                    body: JSON.stringify({

                        targetRole,

                        technicalSkills,

                        technicalScore,

                        programming,

                        problemSolving,

                        communication,

                        projectExperience

                    })

                }
            );


        const data =
            await response.json();


        if (
            !response.ok ||
            !data.success
        ) {

            console.error(
                data.message ||
                "Recommendation request failed."
            );

            return [];

        }


        return data.recommendations || [];


    } catch (error) {

        console.error(
            "Recommendation error:",
            error
        );


        return [];

    }

}


// =====================================================
// DISPLAY RECOMMENDED JOBS
// =====================================================

async function showJobRecommendations() {

    const container =
        document.getElementById(
            "recommendedJobs"
        );


    if (!container) {

        console.log(
            "recommendedJobs container not found."
        );

        return;

    }


    container.innerHTML = `
        <div class="result">
            🔎 Analysing your skills and finding
            the best opportunities...
        </div>
    `;


    const recommendations =
        await getJobRecommendations();


    if (
        !recommendations ||
        recommendations.length === 0
    ) {

        container.innerHTML = `
            <div class="result">
                No recommendations available yet.
                Complete your profile and technical test first.
            </div>
        `;

        return;

    }


    // Show top 5

    const topRecommendations =
        recommendations.slice(0, 5);


    container.innerHTML =
        topRecommendations
            .map(job => {

                const matched =
                    job.matchedSkills
                        .join(", ") ||
                    "Some relevant skills";


                const missing =
                    job.missingSkills
                        .join(", ") ||
                    "No major skill gaps";


                return `

                    <article class="recommendation-card">

                        <div class="recommendation-header">

                            <div>

                                <span class="tag">
                                    ${job.type}
                                </span>

                                <h3>
                                    ${job.title}
                                </h3>

                                <p>
                                    <b>
                                        ${job.company}
                                    </b>
                                    •
                                    ${job.location}
                                </p>

                            </div>


                            <div class="match-score">

                                <strong>
                                    ${job.matchPercentage}%
                                </strong>

                                <span>
                                    Match
                                </span>

                            </div>

                        </div>


                        <p>
                            <b>Required skills:</b>
                            ${job.skills}
                        </p>


                        <p>
                            <b>Your matching skills:</b>
                            ${matched}
                        </p>


                        <p>
                            <b>Skills to improve:</b>
                            ${missing}
                        </p>


                        <div class="recommendation-level">

                            ${job.recommendationLevel}

                        </div>


                        <button
                            class="apply"
                            onclick="applyOpportunity(${job.id})"
                        >
                            Apply / View
                        </button>

                    </article>

                `;

            })
            .join("");

}


// =====================================================
// AUTO LOAD RECOMMENDATIONS
// =====================================================

function initializeRecommendations() {

    const targetRole =
        document.getElementById(
            "targetRole"
        );


    const container =
        document.getElementById(
            "recommendedJobs"
        );


    if (
        targetRole &&
        container
    ) {

        targetRole.addEventListener(
            "change",
            function() {

                showJobRecommendations();

            }
        );

    }

}