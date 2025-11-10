import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  HTS,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  averlon
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiPytorch,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiMilvus,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiTensorflow,
  SiKeras,
  SiFastapi,
  SiOpencv,
  SiStreamlit,
  SiPandas,
  SiNumpy,
  SiScikitlearn,

  SiMicrosoftazure
} from "react-icons/si";

import {
  FaHardHat,
  FaRust
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1g-Vr2YTT8w-6rLyd97KzCyUN40FR8V01/view?usp=sharing";
export const repoLink = "";

export const callToAction = "https://www.linkedin.com/in/sumit-kumar-02a145239/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: " Indian Institute of Technology Madras,  Chennai, Tamil Nadu",
    degree: "Bachelor of Science",
    duration: "2027",
    content1: "Major: Data Science",
  },
];

// Add your past achievments here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: ethglobal,
    event: "ML Innovations in Financial Data",
    position: "Featured in IIT Madras Newsletter",
    content1: "Developed advanced ML and DL models for financial data analysis",
    article: "https://epochs.netlify.app/##page/40",
    github: "https://github.com/Sumitkumar005/Smart-Finance-with-Machine-Learning",

  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [

      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },

      {
        id: "pl-6",
        icon: DiJava,
        name: "Java",
      },

      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },

    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "icon-4",
        icon: SiOpencv,
        name: "Computer Vision"
      },



      {
        id: "icon-7",
        icon: SiPytorch,
        name: "Keras"
      },
      {
        id: "icon-8",
        icon: SiTensorflow,
        name: "TensorFlow"
      },
      {
        id: "icon-9",
        icon: SiPandas,
        name: "Pandas"
      },
      {
        id: "icon-10",
        icon: SiNumpy,
        name: "Numpy"
      },
      {
        id: "icon-11",
        icon: SiScikitlearn,
        name: "Scikitlearn"
      },


    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMicrosoftazure,
        name: "Azure",
      },
      {
        id: "t-2",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-7",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [

  {
    organisation: "HTS Tech Solutions, Pune(Maharashtra) India",
    logo: HTS,
    link: "https://htstechsolutions.com/",
    positions: [
      {
        title: "Artificial Intelligence Intern(On-site)",
        duration: "March 2025 - Present",
        content: [
          {
            text: "",
            link: "",
          },
        ],
      },
      {


        content: [

          {
            text: " currently working on a Computer Vision project. and building real-world AI solutions while sharpening problem-solving skills.",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "Unified Mentor,Gurugram(Haryana) India",
    logo: oracle,
    link: "https://www.unifiedmentor.com/",
    positions: [
      {
        title: "Machine Learning Intern(Remote)",
        duration: "Dec 2024 - Feb 2025",
        content: [
          {
            text: "Working in the AI team, building scalable ML pipelines and predictive models.",
            link: "",
          },
        ],
      },
      {
        title: "Member of Unified Mentor(Remote)",
        duration: "Sep 2024 - Nov 2024",
        content: [

          {
            text: "Worked on hands-on ML projects, gained mentorship, and built end to end ML projects and improved problem-solving skills.",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "Exposys Data Labs,Bengaluru(Karnataka) India",
    logo: averlon,
    link: "https://www.exposysdata.com/",
    positions: [
      {
        title: "Software Developer Intern(Remote)",
        duration: " Nov 2024 - Jan 2025",
        content: [
          {
            text: "Built and optimized backend services, enhancing system performance and scalability. Worked on integrating APIs, improving database efficiency, and implementing robust solutions for real-world applications.",
            link: ""
          },
          {
            text: "Collaborated with the team to streamline development workflows and deliver high-quality software.",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "Igniters, IITM BS Chennai(Tamil Nadu) India",
    logo: iris,
    link: "https://igniters.devvoy.com/",
    positions: [
      {
        title: "Community Lead",
        duration: "Dec 2024 - Present",
        content: [
          {
            text: "leding a competitive programming community for 200+ students, creating structured learning paths, organizing coding challenges, and fostering a collaborative environment for growth on platforms like Codeforces and LeetCode.",
            link: "",
          },
          {
            text: "Led workshops and discussions, ensuring continuous skill development for members.",
            link: "",
          },
        ],
      },
    ],
  }
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [

  {
    id: "project-2",
    title: "Live Monitoring in warehouse",
    github: "https://github.com/Sumitkumar005/Isourse-FlowVision",

    image: greentrust,
    content:
      " Fault Detection, Quality Inspection & Remote Monitoring System warehouse offers a novel solution.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-4",
        icon: SiGooglecloud,
        name: "Google Cloud Platform"
      },
      {
        id: "icon-3",
        icon: SiFlask,
        name: "Flask"
      },
      {
        id: "icon-4",
        icon: SiOpencv,
        name: "Computer Vision"
      },



      {
        id: "icon-7",
        icon: SiPytorch,
        name: "Keras"
      },
      {
        id: "icon-8",
        icon: SiTensorflow,
        name: "TensorFlow"
      },

    ],
  },
  {
    id: "project-3",
    title: " RAG System in Chemical Industry ",
    github: "https://github.com/Sumitkumar005/RAG-System-Knowledge-Base-Integration",
    image: chargeswap,
    content:
      "Designed a RAG system for MES, enabling context-aware queries and smart factory operations.Built a Streamlit-based interface for multimodal QA, integrating text, audio, video, and image processing.",
    stack: [
      {
        id: "icon-0",
        icon: SiOpenai,
        name: "OpenAI API"
      },

      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-4",
        icon: SiStreamlit,
        name: "Streamlit"
      }
    ],
  },

  {
    id: "project-5",
    title: " Smart Finance with Machine Learning",
    github: "https://github.com/Sumitkumar005/Smart-Finance-with-Machine-Learning",

    image: recruitment,
    content:
      " Implemented ML and deep learning models for stock prediction and anomaly detection",
    stack: [

      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-3",
        icon: SiJquery,
        name: "jQuery"
      },
      {
        id: "icon-3",
        icon: SiFlask,
        name: "Flask"
      },
      {
        id: "icon-4",
        icon: SiOpencv,
        name: "Computer Vision"
      },



      {
        id: "icon-7",
        icon: SiPytorch,
        name: "Keras"
      },
      {
        id: "icon-8",
        icon: SiTensorflow,
        name: "TensorFlow"
      },
    ],
  },

];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },

];

// List out the extra curricular activities you have induldged in like - student clubs, joining research groups etc.
export const extraCurricular = [


  {
    id: 4,
    organisation: "Igniters, IITM BS",
    title: "Community Lead",
    duration: "Dec 2024 - Present",
    content: [
      {
        text: "Led workshops and discussions, ensuring continuous skill development for members.",
        link: "",
      },
    ],
    logo: iris,
  },

];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/sumit-kumar-02a145239/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/Sumitkumar005",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:sumitkumar969074@gmail.com",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/sumit.k.404/?hl=en",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Sumit Kumar",
  githubUsername: 'SumitKumar005',
  tagLine: "AI/ML and Software Development Intern | IIT Madras'27",
  intro: "AI/ML and Software Development Intern with hands-on experience in machine learning, full-stack development, and generative AI, including LLMs, RAG, and vector databases. Proficient in Python, TensorFlow, FastAPI, and cloud platforms (AWS, GCP). Adept at building AI-driven solutions, particularly in healthcare, automation, and finance."
}

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format. 
export const includedRepos = ['publiclab/plots2', 'zulip/zulip', 'paritytech/polkadot-sdk'];
