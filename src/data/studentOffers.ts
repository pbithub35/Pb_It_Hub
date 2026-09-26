/**
 * Student offer configuration.
 * Prices stay internal — UI only shows discount labels / FREE.
 */
export const studentOffers = {
  sessions: {
    id: "sessions-4",
    name: "1-to-1 Sessions",
    badge: "10% OFF",
    tagline: "4 personal sessions with senior engineers",
    description: "Personal 1-on-1 screen-sharing sessions to guide you through coding, debugging, and feature additions.",
    whatWeProvide: [
      "4 dedicated 1-on-1 live video call sessions (1 hr each)",
      "Live screen-sharing guidance to debug and customize features",
      "Step-by-step local environment and database setup",
      "Direct chat support between sessions for all technical questions",
    ],
    discount: 10,
    free: false,
  },
  projectKT: {
    id: "project-kt",
    name: "Project KT (Knowledge Transfer)",
    badge: "5% OFF",
    tagline: "Live video call code & architecture walkthrough",
    description: "In-depth live walkthrough of the entire project so you understand every line of code.",
    whatWeProvide: [
      "Comprehensive live 1-on-1 video call session with an engineer",
      "Full walkthrough of the codebase, folder structure & logic flow",
      "Explanation of API integrations, database models & state management",
      "Interactive Q&A so you can explain the project confidently in any viva or interview",
    ],
    discount: 5,
    free: false,
  },
  practicalPreparation: {
    id: "practical-preparation",
    name: "Practical & Viva Preparation",
    badge: "5% OFF",
    tagline: "Mock viva, interview questions & presentation readiness",
    description: "Prepare to ace your project evaluation, viva, and technical interviews with confidence.",
    whatWeProvide: [
      "Curated bank of expected viva questions & model answers for this project",
      "Live mock viva simulation with feedback from technical mentors",
      "Architecture defense & technical decision rationale coaching",
      "Project report overview and presentation tips",
    ],
    discount: 5,
    free: false,
  },
  careerGuidance: {
    id: "career-guidance",
    name: "Career Guidance",
    badge: "FREE",
    tagline: "Honest 1-on-1 industry roadmap & market-tested guidance",
    description: "Connect directly with active tech professionals. We analyze current market demands, review your portfolio, and build a tailored career roadmap — 100% free.",
    whatWeProvide: [
      "1-on-1 dedicated video call with an active industry engineer",
      "Analysis of current 2026 hiring trends & in-demand stacks",
      "Live portfolio & resume critique to stand out to recruiters",
      "Step-by-step personalized learning & project roadmap",
      "100% Free forever with zero sales pressure or obligations",
    ],
    discount: 100,
    free: true,
  },
} as const;

export type StudentOfferKey = keyof typeof studentOffers;

/** Internal unit prices (INR) — never rendered in public UI. */
export const studentInternalPrices = {
  project: 2999,
  sessions: 1499 * 4,
  projectKT: 1999,
  practicalPreparation: 1499,
  package: 9999,
} as const;

export const completeProjectPackage = {
  id: "complete-project-package",
  name: "Complete Project Package",
  badge: "All-in-One",
  tagline: "Source code + KT + 1-to-1 Sessions + Practical Prep",
  description: "Get everything together instead of selecting each option separately.",
  whatWeProvide: [
    "Full production-ready source code with setup guide",
    "Complete live video call Knowledge Transfer (KT) session",
    "4 dedicated 1-on-1 personal mentoring sessions",
    "Comprehensive Practical & Viva interview preparation",
    "Priority scheduling with senior engineers",
    "Best value bundle with maximum discount",
  ],
  includes: [
    "selected-project",
    "sessions",
    "project-kt",
    "practical-preparation",
  ] as const,
  includeOfferIds: [
    "sessions-4",
    "project-kt",
    "practical-preparation",
  ] as const,
};
