/**
 * City / region landing pages for local SEO.
 * Pathankot HQ first; then Punjab, Jammu & Himachal college / business cities.
 * Keep copy unique per city — do not keyword-stuff UI.
 */

export type LocationRegion = "punjab" | "jammu" | "himachal";

export interface LocationFaq {
  question: string;
  answer: string;
}

export interface LocationItem {
  slug: string;
  name: string;
  region: LocationRegion;
  regionLabel: string;
  /** HQ / primary office city */
  isHq?: boolean;
  /** Short label for index lists */
  blurb: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  headline: string;
  intro: string;
  businessFocus: string;
  studentFocus: string;
  nearbySlugs: string[];
  faqs: LocationFaq[];
}

export const locations: LocationItem[] = [
  {
    slug: "pathankot",
    name: "Pathankot",
    region: "punjab",
    regionLabel: "Punjab",
    isHq: true,
    blurb: "Our home base — websites, apps and college projects for local businesses and students.",
    metaTitle: "Websites & Projects in Pathankot",
    metaDescription:
      "Websites, apps and BCA/MCA projects with source code. Pathankot HQ serving Punjab, Jammu and Himachal.",
    keywords: [
      "website development Pathankot",
      "software company Pathankot",
      "final year projects Pathankot",
      "BCA projects Pathankot",
      "PB_IT_HUB Pathankot",
    ],
    headline: "Technology partner based in Pathankot",
    intro:
      "PB_IT_HUB is headquartered in Pathankot, Punjab. We build websites, web apps, mobile products and custom software for local businesses — and industry-grade college projects with full source code for students in Pathankot and nearby campuses.",
    businessFocus:
      "From shop websites and WhatsApp-led booking sites to CRM and automation, we scope clearly and deliver products Pathankot businesses can run day to day.",
    studentFocus:
      "Final-year and minor projects for BCA, MCA, B.Tech and CS/IT — complete source code, viva prep and optional 1-to-1 guidance, ordered on WhatsApp.",
    nearbySlugs: ["jammu", "kathua", "jalandhar", "chandigarh"],
    faqs: [
      {
        question: "Is PB_IT_HUB actually based in Pathankot?",
        answer:
          "Yes. Our primary office is in Pathankot, Punjab. We work with clients and students across Punjab, Jammu, Himachal and pan-India via WhatsApp and remote delivery.",
      },
      {
        question: "Can Pathankot college students buy a project with source code?",
        answer:
          "Yes. Browse Learn or Buy, pick a project, and order on WhatsApp. Packages include source code; guidance and viva support are optional add-ons.",
      },
    ],
  },
  {
    slug: "chandigarh",
    name: "Chandigarh",
    region: "punjab",
    regionLabel: "Punjab / Tri-city",
    blurb: "Websites, SaaS and college projects for Tri-city businesses and students.",
    metaTitle: "Websites & College Projects Chandigarh",
    metaDescription:
      "Websites, apps and final-year projects for Chandigarh — Pathankot team, WhatsApp support.",
    keywords: [
      "website development Chandigarh",
      "final year projects Chandigarh",
      "BCA MCA projects Chandigarh",
      "web design Chandigarh",
    ],
    headline: "Websites, apps & college projects for Chandigarh",
    intro:
      "Chandigarh is a major student and startup city. PB_IT_HUB builds business websites and software for Tri-city teams, plus final-year projects with source code for BCA, MCA and B.Tech students across Chandigarh campuses.",
    businessFocus:
      "Product-focused web apps, e-commerce and internal tools for Chandigarh startups and SMBs — scoped before build, no agency theater.",
    studentFocus:
      "Industry-style projects with documentation and viva prep for Chandigarh college requirements, ordered and supported on WhatsApp.",
    nearbySlugs: ["mohali", "pathankot", "ludhiana", "shimla"],
    faqs: [
      {
        question: "Do you work with Chandigarh clients remotely?",
        answer:
          "Yes. Discovery and delivery run online with WhatsApp updates. You get the same engineering process we use for Pathankot clients.",
      },
      {
        question: "Are your projects suitable for Chandigarh university guidelines?",
        answer:
          "Our catalog targets BCA, MCA, B.Tech and CS/IT complexity levels. If your college has a specific problem statement, request a custom build.",
      },
    ],
  },
  {
    slug: "mohali",
    name: "Mohali",
    region: "punjab",
    regionLabel: "Punjab / Tri-city",
    blurb: "Software, websites and student projects for Mohali’s tech and college belt.",
    metaTitle: "Websites & Apps for Mohali",
    metaDescription:
      "Websites, apps and student projects for Mohali — clear scope from Pathankot.",
    keywords: [
      "website company Mohali",
      "app development Mohali",
      "final year projects Mohali",
      "B.Tech projects Mohali",
    ],
    headline: "Build for Mohali businesses and students",
    intro:
      "Mohali’s IT and college ecosystem needs practical digital products. We design websites, apps and custom software for local companies, and supply college projects with full source code for Mohali students.",
    businessFocus:
      "Web, SaaS and Flutter apps connected to real operations — for Mohali teams that want clarity on scope and timeline.",
    studentFocus:
      "Source-code packages and optional mentorship for Mohali BCA, MCA and engineering students preparing viva and submissions.",
    nearbySlugs: ["chandigarh", "pathankot", "ludhiana", "shimla"],
    faqs: [
      {
        question: "Can Mohali startups hire you for a custom product?",
        answer:
          "Yes. Share a short brief on Contact or WhatsApp and we will outline approach, stack and next steps before any build starts.",
      },
    ],
  },
  {
    slug: "ludhiana",
    name: "Ludhiana",
    region: "punjab",
    regionLabel: "Punjab",
    blurb: "E-commerce, business sites and college projects for Ludhiana.",
    metaTitle: "Web Design & Projects in Ludhiana",
    metaDescription:
      "Websites, Shopify and college projects for Ludhiana businesses and students.",
    keywords: [
      "web design Ludhiana",
      "website development Ludhiana",
      "final year projects Ludhiana",
      "Shopify Ludhiana",
    ],
    headline: "Digital products for Ludhiana businesses & students",
    intro:
      "Ludhiana’s industry and colleges need practical tech — not template agencies. PB_IT_HUB builds storefronts, business websites and student projects with source code for Ludhiana clients and campuses.",
    businessFocus:
      "E-commerce, Shopify and custom sites for Ludhiana brands that need catalogs, inquiries and conversion-focused pages.",
    studentFocus:
      "Final-year stacks (web, Flutter, full-stack) with viva-ready structure for Ludhiana BCA, MCA and B.Tech programs.",
    nearbySlugs: ["jalandhar", "chandigarh", "patiala", "pathankot"],
    faqs: [
      {
        question: "Do you build Shopify or e-commerce for Ludhiana shops?",
        answer:
          "Yes. We set up and customize storefronts around your catalog and operations, then hand over a site you can run day to day.",
      },
    ],
  },
  {
    slug: "jalandhar",
    name: "Jalandhar",
    region: "punjab",
    regionLabel: "Punjab",
    blurb: "Websites, apps and final-year projects for Jalandhar.",
    metaTitle: "Websites & Projects in Jalandhar",
    metaDescription:
      "Websites, apps and college project source code for Jalandhar — from Pathankot.",
    keywords: [
      "website development Jalandhar",
      "final year projects Jalandhar",
      "BCA projects Jalandhar",
      "software Jalandhar",
    ],
    headline: "Websites & college projects for Jalandhar",
    intro:
      "Jalandhar is a strong college and business hub. We help local companies ship usable digital products, and help students submit industry-grade projects with documentation and viva support.",
    businessFocus:
      "Business websites, CRM-style tools and mobile apps for Jalandhar SMBs that want a clear build plan.",
    studentFocus:
      "Browse the project catalog, pick a stack, and order source code on WhatsApp — built for Jalandhar college submission norms.",
    nearbySlugs: ["ludhiana", "amritsar", "pathankot", "jammu"],
    faqs: [
      {
        question: "How fast can a Jalandhar student get a project?",
        answer:
          "Standard catalog projects are ready to order on WhatsApp. Custom college problem statements take a short scoping chat first.",
      },
    ],
  },
  {
    slug: "amritsar",
    name: "Amritsar",
    region: "punjab",
    regionLabel: "Punjab",
    blurb: "Local business websites and student projects for Amritsar.",
    metaTitle: "Websites & Projects in Amritsar",
    metaDescription:
      "Websites and final-year projects for Amritsar businesses and students.",
    keywords: [
      "website Amritsar",
      "web design Amritsar",
      "final year projects Amritsar",
      "college projects Amritsar",
    ],
    headline: "Build online for Amritsar — business or college",
    intro:
      "Whether you run a shop in Amritsar or need a final-year submission, PB_IT_HUB delivers websites, apps and student project packages with transparent WhatsApp support.",
    businessFocus:
      "Tourism, retail and service businesses get clear websites with inquiry or booking paths that fit how Amritsar customers actually reach you.",
    studentFocus:
      "BCA, MCA and B.Tech project packs with source code and optional 1-to-1 walkthroughs for Amritsar campuses.",
    nearbySlugs: ["jalandhar", "pathankot", "ludhiana", "jammu"],
    faqs: [
      {
        question: "Can you build a booking or inquiry site for an Amritsar business?",
        answer:
          "Yes. We regularly ship local service sites with WhatsApp and form-led leads — scoped to your services and budget.",
      },
    ],
  },
  {
    slug: "patiala",
    name: "Patiala",
    region: "punjab",
    regionLabel: "Punjab",
    blurb: "College-city projects and business websites for Patiala.",
    metaTitle: "College Projects & Web in Patiala",
    metaDescription:
      "College projects with source code and websites for Patiala — WhatsApp delivery.",
    keywords: [
      "final year projects Patiala",
      "BCA projects Patiala",
      "website development Patiala",
      "college projects Patiala",
    ],
    headline: "Patiala students & businesses — build with clarity",
    intro:
      "Patiala’s colleges drive strong demand for serious final-year work. We provide source-code projects and mentorship, plus websites and software for Patiala businesses.",
    businessFocus:
      "Professional web presence and light automation for Patiala SMBs that want durable products, not one-off templates.",
    studentFocus:
      "Projects aligned to BCA, MCA and engineering viva expectations — choose from the catalog or request a custom college brief.",
    nearbySlugs: ["chandigarh", "ludhiana", "mohali", "pathankot"],
    faqs: [
      {
        question: "Do you offer viva preparation for Patiala students?",
        answer:
          "Optional 1-to-1 sessions walk through architecture, data flow and typical examiner questions. Add them when you order on WhatsApp.",
      },
    ],
  },
  {
    slug: "jammu",
    name: "Jammu",
    region: "jammu",
    regionLabel: "Jammu & Kashmir",
    blurb: "Websites, apps and student projects for Jammu and nearby towns.",
    metaTitle: "Websites & Projects in Jammu",
    metaDescription:
      "Websites, software and college projects for Jammu — remote-friendly from Pathankot.",
    keywords: [
      "website development Jammu",
      "final year projects Jammu",
      "software company Jammu",
      "BCA projects Jammu",
    ],
    headline: "Serving Jammu businesses and college students",
    intro:
      "From Pathankot we work closely with Jammu clients and students — websites and custom software for local businesses, plus college projects with full source code.",
    businessFocus:
      "Business sites, apps and automation for Jammu teams that need reliable remote collaboration and clear deliverables.",
    studentFocus:
      "Final-year and minor projects for Jammu university and college students — catalog or custom problem statements.",
    nearbySlugs: ["pathankot", "kathua", "jalandhar", "amritsar"],
    faqs: [
      {
        question: "How do Jammu clients work with a Pathankot team?",
        answer:
          "Briefs, demos and handovers happen on WhatsApp and video calls. Location does not change scope quality or ownership of the code we deliver.",
      },
    ],
  },
  {
    slug: "kathua",
    name: "Kathua",
    region: "jammu",
    regionLabel: "Jammu & Kashmir",
    blurb: "Nearby to Pathankot — local websites and student project support.",
    metaTitle: "Websites & Projects in Kathua",
    metaDescription:
      "Websites and college project source code for Kathua — near Pathankot.",
    keywords: [
      "website Kathua",
      "final year projects Kathua",
      "college projects Kathua",
    ],
    headline: "Digital help for Kathua — close to Pathankot",
    intro:
      "Kathua sits near our Pathankot base. Local businesses get practical websites and tools; students get college projects with source code and optional guidance.",
    businessFocus:
      "Straightforward business websites and inquiry flows tailored to Kathua shops and services.",
    studentFocus:
      "Affordable project packages for Kathua college students who need clean code and viva readiness.",
    nearbySlugs: ["pathankot", "jammu", "jalandhar"],
    faqs: [
      {
        question: "Can we meet or chat easily from Kathua?",
        answer:
          "WhatsApp is the fastest path. Share your need and we will confirm scope, pricing range and next steps.",
      },
    ],
  },
  {
    slug: "shimla",
    name: "Shimla",
    region: "himachal",
    regionLabel: "Himachal Pradesh",
    blurb: "Websites and college projects for Shimla businesses and students.",
    metaTitle: "Websites & Projects in Shimla",
    metaDescription:
      "Websites and college projects for Shimla — Himachal support from Pathankot.",
    keywords: [
      "website development Shimla",
      "final year projects Shimla",
      "college projects Himachal",
      "web design Shimla",
    ],
    headline: "Build for Shimla — business sites & student projects",
    intro:
      "Shimla’s hospitality, services and colleges need dependable digital products. We deliver websites and student project packages remotely from Pathankot across Himachal.",
    businessFocus:
      "Clear marketing and inquiry websites for Shimla hotels, services and local brands.",
    studentFocus:
      "Source-code projects for Shimla college and university students — BCA, MCA, B.Tech and related CS/IT programs.",
    nearbySlugs: ["solan", "hamirpur", "chandigarh", "pathankot"],
    faqs: [
      {
        question: "Do you serve clients across Himachal, not only Shimla?",
        answer:
          "Yes. Shimla is a focus city page; we also support Solan, Hamirpur, Mandi, Dharamshala and other Himachal locations the same way.",
      },
    ],
  },
  {
    slug: "solan",
    name: "Solan",
    region: "himachal",
    regionLabel: "Himachal Pradesh",
    blurb: "College-belt projects and business websites for Solan.",
    metaTitle: "College Projects & Web in Solan",
    metaDescription:
      "College projects and websites for Solan students and businesses.",
    keywords: [
      "final year projects Solan",
      "website Solan Himachal",
      "B.Tech projects Solan",
    ],
    headline: "Solan’s students and businesses — practical tech",
    intro:
      "Solan’s education and industry corridor needs usable projects and websites. PB_IT_HUB provides both with transparent WhatsApp ordering from Pathankot.",
    businessFocus:
      "Business websites and light digital systems for Solan organizations that want a professional presence.",
    studentFocus:
      "College project catalog plus custom builds when your lab or department assigns a unique problem statement.",
    nearbySlugs: ["shimla", "chandigarh", "mohali", "hamirpur"],
    faqs: [
      {
        question: "Can Solan engineering students get Flutter or full-stack projects?",
        answer:
          "Yes. The Learn or Buy catalog includes web and Flutter options; filter by stack and order the package that matches your syllabus.",
      },
    ],
  },
  {
    slug: "hamirpur",
    name: "Hamirpur",
    region: "himachal",
    regionLabel: "Himachal Pradesh",
    blurb: "Strong engineering college city — projects and web builds for Hamirpur.",
    metaTitle: "Projects & Websites in Hamirpur",
    metaDescription:
      "College projects and websites for Hamirpur — Pathankot team, Himachal-ready.",
    keywords: [
      "final year projects Hamirpur",
      "B.Tech projects Hamirpur",
      "website Hamirpur Himachal",
      "college projects NIT Hamirpur area",
    ],
    headline: "Hamirpur college projects & business websites",
    intro:
      "Hamirpur is known for serious engineering study. We supply final-year and minor projects with clean architecture and viva prep, plus websites for local businesses across the district.",
    businessFocus:
      "Straightforward web products for Hamirpur businesses that want to be found and contacted online.",
    studentFocus:
      "Higher-complexity project options for B.Tech and CS/IT students, including custom statements when required by your department.",
    nearbySlugs: ["shimla", "solan", "pathankot", "chandigarh"],
    faqs: [
      {
        question: "Can you match a specific Hamirpur college problem statement?",
        answer:
          "Yes. Choose Custom / Other in Learn or Buy, describe the brief, and we will confirm feasibility and pricing on WhatsApp before build.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export function getLocationsByRegion(region: LocationRegion) {
  return locations.filter((location) => location.region === region);
}

export const locationRegions: Array<{
  id: LocationRegion;
  label: string;
}> = [
  { id: "punjab", label: "Punjab" },
  { id: "jammu", label: "Jammu" },
  { id: "himachal", label: "Himachal" },
];
