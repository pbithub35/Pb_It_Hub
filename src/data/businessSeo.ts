import type { ServiceItem } from "@/data/services";

/**
 * SEO intent map — strong local + student search intents.
 * Pathankot-first; Punjab / Jammu / Himachal; college cities.
 * Use for internal linking and page metadata. Do not keyword-stuff UI copy.
 *
 * Skipped (wrong fit): full “readymade free major project” bait,
 * “training institute”, “freelance near me”, “live course in Mohali”.
 * Lab practical starters (BCA/MCA etc.) are intentional free lead magnets.
 */
export interface BusinessSeoIntent {
  id: string;
  intent: string;
  primaryServiceSlug: string;
  relatedServiceSlugs: string[];
  metaTitleHint: string;
  metaDescriptionHint: string;
  /** Optional public content URL for editorial / student intents */
  contentPath?: string;
}

export const businessSeoIntents: BusinessSeoIntent[] = [
  // —— Business / local ——
  {
    id: "web-pathankot-jammu-himachal",
    intent: "Website development company in Pathankot / Jammu / Himachal",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["ecommerce-development", "website-maintenance-seo"],
    metaTitleHint: "Website Development in Pathankot, Jammu & Himachal",
    metaDescriptionHint:
      "Reliable regional IT partner based in Pathankot — custom websites and web apps for businesses across Punjab, Jammu and Himachal.",
    contentPath: "/locations/pathankot",
  },
  {
    id: "web-punjab-affordable",
    intent: "Affordable web designer near me in Punjab",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["ecommerce-development", "shopify-development"],
    metaTitleHint: "Affordable Web Design in Punjab",
    metaDescriptionHint:
      "Budget-friendly, product-focused websites for Punjab shops, small businesses and startups — scoped clearly before build.",
  },
  {
    id: "ecommerce-cost-india",
    intent: "E-commerce website development cost in India",
    primaryServiceSlug: "ecommerce-development",
    relatedServiceSlugs: ["shopify-development", "web-development"],
    metaTitleHint: "E-commerce Website Development Cost in India",
    metaDescriptionHint:
      "What affects e-commerce build cost in India — catalog size, checkout, payments and Shopify vs custom — scoped before you hire.",
    contentPath: "/blog/ecommerce-website-development-cost-india",
  },
  {
    id: "custom-website-cost-punjab",
    intent: "How much does a custom website cost in Punjab?",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["custom-software", "website-maintenance-seo"],
    metaTitleHint: "Custom Website Cost in Punjab",
    metaDescriptionHint:
      "What drives custom website pricing in Punjab — static vs dynamic, pages, integrations — so you can compare freelancers and agencies fairly.",
    contentPath: "/blog/custom-website-cost-in-punjab",
  },
  {
    id: "mobile-punjab",
    intent: "IT company for mobile app development in Punjab",
    primaryServiceSlug: "mobile-app-development",
    relatedServiceSlugs: ["saas-development", "custom-software", "web-development"],
    metaTitleHint: "Mobile App Development in Punjab",
    metaDescriptionHint:
      "Custom Android and iOS apps for Punjab businesses — Flutter products connected to real APIs, alongside web when you need both.",
  },
  {
    id: "web-ludhiana-jalandhar",
    intent: "Web design agency in Ludhiana / Jalandhar",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["ecommerce-development", "crm-automation"],
    metaTitleHint: "Web Design for Ludhiana & Jalandhar Businesses",
    metaDescriptionHint:
      "Websites for industrial, manufacturing and trade businesses in Ludhiana and Jalandhar — usable products, not template theater.",
    contentPath: "/locations/ludhiana",
  },
  {
    id: "shopify-punjab",
    intent: "Shopify store developer in Punjab",
    primaryServiceSlug: "shopify-development",
    relatedServiceSlugs: ["ecommerce-development", "website-maintenance-seo"],
    metaTitleHint: "Shopify Store Development in Punjab",
    metaDescriptionHint:
      "Shopify stores for Punjab apparel, clothing and handmade brands — catalog structure, themes and conversion-focused product pages.",
  },
  {
    id: "custom-software-business",
    intent: "Custom software development services for business",
    primaryServiceSlug: "custom-software",
    relatedServiceSlugs: ["saas-development", "crm-automation", "ai-solutions"],
    metaTitleHint: "Custom Software Development for Business",
    metaDescriptionHint:
      "Tailored CRM, billing and operations software when off-the-shelf tools do not fit — discovery through durable delivery.",
  },
  {
    id: "maintenance-seo-price",
    intent: "Website maintenance and SEO services price",
    primaryServiceSlug: "website-maintenance-seo",
    relatedServiceSlugs: ["web-development", "ecommerce-development"],
    metaTitleHint: "Website Maintenance & SEO Pricing",
    metaDescriptionHint:
      "Ongoing updates, speed fixes and practical SEO for existing business websites — clear scope, Pathankot-based support.",
  },
  {
    id: "web-chandigarh-mohali",
    intent: "Website development for Chandigarh / Mohali businesses",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["ecommerce-development", "website-maintenance-seo"],
    metaTitleHint: "Website Development for Chandigarh & Mohali",
    metaDescriptionHint:
      "Custom websites and web apps for Tri-city businesses — engineered from Pathankot for clarity, performance and growth.",
    contentPath: "/locations/chandigarh",
  },
  {
    id: "web-amritsar-patiala",
    intent: "Website company for Amritsar / Patiala businesses",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["ecommerce-development", "shopify-development"],
    metaTitleHint: "Website Development for Amritsar & Patiala",
    metaDescriptionHint:
      "Custom websites and storefronts for Amritsar and Patiala businesses — scoped clearly before build.",
    contentPath: "/locations/amritsar",
  },

  // —— Students (strong Gemini intents; no “free download” bait) ——
  {
    id: "student-cse-source-code",
    intent: "Final year project for CSE students with source code",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["mobile-app-development", "custom-software"],
    metaTitleHint: "Final Year CSE Projects with Source Code",
    metaDescriptionHint:
      "Industry-grade final year projects for CSE / B.Tech students — complete source code, documentation and optional viva guidance.",
    contentPath: "/learn-and-build/projects",
  },
  {
    id: "student-python-java-projects",
    intent: "Minor and major software projects in Python / Java",
    primaryServiceSlug: "custom-software",
    relatedServiceSlugs: ["ai-solutions", "web-development"],
    metaTitleHint: "Python & Java College Project Ideas",
    metaDescriptionHint:
      "Minor and major project directions in Python and Java for BCA, MCA and engineering students — ideas you can actually finish and explain.",
    contentPath: "/blog/python-ai-ml-project-ideas-students",
  },
  {
    id: "student-mern-github",
    intent: "MERN stack final year project ideas with GitHub",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["saas-development", "custom-software"],
    metaTitleHint: "MERN Stack Final Year Project Ideas",
    metaDescriptionHint:
      "Modern full-stack (MongoDB, Express, React, Node) project ideas for college submission and stronger resumes.",
    contentPath: "/blog/mern-stack-final-year-project-ideas",
  },
  {
    id: "student-php-mysql",
    intent: "PHP MySQL website project for college submission",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["crm-automation", "custom-software"],
    metaTitleHint: "PHP MySQL College Website Projects",
    metaDescriptionHint:
      "Classic PHP + MySQL management-system style projects suited for college submission and viva explanation.",
    contentPath: "/learn-and-build/resources/php-final-year-project-ideas",
  },
  {
    id: "student-android-beginners",
    intent: "Simple Android app project ideas for beginners",
    primaryServiceSlug: "mobile-app-development",
    relatedServiceSlugs: ["web-development", "custom-software"],
    metaTitleHint: "Simple Android App Project Ideas for Beginners",
    metaDescriptionHint:
      "Straightforward mobile project topics for practical exams — clear scope, demo-friendly, viva-ready.",
    contentPath: "/learn-and-build/resources/flutter-project-ideas",
  },
  {
    id: "student-host-free",
    intent: "How to host a website on GitHub Pages / Vercel for free",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["website-maintenance-seo"],
    metaTitleHint: "Host a Website Free on GitHub Pages or Vercel",
    metaDescriptionHint:
      "Deploy student portfolios and static sites for free — GitHub Pages and Vercel basics with practical tips.",
    contentPath: "/blog/host-website-github-pages-vercel-free",
  },
  {
    id: "student-ai-engineering",
    intent: "AI based software project ideas for engineering students",
    primaryServiceSlug: "ai-solutions",
    relatedServiceSlugs: ["custom-software", "web-development"],
    metaTitleHint: "AI Project Ideas for Engineering Students",
    metaDescriptionHint:
      "Trending AI / ML / chatbot / automation project directions for engineering final-year work — scoped for completion.",
    contentPath: "/blog/python-ai-ml-project-ideas-students",
  },
  {
    id: "student-free-bca-practical",
    intent: "Free source code for BCA project / practical",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["custom-software"],
    metaTitleHint: "Free Source Code for BCA Practical",
    metaDescriptionHint:
      "Free PHP MySQL starter for BCA lab practicals and mini projects — copy, run on XAMPP, explain in viva.",
    contentPath: "/learn-and-build/resources/free-source-code-bca-practical",
  },
  {
    id: "student-free-mca-practical",
    intent: "Free source code for MCA project / practical",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["saas-development", "custom-software"],
    metaTitleHint: "Free Source Code for MCA Practical",
    metaDescriptionHint:
      "Free Node Express REST API starter for MCA practicals — demo with Postman, then upgrade to full MERN packages.",
    contentPath: "/learn-and-build/resources/free-source-code-mca-practical",
  },
  {
    id: "student-free-btech-practical",
    intent: "Free source code for B.Tech CSE project / practical",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["mobile-app-development"],
    metaTitleHint: "Free Source Code for B.Tech CSE Practical",
    metaDescriptionHint:
      "Free React task-board starter for B.Tech CSE lab practicals and demos.",
    contentPath: "/learn-and-build/resources/free-source-code-btech-cse-practical",
  },
  {
    id: "student-projects-pathankot",
    intent: "Final year projects for BCA MCA B.Tech in Pathankot",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["mobile-app-development", "custom-software"],
    metaTitleHint: "Final Year Projects in Pathankot",
    metaDescriptionHint:
      "College projects with source code and mentorship for BCA, MCA and B.Tech students in Pathankot and nearby campuses.",
    contentPath: "/locations/pathankot",
  },
  {
    id: "student-projects-college-cities",
    intent: "College project source code Chandigarh Ludhiana Jammu Shimla",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["mobile-app-development", "saas-development"],
    metaTitleHint: "College Projects for Punjab, Jammu & Himachal Students",
    metaDescriptionHint:
      "Final year and minor projects with source code for students across Chandigarh, Mohali, Ludhiana, Jalandhar, Jammu and Shimla.",
    contentPath: "/locations",
  },
];

export function getIntentsForService(slug: string) {
  return businessSeoIntents.filter(
    (intent) =>
      intent.primaryServiceSlug === slug ||
      intent.relatedServiceSlugs.includes(slug),
  );
}

/** Prefer business (non-student) intents when picking related services. */
export function relatedServicesFor(
  slug: string,
  all: ServiceItem[],
  limit = 3,
): ServiceItem[] {
  const intent =
    businessSeoIntents.find(
      (i) =>
        i.primaryServiceSlug === slug && !i.id.startsWith("student-"),
    ) ?? businessSeoIntents.find((i) => i.primaryServiceSlug === slug);

  const relatedSlugs = intent?.relatedServiceSlugs ?? [];
  const related = relatedSlugs
    .map((s) => all.find((service) => service.slug === s))
    .filter(Boolean) as ServiceItem[];

  if (related.length >= limit) return related.slice(0, limit);

  const fillers = all.filter(
    (service) =>
      service.slug !== slug && !related.some((r) => r.slug === service.slug),
  );
  return [...related, ...fillers].slice(0, limit);
}
