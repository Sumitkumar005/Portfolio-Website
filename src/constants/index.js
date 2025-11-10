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
    organisation: "ForeignAdmits, Bengaluru, India",
    logo: HTS,
    link: "https://foreignadmits.com/",
    positions: [
      {
        title: "AI Engineer Intern",
        duration: "July 2025 - Present",
        content: [
          {
            text: "Building production-grade AI chatbots and document processing systems for study abroad assistance.",
            link: "",
          },
          {
            text: "Working with RAG pipelines, LLMs, and automated email outreach platforms.",
            link: "",
          },
        ],
      },
    ],
  },
  {
    organisation: "AI Research Lab, South Korea",
    logo: oracle,
    link: "",
    positions: [
      {
        title: "ML Engineer (Freelancer)",
        duration: "Sep 2025 - Nov 2025",
        content: [
          {
            text: "Researching AI-driven Fashion Trend Forecasting and Multimodal Emotion Recognition systems.",
            link: "",
          },
          {
            text: "Working with advanced ML models, PyTorch, and Graph Neural Networks.",
            link: "",
          },
        ],
      },
    ],
  },
  
  {
    organisation: "HTS Tech Solutions, Pune, India",
    logo: HTS,
    link: "https://htstechsolutions.com/",
    positions: [
      {
        title: "AI & Data Science Intern - PPO Received",
        duration: "March 2025 - July 2025",
        content: [
          {
            text: "Developed AI-powered rust detection system for mobile cell towers using computer vision.",
            link: "",
          },
          {
            text: "Built 3D mapping pipelines and optimized ML workflows, reducing processing time by 75%.",
            link: "",
          },
        ],
      },
    ],
  },
  
  {
    organisation: "Unified Mentor, Gurugram, India",
    logo: oracle,
    link: "https://www.unifiedmentor.com/",
    positions: [
      {
        title: "Machine Learning Intern",
        duration: "Dec 2024 - Feb 2025",
        content: [
          {
            text: "Built ML pipelines for fraud detection and medical imaging with 92% accuracy.",
            link: "",
          },
          {
            text: "Worked with ensemble learning, CNNs, and deployed scalable FastAPI systems.",
            link: "",
          },
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  // AI/ML Projects
  {
    id: "ai-project-1",
    title: "VoxFlow.ai - AI Voice Calling Platform",
    github: "https://github.com/Sumitkumar005/VoxFlow.ai",
    image: greentrust,
    content: "A comprehensive AI-powered voice calling platform for automated customer interactions with advanced AI agents.",
    category: "AI/ML",
    stack: [
      { id: "icon-1", icon: SiJavascript, name: "Node.js" },
      { id: "icon-2", icon: SiTwilio, name: "Twilio" },
      { id: "icon-3", icon: SiOpenai, name: "OpenAI" },
      { id: "icon-4", icon: SiMilvus, name: "MongoDB" },
    ],
  },
  {
    id: "ai-project-2",
    title: "QA_TESTER - AI Code Analysis Platform",
    github: "https://github.com/Sumitkumar005/QA_TESTER",
    image: chargeswap,
    content: "AI-powered code analysis platform that provides comprehensive quality assessment, security vulnerability detection, and intelligent insights for your codebase.",
    category: "AI/ML",
    stack: [
      { id: "icon-1", icon: SiFastapi, name: "FastAPI" },
      { id: "icon-2", icon: SiOpenai, name: "Google Gemini" },
      { id: "icon-3", icon: SiMilvus, name: "FAISS" },
      { id: "icon-4", icon: SiMilvus, name: "MongoDB" },
    ],
  },
  {
    id: "ai-project-3",
    title: "AI Calling Agent - Mental Health Consultant",
    github: "https://github.com/Sumitkumar005/AI-calling-agent",
    image: recruitment,
    content: "Innovative solution for automated inbound/outbound calling processes, tailored as a mental health consultant using Twilio, OpenAI, Pinecone, and MongoDB.",
    category: "AI/ML",
    stack: [
      { id: "icon-1", icon: SiTwilio, name: "Twilio" },
      { id: "icon-2", icon: SiOpenai, name: "OpenAI" },
      { id: "icon-3", icon: SiMilvus, name: "Pinecone" },
      { id: "icon-4", icon: SiMilvus, name: "MongoDB" },
    ],
  },
  {
    id: "ai-project-4",
    title: "Custom University Chatbot",
    github: "https://github.com/Sumitkumar005/custom-chatbot",
    image: chargeswap,
    content: "A production-ready chatbot for querying university information with RAG implementation and vector search capabilities.",
    category: "AI/ML",
    stack: [
      { id: "icon-1", icon: SiPython, name: "Python" },
      { id: "icon-2", icon: SiMilvus, name: "FAISS" },
      { id: "icon-3", icon: SiOpenai, name: "OpenAI" },
      { id: "icon-4", icon: SiStreamlit, name: "Streamlit" },
    ],
  },
  {
    id: "ai-project-5",
    title: "Smart Finance with Machine Learning",
    github: "https://github.com/Sumitkumar005/Smart-Finance-with-Machine-Learning",
    image: recruitment,
    content: "Implemented ML and deep learning models for stock prediction and anomaly detection. Featured in IIT Madras Newsletter.",
    category: "AI/ML",
    stack: [
      { id: "icon-1", icon: SiPython, name: "Python" },
      { id: "icon-2", icon: SiTensorflow, name: "TensorFlow" },
      { id: "icon-3", icon: SiPandas, name: "Pandas" },
      { id: "icon-4", icon: SiFlask, name: "Flask" },
    ],
  },
  {
    id: "ai-project-6",
    title: "Krishi Sakhi - AI Farming Assistant",
    github: "https://github.com/Sumitkumar005/SIH-krishi-sakhi-ai-assistant",
    image: greentrust,
    content: "AI-powered farming assistant for Smart India Hackathon, providing intelligent agricultural guidance and support.",
    category: "AI/ML",
    stack: [
      { id: "icon-1", icon: SiPython, name: "Python" },
      { id: "icon-2", icon: SiOpenai, name: "OpenAI" },
      { id: "icon-3", icon: SiFlask, name: "Flask" },
      { id: "icon-4", icon: SiReact, name: "React" },
    ],
  },
  {
    id: "ai-project-7",
    title: "TalentScout AI Recruiter",
    github: "https://github.com/Sumitkumar005/TalentScout-AI-Recruiter",
    image: chargeswap,
    content: "AI-powered recruitment platform for intelligent talent acquisition and candidate matching.",
    category: "AI/ML",
    stack: [
      { id: "icon-1", icon: SiPython, name: "Python" },
      { id: "icon-2", icon: SiOpenai, name: "OpenAI" },
      { id: "icon-3", icon: SiFastapi, name: "FastAPI" },
      { id: "icon-4", icon: SiMilvus, name: "MongoDB" },
    ],
  },
  {
    id: "ai-project-8",
    title: "SeekStyle.ai - Fashion Discovery Engine",
    github: "https://github.com/Sumitkumar005/seekstyle.ai",
    image: recruitment,
    content: "AI-powered fashion discovery engine for personalized style recommendations and trend analysis.",
    category: "AI/ML",
    stack: [
      { id: "icon-1", icon: SiPython, name: "Python" },
      { id: "icon-2", icon: SiOpenai, name: "OpenAI" },
      { id: "icon-3", icon: SiReact, name: "React" },
      { id: "icon-4", icon: SiTensorflow, name: "TensorFlow" },
    ],
  },

  // Backend Projects
  {
    id: "backend-project-1",
    title: "GitHub Wrapped API",
    github: "https://github.com/Sumitkumar005/github-wrapped-api",
    image: greentrust,
    content: "High-performance REST API providing personalized GitHub statistics and 'Spotify Wrapped' style year-end summaries for developers. Built with TypeScript, Fastify, and Redis.",
    category: "Backend",
    stack: [
      { id: "icon-1", icon: SiJavascript, name: "TypeScript" },
      { id: "icon-2", icon: SiJavascript, name: "Fastify" },
      { id: "icon-3", icon: SiJavascript, name: "Redis" },
      { id: "icon-4", icon: AiFillGithub, name: "GitHub API" },
    ],
  },
  {
    id: "backend-project-2",
    title: "Custom Outreach Application",
    github: "https://github.com/Sumitkumar005/custom-outreach-application",
    image: chargeswap,
    content: "Production-ready outreach application for automated email campaigns and lead management.",
    category: "Backend",
    stack: [
      { id: "icon-1", icon: SiJavascript, name: "Node.js" },
      { id: "icon-2", icon: SiJavascript, name: "Express.js" },
      { id: "icon-3", icon: SiMilvus, name: "MongoDB" },
      { id: "icon-4", icon: SiJavascript, name: "JWT" },
    ],
  },
  {
    id: "backend-project-3",
    title: "Property Management US - Data Analysis Tool",
    github: "https://github.com/Sumitkumar005/property-management-US",
    image: recruitment,
    content: "Comprehensive web scraping and data analysis tool for collecting detailed information about residential property management firms across U.S. cities with populations over 80,000.",
    category: "Backend",
    stack: [
      { id: "icon-1", icon: SiPython, name: "Python" },
      { id: "icon-2", icon: SiPandas, name: "Pandas" },
      { id: "icon-3", icon: SiPython, name: "BeautifulSoup" },
      { id: "icon-4", icon: SiMilvus, name: "MongoDB" },
    ],
  },
  {
    id: "backend-project-4",
    title: "Web Scraper API",
    github: "https://github.com/Sumitkumar005/web-scrap",
    image: greentrust,
    content: "Give website/page link and get the clean extracted data. Powerful web scraping API for data extraction.",
    category: "Backend",
    stack: [
      { id: "icon-1", icon: SiPython, name: "Python" },
      { id: "icon-2", icon: SiFlask, name: "Flask" },
      { id: "icon-3", icon: SiPython, name: "BeautifulSoup" },
      { id: "icon-4", icon: SiFastapi, name: "FastAPI" },
    ],
  },

  // Full Stack Projects
  {
    id: "fullstack-project-1",
    title: "Hemut Voice AI - Trucking Dashboard",
    github: "https://github.com/Sumitkumar005/Voice-AI-Hemut-Frontend",
    image: chargeswap,
    content: "Modern React dashboard for managing AI-powered driver calls and load assignments in trucking industry.",
    category: "Full Stack",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiTailwindcss, name: "TailwindCSS" },
      { id: "icon-3", icon: SiJavascript, name: "Node.js" },
      { id: "icon-4", icon: SiMilvus, name: "PostgreSQL" },
    ],
  },
  {
    id: "fullstack-project-2",
    title: "Drishtea - Wellness in Every Sip",
    github: "https://github.com/Sumitkumar005/Drishtea",
    image: recruitment,
    content: "Full-stack wellness platform focused on tea and health benefits with modern UI/UX.",
    category: "Full Stack",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiTailwindcss, name: "TailwindCSS" },
      { id: "icon-3", icon: SiJavascript, name: "Node.js" },
      { id: "icon-4", icon: SiMilvus, name: "MongoDB" },
    ],
  },
  {
    id: "fullstack-project-3",
    title: "Arfve Earbuds - Built to Last, Designed to Defy",
    github: "https://github.com/Sumitkumar005/Arfve_earbuds",
    image: greentrust,
    content: "Modern e-commerce platform for premium earbuds with sleek design and user experience.",
    category: "Full Stack",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React" },
      { id: "icon-2", icon: SiTailwindcss, name: "TailwindCSS" },
      { id: "icon-3", icon: SiJavascript, name: "JavaScript" },
      { id: "icon-4", icon: AiFillHtml5, name: "HTML5" },
    ],
  },

  // Computer Vision Projects
  {
    id: "cv-project-1",
    title: "Isourse FlowVision - Quality Inspection System",
    github: "https://github.com/Sumitkumar005/Isourse-FlowVision",
    image: chargeswap,
    content: "Fault Detection, Quality Inspection & Remote Monitoring System for warehouse operations using computer vision and deep learning.",
    category: "Computer Vision",
    stack: [
      { id: "icon-1", icon: SiOpencv, name: "OpenCV" },
      { id: "icon-2", icon: SiTensorflow, name: "TensorFlow" },
      { id: "icon-3", icon: SiPytorch, name: "PyTorch" },
      { id: "icon-4", icon: SiFlask, name: "Flask" },
    ],
  },

  // Tools & Extensions
  {
    id: "tools-project-1",
    title: "Auto Form Filling Extension",
    github: "https://github.com/Sumitkumar005/auto-form-filling-extension",
    image: recruitment,
    content: "Browser extension for automated form filling with intelligent field detection and data management.",
    category: "Tools",
    stack: [
      { id: "icon-1", icon: SiJavascript, name: "JavaScript" },
      { id: "icon-2", icon: AiFillHtml5, name: "HTML5" },
      { id: "icon-3", icon: DiCss3, name: "CSS3" },
      { id: "icon-4", icon: SiJavascript, name: "Chrome API" },
    ],
  },

  // Hackathon Projects
  {
    id: "hackathon-project-1",
    title: "Mumbai Hacks - Fakt AI",
    github: "https://github.com/Sumitkumar005/Mumbai-Hacks-Hackathon-Fakt-AI",
    image: greentrust,
    content: "AI-powered fact-checking platform developed for Mumbai Hacks hackathon.",
    category: "Hackathon",
    stack: [
      { id: "icon-1", icon: SiPython, name: "Python" },
      { id: "icon-2", icon: SiOpenai, name: "OpenAI" },
      { id: "icon-3", icon: SiReact, name: "React" },
      { id: "icon-4", icon: SiFlask, name: "Flask" },
    ],
  },
  {
    id: "hackathon-project-2",
    title: "AI Agent Hackathon - Syngenta",
    github: "https://github.com/Sumitkumar005/AI-Agent-Hackathon-Syngenta-",
    image: chargeswap,
    content: "AI agent solution developed for Syngenta hackathon focusing on agricultural technology.",
    category: "Hackathon",
    stack: [
      { id: "icon-1", icon: SiPython, name: "Python" },
      { id: "icon-2", icon: SiOpenai, name: "OpenAI" },
      { id: "icon-3", icon: SiFastapi, name: "FastAPI" },
      { id: "icon-4", icon: SiMilvus, name: "Vector DB" },
    ],
  },
  {
    id: "hackathon-project-3",
    title: "StartupPulse AI",
    github: "https://github.com/Sumitkumar005/StartupPulse-AI",
    image: recruitment,
    content: "AI-powered startup analysis and market intelligence platform.",
    category: "Hackathon",
    stack: [
      { id: "icon-1", icon: SiPython, name: "Python" },
      { id: "icon-2", icon: SiOpenai, name: "OpenAI" },
      { id: "icon-3", icon: SiReact, name: "React" },
      { id: "icon-4", icon: SiTensorflow, name: "TensorFlow" },
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
  // Add any relevant extracurricular activities here
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
