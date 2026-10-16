import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const contact = {
    name: "Mahdi Feyzi",
    title: "Front-End Developer",
    location: "Arak, Iran",
    email: "mahdifeyzi84@gmail.com",
    phone: "09390380956",
    phoneHref: "tel:+989390380956",
    github: "https://github.com/Mahdi742897",
};

const services = [
    {
        title: "Front-End Developer",
        icon: web,
    },
    {
        title: "React & Next.js",
        icon: mobile,
    },
    {
        title: "REST API Integration",
        icon: backend,
    },
    {
        title: "Node.js & PostgreSQL",
        icon: creator,
    },
];

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            "JavaScript",
            "TypeScript",
            "HTML5",
            "CSS3",
            "React.js",
            "Next.js",
            "Redux Toolkit",
            "React Router",
            "Tailwind CSS",
            "Formik",
            "Yup",
            "Axios",
            "REST APIs",
        ],
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express.js"],
    },
    {
        title: "Database",
        skills: ["PostgreSQL", "SQL", "Database Design"],
    },
    {
        title: "Mobile",
        skills: ["React Native", "Expo"],
    },
    {
        title: "Tools",
        skills: ["Git", "GitHub", "Appwrite"],
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Front-End Developer — Contract",
        company_name: "Telecommunication Company of Central Province, Iran",
        icon: web,
        iconBg: "#383E56",
        date: "2023–2026 · On-site",
        points: [
            "Developed and maintained most major front-end modules of NIMA, an enterprise telecommunications platform used across three provinces, excluding the traffic-management module.",
            "Built interfaces, forms, tables, workflows, and data-driven features, and integrated them with backend REST APIs.",
            "Developed an internal organizational messaging system with file-sharing capability.",
            "Debugged production issues, maintained existing features, and implemented changes based on operational requirements using Git.",
            "Worked initially with another front-end developer and a back-end developer, then became the primary front-end developer alongside a back-end developer.",
            "Stack: React.js, Redux Toolkit, React Router, Tailwind CSS, Formik, Yup, Axios, REST APIs, Git.",
        ],
    },
];

const education = {
    degree: "B.Sc. in Computer Engineering",
    school: "Amirkabir University of Technology, Arak",
    date: "2023–2027",
    status: "Expected graduation — degree in progress",
};

const languages = [
    {
        name: "Persian",
        level: "Native",
    },
    {
        name: "English",
        level: "Intermediate (B1/B2)",
    },
    {
        name: "French",
        level: "Beginner",
    },
];

const projects = [
    {
        name: "FTTH Contractor Platform",
        role: "Front-End Developer",
        description:
            "Web platform used by fiber-optic contractors to register and manage subscriber information. I built the Next.js front-end, implemented contractor and subscriber workflows, integrated backend APIs, and maintained features based on operational needs.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "frontend",
                color: "green-text-gradient",
            },
            {
                name: "restapi",
                color: "pink-text-gradient",
            },
        ],
        image: web,
        imageFit: "contain",
    },
    {
        name: "Takaffol-e Aytam",
        role: "Full-Stack Developer",
        description:
            "Charity management app with a public landing page and admin dashboard. I built the frontend and backend, designed the PostgreSQL schema, and implemented donor, family, account, and inventory management, authentication with basic role-based permissions, APIs, and Excel export.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "postgresql",
                color: "pink-text-gradient",
            },
        ],
        image: backend,
        imageFit: "contain",
    },
    {
        name: "Movie Mobile App",
        role: "Mobile Developer · In development",
        description:
            "React Native (Expo) movie-discovery app in development. It retrieves and lists movies from TMDB, with filtering still in progress, and uses Appwrite for search-related data and trending-movie features.",
        tags: [
            {
                name: "react-native",
                color: "blue-text-gradient",
            },
            {
                name: "expo",
                color: "green-text-gradient",
            },
            {
                name: "appwrite",
                color: "pink-text-gradient",
            },
        ],
        image: mobile,
        imageFit: "contain",
    },
];

export {
    services,
    technologies,
    skillCategories,
    experiences,
    education,
    languages,
    projects,
};
