export interface BlogSection {
  heading: string;
  body: string;
  bulletPoints?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Final Year Projects"
    | "Viva Preparation"
    | "AI & Machine Learning"
    | "Tech Stacks"
    | "Business Guides";
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
  content: {
    intro: string;
    sections: BlogSection[];
    conclusion?: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
