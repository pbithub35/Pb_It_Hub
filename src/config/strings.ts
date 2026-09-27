/**
 * Centralized Strings & Copy Catalog for PB_IT_HUB
 *
 * All UI labels, headlines, descriptions, CTAs, button texts, badges,
 * modal copy, form labels, and section headings are organized by domain/component
 * so they can be easily found, edited, or localized.
 */

export const STRINGS = {
  // Brand & Global Identifiers
  brand: {
    name: "PB_IT_HUB",
    legalName: "PB_IT_HUB",
    eyebrow: "BUILD · AUTOMATE · GROW",
    tagline: "Technology designed for real-world business.",
    subheadline: "Technology designed for real-world business.",
    footerSlogan:
      "Based in Pathankot, Punjab — serving Jammu, Himachal & beyond. Technology partner for businesses that want to build, automate and grow.",
    copyrightNotice: (year: number) =>
      `© ${year} PB_IT_HUB. All rights reserved.`,
  },

  // Navigation Links
  nav: {
    home: "Home",
    services: "Services",
    work: "Work",
    learnAndBuild: "Learn or Buy",
    technologies: "Technologies",
    about: "About",
    contact: "Contact",
    whyUs: "Why Us",
    faq: "FAQ",
    locations: "Locations",
    blog: "Blog",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menu: "Menu",
  },

  // Homepage Hero Section
  hero: {
    eyebrow: "PATHANKOT · PUNJAB · BUILD · AUTOMATE · GROW",
    headlinePart1: "We build digital products",
    headlinePart2: "that move businesses forward.",
    description:
      "Website development, apps and AI for businesses in Pathankot, Punjab, Jammu and Himachal — plus final-year projects with source code for BCA, MCA and B.Tech students.",
    ctaProject: "Start a Project",
    ctaWork: "Explore Work",
    steps: {
      build: "Build",
      automate: "Automate",
      grow: "Grow",
    },
    matrix: {
      title: "System Architecture",
      status: "Production-Ready",
      platforms: "Web & Mobile",
      platformsSub: "Next.js · Flutter",
      intelligence: "AI & Automation",
      intelligenceSub: "Agents · Workflows",
      scale: "SaaS & CRM",
      scaleSub: "Multi-tenant Cloud",
      cloud: "APIs & DevOps",
      cloudSub: "AWS · High Uptime",
    },
    productSystem: {
      badge: "Product System",
      title: "Connected products. Real workflows.",
    },
  },

  // Services Section
  services: {
    eyebrow: "What we build",
    title: "Website, app and software development",
    description:
      "Custom websites, mobile apps, SaaS and business systems for companies in Pathankot, Punjab, Jammu and Himachal.",
    exploreLink: "Explore →",
    viewLink: "View →",
    viewAllServices: "View all services",
    servicePrefix: "Service",
  },

  // Why Us / Approach Section
  whyUs: {
    eyebrow: "Approach",
    title: "Why build with PB_IT_HUB?",
    description:
      "A product-focused engineering partner built around clarity, craft, and long-term durability — engineered without unnecessary agency theater.",
    seeMore: "See more reasons",
    showLess: "Show less",
  },

  // Capabilities Section
  capabilities: {
    eyebrow: "Capabilities",
    title: "Engineered for speed, scale and real business results",
    description:
      "A comprehensive technical suite designed to engineer, launch, and scale modern digital products with zero technical debt.",
    seeMore: "See all capabilities",
    showLess: "Show less",
  },

  // Technologies Section
  technologies: {
    eyebrow: "Tech Stack",
    title: "Built with modern technology",
    description:
      "Battle-tested frameworks, cloud infrastructure, and AI toolchains we use to architect and ship enterprise-grade products.",
    coreHeading: "Core Technologies",
    seeMore: "View all technologies",
    showLess: "Show less",
    filters: {
      all: "All Technologies",
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile",
      database: "Database",
      cloud: "Cloud & DevOps",
      ai: "AI & Automation",
    },
  },

  // AI & Automation Section
  aiSection: {
    eyebrow: "Intelligence",
    title: "AI is changing how software is built.",
    description:
      "We integrate AI into products, workflows and customer experiences to make software more intelligent and businesses more efficient.",
    visualDemo: "Visual demo",
    stagePrefix: "Stage",
    demoNote: "Demo sequence · not a live backend.",
    matchLabel: "Match",
  },

  // Selected Work Section
  work: {
    eyebrow: "Selected work",
    title: "Real products. Real systems.",
    description:
      "A selection of high-impact platforms, applications and enterprise tools we've engineered.",
    projectPrefix: "Project",
    viewProject: "View →",
    viewCaseStudy: "View Case Study",
    liveSite: "Live site",
    viewAllWork: "View all work",
  },

  // About Section
  about: {
    eyebrow: "About PB_IT_HUB",
    title: "Pathankot technology partner for business and students",
    description:
      "Based in Pathankot, Punjab, we build websites, apps and custom software for regional businesses — and industry-grade college projects with source code for BCA, MCA and B.Tech students across Jammu and Himachal.",
    focusList: [
      "Digital Products",
      "Business Platforms",
      "SaaS Architectures",
      "Student Projects",
    ],
  },

  // Process Section
  process: {
    eyebrow: "Process",
    title: "From idea to product",
    description:
      "A clear path from discovery to launch — without unnecessary process theater.",
  },

  // Contact CTA (Bottom of Pages)
  contactCta: {
    eyebrow: "Next step",
    headline: "Have an idea worth building?",
    description: "Let's turn your idea into a product people can use.",
    ctaProject: "Start a Project",
    ctaTalk: "Talk to Us",
  },

  // Student Services & Benefits Horizontal Scroll
  studentServicesScroll: {
    eyebrow: "STUDENT SERVICES & BENEFITS",
    headline: "Final-year projects with source code",
    description:
      "BCA, MCA and B.Tech project packages, viva prep and free career guidance — built by working engineers in Pathankot.",
    scrollHint: "Scroll to explore our offerings",
    items: [
      {
        id: "career-guidance",
               badge: "100% FREE",
        title: "Free 1-on-1 Career Guidance",
        tagline: "Honest industry roadmap & market-tested direction",
        description:
          "Connect directly with active tech professionals. We analyze 2026 market demands, critique your resume, and build your roadmap.",
        benefits: [
          "45-minute 1-on-1 Google Meet with active software engineers",
          "Analysis of current 2026 hiring trends & in-demand stacks",
          "Live portfolio & resume critique to stand out to recruiters",
          "Step-by-step personalized learning & project roadmap — 0 pressure",
        ],
        ctaText: "Book Free Session",
        ctaHref: "/learn-and-build/career-guidance",
      },
      {
        id: "all-in-one-package",
               badge: "BEST VALUE",
        title: "Complete All-in-One Package",
        tagline: "Source Code + KT + 1-to-1 Sessions + Viva Prep",
        description:
          "Get everything bundled together with maximum discount and end-to-end engineering support.",
        benefits: [
          "Full production-ready source code with setup guide",
          "Complete live video call Knowledge Transfer (KT) session",
          "4 dedicated 1-on-1 personal mentoring sessions",
          "Comprehensive Practical & Viva interview preparation",
        ],
        ctaText: "View Complete Package",
        ctaHref: "/learn-and-build/packages",
      },
      {
        id: "sessions",
               badge: "10% OFF",
        title: "1-to-1 Live Video Sessions",
        tagline: "4 personal sessions with senior engineers",
        description:
          "Personal 1-on-1 screen-sharing sessions to guide you through coding, debugging, and feature additions.",
        benefits: [
          "4 dedicated 1-on-1 live video call sessions (1 hr each)",
          "Live screen-sharing guidance to debug and customize features",
          "Step-by-step local environment and database setup",
          "Direct chat support between sessions for all technical questions",
        ],
        ctaText: "Explore Mentoring",
        ctaHref: "/learn-and-build#student-offers",
      },
      {
        id: "project-kt",
               badge: "5% OFF",
        title: "Project KT (Knowledge Transfer)",
        tagline: "Live video call code & architecture walkthrough",
        description:
          "In-depth live walkthrough of the entire project so you understand every single line of code.",
        benefits: [
          "Comprehensive live 1-on-1 video call session with an engineer",
          "Full walkthrough of the codebase, folder structure & logic flow",
          "Explanation of API integrations, database models & state management",
          "Interactive Q&A so you can answer examiner questions with confidence",
        ],
        ctaText: "Learn About KT",
        ctaHref: "/learn-and-build#student-offers",
      },
      {
        id: "buy-project",
               badge: "INSTANT ACCESS",
        title: "Buy Ready Source Code",
        tagline: "100+ production-grade projects ready to run",
        description:
          "Verified source code across modern tech stacks with zero plagiarism, complete documentation & setup guides.",
        benefits: [
          "100+ projects: React, Android, Flutter, Laravel, Next.js & Python",
          "Clean production-grade code with zero plagiarism or boilerplate",
          "Complete documentation, ER diagrams & architecture writeups",
          "Immediate repository access with step-by-step setup guide",
        ],
        ctaText: "Browse 100+ Projects",
        ctaHref: "/learn-and-build#projects",
      },
      {
        id: "build-with-us",
               badge: "CUSTOM BUILT",
        title: "Build With Us (Custom Demands)",
        tagline: "Have a unique college idea? We build it with you",
        description:
          "Submit your unique project idea and our engineers will architect, build, and guide you through the entire lifecycle.",
        benefits: [
          "Custom architecture built to your college's exact specifications",
          "College guideline compliance: synopsis, SRS & milestone approvals",
          "Direct WhatsApp & Google Meet coordination with our tech team",
          "End-to-end guidance so you understand every feature inside-out",
        ],
        ctaText: "Start Custom Project",
        ctaHref: "/learn-and-build/projects/custom-demand",
      },
      {
        id: "practical-prep",
               badge: "5% OFF",
        title: "Practical & Viva Preparation",
        tagline: "Mock viva, examiner questions & presentation readiness",
        description:
          "Prepare to ace your project evaluation, viva, and technical interviews with dedicated mentorship.",
        benefits: [
          "Curated bank of expected viva questions & model answers",
          "Live mock viva simulation with feedback from technical mentors",
          "Architecture defense & technical decision rationale coaching",
          "Project report overview and presentation tips",
        ],
        ctaText: "Prepare for Viva",
        ctaHref: "/learn-and-build#student-offers",
      },
    ],
  },

  // Learn or Buy Hub (Students)
  learnBuild: {
    eyebrow: "Learn or Buy",
    heroHeadlinePart1: "Learn by building",
    heroHeadlinePart2: "real projects.",
    heroDescription:
      "Explore real-world projects built for BCA, MCA, B.Tech, B.Sc. CS/IT, M.Sc. CS/IT, Diploma and other computer & IT programs. View features, technology stacks, and project details, get the complete source code, and choose optional guidance or learning support to help you understand, customize, and build with confidence.",
    ctaExploreProjects: "Explore Projects",
    ctaFreeGuidance: "Free Career Guidance",
    projectsEyebrow: "Projects",
    projectsTitle: "Choose a project to buy",
    searchPlaceholder:
      "Search 100+ projects (React, Flutter, Android, Laravel...)",
    stackLabel: "Stack:",
    levelLabel: "Level:",
    showingProjects: (count: number) =>
      `Showing ${count} project${count === 1 ? "" : "s"}`,
    noMatches: "No projects match",
    clearFilters: "clear all filters",
    coreModulesLabel: "Included Core Modules",
    optionalAddonsTitle: "Optional Learning Add-ons",
    optionalAddonsSubtitle:
      "Accelerate your learning with 1-on-1 mentorship, live video code walkthroughs, and viva prep.",
    clickInfoTip: "Click (ℹ) on any add-on to view details",
    specialOfferPrefix: "Special Offer:",
    addToMyProject: "+ Add to My Project",
    removeFromPlan: "Remove from Plan",
    done: "Done",
  },

  // E-commerce & Checkout Dock
  buy: {
    readyToOrder: "Ready to Order",
    readyToBuy: "READY TO BUY · ORDER SUMMARY",
    studentDiscount: "Student Discount",
    studentDiscountActive: "Student Discount Active",
    studentSavingsActive: "Student Savings Active",
    proceedToBuy: "Proceed to Buy",
    completeOrder: "Complete Order & Proceed",
    orderBreakdown: "Order Breakdown",
    orderBreakdownVerified: "Verified Deliverables",
    customizeTitle: "Customize Your Order & Buy",
    allInOnePackage: "All-in-One Complete Package",
    customizeIndividual: "Or customize individual add-ons",
    sourceCodeIncluded: "Source Code Included",
    sourceCodeFullRepo:
      "Full repository, clean code, dependencies & setup guide",
    selectThisProject: "Select This Project",
    projectSelected: "Project Selected",
    projectLabel: "Project:",
    selectProjectPrompt: "Select a project above to include source code",
    selectProjectAbove: "Select a project above",
    includedInPackage: "✓ Included in Complete Package",
    selectedInOrder: "✓ Selected in your order",
    clickToAdd: "+ Click to add",
    addToPlan: "+ Add to plan",
    addedToPlan: "✓ Added to plan",
    whatIsThis: "What is this?",
    whatIsProvided: "What is provided:",
    whatWeProvideYou: "What We Provide You:",
    bestValue: "Best Value",
    saveMaximum: "Save Maximum",
  },

  // Trust Guarantees & Deliverables
  trust: {
    videoCallSessions:
      "1-on-1 Video Call sessions scheduled at your convenience",
    mentorSupport: "Mentor support directly on WhatsApp & Google Meet",
    cleanCode: "Clean production code with zero plagiarism or boilerplate",
    zeroUpselling: "Zero Upselling Guarantee: Pure engineering mentorship",
    activeMentors: "Active Industry Mentors",
    freeZeroObligation: "100% Free · 0 Obligation",
  },

  // Career Guidance
  career: {
    badge: "FREE",
    title: "Free Career Guidance Session",
    eyebrow: "HONEST 1-ON-1 ROADMAP",
    subtitle: "Personalized Google Meet with working software engineers",
    lead: "We know what is happening in the market right now. Talk directly to experienced engineers who care about your career direction.",
    bookBtn: "Book Free 1-on-1 Guidance",
    bookGuidanceShort: "Book Guidance",
    ctaEyebrow: "We Care About Your Career",
    ctaHeadline: "Confused About What The Tech Market Demands?",
    ctaHeadlineAccent: "Talk Directly To Working Engineers.",
    ctaDescription:
      "We are active industry professionals who know what is happening in the tech market right now. Too many students waste years following outdated tutorials or building copy-paste clone projects that recruiters ignore. We give you honest, real-world guidance on where you stand and what to build next.",
    whyWeOfferFreeTitle: "Why We Offer This For Free",
    whyWeOfferFreeQuote:
      "We remember how hard it was to navigate college, vague advice, and confusing job markets. We provide this free session because we care about your long-term success and believe every student deserves genuine engineering guidance.",
    insideCallTitle: "Inside Your Call",
    insideCallHeading: "What We Cover In Your Free 45-Minute Session",
    insideCallSub:
      "No fluff, no sales pitch. Every minute is focused on your growth.",
    steps: {
      step1: "Skill & Goal Evaluation (10 Min)",
      step2: "Market Reality & Gap Analysis (20 Min)",
      step3: "Custom Action Plan & Open Q&A (15 Min)",
    },
    pledgeTitle: "Our Engineering Belief & Commitment",
    pledgeQuote:
      "We've been in your shoes. We started PB_IT_HUB to bridge the gap between college education and real industry engineering. We promise 100% honesty about your skills and actionable clarity on your next steps.",
  },

  // Form Fields, Placeholders & Validation
  form: {
    startProject: "Start a project",
    tellUsBuild: "Tell us what you want to build.",
    inquiryDescription:
      "Share the product idea, constraints, and goals. We'll follow up to explore scope, approach, and next steps.",
    requiredNote: "Fields marked with * are required.",
    enterDetails: "Enter Your Details to Proceed",
    orderSummary: "Order Summary",
    nameLabel: "Name *",
    nameLabelSimple: "Name",
    namePlaceholder: "Your full name",
    emailLabel: "Work Email *",
    emailLabelSimple: "Email",
    emailPlaceholder: "your.email@example.com",
    phoneLabel: "Phone",
    phoneLabelSimple: "Phone Number",
    phonePlaceholder: "+91 98765 43210",
    serviceLabel: "Service",
    projectDetailsLabel: "Project Details *",
    projectDetailsPlaceholder: "Tell us what you want to build...",
    messageLabel: "Message",
    messagePlaceholder: "Any notes, questions, or requirements…",
    customDemandLabel: "Write your project demands",
    customDemandPlaceholder:
      "Describe the project, tech stack, features, college requirements…",
    submit: "Submit",
    submitting: "Submitting…",
    sendProjectRequest: "Send Project Request",
    sending: "Sending...",
    close: "Close",
    closeSymbol: "Close ✕",
    downloadSourceCode: "Download Source Code",
    joinCommunity: "Join the PB_IT_HUB Student Community",
    downloadPendingNote:
      "When the backend is connected, a temporary download link will appear here after approval.",
  },

  // Common UI Actions & Controls
  actions: {
    viewDetails: "View Details",
    viewMore: "View More",
    viewProject: "View Project",
    viewLiveDemo: "Live Demo",
    learnMore: "Learn More",
    contactUs: "Contact Us",
    getInTouch: "Get in Touch",
    backToHome: "Back to Home",
    clearSelection: "Clear selection and close",
  },

  // FAQ Section & Page Copy
  faq: {
    eyebrow: "Knowledge Base & Help",
    title: "Frequently Asked Questions",
    description:
      "Answers on student projects, source code, viva help and custom software from Pathankot.",
    searchPlaceholder: "Search questions (e.g., source code, viva, BCA, refund)...",
    allCategory: "All Questions",
    stillQuestions: "Still have questions?",
    stillQuestionsSub:
      "Our engineering team is always ready to guide you on projects, architecture, or custom builds.",
    whatsappCTA: "Chat on WhatsApp",
    contactCTA: "Contact Us",
    categories: [
      { id: "student-projects", label: "Student Projects & Code" },
      { id: "mentorship-kt", label: "1-on-1 Sessions & Viva Prep" },
      { id: "custom-demands", label: "Custom Projects & Demands" },
      { id: "delivery-payment", label: "Delivery & Payment" },
      { id: "business-services", label: "Business & Engineering" },
    ],
    items: [
      {
        id: "q1",
        category: "student-projects",
        question: "What is included with a student project purchase?",
        answer:
          "Every student project includes the complete, production-ready source code (frontend, backend, database scripts), setup instructions/README, project architecture overview, and database schema files. Optional add-ons are available for SRS documentation, PPT presentation decks, and 1-to-1 viva explanation sessions.",
      },
      {
        id: "q2",
        category: "student-projects",
        question: "Are these projects suitable for BCA, MCA, B.Tech, BE, and Diploma students?",
        answer:
          "Yes, absolutely. Our project catalog is specifically designed to meet the academic guidelines and complexity requirements of BCA, MCA, B.Tech / BE CSE & IT, B.Sc / M.Sc Computer Science, and Polytechnic Diploma programs. Each project includes clean modular code and industry-standard documentation suitable for college submission.",
      },
      {
        id: "q3",
        category: "student-projects",
        question: "What technology stacks are the projects built with?",
        answer:
          "We offer projects built in modern industry stacks including React, Next.js, Flutter, Android (Kotlin/Java), iOS (Swift), Node.js, Python (FastAPI/Django/Flask), PHP, Laravel, Java (Spring Boot), and AI/ML (PyTorch/Scikit-learn/TensorFlow). All projects follow clean architecture and clean coding standards.",
      },
      {
        id: "q4",
        category: "student-projects",
        question: "Will the project run on my laptop / PC?",
        answer:
          "Yes. All projects are thoroughly tested on standard developer environments (Windows, macOS, and Linux). Every project comes with step-by-step setup documentation covering prerequisites, environment variables, dependencies installation, and database migration. We also offer live remote setup assistance if you run into configuration issues.",
      },
      {
        id: "q5",
        category: "mentorship-kt",
        question: "What is a 1-to-1 Knowledge Transfer (KT) and Viva Preparation session?",
        answer:
          "Our 1-to-1 session is a dedicated live video screen-share where an experienced senior software engineer walks you through the entire project codebase line-by-line. We explain the architecture, data flow, API endpoints, database relationships, and typical viva questions your college professors or external examiners might ask.",
      },
      {
        id: "q6",
        category: "mentorship-kt",
        question: "Can you help me answer tough technical questions during my external viva?",
        answer:
          "Yes. During the preparation session, we simulate realistic external viva exams, asking you likely theoretical and practical questions about your chosen stack (e.g., state management, database normalization, authentication flows, error handling) and giving you clear, confident answers to share with your evaluator.",
      },
      {
        id: "q7",
        category: "custom-demands",
        question: "Can I request a custom project based on my college problem statement or idea?",
        answer:
          "Yes! Through our 'Write Your Demands' feature or direct WhatsApp inquiry, you can submit your custom synopsis, problem statement, required tech stack, and submission deadline. Our engineering team will review the requirements and provide a tailored scope, timeline, and quote.",
      },
      {
        id: "q8",
        category: "custom-demands",
        question: "Can you modify an existing project to add custom features or modules?",
        answer:
          "Yes. If you like a project in our catalog but need extra features (such as an additional payment gateway, custom analytics dashboard, specific role-based access, or third-party API integration), our team can customize it to your exact specifications.",
      },
      {
        id: "q9",
        category: "delivery-payment",
        question: "How do I receive the project source code after ordering?",
        answer:
          "Once your request is confirmed and payment is verified, you receive immediate secure download access to the complete source code archive via email and WhatsApp, along with direct links to documentation and our developer support channel.",
      },
      {
        id: "q10",
        category: "delivery-payment",
        question: "What payment methods do you accept?",
        answer:
          "We accept UPI (Google Pay, PhonePe, Paytm), Net Banking, Credit/Debit Cards, and direct bank transfers. All transactions are securely processed with verified receipts.",
      },
      {
        id: "q11",
        category: "business-services",
        question: "Does PB_IT_HUB also build production software for businesses and startups?",
        answer:
          "Yes. PB_IT_HUB is a full-service technology engineering partner. We build custom web applications, SaaS platforms, cross-platform mobile apps (Flutter/React Native), internal business automation, and AI integrations for startups, SMBs, and enterprises across Punjab, Himachal, Jammu, and pan-India.",
      },
      {
        id: "q12",
        category: "business-services",
        question: "Where is PB_IT_HUB located, and how can we get in touch?",
        answer:
          "PB_IT_HUB is headquartered in Pathankot, Punjab, India. You can connect with our engineering team directly via WhatsApp (+91 97805 61684), email (pbithub0@gmail.com), or through the contact form on our website.",
      },
    ],
  },

  // Blog & Insights
  blog: {
    eyebrow: "Articles & Engineering Guides",
    title: "Guides for students and local businesses",
    description:
      "Final-year project ideas, viva tips, website cost guides and hosting help for Pathankot, Punjab and nearby colleges.",
    searchPlaceholder: "Search articles (e.g. BCA, viva, Python, React)...",
    allCategory: "All Articles",
    readArticle: "Read Article →",
    backToBlog: "Back to Blog",
    exploreProjectsCTA: "Explore Student Projects",
    customProjectCTA: "Custom Project Request",
    writtenBy: "Written by",
    publishedOn: "Published on",
    shareArticle: "Share this guide",
    sideMenuTitle: "All articles",
    viewAllArticles: "View all articles",
  },

  // Layout & Footer
  footer: {
    business: "Business",
    explore: "Explore",
    company: "Company",
    connect: "Connect",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    google: "Google Business",
    call: "Call",
  },
} as const;

export type AppStrings = typeof STRINGS;
