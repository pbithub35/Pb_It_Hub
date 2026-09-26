export interface ServiceItem {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  /** SEO-focused description for metadata */
  seoDescription: string;
  visualKey: string;
  capabilities: string[];
  technologies: string[];
  cluster: "business";
}

export const services: ServiceItem[] = [
  {
    slug: "web-development",
    number: "01",
    title: "Custom Web Applications",
    shortTitle: "Web Applications",
    description:
      "Robust, scalable web products engineered around your workflows — from internal tools to customer-facing platforms.",
    seoDescription:
      "Custom website and web application development for businesses in Pathankot, Punjab, Jammu, Himachal and beyond — built for performance and real operations.",
    visualKey: "services/web",
    capabilities: [
      "Product architecture",
      "Responsive interfaces",
      "Admin systems",
      "Performance-focused delivery",
    ],
    technologies: ["React", "Next.js", "Laravel", "Node.js"],
    cluster: "business",
  },
  {
    slug: "saas-development",
    number: "02",
    title: "SaaS Platforms",
    shortTitle: "SaaS Platforms",
    description:
      "Multi-tenant product foundations with billing-ready structures, role systems, and growth-oriented architecture.",
    seoDescription:
      "SaaS platform development with multi-tenant architecture, roles, subscriptions and product systems ready to scale.",
    visualKey: "services/saas",
    capabilities: [
      "Multi-tenant design",
      "Subscription flows",
      "Role & permission systems",
      "Analytics-ready data models",
    ],
    technologies: ["Next.js", "NestJS", "Supabase", "AWS"],
    cluster: "business",
  },
  {
    slug: "mobile-app-development",
    number: "03",
    title: "Mobile Applications",
    shortTitle: "Mobile Applications",
    description:
      "Cross-platform mobile experiences built for clarity, speed, and real daily usage — not novelty demos.",
    seoDescription:
      "Mobile app development in Pathankot and Punjab using Flutter — API-connected Android and iOS products for businesses that need reliable daily-use apps.",
    visualKey: "services/mobile",
    capabilities: [
      "Flutter product development",
      "API-connected experiences",
      "Offline-aware patterns",
      "App store-ready delivery",
    ],
    technologies: ["Flutter", "Node.js", "Laravel", "Firebase"],
    cluster: "business",
  },
  {
    slug: "ai-solutions",
    number: "04",
    title: "AI & Automation",
    shortTitle: "AI & Automation",
    description:
      "Intelligent layers inside products — assistants, document intelligence, extraction, and workflow automation.",
    seoDescription:
      "AI solutions and workflow automation for businesses — assistants, document intelligence and practical automation inside real products.",
    visualKey: "services/ai",
    capabilities: [
      "Conversational assistants",
      "Document intelligence",
      "Workflow automation",
      "Search & extraction",
    ],
    technologies: ["OpenAI", "Gemini", "Python", "Node.js"],
    cluster: "business",
  },
  {
    slug: "crm-automation",
    number: "05",
    title: "CRM & Business Systems",
    shortTitle: "CRM & Business Systems",
    description:
      "Operational platforms that organize leads, customers, billing, and teams into one coherent system.",
    seoDescription:
      "Custom CRM and business systems for lead pipelines, customer records, billing and team workflows.",
    visualKey: "services/crm",
    capabilities: [
      "Lead pipelines",
      "Customer records",
      "Billing & invoicing",
      "Team workflows",
    ],
    technologies: ["Laravel", "React", "MySQL", "API integrations"],
    cluster: "business",
  },
  {
    slug: "custom-software",
    number: "06",
    title: "Custom Software",
    shortTitle: "Custom Software",
    description:
      "Purpose-built software for operations that off-the-shelf tools cannot cover — scoped, engineered and owned by your team.",
    seoDescription:
      "Custom software development services for businesses that need tailored systems, integrations and durable product foundations.",
    visualKey: "services/saas",
    capabilities: [
      "Discovery & system design",
      "Internal tools",
      "Integrations & APIs",
      "Long-term maintainability",
    ],
    technologies: ["Next.js", "Laravel", "Node.js", "PostgreSQL"],
    cluster: "business",
  },
  {
    slug: "ecommerce-development",
    number: "07",
    title: "E-commerce Development",
    shortTitle: "E-commerce",
    description:
      "Online stores and commerce platforms designed around catalog, checkout and post-purchase operations.",
    seoDescription:
      "E-commerce website development cost and build options for Indian retail brands — storefronts, catalogs and checkout flows engineered for real selling.",
    visualKey: "services/web",
    capabilities: [
      "Catalog & product pages",
      "Cart & checkout flows",
      "Order management",
      "Payment integrations",
    ],
    technologies: ["Next.js", "Shopify", "Laravel", "Stripe / Razorpay"],
    cluster: "business",
  },
  {
    slug: "shopify-development",
    number: "08",
    title: "Shopify Development",
    shortTitle: "Shopify",
    description:
      "Shopify storefronts customized for your brand, catalog structure and conversion goals.",
    seoDescription:
      "Shopify store development and customization for Punjab businesses — themes, product structure and conversion-focused pages.",
    visualKey: "services/web",
    capabilities: [
      "Store setup & theming",
      "Product & collection architecture",
      "Checkout optimization",
      "App & integration support",
    ],
    technologies: ["Shopify", "Liquid", "JavaScript", "Theme customization"],
    cluster: "business",
  },
  {
    slug: "website-maintenance-seo",
    number: "09",
    title: "Website Maintenance & SEO",
    shortTitle: "Maintenance & SEO",
    description:
      "Ongoing care for speed, security, content updates and practical search visibility.",
    seoDescription:
      "Website maintenance and SEO services price clarity — performance, security, content updates and practical search improvements for business sites.",
    visualKey: "services/crm",
    capabilities: [
      "Performance monitoring",
      "Security & updates",
      "Content & landing pages",
      "Technical SEO fundamentals",
    ],
    technologies: ["Next.js", "Analytics", "Search Console", "CDN"],
    cluster: "business",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
