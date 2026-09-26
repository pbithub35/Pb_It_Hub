export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, users and problem.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define product scope, architecture and experience.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create the user experience and visual system.",
  },
  {
    number: "04",
    title: "Build",
    description: "Engineer, test and iterate.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploy, monitor and continuously improve.",
  },
];
