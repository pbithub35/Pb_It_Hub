export interface WhyUsItem {
  number: string;
  title: string;
  description: string;
  pillar: string;
  highlight: string;
  points: string[];
  icon: "strategy" | "engineering" | "tech" | "collaboration" | "growth";
}

export const whyUsItems: WhyUsItem[] = [
  {
    number: "01",
    title: "Product Thinking",
    pillar: "Strategy First",
    highlight: "Business Alignment",
    description:
      "We look past surface-level checklists. We map out user journeys, operational bottlenecks, and business outcomes before writing a single line of code.",
    points: [
      "User-centric product discovery",
      "Measurable business ROI metrics",
      "Lean roadmapping & milestone delivery",
    ],
    icon: "strategy",
  },
  {
    number: "02",
    title: "Custom Engineering",
    pillar: "Craftsmanship",
    highlight: "Zero Cookie-Cutter",
    description:
      "No generic templates or bloated off-the-shelf codebases. Every architecture is purposefully sculpted to your product's specific performance requirements.",
    points: [
      "Tailor-made software architectures",
      "Strict clean code & maintainability",
      "Automated testing & type safety",
    ],
    icon: "engineering",
  },
  {
    number: "03",
    title: "Modern Technology",
    pillar: "Future-Proof",
    highlight: "Modern Ecosystem",
    description:
      "We leverage modern frameworks, elastic cloud services, and AI accelerators only where they bring real velocity and tangible advantages.",
    points: [
      "Next.js, Flutter & Supabase ecosystem",
      "High-efficiency AI integration",
      "Blazing sub-second response times",
    ],
    icon: "tech",
  },
  {
    number: "04",
    title: "Direct Collaboration",
    pillar: "Transparency",
    highlight: "No Middlemen",
    description:
      "You communicate directly with the engineers and architects building your product. Fast iterations, total transparency, and zero agency bureaucracy.",
    points: [
      "Direct engineer-to-client Slack/calls",
      "Weekly sprint demos & live previews",
      "Proactive feedback & agility",
    ],
    icon: "collaboration",
  },
  {
    number: "05",
    title: "Built for Growth",
    pillar: "Scalability",
    highlight: "Long-term Durability",
    description:
      "Systems architected to scale effortlessly from early traction to millions of operations without costly rewrites or infrastructure bottlenecks.",
    points: [
      "Elastic cloud & database clustering",
      "Modular micro-architecture design",
      "Robust data integrity & security",
    ],
    icon: "growth",
  },
];

export const capabilityWords = [
  "WEB",
  "MOBILE",
  "SAAS",
  "CRM",
  "AI",
  "AUTOMATION",
  "API",
  "CLOUD",
  "UI/UX",
] as const;

export const aiCapabilities = [
  "AI Assistants",
  "Conversational AI",
  "Document Intelligence",
  "Workflow Automation",
  "AI-powered Search",
  "Data Extraction",
] as const;
