export const siteConfig = {
  name: "PB_IT_HUB",
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
