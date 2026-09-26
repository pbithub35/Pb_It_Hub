export interface ProjectItem {
  slug: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  summary: string;
  technologies: string[];
  heroImage: string;
  gallery: string[];
  features: string[];
  caseStudy: boolean;
  featured: boolean;
  liveUrl?: string;
  /** Soft backdrop behind contain-fit screenshot */
  screenTone?: "cream" | "warm" | "dark" | "white";
  problem?: string;
  solution?: string;
  overview?: string;
}

export const projects: ProjectItem[] = [
  {
    slug: "studio-ledger",
    title: "StudioLedger",
    category: "CRM / Photography Studio",
    tags: ["CRM", "Mobile", "Studio Operations"],
    description:
      "Studio CRM for managing leads, follow-ups, deals, bookings, and team workflow.",
    summary:
      "A photography studio operations platform that keeps inquiries, clients, shoots, invoices, and team activity in one system — web and mobile.",
    technologies: ["Flutter", "Laravel", "MySQL", "API Systems"],
    heroImage: "work/studio-ledger/hero",
    gallery: [],
    features: [
      "Lead and follow-up pipeline",
      "Client and booking management",
      "Invoices and expenses",
      "Team workflow and attendance",
    ],
    caseStudy: true,
    featured: true,
    liveUrl: "https://app.dhimanrishav.co.in",
    screenTone: "warm",
    overview:
      "StudioLedger helps photography studios track leads faster, stay on schedule with reminders, and manage deals and team workflow from one clean dashboard.",
  },
  {
    slug: "excellent-educators",
    title: "Excellent Educators",
    category: "Education / Mentoring",
    tags: ["Education", "Mentoring", "Assessments"],
    description:
      "Student growth and mentoring platform connecting learners with educators.",
    summary:
      "A mentoring-focused product for students, teachers, and admins — covering aptitude assessments, monthly ratings, batches, and growth tracking.",
    technologies: ["Flutter", "Laravel", "PostgreSQL", "API Systems"],
    heroImage: "work/excellent-educators/hero",
    gallery: [],
    features: [
      "Student and teacher dashboards",
      "Aptitude assessments",
      "Monthly ratings and feedback",
      "Batch and request management",
    ],
    caseStudy: true,
    featured: true,
    screenTone: "white",
    overview:
      "Excellent Educators supports student growth journeys with structured mentoring, assessments, and educator workflows across admin, teacher, and student roles.",
  },
  {
    slug: "mahajan-vastra",
    title: "Mahajan Vastra",
    category: "Business Website / Sacred Craft",
    tags: ["Website", "Local Business", "E-commerce Ready"],
    description:
      "Business website for Mahajan God Idols Dresses Stitching (Vastra) in Pathankot.",
    summary:
      "A bilingual sacred craft website presenting custom deity vastra services, gallery, testimonials, and inquiry flows for a Pathankot-based women-owned business.",
    technologies: ["HTML", "CSS", "JavaScript"],
    heroImage: "work/mahajan-vastra/hero",
    gallery: [],
    features: [
      "Service storytelling for deity vastra",
      "Gallery of temple and idol work",
      "WhatsApp and contact inquiry paths",
      "Bilingual Hindi / English content",
    ],
    caseStudy: true,
    featured: true,
    liveUrl: "https://mahajanmahesh788-ui.github.io/mahajan-vastra/",
    screenTone: "cream",
    overview:
      "Mahajan Vastra showcases custom sacred clothing for idols and temples — from Shree Krishna and Radha Rani dresses to Laddu Gopal poshak and temple murti garments.",
  },
  {
    slug: "tamanna-makeover",
    title: "Tamanna MakeOver",
    category: "Salon / Beauty Website",
    tags: ["Website", "Salon", "Local Services"],
    description:
      "Premium at-home beauty services website for Tamanna — Top Pathankot Salon.",
    summary:
      "A conversion-focused salon website for Pathankot beauty services including facials, waxing, hair spa, bridal makeup, and home packages with WhatsApp booking.",
    technologies: ["HTML", "CSS", "JavaScript"],
    heroImage: "work/tamanna-makeover/hero",
    gallery: [],
    features: [
      "Service and package presentation",
      "WhatsApp booking CTA",
      "Local Pathankot positioning",
      "Mobile-first salon landing experience",
    ],
    caseStudy: true,
    featured: true,
    liveUrl: "https://tamannamakeover6-afk.github.io/Top_Pathankot_Salon/",
    screenTone: "warm",
    overview:
      "Tamanna MakeOver presents premium at-home beauty services in Pathankot with a clear booking path and local brand presence.",
  },
  {
    slug: "creator-influencer-platform",
    title: "Creator & Influencer Platform",
    category: "SaaS / Creator Economy",
    tags: ["SaaS", "Influencers", "Admin Systems"],
    description:
      "Portfolio and collaboration platform for digital creators and influencers.",
    summary:
      "A multi-role platform with public creator websites, influencer dashboards, and admin controls for publishing, analytics, and media management.",
    technologies: ["Next.js", "Firebase", "Cloudinary"],
    heroImage: "work/creator-influencer-platform/hero",
    gallery: [],
    features: [
      "Public creator portfolio websites",
      "Influencer self-serve dashboards",
      "Admin publishing and analytics",
      "Per-creator media storage",
    ],
    caseStudy: true,
    featured: true,
    screenTone: "dark",
    overview:
      "Built for digital creators and influencers — one public website template with unique data per creator, plus admin and influencer roles for collaboration and publishing.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getCaseStudyProjects() {
  return projects.filter((project) => project.caseStudy);
}
