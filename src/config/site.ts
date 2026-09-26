export const siteConfig = {
  name: "PB_IT_HUB",
  legalName: "PB_IT_HUB",
  tagline: "BUILD • AUTOMATE • GROW",
  description:
    "Technology partner for businesses that want to build, automate and grow. We design and develop modern web applications, SaaS platforms, mobile apps, CRM systems, AI solutions and automation for businesses in Pathankot, Punjab, Jammu, Himachal and beyond.",
  studentDescription:
    "We help students learn technology by building real projects — practical projects, coding resources, 1-to-1 guidance and career preparation.",
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
