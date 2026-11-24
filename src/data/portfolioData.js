/**
 * Portfolio Data Configuration for Sakshi Gulabrao Jadhav
 * Contains verified data, links, projects, and original certificates.
 */

export const personalInfo = {
  fullName: "Sakshi Gulabrao Jadhav",
  preferredName: "Sakshi Jadhav",
  headline: "Computer Engineering Student",
  tagline: "Exploring Technology. Building Skills. Creating Solutions.",
  intro:
    "I am a Computer Engineering student passionate about programming, technology and software development. I enjoy learning new skills, exploring innovative ideas and developing practical solutions through projects.",
  aboutDetailed: [
    "I am currently in my Second Year pursuing a Bachelor of Technology in Computer Engineering at Dr. D. Y. Patil Educational Federation, Varale (SPPU). My academic journey is centered around building strong computer science fundamentals, mastering core programming principles, and exploring emerging software technologies.",
    "I am continuously improving my programming and development skills—working through C++, modern web technologies (HTML, CSS, and JavaScript), and algorithmic problem solving. I thrive on translating theoretical concepts into organized, practical engineering solutions.",
    "Driven by curiosity and a disciplined mindset, I actively participate in technical certifications, industry workshops, and hands-on system designs that broaden my perspective on modern computing systems."
  ],
  profileImage: "/assets/profile.png",
  fallbackProfileImage: "/assets/profile.jpg",
  location: "Pune, Maharashtra, India",
  emailPlaceholder: "sakshi.jadhav@example.com", // Edit with your preferred email
  phonePlaceholder: "+91 98XXX XXXXX", // Edit with your contact number
  resumeAvailable: false, // Set to true once you place Sakshi_Jadhav_Resume.pdf in public/assets/
  resumePath: "/assets/Sakshi_Jadhav_Resume.pdf"
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/sakshi-jadhav-51a81142a/",
  github: "https://github.com/jadhavsakshijadhav144-glitch"
};

export const skillsData = [
  {
    name: "C++",
    category: "Core Programming",
    status: "Proficient Core",
    description:
      "Object-oriented programming, data structures, algorithm implementation, memory management, and competitive problem solving.",
    highlights: ["Object-Oriented Programming (OOP)", "STL & Data Structures", "Algorithmic Thinking"],
    icon: "Code2",
    badgeColor: "from-blue-500 to-indigo-600"
  },
  {
    name: "HTML",
    category: "Frontend Development",
    status: "Core Foundation",
    description:
      "Semantic markup, modern HTML5 elements, web accessibility standards, and structured document hierarchy.",
    highlights: ["Semantic HTML5", "Web Accessibility", "Clean Structure"],
    icon: "FileCode",
    badgeColor: "from-orange-500 to-amber-600"
  },
  {
    name: "CSS",
    category: "Styling & Design",
    status: "Core Foundation",
    description:
      "Modern styling architectures, Flexbox, Grid, custom responsive UI layouts, and fluid transitions.",
    highlights: ["Responsive Layouts", "Flexbox & CSS Grid", "Transitions & Glassmorphism"],
    icon: "Palette",
    badgeColor: "from-cyan-500 to-blue-600"
  },
  {
    name: "JavaScript",
    category: "Web Programming",
    status: "Currently Learning",
    description:
      "Actively strengthening modern ES6+ concepts, DOM manipulation, asynchronous programming, and interactive UI logic.",
    highlights: ["ES6+ Syntax", "DOM Manipulation", "Event Handling & Async Basics"],
    icon: "Sparkles",
    badgeColor: "from-amber-400 to-yellow-600"
  }
];

export const projectsData = [
  {
    id: "ebike-battery-swapping",
    title: "E-Bike Battery Swapping: A Decentralized Network for Local Delivery Riders to Eliminate Range Anxiety",
    type: "Proposed Concept & Architecture",
    isProposed: true,
    tagline: "Smart Decentralized Clean Mobility Infrastructure",
    description:
      "A proposed decentralized battery-swapping network designed to reduce charging time and range anxiety for local delivery riders through smart battery stations and an application.",
    extendedDetails: [
      "Addresses urban last-mile delivery downtime by proposing modular swapping pods strategically located across delivery zones.",
      "Conceptualizes an IoT-enabled smart cabinet ecosystem communicating battery telemetry, charge state, and temperature monitoring.",
      "Proposes an intuitive mobile driver interface for one-tap battery reservations, live station availability, and seamless authorization."
    ],
    architectureHighlights: [
      {
        title: "Decentralized Swapping Nodes",
        detail: "Automated modular battery kiosks distributed across urban delivery hotspots."
      },
      {
        title: "Smart Telemetry & IoT",
        detail: "Real-time state-of-health (SoH) tracking and temperature safeguards."
      },
      {
        title: "Rider Mobile Application",
        detail: "Dynamic station routing, slot booking, and rapid NFC/QR code unlocking."
      }
    ],
    tags: ["Proposed Architecture", "System Design", "IoT Concept", "Clean Energy", "Urban Mobility"],
    image: null,
    githubUrl: "https://github.com/jadhavsakshijadhav144-glitch",
    documentationUrl: "#"
  }
];

export const educationData = {
  degree: "B.Tech in Computer Engineering",
  currentYear: "Second Year",
  status: "Undergraduate Student",
  institution: "Dr. D. Y. Patil Educational Federation, Varale",
  institutionSubtitle: "Engineering & Technology Campus",
  university: "Savitribai Phule Pune University (SPPU)",
  academicPeriod: "2024 – 2028 (Expected)",
  highlights: [
    "Focus on Core Computer Science Fundamentals & Object-Oriented Paradigms",
    "Data Structures & Algorithmic Foundations in C++",
    "Computer Networks, Discrete Mathematics & Digital Systems",
    "Active participant in technical certifications and academic projects"
  ]
};

export const certificationsData = [
  {
    id: "cpp-imarticus",
    title: "C & C++ Programming",
    organization: "Imarticus Learning",
    credentialType: "Certificate of Proficiency",
    awardedTo: "Jadhav Sakshi",
    grade: "Grade: A+",
    score: null,
    issuedDate: "08 May 2026",
    certificateId: "1QN54U42NJVV3",
    partners: ["NSDC / Skill India", "Dr. D. Y. Patil Vidya Pratishthan"],
    signatory: "Nikhil Barshikhar (Founder & CEO)",
    description:
      "Comprehensive certification verifying excellence and diligence in procedural and object-oriented programming paradigms, pointer mechanics, data structures, and algorithmic implementation in C and C++.",
    skillsCovered: ["C Programming", "C++ OOP", "Data Structures", "Pointers & Memory"],
    pdfFileName: "cpp-certificate.pdf",
    pdfPath: "/assets/cpp-certificate.pdf",
    verified: true
  },
  {
    id: "business-comm-imarticus",
    title: "Business Communication",
    organization: "Imarticus Learning",
    credentialType: "Certificate of Proficiency",
    awardedTo: "Jadhav Sakshi",
    grade: "Grade: A",
    score: null,
    issuedDate: "02 March 2026",
    certificateId: "1O4JEDXNL9G0E",
    partners: ["NSDC / Skill India", "Dr. D. Y. Patil Vidya Pratishthan"],
    signatory: "Nikhil Barshikhar (Founder & CEO)",
    description:
      "Professional business communication credential for demonstrating consistent excellence in corporate communication, structured technical reporting, cross-functional collaboration, and professional stakeholder presentations.",
    skillsCovered: ["Technical Presentation", "Professional Etiquette", "Corporate Communication"],
    pdfFileName: "business-communication.pdf",
    pdfPath: "/assets/business-communication.pdf",
    verified: true
  },
  {
    id: "nptel-digital-marketing",
    title: "Digital Marketing in the AI Era - Part 1",
    organization: "NPTEL Online Certification (IIT Madras)",
    credentialType: "Elite Academic Certification",
    awardedTo: "Sakshi Gulabrao Jadhav",
    grade: "Elite",
    score: "84%",
    scoreBreakdown: "Assignments: 25/25 (100%) | Exam: 58.5/75",
    totalCandidates: "12,604 Candidates",
    credits: "2 Academic Credits Recommended",
    duration: "August – September 2026 (4-Week Course)",
    certificateId: "NPTEL26MG139S687502016",
    partners: ["Ministry of Education (MoE, Govt. of India)", "SWAYAM", "Skill India"],
    signatory: "Prof. Andrew Thangaraj & Prof. Vignesh Muthuvijayan (IIT Madras)",
    description:
      "Prestigious IIT Madras certification with an Elite grade (84% consolidated score, perfect 25/25 in assignments) covering AI applications in digital analytics, automated customer intelligence, and machine-driven strategy.",
    skillsCovered: ["AI in Digital Analytics", "Marketing Automation", "Data-Driven Strategy"],
    pdfFileName: "nptel-digital-marketing.pdf",
    pdfPath: "/assets/nptel-digital-marketing.pdf",
    verified: true
  },
  {
    id: "smartbridge-ai-bfsi",
    title: "AI Specialist - BFSI",
    organization: "SmartBridge Educational Services Pvt. Ltd.",
    credentialType: "Virtual Internship Program",
    awardedTo: "Sakshi Jadhav",
    grade: "Completed with Distinction",
    score: null,
    period: "24 August 2026 to 03 October 2026",
    issuedDate: "30 October 2026",
    certificateId: "VIP-BFSI-2026-0101",
    partners: ["nasscom", "FutureSkills Prime (MeitY - nasscom Digital Skilling)"],
    signatory: "Amarendar Katkam (Founder & CEO)",
    description:
      "Industry-integrated virtual internship with hands-on technical exposure to artificial intelligence modeling, algorithmic risk and fraud detection, and predictive analytics for Banking, Financial Services, and Insurance workflows.",
    areas: [
      "AI in Financial Services",
      "Risk & Fraud Detection",
      "Data Analytics for BFSI",
      "Insurance Workflow Automation"
    ],
    skillsCovered: ["Risk & Fraud Modeling", "BFSI Data Analytics", "Automated Workflows"],
    pdfFileName: "ai-specialist-bfsi.pdf",
    pdfPath: "/assets/ai-specialist-bfsi.pdf",
    verified: true
  }
];
