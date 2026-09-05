// ============================================================
// SkillBridge - Multiple Technical Test System
// 14 Skill Technical Assessment Engine
// ============================================================


// ============================================================
// QUESTION BANK
// ============================================================

const technicalQuestions = {

    // --------------------------------------------------------
    // HTML
    // --------------------------------------------------------

    HTML: [

        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyperlink Text Management Language",
                "Home Tool Markup Language"
            ],
            answer: 0
        },

        {
            question: "Which tag creates a paragraph?",
            options: ["<p>", "<para>", "<text>", "<paragraph>"],
            answer: 0
        },

        {
            question: "Which tag creates a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<url>"],
            answer: 1
        },

        {
            question: "Which tag is used to display an image?",
            options: ["<image>", "<img>", "<picture>", "<src>"],
            answer: 1
        },

        {
            question: "Which heading tag represents the largest heading?",
            options: ["<h6>", "<h3>", "<h1>", "<head>"],
            answer: 2
        },

        {
            question: "Which attribute specifies the destination of a hyperlink?",
            options: ["src", "href", "link", "target"],
            answer: 1
        },

        {
            question: "Which tag creates an unordered list?",
            options: ["<ol>", "<ul>", "<list>", "<li>"],
            answer: 1
        },

        {
            question: "Which tag represents a list item?",
            options: ["<item>", "<li>", "<list-item>", "<ul>"],
            answer: 1
        },

        {
            question: "Which HTML element is used to create a form?",
            options: ["<input>", "<form>", "<field>", "<data>"],
            answer: 1
        },

        {
            question: "Which declaration defines an HTML5 document?",
            options: [
                "<html5>",
                "<doctype html>",
                "<!DOCTYPE html>",
                "<HTML5>"
            ],
            answer: 2
        }

    ],


    // --------------------------------------------------------
    // CSS
    // --------------------------------------------------------

    CSS: [

        {
            question: "What does CSS stand for?",
            options: [
                "Computer Style Sheets",
                "Cascading Style Sheets",
                "Creative Style System",
                "Colorful Style Sheets"
            ],
            answer: 1
        },

        {
            question: "Which property changes text color?",
            options: [
                "font-color",
                "text-color",
                "color",
                "foreground"
            ],
            answer: 2
        },

        {
            question: "Which property changes the background color?",
            options: [
                "background-color",
                "bg-color",
                "background",
                "color-background"
            ],
            answer: 0
        },

        {
            question: "Which property controls space inside an element?",
            options: [
                "margin",
                "padding",
                "spacing",
                "border"
            ],
            answer: 1
        },

        {
            question: "Which property controls space outside an element?",
            options: [
                "padding",
                "margin",
                "spacing",
                "outside"
            ],
            answer: 1
        },

        {
            question: "Which layout system is commonly used for one-dimensional layouts?",
            options: [
                "Grid",
                "Flexbox",
                "Table",
                "Float"
            ],
            answer: 1
        },

        {
            question: "Which property makes text bold?",
            options: [
                "font-weight",
                "font-style",
                "text-bold",
                "weight"
            ],
            answer: 0
        },

        {
            question: "Which selector targets an element with a specific ID?",
            options: [
                ".class",
                "#id",
                "*id",
                "@id"
            ],
            answer: 1
        },

        {
            question: "Which selector targets elements with a specific class?",
            options: [
                "#class",
                ".class",
                "@class",
                "*class"
            ],
            answer: 1
        },

        {
            question: "Which property controls the size of text?",
            options: [
                "text-size",
                "font-size",
                "size",
                "font"
            ],
            answer: 1
        }

    ],


    // --------------------------------------------------------
    // JAVASCRIPT
    // --------------------------------------------------------

    JavaScript: [

        {
            question: "Which keyword declares a variable that cannot be reassigned?",
            options: ["var", "let", "const", "static"],
            answer: 2
        },

        {
            question: "Which symbol represents strict equality?",
            options: ["=", "==", "===", "!="],
            answer: 2
        },

        {
            question: "Which method adds an element to the end of an array?",
            options: ["push()", "pop()", "shift()", "add()"],
            answer: 0
        },

        {
            question: "What is the output type of typeof 10?",
            options: ["integer", "number", "float", "numeric"],
            answer: 1
        },

        {
            question: "Which keyword defines a function?",
            options: ["function", "def", "func", "method"],
            answer: 0
        },

        {
            question: "Which method converts JSON text into a JavaScript object?",
            options: [
                "JSON.parse()",
                "JSON.stringify()",
                "JSON.convert()",
                "JSON.object()"
            ],
            answer: 0
        },

        {
            question: "Which operator represents logical AND?",
            options: ["||", "&&", "!", "&"],
            answer: 1
        },

        {
            question: "Which method removes the last element of an array?",
            options: ["remove()", "delete()", "pop()", "shift()"],
            answer: 2
        },

        {
            question: "Which keyword is used to handle exceptions?",
            options: ["catch", "error", "exception", "handle"],
            answer: 0
        },

        {
            question: "Which method converts a JavaScript object into JSON text?",
            options: [
                "JSON.parse()",
                "JSON.stringify()",
                "JSON.convert()",
                "JSON.object()"
            ],
            answer: 1
        }

    ],


    // --------------------------------------------------------
    // PYTHON
    // --------------------------------------------------------

    Python: [

        {
            question: "Which symbol is used to create a comment?",
            options: ["//", "#", "/*", "--"],
            answer: 1
        },

        {
            question: "Which data type stores an ordered collection that can be changed?",
            options: ["tuple", "list", "set", "string"],
            answer: 1
        },

        {
            question: "What is the output of print(2 ** 3)?",
            options: ["6", "8", "9", "5"],
            answer: 1
        },

        {
            question: "Which keyword defines a function?",
            options: ["function", "func", "def", "define"],
            answer: 2
        },

        {
            question: "Which function returns the length of a list?",
            options: ["size()", "length()", "len()", "count()"],
            answer: 2
        },

        {
            question: "Which collection stores key-value pairs?",
            options: ["list", "tuple", "dictionary", "set"],
            answer: 2
        },

        {
            question: "What does len('Python') return?",
            options: ["5", "6", "7", "8"],
            answer: 1
        },

        {
            question: "Which keyword is used to loop over a sequence?",
            options: ["for-in", "for", "loop", "repeat"],
            answer: 1
        },

        {
            question: "Which value represents no value in Python?",
            options: ["null", "undefined", "None", "empty"],
            answer: 2
        },

        {
            question: "Which operator performs floor division?",
            options: ["/", "//", "%", "**"],
            answer: 1
        }

    ],


    // --------------------------------------------------------
    // JAVA
    // --------------------------------------------------------

    Java: [

        {
            question: "Which keyword creates a class?",
            options: ["class", "struct", "object", "define"],
            answer: 0
        },

        {
            question: "Which method is the entry point of a Java program?",
            options: ["start()", "run()", "main()", "execute()"],
            answer: 2
        },

        {
            question: "Which keyword is used to inherit a class?",
            options: ["implements", "extends", "inherits", "super"],
            answer: 1
        },

        {
            question: "Which data type stores whole numbers?",
            options: ["float", "String", "int", "char"],
            answer: 2
        },

        {
            question: "Which keyword creates an object?",
            options: ["create", "object", "new", "make"],
            answer: 2
        },

        {
            question: "Which symbol ends a Java statement?",
            options: [".", ":", ";", ","],
            answer: 2
        },

        {
            question: "Which concept allows multiple methods with the same name?",
            options: [
                "Inheritance",
                "Encapsulation",
                "Overloading",
                "Abstraction"
            ],
            answer: 2
        },

        {
            question: "Which access modifier allows access from anywhere?",
            options: ["private", "protected", "public", "default"],
            answer: 2
        },

        {
            question: "Which type stores text?",
            options: ["String", "char", "text", "word"],
            answer: 0
        },

        {
            question: "Which keyword prevents a variable from being changed?",
            options: ["constant", "final", "static", "fixed"],
            answer: 1
        }

    ],


    // --------------------------------------------------------
    // SQL
    // --------------------------------------------------------

    SQL: [

        {
            question: "Which SQL command retrieves data?",
            options: ["GET", "SELECT", "FETCH", "READ"],
            answer: 1
        },

        {
            question: "Which clause filters rows?",
            options: ["WHERE", "FILTER", "HAVING", "CHECK"],
            answer: 0
        },

        {
            question: "Which command adds new data to a table?",
            options: ["ADD", "INSERT", "CREATE", "APPEND"],
            answer: 1
        },

        {
            question: "Which command modifies existing data?",
            options: ["CHANGE", "MODIFY", "UPDATE", "ALTER"],
            answer: 2
        },

        {
            question: "Which command removes rows?",
            options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
            answer: 1
        },

        {
            question: "Which clause sorts query results?",
            options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE"],
            answer: 1
        },

        {
            question: "Which function counts rows?",
            options: ["SUM()", "COUNT()", "TOTAL()", "NUMBER()"],
            answer: 1
        },

        {
            question: "Which keyword removes duplicate results?",
            options: ["UNIQUE", "DISTINCT", "DIFFERENT", "ONLY"],
            answer: 1
        },

        {
            question: "Which clause groups rows?",
            options: [
                "GROUP BY",
                "ORDER BY",
                "COLLECT BY",
                "COMBINE BY"
            ],
            answer: 0
        },

        {
            question: "Which command creates a table?",
            options: [
                "MAKE TABLE",
                "NEW TABLE",
                "CREATE TABLE",
                "BUILD TABLE"
            ],
            answer: 2
        }

    ],


    // --------------------------------------------------------
    // REACT
    // --------------------------------------------------------

    React: [

        {
            question: "What is React primarily used for?",
            options: [
                "Database management",
                "Building user interfaces",
                "Operating systems",
                "Network configuration"
            ],
            answer: 1
        },

        {
            question: "Who originally developed React?",
            options: ["Google", "Microsoft", "Facebook", "Oracle"],
            answer: 2
        },

        {
            question: "What syntax is commonly used to describe UI in React?",
            options: ["JSX", "SQL", "XML only", "PHP"],
            answer: 0
        },

        {
            question: "Which hook manages state in a functional component?",
            options: ["useState", "useData", "useValue", "useComponent"],
            answer: 0
        },

        {
            question: "Which hook is commonly used for side effects?",
            options: ["useEffect", "useSide", "useAction", "useEvent"],
            answer: 0
        },

        {
            question: "React components should generally return what?",
            options: [
                "UI elements",
                "SQL queries",
                "CSS files",
                "Database rows"
            ],
            answer: 0
        },

        {
            question: "What is a prop in React?",
            options: [
                "A database",
                "Data passed to a component",
                "A CSS selector",
                "A server"
            ],
            answer: 1
        },

        {
            question: "What is the purpose of keys when rendering lists?",
            options: [
                "Database security",
                "Identify list elements",
                "Change CSS",
                "Create routes"
            ],
            answer: 1
        },

        {
            question: "Can React components be reused?",
            options: ["Yes", "No", "Only once", "Only on servers"],
            answer: 0
        },

        {
            question: "Which command commonly starts a React development server?",
            options: [
                "npm start",
                "python run",
                "java start",
                "sql start"
            ],
            answer: 0
        }

    ],


    // --------------------------------------------------------
    // GIT
    // --------------------------------------------------------

    Git: [

        {
            question: "What is Git?",
            options: [
                "A programming language",
                "A version control system",
                "A database",
                "A web browser"
            ],
            answer: 1
        },

        {
            question: "Which command initializes a Git repository?",
            options: ["git start", "git init", "git create", "git repo"],
            answer: 1
        },

        {
            question: "Which command checks repository status?",
            options: [
                "git check",
                "git status",
                "git state",
                "git info"
            ],
            answer: 1
        },

        {
            question: "Which command stages files?",
            options: [
                "git stage",
                "git add",
                "git save",
                "git prepare"
            ],
            answer: 1
        },

        {
            question: "Which command creates a commit?",
            options: [
                "git commit",
                "git save",
                "git store",
                "git record"
            ],
            answer: 0
        },

        {
            question: "Which command uploads local commits to a remote repository?",
            options: [
                "git upload",
                "git push",
                "git send",
                "git transfer"
            ],
            answer: 1
        },

        {
            question: "Which command downloads changes from a remote repository?",
            options: [
                "git pull",
                "git download",
                "git fetchall",
                "git receive"
            ],
            answer: 0
        },

        {
            question: "Which command creates a new branch?",
            options: [
                "git branch",
                "git new",
                "git create-branch",
                "git split"
            ],
            answer: 0
        },

        {
            question: "Which command switches branches in modern Git?",
            options: [
                "git switch",
                "git move",
                "git change",
                "git branch-change"
            ],
            answer: 0
        },

        {
            question: "What is GitHub?",
            options: [
                "A Git hosting platform",
                "A programming language",
                "A database",
                "An operating system"
            ],
            answer: 0
        }

    ],


    // --------------------------------------------------------
    // POWER BI
    // --------------------------------------------------------

    "Power BI": [

        {
            question: "What is Power BI mainly used for?",
            options: [
                "Data analysis and visualization",
                "Game development",
                "Operating systems",
                "Text editing"
            ],
            answer: 0
        },

        {
            question: "Who develops Power BI?",
            options: ["Google", "Microsoft", "Apple", "Oracle"],
            answer: 1
        },

        {
            question: "Which language is commonly used for Power BI calculations?",
            options: ["DAX", "HTML", "CSS", "Java"],
            answer: 0
        },

        {
            question: "What is a dashboard used for?",
            options: [
                "Displaying important information visually",
                "Writing source code",
                "Installing software",
                "Managing files"
            ],
            answer: 0
        },

        {
            question: "Which visual is useful for comparing categories?",
            options: [
                "Bar chart",
                "Text editor",
                "Console",
                "File browser"
            ],
            answer: 0
        },

        {
            question: "What is Power Query used for?",
            options: [
                "Data transformation",
                "Gaming",
                "Web hosting",
                "Email"
            ],
            answer: 0
        },

        {
            question: "What is a relationship in Power BI?",
            options: [
                "A connection between tables",
                "A CSS rule",
                "A Git branch",
                "A server process"
            ],
            answer: 0
        },

        {
            question: "Which feature allows filtering report data interactively?",
            options: [
                "Slicer",
                "Compiler",
                "Terminal",
                "Repository"
            ],
            answer: 0
        },

        {
            question: "What is a measure?",
            options: [
                "A DAX calculation",
                "A file extension",
                "A programming language",
                "A database server"
            ],
            answer: 0
        },

        {
            question: "Power BI reports can contain what?",
            options: [
                "Charts and visualizations",
                "Only text",
                "Only SQL code",
                "Only images"
            ],
            answer: 0
        }

    ],


    // --------------------------------------------------------
    // MACHINE LEARNING
    // --------------------------------------------------------

    "Machine Learning": [

        {
            question: "What is machine learning?",
            options: [
                "Learning patterns from data",
                "Writing HTML",
                "Managing networks",
                "Designing hardware"
            ],
            answer: 0
        },

        {
            question: "Which is a supervised learning algorithm?",
            options: [
                "Linear Regression",
                "K-Means",
                "PCA",
                "Apriori"
            ],
            answer: 0
        },

        {
            question: "Which algorithm is commonly used for clustering?",
            options: [
                "K-Means",
                "Linear Regression",
                "Logistic Regression",
                "Naive Bayes"
            ],
            answer: 0
        },

        {
            question: "What is a feature?",
            options: [
                "An input variable",
                "A programming language",
                "A database",
                "A server"
            ],
            answer: 0
        },

        {
            question: "What is a target variable?",
            options: [
                "The value a model tries to predict",
                "A CSS property",
                "A Git branch",
                "A network address"
            ],
            answer: 0
        },

        {
            question: "What is overfitting?",
            options: [
                "A model learning training data too closely",
                "A missing dataset",
                "A network failure",
                "A database error"
            ],
            answer: 0
        },

        {
            question: "Why is data split into training and testing sets?",
            options: [
                "To evaluate model performance",
                "To create HTML",
                "To reduce screen size",
                "To compile Java"
            ],
            answer: 0
        },

        {
            question: "Which metric is commonly used for classification?",
            options: [
                "Accuracy",
                "Pixel count",
                "File size",
                "CPU speed"
            ],
            answer: 0
        },

        {
            question: "Which Python library is widely used for machine learning?",
            options: [
                "scikit-learn",
                "Express",
                "React",
                "Bootstrap"
            ],
            answer: 0
        },

        {
            question: "What does normalization generally do?",
            options: [
                "Scales numerical features",
                "Deletes all data",
                "Creates a website",
                "Changes a password"
            ],
            answer: 0
        }

    ],


    // --------------------------------------------------------
    // DATA SCIENCE
    // --------------------------------------------------------

    "Data Science": [

        {
            question: "What is data science?",
            options: [
                "Extracting insights from data",
                "Only creating websites",
                "Only managing networks",
                "Only writing Java"
            ],
            answer: 0
        },

        {
            question: "Which Python library is commonly used for data analysis?",
            options: ["Pandas", "React", "Express", "JUnit"],
            answer: 0
        },

        {
            question: "Which library is commonly used for numerical computing?",
            options: ["NumPy", "React", "Git", "HTML"],
            answer: 0
        },

        {
            question: "What is a dataset?",
            options: [
                "A collection of data",
                "A CSS file",
                "A Git branch",
                "A server"
            ],
            answer: 0
        },

        {
            question: "What is the mean?",
            options: [
                "The arithmetic average",
                "The largest value",
                "The smallest value",
                "The middle category"
            ],
            answer: 0
        },

        {
            question: "What is data cleaning?",
            options: [
                "Correcting or handling problematic data",
                "Deleting the computer",
                "Formatting HTML",
                "Creating Git branches"
            ],
            answer: 0
        },

        {
            question: "What is an outlier?",
            options: [
                "An unusually distant observation",
                "A database table",
                "A Python function",
                "A CSS class"
            ],
            answer: 0
        },

        {
            question: "Which chart is useful for showing trends over time?",
            options: [
                "Line chart",
                "Pie chart only",
                "Table only",
                "Text box"
            ],
            answer: 0
        },

        {
            question: "What does CSV commonly stand for?",
            options: [
                "Comma-Separated Values",
                "Computer System Values",
                "Central Storage Variable",
                "Common Statistical View"
            ],
            answer: 0
        },

        {
            question: "What is exploratory data analysis?",
            options: [
                "Investigating data to discover patterns",
                "Writing CSS",
                "Compiling Java",
                "Creating network cables"
            ],
            answer: 0
        }

    ],


    // --------------------------------------------------------
    // NETWORKING
    // --------------------------------------------------------

    Networking: [

        {
            question: "What does IP stand for?",
            options: [
                "Internet Protocol",
                "Internal Program",
                "Internet Process",
                "Input Protocol"
            ],
            answer: 0
        },

        {
            question: "Which device forwards packets between networks?",
            options: [
                "Router",
                "Monitor",
                "Keyboard",
                "Printer"
            ],
            answer: 0
        },

        {
            question: "What does DNS do?",
            options: [
                "Maps domain names to IP addresses",
                "Encrypts files",
                "Creates websites",
                "Stores passwords"
            ],
            answer: 0
        },

        {
            question: "Which protocol is commonly used for secure web browsing?",
            options: ["HTTP", "HTTPS", "FTP", "SMTP"],
            answer: 1
        },

        {
            question: "What does LAN stand for?",
            options: [
                "Local Area Network",
                "Large Access Network",
                "Local Application Node",
                "Linked Area Node"
            ],
            answer: 0
        },

        {
            question: "Which protocol is commonly used to send email?",
            options: ["SMTP", "HTTP", "FTP", "SSH"],
            answer: 0
        },

        {
            question: "What is a MAC address?",
            options: [
                "A hardware network identifier",
                "A website address",
                "A password",
                "A programming language"
            ],
            answer: 0
        },

        {
            question: "Which device connects devices within a local network?",
            options: ["Switch", "Compiler", "Monitor", "CPU"],
            answer: 0
        },

        {
            question: "What is bandwidth?",
            options: [
                "Data transfer capacity",
                "Computer storage",
                "CPU temperature",
                "Screen resolution"
            ],
            answer: 0
        },

        {
            question: "Which protocol is commonly used for secure remote login?",
            options: ["SSH", "HTTP", "SMTP", "DNS"],
            answer: 0
        }

    ],


    // --------------------------------------------------------
    // LINUX
    // --------------------------------------------------------

    Linux: [

        {
            question: "What is Linux?",
            options: [
                "An operating system family",
                "A database",
                "A programming language",
                "A web browser"
            ],
            answer: 0
        },

        {
            question: "Which command lists files?",
            options: ["ls", "list", "show", "files"],
            answer: 0
        },

        {
            question: "Which command changes directories?",
            options: ["cd", "change", "dir", "move"],
            answer: 0
        },

        {
            question: "Which command displays the current directory?",
            options: ["pwd", "where", "current", "location"],
            answer: 0
        },

        {
            question: "Which command creates a directory?",
            options: ["mkdir", "newdir", "createdir", "folder"],
            answer: 0
        },

        {
            question: "Which command removes a file?",
            options: ["rm", "delete", "remove-file", "erase"],
            answer: 0
        },

        {
            question: "Which command displays the contents of a text file?",
            options: ["cat", "show", "read", "text"],
            answer: 0
        },

        {
            question: "Which command changes file permissions?",
            options: ["chmod", "perm", "access", "chperm"],
            answer: 0
        },

        {
            question: "Which symbol represents the home directory?",
            options: ["~", "/", ".", "#"],
            answer: 0
        },

        {
            question: "Which command is commonly used to display running processes?",
            options: ["ps", "process", "run", "jobs-list"],
            answer: 0
        }

    ],


    // --------------------------------------------------------
    // CYBER SECURITY
    // --------------------------------------------------------

    "Cyber Security": [

        {
            question: "What is cyber security?",
            options: [
                "Protecting systems and data from threats",
                "Creating websites only",
                "Managing spreadsheets",
                "Writing documents"
            ],
            answer: 0
        },

        {
            question: "What does malware mean?",
            options: [
                "Malicious software",
                "Managed hardware",
                "Mail software",
                "Manual software"
            ],
            answer: 0
        },

        {
            question: "What is phishing?",
            options: [
                "A social engineering attack",
                "A database",
                "A programming language",
                "A network cable"
            ],
            answer: 0
        },

        {
            question: "What does encryption do?",
            options: [
                "Transforms data to protect its confidentiality",
                "Deletes files",
                "Speeds up a CPU",
                "Creates a database"
            ],
            answer: 0
        },

        {
            question: "What is authentication?",
            options: [
                "Verifying identity",
                "Deleting data",
                "Compressing files",
                "Changing screen resolution"
            ],
            answer: 0
        },

        {
            question: "What is authorization?",
            options: [
                "Determining what an authenticated user can access",
                "Checking internet speed",
                "Encrypting every file",
                "Installing Linux"
            ],
            answer: 0
        },

        {
            question: "Which is a strong security practice?",
            options: [
                "Using unique strong passwords",
                "Sharing passwords",
                "Using the same password everywhere",
                "Ignoring updates"
            ],
            answer: 0
        },

        {
            question: "What is a firewall?",
            options: [
                "A system that controls network traffic",
                "A programming language",
                "A database table",
                "A web browser"
            ],
            answer: 0
        },

        {
            question: "Why are software updates important for security?",
            options: [
                "They can fix security vulnerabilities",
                "They always increase storage",
                "They remove the internet",
                "They disable passwords"
            ],
            answer: 0
        },

        {
            question: "What is multi-factor authentication?",
            options: [
                "Using more than one verification factor",
                "Using multiple usernames",
                "Using multiple browsers",
                "Using multiple email addresses"
            ],
            answer: 0
        }

    ]

};


// ============================================================
// TEST STATE
// ============================================================

let currentTest = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];


// ============================================================
// START TECHNICAL TEST
// ============================================================

function startTechnicalTest(testName) {

    if (!technicalQuestions[testName]) {

        console.error(
            "Technical test not found:",
            testName
        );

        alert(
            `${testName} technical test is not available yet.`
        );

        return;
    }

    currentTest = testName;

    currentQuestions =
        technicalQuestions[testName];

    currentQuestionIndex = 0;

    userAnswers = [];


    const analyseButton =
        document.getElementById("analyseSkillsBtn");

    if (analyseButton) {

        analyseButton.disabled = true;

        analyseButton.classList.remove(
            "analyse-ready"
        );
    }


    const resultMessage =
        document.getElementById(
            "studentResultMessage"
        );

    if (resultMessage) {

        resultMessage.textContent =
            `${testName} test started. Complete all questions and submit the test.`;
    }


    renderTechnicalQuestion();
}


// ============================================================
// RENDER QUESTION
// ============================================================

function renderTechnicalQuestion() {

    const area =
        document.getElementById(
            "technicalTestArea"
        );

    if (!area) {

        console.error(
            "technicalTestArea not found."
        );

        return;
    }


    if (
        currentQuestionIndex >=
        currentQuestions.length
    ) {

        submitTechnicalTest();

        return;
    }


    const question =
        currentQuestions[currentQuestionIndex];


    const progress =
        Math.round(
            (currentQuestionIndex /
                currentQuestions.length) *
                100
        );


    let html = `

        <div class="technical-test-box">

            <div class="test-header">

                <div>

                    <h3>
                        ${currentTest} Technical Test
                    </h3>

                    <p>
                        Question
                        ${currentQuestionIndex + 1}
                        of
                        ${currentQuestions.length}
                    </p>

                </div>

                <div class="test-progress">
                    ${progress}%
                </div>

            </div>


            <div class="test-question">

                <h4>
                    ${escapeTechnicalHtml(
                        question.question
                    )}
                </h4>

                <div class="test-options">
    `;


    question.options.forEach(
        (option, index) => {

            html += `

                <label class="test-option">

                    <input
                        type="radio"
                        name="technicalAnswer"
                        value="${index}"
                    >

                    <span>
                        ${escapeTechnicalHtml(option)}
                    </span>

                </label>

            `;
        }
    );


    html += `

                </div>

            </div>


            <button
                class="calculate-btn"
                onclick="nextTechnicalQuestion()"
            >

                ${
                    currentQuestionIndex ===
                    currentQuestions.length - 1

                    ? "Submit Test"

                    : "Next Question →"
                }

            </button>

        </div>

    `;


    area.innerHTML = html;
}


// ============================================================
// NEXT QUESTION
// ============================================================

function nextTechnicalQuestion() {

    const selected =
        document.querySelector(
            'input[name="technicalAnswer"]:checked'
        );


    if (!selected) {

        alert(
            "Please select an answer before continuing."
        );

        return;
    }


    userAnswers[currentQuestionIndex] =
        Number(selected.value);


    currentQuestionIndex++;


    renderTechnicalQuestion();
}


// ============================================================
// SUBMIT TECHNICAL TEST
// ============================================================

async function submitTechnicalTest() {

    let correctAnswers = 0;


    currentQuestions.forEach(
        (question, index) => {

            if (
                userAnswers[index] ===
                question.answer
            ) {

                correctAnswers++;
            }
        }
    );


    const totalQuestions =
        currentQuestions.length;


    const score =
        Math.round(
            (correctAnswers /
                totalQuestions) *
                100
        );


    const completedAt =
        new Date().toISOString();


    // --------------------------------------------------------
    // SAVE RESULT WITHOUT DELETING OTHER TESTS
    // --------------------------------------------------------

    const technicalResults =
        getTechnicalTestResults();


    technicalResults[currentTest] = {

        subject: currentTest,

        score: score,

        correct: correctAnswers,

        total: totalQuestions,

        percentage: score,

        completedAt: completedAt

    };


    localStorage.setItem(
        "technicalTestResults",
        JSON.stringify(technicalResults)
    );


    // --------------------------------------------------------
    // LATEST RESULT - COMPATIBILITY
    // --------------------------------------------------------

    localStorage.setItem(
        "latestTechnicalResult",

        JSON.stringify({

            subject: currentTest,

            score: score,

            correct: correctAnswers,

            total: totalQuestions,

            percentage: score,

            completedAt: completedAt

        })
    );


    // --------------------------------------------------------
    // DISPLAY RESULT
    // --------------------------------------------------------

    const area =
        document.getElementById(
            "technicalTestArea"
        );


    if (area) {

        let performanceMessage;


        if (score >= 80) {

            performanceMessage =
                "Excellent technical performance!";

        } else if (score >= 60) {

            performanceMessage =
                "Good performance. Keep improving!";

        } else if (score >= 40) {

            performanceMessage =
                "You're developing. More practice will help!";

        } else {

            performanceMessage =
                "Keep practicing the fundamentals!";
        }


        area.innerHTML = `

            <div class="technical-result-box">

                <h3>
                    ${currentTest} Test Completed 🎉
                </h3>

                <div class="technical-score">
                    ${score}%
                </div>

                <p>

                    You answered

                    <strong>
                        ${correctAnswers}
                    </strong>

                    out of

                    <strong>
                        ${totalQuestions}
                    </strong>

                    questions correctly.

                </p>

                <p>
                    ${performanceMessage}
                </p>


                <button
                    class="calculate-btn"
                    onclick="showAllTechnicalResults()"
                >
                    📊 View All Technical Scores
                </button>

            </div>

        `;
    }


    // --------------------------------------------------------
    // ENABLE ANALYSE
    // --------------------------------------------------------

    const analyseButton =
        document.getElementById(
            "analyseSkillsBtn"
        );


    if (analyseButton) {

        analyseButton.disabled = false;

        analyseButton.classList.add(
            "analyse-ready"
        );
    }


    const resultMessage =
        document.getElementById(
            "studentResultMessage"
        );


    if (resultMessage) {

        const results =
            getTechnicalTestResults();


        const completedSubjects =
            Object.keys(results);


        resultMessage.textContent =
            `Technical test completed. You have completed ${completedSubjects.length} technical test${completedSubjects.length === 1 ? "" : "s"}. You can now analyse your skills.`;
    }


    // --------------------------------------------------------
    // SAVE TO BACKEND
    // --------------------------------------------------------

    await saveTechnicalTestToBackend(
        currentTest,
        score,
        correctAnswers,
        totalQuestions
    );
}


// ============================================================
// GET ALL RESULTS
// ============================================================

function getTechnicalTestResults() {

    const savedResults =
        localStorage.getItem(
            "technicalTestResults"
        );


    if (!savedResults) {

        return {};
    }


    try {

        const parsed =
            JSON.parse(savedResults);


        return parsed &&
            typeof parsed === "object"

            ? parsed

            : {};

    } catch (error) {

        console.error(
            "Could not read technical test results:",
            error
        );

        return {};
    }
}


// ============================================================
// CALCULATE OVERALL TECHNICAL SCORE
// ============================================================

function calculateOverallTechnicalScore() {

    const results =
        getTechnicalTestResults();


    const scores =
        Object.values(results)

            .map(
                result =>
                    Number(
                        result.percentage ??
                        result.score
                    )
            )

            .filter(
                score =>
                    Number.isFinite(score)
            );


    // No completed tests
    if (scores.length === 0) {

        return null;
    }


    const total =
        scores.reduce(
            (sum, score) =>
                sum + score,
            0
        );


    return Math.round(
        total / scores.length
    );
}


// ============================================================
// SHOW ALL TECHNICAL RESULTS
// ============================================================

function showAllTechnicalResults() {

    const results =
        getTechnicalTestResults();


    const area =
        document.getElementById(
            "technicalTestArea"
        );


    if (!area) {

        return;
    }


    const subjects =
        Object.keys(results);


    if (subjects.length === 0) {

        area.innerHTML = `

            <div class="technical-result-box">

                <h3>
                    No technical tests completed yet.
                </h3>

            </div>

        `;

        return;
    }


    const overallScore =
        calculateOverallTechnicalScore();


    let html = `

        <div class="technical-results-summary">

            <h3>
                📊 Technical Test Results
            </h3>


            <div class="overall-technical-score">

                <span>
                    Overall Technical Score
                </span>

                <strong>
                    ${overallScore}%
                </strong>

            </div>


            <div class="technical-results-list">

    `;


    subjects.forEach(
        subject => {

            const result =
                results[subject];


            html += `

                <div class="technical-result-item">

                    <div>

                        <strong>
                            ${escapeTechnicalHtml(
                                result.subject ||
                                subject
                            )}
                        </strong>

                        <small>
                            ${result.correct}
                            /
                            ${result.total}
                            correct
                        </small>

                    </div>


                    <div class="result-percentage">

                        ${result.percentage ??
                        result.score}%

                    </div>

                </div>

            `;
        }
    );


    html += `

            </div>


            <div class="technical-result-actions">

                <button
                    class="calculate-btn"
                    onclick="startTechnicalTest('${subjects[0]}')"
                >
                    🔄 Retake ${escapeTechnicalHtml(subjects[0])}
                </button>

            </div>

        </div>

    `;


    area.innerHTML = html;
}


// ============================================================
// SAVE TECHNICAL TEST TO BACKEND
// ============================================================

async function saveTechnicalTestToBackend(
    subject,
    score,
    correct,
    total
) {

    const token =
        localStorage.getItem(
            "portalToken"
        );


    if (!token) {

        return;
    }


    try {

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

                    technicalTest:
                        subject,

                    technicalTestScore:
                        score,

                    technicalCorrect:
                        correct,

                    technicalTotal:
                        total

                })

            }
        );

    } catch (error) {

        console.error(
            "Could not save technical test to backend:",
            error
        );
    }
}


// ============================================================
// HTML ESCAPE
// ============================================================

function escapeTechnicalHtml(value) {

    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");
}


// ============================================================
// MAKE FUNCTIONS AVAILABLE TO HTML
// ============================================================

window.startTechnicalTest =
    startTechnicalTest;

window.nextTechnicalQuestion =
    nextTechnicalQuestion;

window.submitTechnicalTest =
    submitTechnicalTest;

window.showAllTechnicalResults =
    showAllTechnicalResults;

window.getTechnicalTestResults =
    getTechnicalTestResults;

window.calculateOverallTechnicalScore =
    calculateOverallTechnicalScore;