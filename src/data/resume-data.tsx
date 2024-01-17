import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mohamed A. Abdelhady",
  initials: "MA",
  location: "Amsterdam, NL, CET",
  locationLink: "https://www.google.com/maps/place/Amsterdam",
  about:
    "Machine Learning Tech Lead, focused on building products with extra attention to detail",
  summary:
    "As a Machine Learning Tech Lead, I have successfully taken multiple products and teams from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with Python to data-driven products to analyze billions of transactions daily in order to prevent money laundering and fraud. I have over 8 years of experience in working with companies all around the world on different scales.",
  avatarUrl: "/profile-img.jpeg",
  personalWebsiteUrl: "https://moabdelhady.com",
  contact: {
    email: "m.adel.abdelhady@gmail.com",
    tel: "+31621445327",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/adelizer",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maabdelhady/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/adelizer0",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Twente",
      degree: "MSc in Robotics & Mechatronics - Full Scholarship",
      start: "2015",
      end: "2017",
    },
    {
      school: "German University in Cairo",
      degree: "BSc in Mechatronics - 60% Scholarship",
      start: "2009",
      end: "2014",
    },
  ],
  work: [
    {
      company: "Adyen",
      link: "www.adyen.com",
      badges: [],
      title: "Machine Learning Tech Lead",
      logo: ParabolLogo,
      start: "2021",
      end: "Present",
      description:
        "Leading 2 teams (7 data scientists 2 data engineers) responsible for transaction monitoring systems that screen millions of transaction daily in order to detect money laundering and fraudulent activity.",
    },
    {
      company: "Fourhtline",
      link: "www.fourthline.com",
      badges: [],
      title: "Computer Vision & Machine Learning Engineer",
      logo: ClevertechLogo,
      start: "2019",
      end: "2021",
      description:
        "Development and monitoring of data annotation strategy, ETL pipelines, and training frameworks for deep learning models to achieve end-to-end identity document authentication and provide calibrated risk scores. Improving the human baseline fraud detection f1-score by 2%.",
    },
    {
      company: "ASML",
      link: "www.asml.com",
      badges: [],
      title: "Software Design Engineer",
      logo: JojoMobileLogo,
      start: "2018",
      end: "2019",
      description:
        "Develop model-driven software components and algorithms for new machine modules. Implemented data visualization pipelines to verify new motion algorithms.",
    },
    {
      company: "Magazino GmbH",
      link: "www.magazino.eu",
      badges: [],
      title: "Robotics Software Developer",
      logo: NSNLogo,
      start: "2017",
      end: "2018",
      description: "Lead the technical onboarding and deployment of autonomous fleets at 2 intra-logistics warehouses. Develop navigation algorithms based on topological graphs for multi-robot applications.",
    },
    {
      company: "German University in Cairo",
      link: "https://www.guc.edu.eg/",
      badges: [],
      title: "Research & Teaching Assistant",
      logo: NSNLogo,
      start: "2014",
      end: "2015",
      description: "Teaching of undergraduate course and developing multi-robot planning and task allocation algorithms for heterogeneous Khepera-III mobile robots",
    },
  ],
  skills: [
    "Python",
    "Pyspark",
    "Keras/TensorFlow",
    "Pytorch",
    "FastAPI",
    "JavaScript",
    "React/Next.js",
  ],
  projects: [
    {
      title: "Marketplace Fraud detection",
      techStack: [
        "Python",
        "Pyspark",
        "Pytorch",
        "GNN"
      ],
      description: "Developing graph-based machine learning models to detect and prevent seller fraud on marketplaces.",
      logo: ConsultlyLogo,
      link: {
        label: "Article",
        href: "https://www.adyen.com/knowledge-hub/combating-marketplace-seller-fraud-with-graph-neural-networks",
      },
    },
    {
      title: "Fine-grained Image Classification",
      techStack: [
        "TensorFlow",
        "FastAPI",
        "AWS",
        "Computer Vision"
      ],
      description: "Research and development of identity document authentication models for KYC applications.",
      logo: ConsultlyLogo,
      link: {
        label: "Article",
        href: "",
      },
    },
    {
      title: "Tensorflow Metrics",
      techStack: [
        "TensorFlow",
        "Kibana",
        "Data Visualization",
        "Model Monitoring"
      ],
      description: "Monitoring of Tensorflow models using Prometheus, metricbeat, and Kibana/Grafana",
      logo: ConsultlyLogo,
      link: {
        label: "Article",
        href: "https://medium.com/fourthline-tech/how-to-visualize-tensorflow-metrics-in-kibana-761268353ca3",
      },
    },
    {
      title: "IMF Data Insights",
      techStack: ["Side Project", "Javascript", "Next.js"],
      description:
        "Economics data analytics tool built using the IMF data API",
      logo: MonitoLogo,
      link: {
        label: "imfdatainsights.com",
        href: "https://imfdatainsights.com/",
      },
    },

    {
      title: "RL Traffic Optimizer",
      techStack: ["Hackathon", "Python", "Pytorch", "RL"],
      description:
        "Reinforcement learning approach for traffic lights optimization (2nd place in C4F2 Hackathon)",
      logo: MonitoLogo,
      link: {
        label: "Leaderboard",
        href: "https://c4f2.ai.gov.eg/hackathon-closing/",
      },
    },

    {
      title: "Kaggle Terrain Classification Competition",
      techStack: ["Kaggle", "Python", "Keras", "Time-series"],
      description:
        "Utilizing robots IMU data for terrain classification task. Mixing a frequency-domain representation approach with LSTM to achieve top 6%",
      logo: MonitoLogo,
      link: {
        label: "Leaderboard",
        href: "https://github.com/adelizer/kaggle-sandbox",
      },
    },

    {
      title: "Python Robotics",
      techStack: ["Robotics", "Python", "SLAM", "Optimization"],
      description:
        "Contributing to one of the most popular robotics libraries in Python, implementing SLAM algorithms with detailed explanation and notebooks.",
      logo: MonitoLogo,
      link: {
        label: "Contributions",
        href: "https://github.com/AtsushiSakai/PythonRobotics",
      },
    },


  ],
  publications: [
    {
      title: "Reuse-oriented SLAM Framework using Software Product Lines",
      link: "https://ieeexplore.ieee.org/document/9287895",
      badges: [],
      conference: "IEEE International Conference on Robotic Computing (IRC)",
      year: "2020",
      authors:
        "Mohamed A. Abdelhady, Douwe D. Dresscher, Jan F. Broenink",
    },
    {
      title: "Learning A Recurrent Neural Network for State Estimation using Filter Data",
      link: "https://ieeexplore.ieee.org/document/8814019",
      badges: [],
      conference: "Intelligent Vehicles Symposium (IV)",
      year: "2019",
      authors:
        "Ahmed M. Hammam, Mohamed A. Abdelhady, Omar Shehata",
    },

    {
      title: "Demo Design: The VIRO Agile Eye",
      link: "http://www.dspe.nl/cms_file.php?fromDB=2133",
      badges: [],
      conference: "DSPE Mikroniek magazine, Volume 58, Issue 1",
      year: "2018",
      authors:
        "Louis Stijn, Mohamed A. Abdelhady, Samer Abdelmoeti",
    },
    {
      title: "Multi-robot Task Allocation for Search and Rescue Missions",
      link: "http://iopscience.iop.org/article/10.1088/1742-6596/570/5/052006/pdf",
      badges: [],
      conference: "European Workshop on Advanced Control and Diagnosis",
      year: "2014",
      authors:
        "A. Hussein, Mohamed A. Abdelhady, M. Bakr, Omar Shehata, Alaa Khamis",
    },
]
} as const;
