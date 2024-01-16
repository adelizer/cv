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
    "As a Machine Learning Tech Lead, I have successfully taken multiple products and teams from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with Python to build pipelines, models, and tools to analyze billions of transactions for anti-money laundering and fraud detection applications. I have over 8 years of experience in working with companies all around the world.",
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
      degree: "BSc in Mechatronics - Full Scholarship",
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
  ],
  skills: [
    "Python",
    "Pyspark",
    "Keras/TensorFlow",
    "Pytorch",
    "JavaScript",
    "React/Next.js",
  ],
  projects: [
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
    // {
    //   title: "Jarocki.me",
    //   techStack: ["Side Project", "Next.js", "MDX"],
    //   description:
    //     "My personal website and blog. Built with Next.js and Notion API",
    //   logo: JarockiMeLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://jarocki.me/",
    //   },
    // },
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",

    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
