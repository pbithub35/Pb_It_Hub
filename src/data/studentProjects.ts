import type { StudentProject } from "@/types/student-project";

const PREVIEWS = [
  "work/studio-ledger/hero",
  "work/excellent-educators/hero",
  "work/mahajan-vastra/hero",
  "work/tamanna-makeover/hero",
  "work/creator-influencer-platform/hero",
] as const;

function preview(index: number) {
  return PREVIEWS[index % PREVIEWS.length];
}

function project(partial: Omit<StudentProject, "availability" | "status" | "previewImage"> & {
  previewImage?: string;
  index: number;
}): StudentProject {
  const { index, previewImage, ...rest } = partial;
  return {
    ...rest,
    previewImage: previewImage ?? preview(index),
    availability: "source-code",
    status: "active",
  };
}

/** Standard / college-friendly projects */
const standardProjects: StudentProject[] = [
  project({
    index: 0,
    slug: "expense-tracker-flutter",
    name: "Expense Tracker",
    shortDescription: "Personal Finance",
    platform: "Flutter",
    level: "standard",
    technologies: ["Flutter", "Dart"],
    description:
      "Track income and expenses with categories, budgets, and clear spending reports — ideal for a first Flutter portfolio app.",
    features: ["Income & expenses", "Categories", "Budget limits", "Reports", "Local storage"],
  }),
  project({
    index: 1,
    slug: "quiz-app-flutter",
    name: "Quiz App",
    shortDescription: "Learning / Assessment",
    platform: "Flutter",
    level: "standard",
    technologies: ["Flutter", "Dart"],
    description:
      "Interactive quiz flow with scoring, timers, and result screens — great for viva demos and mobile UI practice.",
    features: ["Question bank", "Timer", "Score summary", "Categories", "Clean mobile UI"],
  }),
  project({
    index: 2,
    slug: "salon-booking-flutter",
    name: "Salon Booking",
    shortDescription: "Booking App",
    platform: "Flutter",
    level: "standard",
    technologies: ["Flutter", "Dart"],
    description:
      "Book salon services, pick slots, and manage appointments with a polished mobile booking experience.",
    features: ["Service catalog", "Slot booking", "Appointments", "Profile", "Notifications-ready"],
  }),
  project({
    index: 3,
    slug: "food-delivery-flutter",
    name: "Food Delivery",
    shortDescription: "Ordering App",
    platform: "Flutter",
    level: "standard",
    technologies: ["Flutter", "Dart"],
    description:
      "Browse restaurants/menus, cart checkout, and order tracking UI — a classic Flutter delivery project.",
    features: ["Menus", "Cart", "Checkout", "Order status", "Search & filters"],
  }),
  project({
    index: 4,
    slug: "todo-dashboard-react",
    name: "Todo Dashboard",
    shortDescription: "Productivity",
    platform: "React",
    level: "standard",
    technologies: ["React"],
    description:
      "Task board with filters, priorities, and a clean dashboard layout for everyday React practice.",
    features: ["Tasks", "Priorities", "Filters", "Dashboard stats", "Responsive UI"],
  }),
  project({
    index: 5,
    slug: "weather-app-react",
    name: "Weather App",
    shortDescription: "API Integration",
    platform: "React",
    level: "standard",
    technologies: ["React"],
    description:
      "City search and weather cards powered by API data — strong starter for React + API integration.",
    features: ["City search", "Current weather", "Forecast cards", "Loading states", "Error handling"],
  }),
  project({
    index: 6,
    slug: "job-portal-react",
    name: "Job Portal",
    shortDescription: "Jobs Marketplace",
    platform: "React",
    level: "standard",
    technologies: ["React"],
    description:
      "Browse and filter jobs, view details, and manage applications in a clean React job board.",
    features: ["Job listings", "Search & filters", "Job detail", "Apply flow", "Saved jobs"],
  }),
  project({
    index: 7,
    slug: "admin-dashboard-react",
    name: "Admin Dashboard",
    shortDescription: "Admin Panel",
    platform: "React",
    level: "standard",
    technologies: ["React"],
    description:
      "Charts, tables, and KPI cards in a modern admin shell — excellent for UI and layout skills.",
    features: ["KPI cards", "Charts", "Data tables", "Sidebar layout", "Responsive"],
  }),
  project({
    index: 8,
    slug: "ecommerce-react",
    name: "E-Commerce",
    shortDescription: "Storefront",
    platform: "React",
    level: "standard",
    technologies: ["React"],
    description:
      "Product catalog, cart, and checkout UI for a full-looking online store front-end.",
    features: ["Catalog", "Product detail", "Cart", "Checkout UI", "Filters"],
  }),
  project({
    index: 9,
    slug: "crm-react-laravel",
    name: "CRM",
    shortDescription: "Customer Management",
    platform: "React + Laravel",
    level: "standard",
    technologies: ["React", "Laravel", "MySQL"],
    description:
      "Leads, contacts, and follow-ups with a React front-end and Laravel API backend.",
    features: ["Leads", "Contacts", "Pipeline", "Notes", "Auth & roles"],
  }),
  project({
    index: 10,
    slug: "student-management-laravel",
    name: "Student Management",
    shortDescription: "Campus Admin",
    platform: "Laravel",
    level: "standard",
    technologies: ["Laravel", "PHP", "MySQL"],
    description:
      "Manage students, courses, and records with classic Laravel admin modules.",
    features: ["Students", "Courses", "Attendance", "Fees", "Reports"],
  }),
  project({
    index: 11,
    slug: "school-management-laravel",
    name: "School Management",
    shortDescription: "Management System",
    platform: "Laravel",
    level: "standard",
    technologies: ["Laravel", "PHP", "MySQL"],
    description:
      "Multi-module academic system covering students, teachers, classes, attendance and fees.",
    features: ["Students", "Teachers", "Classes", "Attendance", "Fees", "Dashboard"],
  }),
  project({
    index: 12,
    slug: "hospital-management-laravel",
    name: "Hospital Management",
    shortDescription: "Healthcare Admin",
    platform: "Laravel",
    level: "standard",
    technologies: ["Laravel", "PHP", "MySQL"],
    description:
      "Patients, doctors, appointments, and billing workflows for a hospital admin project.",
    features: ["Patients", "Doctors", "Appointments", "Billing", "Dashboard"],
  }),
  project({
    index: 13,
    slug: "inventory-management-laravel",
    name: "Inventory Management",
    shortDescription: "Stock & Warehouse",
    platform: "Laravel",
    level: "standard",
    technologies: ["Laravel", "PHP", "MySQL"],
    description:
      "Products, stock levels, purchases, and sales with clear inventory reports.",
    features: ["Products", "Stock", "Purchases", "Sales", "Low-stock alerts"],
  }),
  project({
    index: 14,
    slug: "real-estate-react-laravel",
    name: "Real Estate",
    shortDescription: "Property Listings",
    platform: "React + Laravel",
    level: "standard",
    technologies: ["React", "Laravel", "MySQL"],
    description:
      "Property listings, filters, and inquiry flows with React UI and Laravel backend.",
    features: ["Listings", "Search filters", "Property detail", "Inquiries", "Admin"],
  }),
  project({
    index: 15,
    slug: "doctor-appointment-flutter",
    name: "Doctor Appointment",
    shortDescription: "Healthcare Booking",
    platform: "Flutter",
    level: "standard",
    technologies: ["Flutter", "Dart"],
    description:
      "Find doctors, book slots, and manage appointments in a focused Flutter health app.",
    features: ["Doctor list", "Slot booking", "Appointments", "Profile", "Reminders-ready"],
  }),
  project({
    index: 16,
    slug: "elearning-flutter",
    name: "E-Learning",
    shortDescription: "Courses App",
    platform: "Flutter",
    level: "standard",
    technologies: ["Flutter", "Dart"],
    description:
      "Course catalog, lessons, and progress tracking for a mobile learning experience.",
    features: ["Courses", "Lessons", "Progress", "Bookmarks", "Clean player UI"],
  }),
  project({
    index: 17,
    slug: "ai-resume-analyzer-react",
    name: "AI Resume Analyzer",
    shortDescription: "AI Career Tool",
    platform: "React + AI",
    level: "standard",
    technologies: ["React", "AI"],
    description:
      "Upload a resume and get structured AI feedback on skills, gaps, and improvements.",
    features: ["Resume upload", "AI analysis", "Score & tips", "Skill gaps", "Export summary"],
  }),
  project({
    index: 18,
    slug: "ai-interview-coach-react",
    name: "AI Interview Coach",
    shortDescription: "AI Practice Tool",
    platform: "React + AI",
    level: "standard",
    technologies: ["React", "AI"],
    description:
      "Practice interview questions with AI prompts and feedback — strong modern portfolio piece.",
    features: ["Question sets", "AI feedback", "Practice modes", "History", "Tips"],
  }),
  project({
    index: 19,
    slug: "serious-saas-react-laravel",
    name: "One Serious SaaS Project",
    shortDescription: "Full-stack SaaS",
    platform: "React + Laravel",
    level: "standard",
    technologies: ["React", "Laravel", "MySQL"],
    description:
      "A production-style SaaS starter with auth, roles, billing-ready structure, and admin modules.",
    features: ["Auth & roles", "Dashboard", "CRUD modules", "Settings", "API-ready"],
  }),
];

/** Senior / platform-level projects */
const seniorProjects: StudentProject[] = [
  project({
    index: 20,
    slug: "ai-customer-support-platform",
    name: "AI Customer Support Platform",
    shortDescription: "Senior Platform",
    platform: "React + Laravel + AI",
    level: "senior",
    technologies: ["React", "Laravel", "AI", "MySQL"],
    description:
      "Ticket inbox, AI-assisted replies, and agent workflows for a serious customer support product.",
    features: ["Tickets", "AI replies", "Agent desk", "Knowledge base", "Analytics"],
  }),
  project({
    index: 21,
    slug: "multi-tenant-crm-platform",
    name: "Multi-Tenant CRM Platform",
    shortDescription: "Senior Platform",
    platform: "React + Laravel",
    level: "senior",
    technologies: ["React", "Laravel", "MySQL"],
    description:
      "Tenant-aware CRM with orgs, roles, pipelines, and isolated data for multi-company use.",
    features: ["Multi-tenant", "Pipelines", "Contacts", "Roles", "Org settings"],
  }),
  project({
    index: 22,
    slug: "ai-real-estate-platform",
    name: "AI Real Estate Platform",
    shortDescription: "Senior Platform",
    platform: "React + Laravel + AI",
    level: "senior",
    technologies: ["React", "Laravel", "AI", "MySQL"],
    description:
      "Listings plus AI search/recommendations for a deeper real-estate product experience.",
    features: ["Listings", "AI search", "Recommendations", "Inquiries", "Admin"],
  }),
  project({
    index: 23,
    slug: "project-management-platform",
    name: "Project Management Platform",
    shortDescription: "Senior Platform",
    platform: "React + Node.js",
    level: "senior",
    technologies: ["React", "Node.js"],
    description:
      "Projects, tasks, members, and collaboration flows on a React + Node stack.",
    features: ["Projects", "Tasks", "Members", "Boards", "Activity"],
  }),
  project({
    index: 24,
    slug: "learning-management-platform",
    name: "Learning Management Platform",
    shortDescription: "Senior Platform",
    platform: "Flutter + Laravel",
    level: "senior",
    technologies: ["Flutter", "Laravel", "MySQL"],
    description:
      "Courses, students, and progress across Flutter client and Laravel LMS backend.",
    features: ["Courses", "Students", "Progress", "Assignments", "Admin"],
  }),
  project({
    index: 25,
    slug: "healthcare-management-platform",
    name: "Healthcare Management Platform",
    shortDescription: "Senior Platform",
    platform: "Flutter + Laravel",
    level: "senior",
    technologies: ["Flutter", "Laravel", "MySQL"],
    description:
      "Patients, doctors, and clinical workflows spanning mobile Flutter and Laravel APIs.",
    features: ["Patients", "Doctors", "Appointments", "Records", "Admin"],
  }),
  project({
    index: 26,
    slug: "food-delivery-platform",
    name: "Food Delivery Platform",
    shortDescription: "Senior Platform",
    platform: "Flutter + Laravel",
    level: "senior",
    technologies: ["Flutter", "Laravel", "MySQL"],
    description:
      "Full delivery platform: restaurants, carts, orders, and status across app + API.",
    features: ["Restaurants", "Orders", "Tracking", "Payments-ready", "Admin"],
  }),
  project({
    index: 27,
    slug: "ecommerce-platform-flutter-laravel",
    name: "E-Commerce Platform",
    shortDescription: "Senior Platform",
    platform: "Flutter + Laravel",
    level: "senior",
    technologies: ["Flutter", "Laravel", "MySQL"],
    description:
      "Catalog, cart, orders, and admin ops for a mobile-first commerce platform.",
    features: ["Catalog", "Cart", "Orders", "Inventory", "Admin"],
  }),
  project({
    index: 28,
    slug: "realtime-communication-platform",
    name: "Real-Time Communication Platform",
    shortDescription: "Senior Platform",
    platform: "React + Node.js + WebSocket",
    level: "senior",
    technologies: ["React", "Node.js", "WebSocket"],
    description:
      "Chat/rooms with live updates over WebSockets — strong senior full-stack signal.",
    features: ["Rooms", "Live chat", "Presence", "Notifications", "History"],
  }),
];

const customProject: StudentProject = project({
  index: 29,
  slug: "custom-demand",
  name: "Other — Write Your Demands",
  shortDescription: "Custom brief",
  platform: "Custom",
  level: "custom",
  technologies: ["Your stack"],
  description:
    "Tell us what you need — technology, features, college requirements, or a custom idea. We’ll match a practical build plan.",
  features: ["Your requirements", "Matched stack", "Scoped features", "Delivery plan"],
  previewImage: "brand/mark-dark",
});

export const studentProjects: StudentProject[] = [
  customProject,
  ...standardProjects,
  ...seniorProjects,
];

export const projectLevelFilters = [
  { id: "all", label: "All levels" },
  { id: "custom", label: "Other / Custom" },
  { id: "standard", label: "College / Standard" },
  { id: "senior", label: "Senior level" },
] as const;

export const projectPlatformFilters = [
  { id: "all", label: "All stacks" },
  { id: "Custom", label: "Other" },
  { id: "React", label: "React" },
  { id: "Flutter", label: "Flutter" },
  { id: "Android", label: "Android" },
  { id: "Laravel", label: "Laravel" },
  { id: "AI", label: "AI" },
  { id: "Node.js", label: "Node.js" },
] as const;

export type ProjectLevelFilterId = (typeof projectLevelFilters)[number]["id"];
export type ProjectPlatformFilterId =
  (typeof projectPlatformFilters)[number]["id"];

export function getPublicStudentProjects() {
  return studentProjects.filter((p) => p.status === "active");
}

export function getStudentProjectBySlug(slug: string) {
  return getPublicStudentProjects().find((p) => p.slug === slug);
}

export function filterStudentProjects(
  projects: StudentProject[],
  level: ProjectLevelFilterId,
  platform: ProjectPlatformFilterId,
) {
  return projects
    .filter((project) => {
      const levelOk = level === "all" || project.level === level;
      const platformOk =
        platform === "all" ||
        project.platform.toLowerCase().includes(platform.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(platform.toLowerCase()),
        ) ||
        (platform === "Android" &&
          (project.platform.toLowerCase().includes("flutter") ||
            project.technologies.some((t) =>
              t.toLowerCase().includes("flutter"),
            )));
      return levelOk && platformOk;
    })
    .sort((a, b) => {
      if (a.level === "custom" && b.level !== "custom") return -1;
      if (b.level === "custom" && a.level !== "custom") return 1;
      return 0;
    });
}
