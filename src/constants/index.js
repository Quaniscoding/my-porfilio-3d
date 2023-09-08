import {
    backend,
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
    docker,
    shortly,
    restCountries,
    cybersoft,
    calculator,
    jira,
    bnb,
    porfolio,
    youtube_clone
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    }
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
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "FullStack developer",
        company_name: "CyberSoft",
        icon: cybersoft,
        iconBg: "#383E56",
        date: "May 2021 - December 2021",
        points: [
            "Intern Front-end developers"
        ],
    }
];

const projects = [
    {
        name: "Shortly Link",
        description:
            "Web-based platform that allows users to shortly their link.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: shortly,
        source_code_link: "https://github.com/Quaniscoding/shortly-link",
        demo_code_link: "https://shortly-link-chi.vercel.app/HomePage"
    },
    {
        name: "Jira",
        description:
            " The web application allows users to plan, manage members, manage tasks, and divide tasks.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "boostrap",
                color: "blue-text-gradient",
            },
            {
                name: "antd",
                color: "yellow-text-gradient",
            },
        ],
        image: jira,
        source_code_link: "https://github.com/Quaniscoding/project-jira-bc34",
        demo_code_link: "https://project-jira-bc34.vercel.app/login"
    },

    {
        name: "Calculator App",
        description:
            "Web application that allows users",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: calculator,
        source_code_link: "https://github.com/Quaniscoding/calculator-app-main",
        demo_code_link: "https://calculator-app-main-psi.vercel.app/"
    },
    {
        name: "API airBnb",
        description:
            "Api for web Airbnb",
        tags: [
            {
                name: "NodeJs",
                color: "green-text-gradient",
            },
            {
                name: "Express.js",
                color: "yellow-text-gradient",
            },
            {
                name: "Prisma",
                color: "text-blue-900",
            },
            {
                name: "MySql",
                color: "",
            },
            {
                name: "Swagger",
                color: "green-text-gradient",
            },
        ],
        image: bnb,
        source_code_link: "https://github.com/Quaniscoding/capston-node-25",
        demo_code_link: ""
    },
    {
        name: "Search countries",
        description:
            "Web application that allows users to search by name and by continent of countries around the world.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: restCountries,
        source_code_link: "https://github.com/Quaniscoding/rest-countries-with-color-theme",
        demo_code_link: "https://rest-countries-with-color-theme-zeta.vercel.app/HomePage"
    },
    {
        name: "My porfolio 3d",
        description:
            "Showing my Porfolio",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Vite",
                coolo: "blue-text-gradient"
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: porfolio,
        source_code_link: "https://github.com/Quaniscoding/my-porfilio-3d",
        demo_code_link: "https://my-porfilio-3d.vercel.app/"
    },
    {
        name: "Youtube clone",
        description:
            "Website watching videos",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "MUI",
                color: "",
            },
        ],
        image: youtube_clone,
        source_code_link: "https://github.com/Quaniscoding/youtube-clone",
        demo_code_link: "https://youtube-clone-sigma-sandy.vercel.app"
    },
];

export { services, technologies, experiences, projects };