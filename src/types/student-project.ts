export type ProjectAvailability = "source-code" | "demo" | "guidance";

/** College / practical catalog vs senior / platform builds */
export type ProjectLevel = "standard" | "senior" | "custom";

export interface StudentProject {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  /** Primary stack label used in filters (e.g. Flutter, React + Laravel) */
  platform: string;
  level: ProjectLevel;
  features: string[];
  previewImage: string;
  availability: ProjectAvailability;
  status: "active" | "coming-soon";
}
