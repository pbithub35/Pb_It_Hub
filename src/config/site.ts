export const siteConfig = {
  name: "PB IT HUB",
  /** Clean wordmark for UI (no underscores) */
  displayName: "PB IT HUB",
  legalName: "PB IT HUB",
  tagline: "BUILD • AUTOMATE • GROW",
  /** Default meta title (~50–60 chars) */
  seoTitle: "PB IT HUB | Pathankot, Jammu & Himachal",
  /** Default meta description (~150–160 chars) */
  seoDescription:
    "Websites, apps and AI for Pathankot, Jammu and Himachal. Final-year BCA, MCA & B.Tech projects with source code — Pathankot HQ, remote-ready across the region.",
  description:
    "Websites, apps and student projects with source code for Pathankot, Jammu and Himachal — Pathankot-based technology partner for North India.",
  studentDescription:
    "Final-year and practical projects with source code, viva prep and career guidance for BCA, MCA and B.Tech students.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pbithub.com",
  locale: "en_US",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "pbithub0@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "919780561684",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919780561684",
  // Primary office — city-level NAP (no invented street)
  location: process.env.NEXT_PUBLIC_BUSINESS_LOCATION ?? "Pathankot",
  region: process.env.NEXT_PUBLIC_BUSINESS_REGION ?? "Punjab, India",
  addressRegion: "Punjab",
  addressCountry: "IN",
  postalCode: process.env.NEXT_PUBLIC_BUSINESS_POSTAL_CODE ?? "145001",
  /** Pathankot city center — update when GBP pin is corrected */
  geo: {
    latitude: Number(process.env.NEXT_PUBLIC_BUSINESS_LAT ?? "32.2743"),
    longitude: Number(process.env.NEXT_PUBLIC_BUSINESS_LNG ?? "75.6521"),
  },
  priceRange: "₹₹",
  ogImage: "/images/og-default.jpg",
  /** Google Maps — Pathankot HQ (GBP listing coords were wrong; pin city center) */
  maps: {
    url:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ??
      "https://www.google.com/maps/place/Pathankot,+Punjab,+India/@32.2743,75.6521,14z",
    embedSrc:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC ??
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13618.5!2d75.6521!3d32.2743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c7f4e8c8c8c8d%3A0x0!2sPathankot%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sin!4v1727500000000!5m2!1sen!2sin",
  },
  /** Regions we serve (marketing + SEO) */
  areasServed: [
    "Pathankot",
    "Punjab",
    "Jammu",
    "Jammu & Kashmir",
    "Himachal",
    "Himachal Pradesh",
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
    fallback: "/images/og-default.jpg",
  },
} as const;

export type SiteConfig = typeof siteConfig;
