export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  status: "Production Deployed" | "Released" | "Active Engineering" | "Full-Stack Engineering";
  badgeHighlight?: string;
  description: string;
  architectureDetails: string[];
  impactMetrics: string[];
  tags: string[];
  link?: string;
  githubUrl?: string;
  isFlagship?: boolean;
}

export const portfolioConfig = {
  // Basic Information
  name: "Ishwar Patro",
  title: "Software Engineer",
  headline: "Software Engineer | Full-Stack Development · Backend Systems · AI Engineering",
  subheadline: "Building scalable applications, enterprise backend integrations, and autonomous AI-powered systems.",
  description:
    "Software Engineer with 3+ years of experience engineering production-ready applications, cross-platform enterprise systems, high-scale Shopify backend integrations, and autonomous AI developer tooling.",
  location: "Bangalore, India · Open to SDE & Backend Opportunities",

  // Contact Information
  email: "ishwarpatro000@gmail.com",

  // Social Media Links
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/ishwar-patro-0b3a8b210/",
    github: "https://github.com/IshwarPatro",
    external: "https://www.linkedin.com/in/ishwar-patro-0b3a8b210/",
  },

  // Key Engineering Focus Areas
  coreFocusAreas: [
    { title: "Backend Systems", desc: "Node.js, REST & GraphQL APIs, Shopify Integrations, Microservices" },
    { title: "Cross-Platform Engineering", desc: "Production Flutter, Dart, Windows Desktop, MSIX Packaging" },
    { title: "Distributed Architecture", desc: "Fault-Tolerant Pipelines, Webhook Ingestion, Relational Data" },
    { title: "AI & Agentic Systems", desc: "Autonomous Coding Agents, Model Context Protocol (MCP), Self-Healing Loops" },
  ],

  // SEO Information
  seo: {
    ogImage: "/og-image.png",
    url: "https://ishwarpatro.dev",
    twitterHandle: "@IshwarPatro",
    keywords: [
      "Ishwar Patro",
      "Software Engineer",
      "Backend Engineer",
      "Full-Stack Developer",
      "Flutter Engineer",
      "Node.js Developer",
      "AI Engineering",
      "Enterprise Systems",
      "Lead Management System",
      "Retail Media Network",
      "Shopify Integration",
      "Distributed Systems",
      "Bangalore Software Engineer",
      "NIST Berhampur",
    ],
    authors: [
      {
        name: "Ishwar Patro",
        url: "https://github.com/IshwarPatro",
      },
    ],
  },

  // About Information
  about: {
    bio: "I'm Ishwar Patro, a Software Engineer with 3+ years of experience building production-ready software applications, cross-platform experiences, backend integrations, and enterprise solutions. My professional journey began with Flutter and cross-platform application development at SMBXL and Hash Connect, where I engineered solutions for enterprise clients and digital retail platforms across mobile, web, and desktop. Beyond client-side engineering, I am deeply focused on backend systems, cloud architecture, high-throughput API integrations, and AI engineering. I enjoy understanding how distributed systems work internally, solving complex system design challenges, and building resilient software systems from concept to production.",
    engineeringPhilosophy:
      "I prioritize architectural rigor, deterministic code, and observable systems. Whether configuring real-time Shopify webhooks, releasing commercial applications to the Microsoft Store, or designing self-healing loops for autonomous AI coding agents, my focus is on reliability, scalability, and clean engineering practices.",
    hobbies: [
      "Distributed Systems & Architecture",
      "Autonomous AI Agents & MCP Protocol",
      "Low-Level Design & High-Concurrency Systems",
      "Indie Game Development & Solarpunk Worldbuilding",
      "Exploring Modern Cloud Infrastructure",
    ],
    personalInfo: {
      language: "English, Hindi, Odia",
      nationality: "India",
      gender: "Male",
      currentLocation: "Bangalore, India",
      currentFocus: "Backend Engineering, Distributed Systems, AI Agents",
    },
  },

  // Experience Information
  experience: [
    {
      company: "Hash Connect Integrated Services Private Limited",
      role: "Software Engineer / Flutter Developer",
      period: "March 2026 – Present",
      location: "Bangalore, India",
      status: "Current Role",
      highlights: [
        "Engineered Achivr, a full-stack social media application combining Flutter mobile frontend, Node.js backend services, MongoDB, and AWS cloud infrastructure.",
        "Delivered Dell LMS (Leads Management System) with 32 recorded commits (v1.0.24+36), leading Flutter 3.47.7, Gradle, AGP, and Kotlin compatibility migrations.",
        "Delivered Lenovo Partner Application and Lenovo LMS (Leads Management System) with Docker web builds, Jenkins CI/CD, Liquid Glass UI, and NLP-assisted conversational call analysis.",
        "Prepared and released Acer RMN (Retail Media Network) and HC Retail Experience on the official Microsoft Store via Windows MSIX packaging pipelines.",
        "Engineered Dell RMN (Retail Media Network) tabletop standee application with local device distribution powered through DigitalOcean cloud infrastructure.",
        "Architecting CX9 multi-product enterprise architecture powering unified Leads Management System (LMS) and Store Locator modules under a shared core foundation.",
        "Developed high-throughput Node.js Shopify integration bridge for her.store managing bidirectional product catalog synchronization and HMAC webhooks.",
      ],
    },
    {
      company: "SMBXL Pvt Ltd",
      role: "Software Engineer",
      period: "June 2022 – June 2025",
      location: "Hyderabad, India",
      status: "Past Experience (3 Years)",
      highlights: [
        "Built Numaish Exhibition mobile application featuring digital commerce, interactive stall directories, push notifications, and payment gateway integrations.",
        "Architected FamilyCentral (Family Vault App), a secure mobile platform for family office document management, private record storage, and confidential vault access.",
        "Developed computer vision identity verification prototypes using Python, OpenCV, and dlib for automated image processing and facial verification.",
        "Engineered cross-platform mobile client solutions with responsive UI components, offline data synchronization, and third-party API integrations.",
      ],
    },
  ],

  // Skills and Roles
  skills: {
    roles: [
      "Backend Engineer",
      "Full-Stack Developer",
      "AI Systems Builder",
      "Flutter Specialist",
      "Distributed Systems Enthusiast",
    ],

    // 1. CONFIRMED SKILLS (Production & Architecture Systems)
    confirmedSkills: {
      languages: [
        { name: "JavaScript", level: "Confirmed" },
        { name: "Python", level: "Confirmed" },
        { name: "Dart", level: "Confirmed" },
        { name: "SQL", level: "Confirmed" },
        { name: "C", level: "Confirmed" },
      ],
      frameworks: [
        { name: "Flutter", level: "Production Proven" },
        { name: "Node.js", level: "Production Proven" },
        { name: "Next.js", level: "Production Proven" },
        { name: "React", level: "Production Proven" },
        { name: "GraphQL", level: "Production Proven" },
      ],
      cloudBackendDatabases: [
        { name: "Google Cloud Platform (GCP)", level: "Confirmed" },
        { name: "Firebase", level: "Confirmed" },
        { name: "MySQL", level: "Confirmed" },
        { name: "Microsoft SQL Server", level: "Confirmed" },
        { name: "API Gateway", level: "Confirmed" },
        { name: "Shopify APIs & Webhooks", level: "Production Proven" },
      ],
      developmentTools: [
        { name: "Git / GitHub", level: "Confirmed" },
        { name: "Postman", level: "Confirmed" },
        { name: "Docker", level: "Confirmed" },
        { name: "Nginx", level: "Confirmed" },
        { name: "Microsoft Store / MSIX Packaging", level: "Production Proven" },
      ],
    },

    // 2. CURRENTLY LEARNING (Planned Career Expansion toward SDE-2 & Backend)
    currentlyLearning: {
      frontend: [
        { name: "React.js", note: "Modern Web UI" },
        { name: "Next.js", note: "App Router & SSR" },
        { name: "TypeScript", note: "Type-Safe Full-Stack" },
        { name: "Tailwind CSS", note: "Utility-First Styling" },
      ],
      backendEngineering: [
        { name: "NestJS", note: "Enterprise Node Framework" },
        { name: "Advanced Node.js", note: "Event Loop & Streams" },
        { name: "Backend System Design", note: "Scalability & Resilience" },
        { name: "REST API Architecture", note: "High-Throughput Design" },
        { name: "Microservices Architecture", note: "Decoupled Distributed Services" },
      ],
      cloudDevOps: [
        { name: "AWS", note: "Core Cloud Compute & Storage" },
        { name: "AWS Solutions Architecture", note: "SAA-C03 Certification Path" },
        { name: "Cloud Infrastructure", note: "VPC, IAM, Resilient Multi-AZ" },
        { name: "CI/CD", note: "Automated Build & Deploy Pipelines" },
      ],
      aiGenerativeAI: [
        { name: "Generative AI", note: "Multimodal Models & APIs" },
        { name: "Natural Language Processing (NLP)", note: "Embeddings & Tokenization" },
        { name: "Large Language Models (LLMs)", note: "Prompt Engineering & Context" },
        { name: "Retrieval-Augmented Generation (RAG)", note: "Vector Indexing & Retrieval" },
        { name: "AI Agents", note: "Autonomous Agentic Pipelines & Workflows" },
        { name: "Model Fine-tuning", note: "LoRA / QLoRA Techniques" },
      ],
      computerScienceCore: [
        { name: "Data Structures & Algorithms (Python)", note: "Canonical Problem Patterns" },
        { name: "Low-Level Design (LLD)", note: "Object-Oriented Design & Patterns" },
        { name: "High-Level Design (HLD)", note: "Distributed Systems Architecture" },
        { name: "Object-Oriented Design", note: "SOLID Principles & Modularity" },
        { name: "Problem Solving", note: "Algorithmic Invariants & Complexity" },
      ],
    },

    // Technical Skills with SVG Icons for Visual Grid
    programmingLanguages: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    ],
    frameworks: [
      { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    ],
    tools: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
      { name: "GCP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    ],
  },

  // Education Information
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      institution: "National Institute of Science and Technology (NIST)",
      location: "Berhampur, Odisha, India",
      period: "2018 – 2022",
      cgpa: "8.01 / 10",
      description:
        "Graduated with an 8.01 CGPA. Coursework emphasized foundational computing principles including Data Structures and Algorithms, Object-Oriented Design, Operating Systems, Database Management Systems, Computer Networks, and Software Engineering methodologies.",
    },
  ],

  // 11 Complete Professional Engineering Projects (Hash Connect & SMBXL Pvt Ltd)
  projects: [
    {
      id: "achivr-social",
      title: "Achivr — Full-Stack Social Media Platform",
      category: "Full-Stack Engineering · Hash Connect · Google Play Store",
      status: "Full-Stack Engineering",
      isFlagship: true,
      badgeHighlight: "Google Play Store",
      description:
        "Full-stack social media application engineered at Hash Connect Integrated Services using Flutter for the mobile client and Node.js for backend services with MongoDB persistence. Integrated AWS cloud infrastructure, Shopify e-commerce catalog integrations, and App Store subscription billing pipelines. Published and actively live on Google Play Store.",
      architectureDetails: [
        "Built responsive cross-platform mobile client with Flutter and Dart.",
        "Engineered the backend with Node.js and Express REST APIs with database persistence in MongoDB.",
        "Integrated AWS cloud services for scalable asset storage and distributed compute.",
        "Connected Shopify commerce APIs and iTunes / App Store subscription billing pipelines.",
      ],
      impactMetrics: [
        "End-to-end full-stack ownership across Flutter, Node.js, MongoDB, and AWS",
        "Live and available on the Google Play Store",
        "Integrated Shopify commerce and iTunes subscription pipelines",
      ],
      tags: ["Flutter", "Node.js", "MongoDB", "AWS", "Shopify", "App Store Billing", "Hash Connect"],
      link: "https://play.google.com/store/apps/details?id=in.achivr&hl=en_IN",
    },
    {
      id: "her-store-shopify",
      title: "her.store – Shopify Integration Bridge",
      category: "Backend Engineering · E-Commerce Data Pipeline · API Integration",
      status: "Production Deployed",
      isFlagship: true,
      badgeHighlight: "Shopify Backend Bridge",
      description:
        "Developed a Node.js-based integration bridge service connecting Shopify-registered merchant stores (including Britannia) with the primary her.store application. Engineered bidirectional catalog sync, real-time verified HMAC webhook ingestion, and resilient rate-limiting.",
      architectureDetails: [
        "Constructed high-throughput Node.js microservice communicating with Shopify Admin REST and GraphQL APIs.",
        "Configured secure Shopify Webhook endpoints with cryptographic HMAC signature verification.",
        "Designed schema mapping and transformation pipelines to reconcile disparate product taxonomies across external stores.",
        "Implemented exponential backoff and rate-limit throttle handling to adhere strictly to Shopify API limits.",
      ],
      impactMetrics: [
        "End-to-end multi-store catalog synchronization pipeline",
        "Real-time event processing via verified Shopify Webhooks",
        "Dedicated bridge connecting Shopify-registered stores to her.store ecosystem",
      ],
      tags: ["Node.js", "Shopify GraphQL API", "Shopify REST API", "Webhooks", "HMAC Auth", "Data Pipelines"],
      link: "https://her.store/en/shop",
    },
    {
      id: "lenovo-partner-app",
      title: "Lenovo Partner Application – buyalenovo / partner-app-hoa",
      category: "Partner Ecosystem · AI Integrations · CI/CD Pipelines",
      status: "Production Deployed",
      isFlagship: true,
      badgeHighlight: "Docker & Jenkins CI/CD",
      description:
        "A partner-focused enterprise application supporting business workflows, lead management, and AI-assisted capabilities (44 recorded commits). Features WhatsApp redirection, Liquid Glass UI, Docker-based containerized web builds, Jenkins CI/CD pipelines, and NLP-based AI call analysis.",
      architectureDetails: [
        "Engineered login workflows, lead management screens, and lead details card redesigns.",
        "Implemented WhatsApp customer redirection and integrated partner lead qualification pipelines.",
        "Configured Docker-based web build environments and Jenkins automated CI/CD deployment pipelines.",
        "Implemented modern Liquid Glass UI aesthetic and refined cross-platform design system tokens.",
        "Integrated AI call analysis and NLP-based conversational analysis functionality.",
      ],
      impactMetrics: [
        "44 recorded enterprise commits between March 27 and October 27, 2026",
        "Containerized Docker web builds and automated Jenkins build pipelines",
        "Integrated NLP call analysis and conversational AI features",
      ],
      tags: ["Flutter", "Docker", "Jenkins", "NLP Analysis", "Liquid Glass UI", "Lead Management", "CI/CD"],
      link: "https://play.google.com/store/apps/details?id=com.lenovo.partner&hl=en_IN",
    },
    {
      id: "dell-lms",
      title: "Dell Lead Management System (LMS)",
      category: "Enterprise Lead Management · Google Play Store",
      status: "Released",
      badgeHighlight: "Google Play Store",
      description:
        "Enterprise lead management application developed for Dell with 32 recorded commits (v1.0.24+36). Built new product and model creation flows, walk-in and demo-sales pipelines, dynamic dashboard analytics, and led the Flutter 3.47.7 migration with Gradle, AGP, and Kotlin compatibility upgrades.",
      architectureDetails: [
        "Engineered walk-in lead capture, demo-sales tracking, and product/model creation user workflows.",
        "Implemented operational dashboards providing lead conversion metrics and sales performance.",
        "Spearheaded complete Flutter 3.47.7 migration, resolving Gradle, AGP, and Kotlin compatibility constraints.",
        "Structured state management using BLoC for deterministic offline lead caching and background sync.",
      ],
      impactMetrics: [
        "32 recorded enterprise commits between March 31 and October 26, 2026 (v1.0.24+36)",
        "Published and actively maintained on the Google Play Store",
        "Framework upgrade to Flutter 3.47.7 with modernized Android build system",
      ],
      tags: ["Flutter 3.47.7", "Dart", "BLoC", "Lead Management", "Gradle/AGP", "Google Play Store"],
      link: "https://play.google.com/store/apps/details?id=com.dell.dell_lms_app&hl=en_IN",
    },
    {
      id: "lenovo-lms",
      title: "Lenovo Lead Management System (LMS) & Partner Microsite",
      category: "Enterprise Lead Management · Mobile & Web Delivery",
      status: "Released",
      badgeHighlight: "Google Play Store",
      description:
        "Co-delivered a unified enterprise lead management application and companion web microsite for Lenovo. Engineered the Flutter mobile client published on Google Play Store, developed the partner web microsite, and configured production web hosting with Nginx.",
      architectureDetails: [
        "Engineered responsive Flutter mobile client for partner field teams and sales representatives.",
        "Constructed companion web training and lead management microsite with unified corporate branding.",
        "Configured Nginx web server deployment, caching rules, and reverse proxy routing.",
        "Synchronized API communication, response times, and field lead capture workflows.",
      ],
      impactMetrics: [
        "Synchronized multi-channel lead tracking experience across mobile and web",
        "Live publication on Google Play Store",
        "Production web deployment and hosting via Nginx",
      ],
      tags: ["Flutter", "Web Microsite", "Nginx", "REST APIs", "Lead Management", "Google Play Store"],
      link: "https://play.google.com/store/apps/details?id=com.lenovo.partner&hl=en_IN",
    },
    {
      id: "acer-rmn",
      title: "Acer Retail Media Network (RMN)",
      category: "Retail Media Network · Microsoft Store Release",
      status: "Released",
      badgeHighlight: "Microsoft Store Released",
      description:
        "Commercial Retail Media Network digital signage software developed for Acer retail environments. Spearheaded the Windows packaging and release pipeline converting executables into modern MSIX packages for publication to the official Microsoft Store.",
      architectureDetails: [
        "Constructed the Flutter Windows application for high-impact interactive retail marketing.",
        "Spearheaded the Windows desktop EXE-to-MSIX packaging workflow using modern desktop bridge toolchains.",
        "Configured package identity, digital code signing, capabilities, and update dependencies.",
        "Successfully passed Windows Application Certification Kit (WACK) validation and store publishing requirements.",
      ],
      impactMetrics: [
        "Officially released and certified on the Microsoft Store",
        "End-to-end MSIX packaging and enterprise signing pipeline",
        "Seamless automatic background updates via Microsoft Store",
      ],
      tags: ["Flutter Desktop", "MSIX Packaging", "Microsoft Store", "Retail Media Network", "Windows SDK"],
      link: "https://apps.microsoft.com/detail/9p4l5wnw0wr1?hl=en-GB&gl=IN",
    },
    {
      id: "hc-retail",
      title: "HC Retail Experience",
      category: "Commercial Desktop Apps · Microsoft Store Release",
      status: "Released",
      badgeHighlight: "Microsoft Store Released",
      description:
        "Desktop retail customer experience application packaged, validated, and successfully released to the Microsoft Store, adhering to Windows Desktop Bridge guidelines and ensuring frictionless updates.",
      architectureDetails: [
        "Executed EXE-to-MSIX transformation adhering to modern Windows Desktop Bridge guidelines.",
        "Resolved sandboxed filesystem access constraints and Microsoft Partner Center certification criteria.",
        "Helped drive the official store release and compliance verification.",
        "Ensured seamless background updates and zero-dependency installations.",
      ],
      impactMetrics: [
        "Successfully passed Windows Application Certification Kit (WACK) validation",
        "Official Microsoft Store commercial publication",
        "Interactive retail touchscreen customer experience",
      ],
      tags: ["Windows Desktop", "MSIX", "Microsoft Store", "App Packaging", "Store Certification"],
      link: "https://apps.microsoft.com/detail/9nbhnx8hjcnv?hl=en-GB&gl=IN",
    },
    {
      id: "cx9-architecture",
      title: "CX9 – Multi-Product Enterprise Architecture",
      category: "Enterprise Architecture · Unified Product Ecosystem",
      status: "Active Engineering",
      badgeHighlight: "Modular Architecture",
      description:
        "An enterprise Flutter application built around a multi-product architecture, engineered to power multiple business products—including LMS and Store Locator modules—within a single unified codebase with strict separation of concerns and shared core services.",
      architectureDetails: [
        "Architected modular application boundaries allowing distinct business products (LMS, Store Locator) to coexist cleanly.",
        "Engineered a shared core layer containing navigation, authentication, API clients, and theme tokens.",
        "Enabled product-level feature toggling and dynamic dependency injection for enterprise multi-tenancy.",
        "Designed scalable folder structures and abstraction boundaries to support future enterprise module expansion.",
      ],
      impactMetrics: [
        "Enterprise-scale modular architecture powering multiple commercial products",
        "High code reusability across enterprise modules",
        "Clean decoupling of product-specific workflows from shared infrastructure",
      ],
      tags: ["Flutter", "Dart", "Multi-Product Architecture", "Enterprise Systems", "Modular Design", "System Design"],
    },
    {
      id: "dell-rmn-standee",
      title: "Dell RMN – Tabletop Standee (Local & Cloud Distributed)",
      category: "Retail Media Network · Tabletop Display Systems · Hash Connect",
      status: "Released",
      badgeHighlight: "DigitalOcean Distributed",
      description:
        "A dedicated Retail Media Network (RMN) application engineered for Dell tabletop standee advertising devices. Developed the interactive touch display experience and managed local device distribution powered by DigitalOcean cloud infrastructure.",
      architectureDetails: [
        "Developed custom Flutter UI layouts optimized for tabletop touch displays and standee form factors.",
        "Structured independent build targets tailored specifically for tabletop hardware configurations.",
        "Orchestrated local application distribution pipelines and over-the-air asset updates hosted on DigitalOcean cloud.",
        "Implemented automated recovery and watchdog routines for unattended retail tabletop displays.",
      ],
      impactMetrics: [
        "Dedicated RMN architecture for tabletop standee devices",
        "Cloud-managed local distribution hosted via DigitalOcean",
        "Interactive retail counter advertising experience",
      ],
      tags: ["Flutter", "DigitalOcean", "Retail Media Network", "Tabletop Standee", "Cloud Distribution", "Hash Connect"],
    },
    {
      id: "numaish-exhibition",
      title: "Numaish Exhibition Application",
      category: "Commercial Mobile App · SMBXL Pvt Ltd · Digital Commerce",
      status: "Production Deployed",
      badgeHighlight: "Payments & Nav",
      description:
        "An exhibition and fair-oriented mobile application engineered at SMBXL Pvt Ltd supporting visitors, exhibitors, and digital shopping experiences for the historic Numaish exhibition. Implemented interactive fair navigation, digital stall storefronts, digital advertising, push notifications, and payment gateway integration.",
      architectureDetails: [
        "Built Flutter mobile application featuring fair map navigation, digital stall directories, and exhibitor showcases.",
        "Integrated secure payment gateway workflows for in-app exhibitor transactions and tickets.",
        "Implemented targeted push notifications for live event announcements, offers, and visitor updates.",
        "Engineered in-app digital advertising and sponsor banner display modules.",
      ],
      impactMetrics: [
        "Commercial mobile application serving exhibition visitors and digital exhibitors",
        "Integrated end-to-end digital payment and shopping workflows",
        "Interactive fair navigation and push notification broadcast engine",
      ],
      tags: ["Flutter", "Payment Gateway", "Push Notifications", "Digital Commerce", "Interactive Navigation", "SMBXL"],
    },
    {
      id: "family-central",
      title: "FamilyCentral — Family Office Document Vault",
      category: "Mobile Security · SMBXL Pvt Ltd · Document Vault",
      status: "Production Deployed",
      badgeHighlight: "Family Vault App",
      description:
        "A secure mobile application engineered at SMBXL Pvt Ltd focused on family office document management and private digital vault storage. Provides encrypted access to critical family office records, assets, financial documents, and legacy data.",
      architectureDetails: [
        "Architected mobile application using Flutter and Dart with secure document viewer integration.",
        "Implemented secure offline document storage, private vault caching, and credentialed data access.",
        "Designed structured document classification hierarchies for family office assets and legal paperwork.",
        "Engineered smooth cross-platform document previewing and high-performance search workflows.",
      ],
      impactMetrics: [
        "Confidential family vault serving private family office records and assets",
        "Encrypted mobile access and intuitive family record management",
        "Engineered and delivered during professional tenure at SMBXL Pvt Ltd",
      ],
      tags: ["Flutter", "Dart", "Document Vault", "Family Office", "Mobile Security", "SMBXL"],
    },
  ] as ProjectItem[],

  // More Links Information
  moreLinks: [
    {
      title: "GitHub Profile",
      description: "Explore active repositories, open-source contributions, and engineering implementations.",
      link: "https://github.com/IshwarPatro",
    },
    {
      title: "LinkedIn Profile",
      description: "Professional career history, recommendations, enterprise deployments, and networking.",
      link: "https://www.linkedin.com/in/ishwar-patro-0b3a8b210/",
    },
    {
      title: "Google Play Store Developer Releases",
      description: "Published production Android applications including Dell LMS, Lenovo Partner, and Achivr.",
      link: "https://play.google.com/store/apps/details?id=com.dell.dell_lms_app&hl=en_IN",
    },
  ],

  // API Keys
  apiKeys: {
    resendApiKey: process.env.RESEND_API_KEY || "",
  },
};
