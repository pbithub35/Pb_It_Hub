import type { FreeResource } from "@/types/student-resource";

export const freeResources: FreeResource[] = [
  {
    slug: "laravel-project-ideas-for-students",
    title: "Laravel Project Ideas for Students",
    description:
      "Practical Laravel project ideas suited for college and final-year coursework.",
    category: "Laravel",
    tags: ["Laravel", "PHP", "Project Ideas"],
    content: {
      h1: "Laravel Project Ideas for Students",
      intro:
        "If you are learning Laravel, building a complete project is one of the fastest ways to understand routing, models, authentication and dashboards. Here are practical ideas you can start with.",
      sections: [
        {
          heading: "Why Laravel works well for student projects",
          body: "Laravel gives you structure out of the box — routing, Eloquent models, migrations and Blade or API responses — so you can focus on solving a real workflow instead of reinventing basics.",
        },
        {
          heading: "Project ideas to consider",
          body: "Salon management, school management, inventory trackers, appointment booking systems and simple CRM tools are strong learning projects because they include multiple related modules.",
        },
        {
          heading: "How to choose the right idea",
          body: "Pick a problem you understand. Start with authentication, one core module and a dashboard. Expand features only after the first flow works end to end.",
        },
      ],
    },
    seo: {
      title: "Laravel Project Ideas for Students",
      description:
        "Practical Laravel project ideas for college and final-year students who want to learn by building real applications.",
    },
  },
  {
    slug: "php-final-year-project-ideas",
    title: "PHP Final Year Project Ideas",
    description:
      "Final-year friendly PHP project directions with clear learning outcomes.",
    category: "PHP",
    tags: ["PHP", "Final Year", "Project Ideas"],
    content: {
      h1: "PHP Final Year Project Ideas",
      intro:
        "Final-year projects should demonstrate structure, database design and usable features. These PHP directions help you build something explainable in a viva.",
      sections: [
        {
          heading: "What evaluators usually look for",
          body: "Clear problem statement, working modules, basic security (login), sensible database tables and the ability to explain your architecture.",
        },
        {
          heading: "Strong PHP project directions",
          body: "College management, fee systems, library systems, clinic booking and small business websites with admin panels are dependable choices.",
        },
      ],
    },
    seo: {
      title: "PHP Final Year Project Ideas",
      description:
        "PHP final year project ideas for students preparing practical submissions and viva discussions.",
    },
  },
  {
    slug: "react-project-ideas",
    title: "React Project Ideas",
    description:
      "Frontend project ideas that help you practice components, state and UI flows.",
    category: "React",
    tags: ["React", "Frontend", "Project Ideas"],
    content: {
      h1: "React Project Ideas",
      intro:
        "React shines when you build interactive interfaces. Use these ideas to practice components, forms, filtering and dashboard layouts.",
      sections: [
        {
          heading: "Beginner-friendly React builds",
          body: "Budget trackers, task boards, portfolio sites and filterable project galleries help you learn state, lists and reusable UI pieces.",
        },
        {
          heading: "Going further",
          body: "Connect your UI to an API, add authentication screens and learn how frontend routes map to real product flows.",
        },
      ],
    },
    seo: {
      title: "React Project Ideas for Students",
      description:
        "React project ideas for students learning components, state management and practical UI development.",
    },
  },
  {
    slug: "flutter-project-ideas",
    title: "Flutter Project Ideas",
    description:
      "Mobile-focused project ideas for students exploring Flutter.",
    category: "Flutter",
    tags: ["Flutter", "Mobile", "Project Ideas"],
    content: {
      h1: "Flutter Project Ideas",
      intro:
        "Flutter lets you ship cross-platform mobile experiences. These ideas keep scope practical for student timelines.",
      sections: [
        {
          heading: "Practical mobile ideas",
          body: "Expense trackers, campus notice apps, appointment reminders and simple catalog apps are strong Flutter starters.",
        },
      ],
    },
    seo: {
      title: "Flutter Project Ideas for Students",
      description:
        "Flutter project ideas for college students learning mobile development by building real apps.",
    },
  },
  {
    slug: "laravel-viva-questions",
    title: "Laravel Viva Questions",
    description:
      "Common viva-style questions around Laravel projects and architecture.",
    category: "Viva Preparation",
    tags: ["Laravel", "Viva", "Interview Questions"],
    content: {
      h1: "Laravel Viva Questions",
      intro:
        "Be ready to explain MVC, migrations, authentication, Eloquent relationships and how your modules connect.",
      sections: [
        {
          heading: "Core topics to revise",
          body: "Routes, controllers, models, migrations, middleware, validation and how you structured your database tables.",
        },
      ],
    },
    seo: {
      title: "Laravel Viva Questions for Students",
      description:
        "Laravel viva preparation questions for students presenting academic or portfolio projects.",
    },
  },
  {
    slug: "git-interview-questions",
    title: "Git & GitHub Interview Questions",
    description:
      "Practical Git questions students should know before interviews.",
    category: "Git & GitHub",
    tags: ["Git", "GitHub", "Interview Questions"],
    content: {
      h1: "Git & GitHub Interview Questions",
      intro:
        "Interviewers often ask how you version your work. Practice explaining commits, branches, pull requests and conflict resolution.",
      sections: [
        {
          heading: "Basics you should explain clearly",
          body: "clone, status, add, commit, push, pull, branch and merge — with a short story of how you used them in a project.",
        },
      ],
    },
    seo: {
      title: "Git Interview Questions for Students",
      description:
        "Git and GitHub interview questions to help students prepare for practical and technical conversations.",
    },
  },
  {
    slug: "final-year-project-guidance",
    title: "Final Year Project Guidance",
    description:
      "A practical guide for choosing, scoping and presenting a software project.",
    category: "Career Guides",
    tags: ["Final Year", "Guidance", "Career"],
    content: {
      h1: "Final Year Project Guidance",
      intro:
        "A good final-year project is focused, explainable and finished enough to demo. Use this guide to scope wisely and prepare for viva.",
      sections: [
        {
          heading: "Scope for completion",
          body: "Prefer one strong workflow over many incomplete features. Document setup steps and rehearse a short demo narrative.",
        },
        {
          heading: "What to prepare for viva",
          body: "Know your ER diagram, main modules, tech choices and limitations. Honesty about trade-offs is better than memorized buzzwords.",
        },
      ],
    },
    seo: {
      title: "Final Year Project Guidance for Students",
      description:
        "Practical final year project guidance for college students building software projects and preparing for viva.",
    },
  },
];

export const resourceCategories = [
  "Free Source Code",
  "Project Ideas",
  "PDFs",
  "Cheat Sheets",
  "Interview Questions",
  "Viva Preparation",
  "Git & GitHub",
  "Laravel",
  "React",
  "Flutter",
  "PHP",
  "Career Guides",
] as const;

export function getFreeResourceBySlug(slug: string) {
  return freeResources.find((r) => r.slug === slug);
}

export function getPublicFreeResources() {
  return freeResources;
}
