export interface CapabilityPillar {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: "web" | "mobile" | "saas" | "ai" | "crm" | "api";
}

export const capabilityPillars: CapabilityPillar[] = [
  {
    id: "web-platforms",
    number: "01",
    title: "Full-Stack Web Platforms",
    category: "Web Engineering",
    description:
      "High-performance web apps, responsive portals, and digital platforms engineered with Next.js, React, and robust API backends for speed and SEO.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    icon: "web",
  },
  {
    id: "mobile-apps",
    number: "02",
    title: "Cross-Platform Mobile Apps",
    category: "Mobile Solutions",
    description:
      "Native-feel iOS and Android applications built with Flutter, featuring real-time synchronization, fluid animations, and reliable offline capabilities.",
    tags: ["Flutter", "iOS & Android", "Dart", "Realtime Sync"],
    icon: "mobile",
  },
  {
    id: "saas-architecture",
    number: "03",
    title: "Scalable SaaS Architectures",
    category: "Product Systems",
    description:
      "Multi-tenant architectures, subscription billing, automated provisioning, and cloud infrastructure engineered to scale seamlessly as user bases grow.",
    tags: ["Multi-Tenant", "Stripe / Billing", "Microservices", "Supabase"],
    icon: "saas",
  },
  {
    id: "ai-intelligence",
    number: "04",
    title: "AI & Autonomous Workflows",
    category: "Intelligent Systems",
    description:
      "Custom LLM assistants, document intelligence, RAG search pipelines, and agentic task automation deeply embedded into business operations.",
    tags: ["OpenAI / Gemini", "RAG Pipelines", "AI Agents", "Automations"],
    icon: "ai",
  },
  {
    id: "custom-crm",
    number: "05",
    title: "Custom CRM & Internal Systems",
    category: "Enterprise Tools",
    description:
      "Bespoke operational dashboards, pipeline management, client tracking, and role-based portals designed around your exact business workflows.",
    tags: ["Role-Based Access", "Lead Pipelines", "Dashboards", "Data Analytics"],
    icon: "crm",
  },
  {
    id: "apis-cloud",
    number: "06",
    title: "High-Throughput APIs & Cloud",
    category: "Infrastructure",
    description:
      "Resilient REST and GraphQL APIs, webhook event buses, third-party payment integrations, and elastic cloud infrastructure hosted on AWS.",
    tags: ["REST / GraphQL", "AWS Cloud", "Webhooks", "CI/CD & DevOps"],
    icon: "api",
  },
];

export const tickerCapabilities = [
  "Web Platforms",
  "Mobile Apps",
  "SaaS Architecture",
  "Custom CRM",
  "Autonomous AI",
  "Cloud Systems",
  "API Integrations",
  "Workflow Automation",
  "UI/UX Systems",
  "Realtime Databases",
  "Full-Stack Engineering",
];
