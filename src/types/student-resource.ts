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

export interface ResourceCodeBlock {
  filename: string;
  language: string;
  code: string;
}

export interface FreeResource {
  slug: string;
  title: string;
  description: string;
  category: ResourceCategory;
  tags: string[];
  /** Optional related paid project slug */
  relatedProjectSlug?: string;
  /** Optional link to paid catalog / projects */
  upgradePath?: string;
  content: {
    h1: string;
    intro: string;
    sections: { heading: string; body: string }[];
  };
  /** Free starter / practical source snippets students can copy */
  codeBlocks?: ResourceCodeBlock[];
  seo: {
    title: string;
    description: string;
  };
}
