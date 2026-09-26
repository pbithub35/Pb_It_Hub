export type ResourceCategory =
  | "Free Source Code"
  | "Project Ideas"
  | "PDFs"
  | "Cheat Sheets"
  | "Interview Questions"
  | "Viva Preparation"
  | "Git & GitHub"
  | "Laravel"
  | "React"
  | "Flutter"
  | "PHP"
  | "Career Guides";

export interface FreeResource {
  slug: string;
  title: string;
  description: string;
  category: ResourceCategory;
  tags: string[];
  /** Optional related project slug */
  relatedProjectSlug?: string;
  content: {
    h1: string;
    intro: string;
    sections: { heading: string; body: string }[];
  };
  seo: {
    title: string;
    description: string;
  };
}
