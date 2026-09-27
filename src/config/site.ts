export const siteConfig = {
  name: "PB_IT_HUB",
  /** Clean wordmark for UI (no underscores) */
  displayName: "PB IT HUB",
  legalName: "PB_IT_HUB",
  tagline: "BUILD • AUTOMATE • GROW",
  /** Default meta title (~50–60 chars) */
  seoTitle: "Websites & Student Projects | Pathankot",
  /** Default meta description (~150–160 chars) */
  seoDescription:
    "Custom websites, apps and final-year projects with source code. Based in Pathankot — serving Punjab, Jammu & Himachal.",
  description:
    "Custom websites, apps and student projects with source code. Pathankot-based technology partner for Punjab, Jammu & Himachal.",
  studentDescription:
    "Final-year and practical projects with source code, viva prep and career guidance for BCA, MCA and B.Tech students.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pbithub.com",
  locale: "en_US",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "pbithub0@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "919780561684",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919780561684",
  // Primary office
  location: process.env.NEXT_PUBLIC_BUSINESS_LOCATION ?? "Pathankot",
  region: process.env.NEXT_PUBLIC_BUSINESS_REGION ?? "Punjab, India",
  /** Google Maps — short link (open / directions) + embed iframe src */
  maps: {
    url:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ??
      "https://maps.app.goo.gl/DSFKkFHP2t9EpKiM8",
    embedSrc:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC ??
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249885.318783779!2d82.75252935!3d21.0680074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xcfb3dd748297f77%3A0x8c0f3a63af94a559!2sPB%20IT%20HUB!5e0!3m2!1sen!2sin!4v1790532622231!5m2!1sen!2sin",
  },
  /** Regions we serve (marketing + SEO) */
  areasServed: [
    "Pathankot",
    "Punjab",
    "Jammu",
    "Himachal",
    "India",
  ] as const,
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
    github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
      "https://www.instagram.com/pb_it_hub",
    google:
      process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL ??
      "https://share.google/ZRI33trqAi3AFsH9e",
  },
  inquiryEndpoint: process.env.NEXT_PUBLIC_INQUIRY_API_URL ?? "",
  studentLeadEndpoint: process.env.NEXT_PUBLIC_STUDENT_LEAD_API_URL ?? "",
  studentCommunity: {
    whatsapp: process.env.NEXT_PUBLIC_STUDENT_WHATSAPP_URL ?? "",
    telegram: process.env.NEXT_PUBLIC_STUDENT_TELEGRAM_URL ?? "",
    discord: process.env.NEXT_PUBLIC_STUDENT_DISCORD_URL ?? "",
  },
  media: {
    baseUrl: process.env.NEXT_PUBLIC_MEDIA_BASE_URL ?? "",
    cdnUrl: process.env.NEXT_PUBLIC_CDN_URL ?? "",
    fallback: "/images/pb-it-hub-dark.jpg",
  },
} as const;

export type SiteConfig = typeof siteConfig;
