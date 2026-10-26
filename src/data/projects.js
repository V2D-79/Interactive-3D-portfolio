export const projects = [
  {
    id: "ghostgrid",
    title: "GhostGrid",
    category: "AI/ML / Energy Infrastructure",
    shortDescription: "An AI-powered Digital Twin platform for visualizing, monitoring, and analyzing electrical power-grid infrastructure including transformers, substations, and smart meters.",
    tags: ["React", "Python", "FastAPI", "PyTorch", "Firebase", "Leaflet.js"],
    image: "/images/projects/ghostgrid.jpg",
    githubUrl: "https://github.com/V2D-79/Ghost-Gride",
    caseStudy: {
      overview: "GhostGrid is a digital infrastructure monitoring and analysis platform for electrical power-grid assets. It combines interactive maps, AI/ML services, and real-time environmental data to provide a comprehensive view of grid health and risk.",
      challenge: "Identifying infrastructure risks and anticipating potential equipment failures across large-scale power grids requires correlating multiple data sources — environmental conditions, historical records, and asset metadata — in real time.",
      approach: "Built a multi-factor risk prediction engine and an AI/ML service incorporating machine learning and a local Qwen2.5-0.5B-Instruct language model. Integrated OpenWeatherMap for environmental analysis and Leaflet.js for interactive asset visualization.",
      solution: "Combined interactive infrastructure maps, environmental analysis, failure forecasting, maintenance recommendations, scheduling modules, and PDF/CSV report generation into one cohesive platform.",
      technologies: ["React", "Python", "Flask", "FastAPI", "PyTorch", "Scikit-learn", "Qwen2.5", "Firebase", "Leaflet.js", "OpenWeatherMap API"],
      outcome: "Developed an integrated platform covering asset visualization, multi-factor risk analysis, and automated maintenance planning for power-grid infrastructure."
    }
  },
  {
    id: "alzcare",
    title: "AlzCare",
    category: "Healthcare / Mobile Application",
    shortDescription: "A cross-platform healthcare application designed to support Alzheimer's patients and caregivers through patient monitoring, daily reminders, emergency alerts, and GPS location tracking.",
    tags: ["React Native", "Expo", "TypeScript", "Firebase", "GPS"],
    image: "/images/projects/alzcare.jpg",
    githubUrl: "https://github.com/V2D-79",
    caseStudy: {
      overview: "AlzCare is a mobile solution connecting Alzheimer's patients and caregivers through real-time information, safety monitoring, and daily assistance features built on a cross-platform React Native foundation.",
      challenge: "Supporting daily routines for Alzheimer's patients while helping caregivers respond quickly when a patient needs assistance or moves outside a designated safe area — all on a single, easy-to-use mobile application.",
      approach: "Implemented role-based Firebase authentication with separate caregiver and patient views, Firestore real-time synchronization, GPS tracking with geofencing, and automated voice-call functionality via VAPI.",
      solution: "Delivered an SOS emergency system, voice reminders for medications and activities, cognitive exercises, and automated alerts when a patient leaves a configured 500-metre safety radius.",
      technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Firestore", "GPS", "Geofencing", "VAPI"],
      outcome: "Delivered a documented, cross-platform mobile application covering patient monitoring, caregiver alerts, and daily routine support for Alzheimer's care."
    }
  },
  {
    id: "codebrains",
    title: "CodeBrains",
    category: "Android / Freelancer Marketplace",
    shortDescription: "An Android freelancer marketplace enabling clients to post projects and developers to bid, communicate, negotiate, and collaborate — with an integrated AI-based code quality analyzer.",
    tags: ["Android", "Java", "Firebase", "SQLite", "AI"],
    image: "/images/projects/codebrains.jpg",
    githubUrl: "https://github.com/V2D-79/codebrain",
    caseStudy: {
      overview: "CodeBrains is a mobile marketplace connecting clients who need software development work with developers seeking projects, all managed within a single Android application.",
      challenge: "Supporting project discovery, bidding, real-time communication, and quality evaluation between clients and developers inside one cohesive mobile experience.",
      approach: "Developed the Android application using Java with Firebase for authentication and real-time chat, SQLite for local data persistence, and integrated an AI-based module to analyze submitted code for quality metrics.",
      solution: "Implemented project posting, competitive bidding, real-time chat, negotiation modules, and an AI-based code quality analyzer that assesses maintainability, security, and reliability of submitted code.",
      technologies: ["Android", "Java", "Firebase", "SQLite"],
      outcome: "Created a full-featured marketplace concept with end-to-end collaboration tools and automated code-quality evaluation features for Android."
    }
  }
];
