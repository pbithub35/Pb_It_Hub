export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  /** Short label for circular diagram */
  shortTitle?: string;
  accent?: string;
  icon?:
    | "idea"
    | "research"
    | "plan"
    | "design"
    | "test"
    | "launch"
    | "growth";
}

/** Full product development journey — idea to impact */
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Idea Generation",
    shortTitle: "Idea",
    description:
      "Capture the product vision, goals and constraints with the stakeholders who will use it.",
    accent: "#3b82f6",
    icon: "idea",
  },
  {
    number: "02",
    title: "Market Research",
    shortTitle: "Research",
    description:
      "Validate users, competitors and workflows so we build the right problem — not a guess.",
    accent: "#22d3ee",
    icon: "research",
  },
  {
    number: "03",
    title: "Planning & Strategy",
    shortTitle: "Plan",
    description:
      "Define scope, architecture, milestones and delivery plan with clear ownership.",
    accent: "#14b8a6",
    icon: "plan",
  },
  {
    number: "04",
    title: "Design & Development",
    shortTitle: "Build",
    description:
      "Shape experience and engineer the product in focused iterations with working demos.",
    accent: "#eab308",
    icon: "design",
  },
  {
    number: "05",
    title: "Testing & Validation",
    shortTitle: "Test",
    description:
      "Prove quality through reviews, QA and real-user checks before anything ships.",
    accent: "#f97316",
    icon: "test",
  },
  {
    number: "06",
    title: "Launch & Deployment",
    shortTitle: "Launch",
    description:
      "Deploy safely, monitor production and support the first days of live usage.",
    accent: "#a855f7",
    icon: "launch",
  },
  {
    number: "07",
    title: "Growth & Improvement",
    shortTitle: "Grow",
    description:
      "Measure outcomes, learn from usage and continuously improve the product.",
    accent: "#6366f1",
    icon: "growth",
  },
];
