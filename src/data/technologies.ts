export interface TechnologyGroup {
  id: string;
  label: string;
  items: string[];
  description: string;
  icon: "frontend" | "backend" | "mobile" | "database" | "cloud" | "ai";
  highlight: string;
}

export const technologyGroups: TechnologyGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS"],
    description:
      "Modern component-driven architectures delivering instant page loads, dynamic rendering, and fluid animations.",
    icon: "frontend",
    highlight: "Fast & Interactive",
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "NestJS", "Laravel", "PHP", "REST APIs"],
    description:
      "Enterprise microservices, serverless routes, and scalable API backends engineered with resilient security.",
    icon: "backend",
    highlight: "High Concurrency",
  },
  {
    id: "mobile",
    label: "Mobile",
    items: ["Flutter", "Dart", "iOS", "Android", "Cross-Platform"],
    description:
      "Native-speed cross-platform apps with shared logic, silky 60fps animations, and offline-first data sync.",
    icon: "mobile",
    highlight: "iOS & Android",
  },
  {
    id: "database",
    label: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Redis"],
    description:
      "ACID-compliant relational engines and vector databases optimized for instant indexing and zero data loss.",
    icon: "database",
    highlight: "Optimized Queries",
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    items: ["AWS", "Cloudflare", "Docker", "Vercel", "CI/CD Pipelines"],
    description:
      "Containerized cloud setups, automated deployments, edge networking, and zero-downtime rollouts.",
    icon: "cloud",
    highlight: "99.9% Uptime",
  },
  {
    id: "ai",
    label: "AI & Automation",
    items: ["Gemini", "OpenAI", "RAG Systems", "AI Agents", "Automations"],
    description:
      "Production-ready generative AI workflows, intelligent document parsers, and automated pipeline triggers.",
    icon: "ai",
    highlight: "Intelligent Systems",
  },
];
