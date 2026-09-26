import type { ServiceItem } from "@/data/services";

/**
 * Business SEO intent map — links search intent to real service routes.
 * Use for internal linking and page metadata. Do not keyword-stuff UI copy.
 */
export interface BusinessSeoIntent {
  id: string;
  intent: string;
  primaryServiceSlug: string;
  relatedServiceSlugs: string[];
  metaTitleHint: string;
  metaDescriptionHint: string;
}

export const businessSeoIntents: BusinessSeoIntent[] = [
  {
    id: "web-mohali-chandigarh",
    intent: "Website development company in Mohali / Chandigarh",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["ecommerce-development", "website-maintenance-seo"],
    metaTitleHint: "Website Development in Mohali & Chandigarh",
    metaDescriptionHint:
      "Custom websites and web applications for businesses in Mohali, Chandigarh and Punjab — designed for clarity, performance and growth.",
  },
  {
    id: "web-punjab-local",
    intent: "Affordable web designer near me in Punjab",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["ecommerce-development", "shopify-development"],
    metaTitleHint: "Web Design & Development in Punjab",
    metaDescriptionHint:
      "Product-focused web design and development for Punjab businesses that need a professional digital presence without agency theater.",
  },
  {
    id: "ecommerce-cost-india",
    intent: "E-commerce website development cost in India",
    primaryServiceSlug: "ecommerce-development",
    relatedServiceSlugs: ["shopify-development", "web-development"],
    metaTitleHint: "E-commerce Website Development",
    metaDescriptionHint:
      "E-commerce websites and storefronts engineered for catalogs, checkout flows and business operations — scoped clearly before build.",
  },
  {
    id: "custom-website-cost-punjab",
    intent: "How much does a custom website cost in Punjab?",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["custom-software", "website-maintenance-seo"],
    metaTitleHint: "Custom Website Development",
    metaDescriptionHint:
      "Custom website and web product development with transparent scoping — built around real workflows for businesses in Punjab and beyond.",
  },
  {
    id: "mobile-punjab",
    intent: "Mobile app development company in Punjab",
    primaryServiceSlug: "mobile-app-development",
    relatedServiceSlugs: ["saas-development", "custom-software"],
    metaTitleHint: "Mobile App Development in Punjab",
    metaDescriptionHint:
      "Cross-platform mobile applications for businesses in Punjab — Flutter products connected to real APIs and operations.",
  },
  {
    id: "web-ludhiana-jalandhar",
    intent: "Web design agency in Ludhiana / Jalandhar",
    primaryServiceSlug: "web-development",
    relatedServiceSlugs: ["ecommerce-development", "crm-automation"],
    metaTitleHint: "Web Design for Ludhiana & Jalandhar Businesses",
    metaDescriptionHint:
      "Modern web design and development for businesses across Ludhiana, Jalandhar and Punjab — focused on usable products, not templates.",
  },
  {
    id: "shopify-punjab",
    intent: "Shopify store developer in Punjab",
    primaryServiceSlug: "shopify-development",
    relatedServiceSlugs: ["ecommerce-development", "website-maintenance-seo"],
    metaTitleHint: "Shopify Store Development",
    metaDescriptionHint:
      "Shopify store setup and customization for Punjab businesses — storefronts, catalogs and conversion-focused product pages.",
  },
  {
    id: "custom-software-business",
    intent: "Custom software development services for business",
    primaryServiceSlug: "custom-software",
    relatedServiceSlugs: ["saas-development", "crm-automation", "ai-solutions"],
    metaTitleHint: "Custom Software Development",
    metaDescriptionHint:
      "Custom software, internal tools and business systems engineered around your operations — from discovery to durable delivery.",
  },
  {
    id: "maintenance-seo-price",
    intent: "Website maintenance and SEO services price",
    primaryServiceSlug: "website-maintenance-seo",
    relatedServiceSlugs: ["web-development", "ecommerce-development"],
    metaTitleHint: "Website Maintenance & SEO",
    metaDescriptionHint:
      "Ongoing website maintenance, performance care and practical SEO support so your digital product stays fast, secure and discoverable.",
  },
];

export function getIntentsForService(slug: string) {
  return businessSeoIntents.filter(
    (intent) =>
      intent.primaryServiceSlug === slug ||
      intent.relatedServiceSlugs.includes(slug),
  );
}

export function relatedServicesFor(
  slug: string,
  all: ServiceItem[],
  limit = 3,
): ServiceItem[] {
  const intent = businessSeoIntents.find((i) => i.primaryServiceSlug === slug);
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
