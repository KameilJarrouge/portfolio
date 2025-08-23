const PROJECTS = [
  {
    title: "My-Lab: Laboratory Management System",
    stack: ["React", "Next.js", "SQLite", "Tailwind CSS"],
    description:
      "Custom-built for a small clinic to manage patient records, test results, and billing. Designed for non-technical users with printable reports and envelope generation.",
    highlights: [
      "Tracks patient data and test history",
      "Generates printable reports and cost summaries",
      "Automates envelope labeling for daily workflow",
      "Built with a clean UI and SQLite for simplicity",
    ],
    type: "Freelance",
    tags: [
      "medical",
      "clinic",
      "lab",
      "React",
      "Next.js",
      "SQLite",
      "printable",
      "admin-tools",
    ],
    repos: [
      { title: "My-Lab", url: "https://github.com/KameilJarrouge/my-lab" },
    ],
    screenshots: [
      {
        title: "Main page (today's visits and summaries)",
        src: "/my-lab/landingPage.jpeg",
      },
      {
        title: "Manual Test Template Form",
        src: "/my-lab/newManualTest.jpeg",
      },
      {
        title: "Predefined Test Template Form",
        src: "/my-lab/newPredefinedTest.jpeg",
      },

      {
        title: "Patient Form",
        src: "/my-lab/newPatient.jpeg",
      },
      {
        title: "New Visit",
        src: "/my-lab/newVisit.jpeg",
      },
      {
        title: "Result Printout",
        src: "/my-lab/result.png",
      },
    ],
    diagrams: [
      {
        title: "ERD",
        src: "/my-lab/my_lab_ERD.png",
      },
    ],
    hasMoreDetails: true,
  },
  {
    title: "Sabah Style Mobile App",
    stack: ["React Native", "Shopify", "GraphQL"],
    description:
      "E-commerce app for a UAE-based fashion store. Built with React Native and integrated with Shopify via GraphQL for efficient product management and smooth user experience.",
    highlights: [
      "GraphQL integration with Shopify for dynamic product queries",
      "Optimized mobile UX and secure transaction flow",
      "Designed for real-world deployment and scalability",
    ],
    type: "Swan Technology",
    tags: [
      "e-commerce",
      "fashion",
      "mobile",
      "React Native",
      "Shopify",
      "GraphQL",
      "UX",
    ],
    // screenshots: [{ title: "Test", src: "/avatar.jpg" }],

    // hasMoreDetails: true,
    recommendation: "#",
  },
  {
    title: "Document Management System",
    stack: ["React", "Laravel"],
    description:
      "Built for AL-Hawash Private University to manage internal documents with role-based access control. Features real-time notifications for approvals and streamlined inter-departmental workflows.",
    highlights: [
      "Role-based access model for users and groups",
      "Real-time notifications for document approvals",
      "Improved communication and workflow efficiency across departments",
      "Designed and deployed for production use at AL-Hawash Private University",
    ],
    type: "Swan Technology",
    tags: [
      "university",
      "document-management",
      "workflow",
      "React",
      "Laravel",
      "real-time",
      "admin-tools",
    ],
  },
  {
    title: "Tracking & Attendance System",
    stack: ["React", "Laravel", "Python", "Tailwind CSS", "Socket.io", "MySQL"],
    description:
      "Graduation project for educational institutions. Uses facial recognition to track students and staff, with real-time attendance logging and admin dashboards.",
    highlights: [
      "Facial detection with MTCNN and recognition via FaceNet",
      "Real-time updates using Socket.io",
      "Modular architecture across frontend, backend, and AI layers",
      "Admin dashboard for managing users and attendance logs",
    ],
    type: "Graduation Project",
    tags: [
      "education",
      "AI",
      "facial-recognition",
      "attendance",
      "React",
      "Python",
      "real-time",
      "multi-stack",
    ],
    diagrams: [
      {
        title: "Database Representation",
        src: "/ATMS/diagrams/database.png",
      },
      {
        title: "ERD",
        src: "/ATMS/diagrams/ERD.png",
      },
      {
        title: "Face Detection and Recognition flow chart",
        src: "/ATMS/diagrams/pythonFlow.png",
      },
      {
        title: "Recognition and Detection Unit",
        src: "/ATMS/diagrams/pythonAIFlow.png",
      },
      {
        title: "Information data structure",
        src: "/ATMS/diagrams/pythonInformationStructure.png",
      },
    ],
    screenshots: [
      {
        title:
          "This page for browsing, edit and adding new people to the system",
        src: "/ATMS/screenshots/peoplePage.png",
      },
      {
        title: "Recognition log for a specific person",
        src: "/ATMS/screenshots/recognitionLog.png",
      },
      {
        title: "Student Attendance in his/her classes",
        src: "/ATMS/screenshots/studentAttendance.png",
      },
      {
        title: "Students Attendance in a specific class",
        src: "/ATMS/screenshots/classAttendance.png",
      },
      {
        title: "Log of a specific camera",
        src: "/ATMS/screenshots/cameraLog.png",
      },
    ],
    hasMoreDetails: true,
    repos: [
      {
        title: "Tracking and Attendance System (frontend)",
        url: "https://github.com/KameilJarrouge/TrackingAndAttendanceSystem_frontend",
      },
      {
        title: "Tracking and Attendance System (backend)",
        url: "https://github.com/KameilJarrouge/TrackingAndAttendanceSystem_backend",
      },
      {
        title:
          "Tracking and Attendance System (Face Recognition and Detection using Python)",
        url: "https://github.com/KameilJarrouge/TrackingAndAttendance_python",
      },
    ],
  },
  {
    title: "Dental Clinic Management System",
    stack: ["React", "ExpressJS", "SQLite"],
    description:
      "Custom-built for a dental clinic to manage patient records and treatment history. Tracks procedures performed on individual teeth and organizes requested X-rays for streamlined diagnostics.",
    highlights: [
      "Detailed tracking of dental procedures per tooth",
      "X-ray request logging and retrieval",
      "Designed for daily use by a practicing dentist",
      "Lightweight architecture using SQLite and ExpressJS",
    ],
    type: "Freelance",
    tags: [
      "medical",
      "dental",
      "clinic",
      "React",
      "ExpressJS",
      "SQLite",
      "diagnostics",
      "custom-client",
    ],
  },
  {
    title: "Ophthalmologist Clinic Management System",
    stack: ["Java", "Swing", "MySQL"],
    description:
      "First production-grade tool built for a real clinic, developed during university. Helps manage patient records and visit history for an ophthalmologist, with a simple GUI and reliable database integration.",
    highlights: [
      "First real-world desktop application built during university",
      "GUI designed with Java Swing for ease of use by clinic staff",
      "MySQL-backed patient record storage and retrieval",
      "Still in use years later with minimal maintenance",
    ],
    type: "Freelance",
    tags: [
      "medical",
      "ophthalmology",
      "desktop",
      "Java",
      "Swing",
      "MySQL",
      "clinic",
      "legacy",
    ],
  },
  {
    title: "Personal Manager App",
    stack: ["React", "SQLite", "Tailwind CSS"],
    description:
      "A custom-built productivity suite for managing personal data, including accounts, notes, todos, journaling, important dates, calorie tracking, and typing exercises.",
    highlights: [
      "Modular design with multiple productivity tools in one app",
      "Offline-friendly with SQLite for local data storage",
      "Built for daily use with intuitive UI and fast access",
      "Reflects personal workflow and engineering philosophy",
    ],
    type: "Personal",
    tags: [
      "personal",
      "productivity",
      "offline",
      "React",
      "SQLite",
      "calorie-tracking",
      "journaling",
      "typing",
    ],
    hasMoreDetails: true,
    screenshots: [
      { title: "Home page", src: "/manager/Manager_Home.png" },
      { title: "To Do page", src: "/manager/Manager_TODO.png" },
      {
        title: "Important Dates page",
        src: "/manager/Manager_Dates.png",
      },
      { title: "Typing Practice", src: "/manager/Manager_Typing.png" },
      {
        title: "Calories Tracker Main page",
        src: "/manager/Manager_Calories_Main.png",
      },
      {
        title: "Calories Tracker Days Log page",
        src: "/manager/Manager_Calories_Log.png",
      },
      {
        title: "Calories Tracker for a specific day",
        src: "/manager/Manager_Calories_Day.png",
      },
      { title: "Journal", src: "/manager/Manager_Journal.png" },
    ],
    repos: [
      { title: "manager", url: "https://github.com/KameilJarrouge/manager" },
    ],
  },
];

export default PROJECTS;
