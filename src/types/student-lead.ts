/** Shared lead classification for business + student submissions. */
export const LEAD_TYPES = [
  "BUSINESS_LEAD",
  "PROJECT_DOWNLOAD",
  "STUDENT_PROJECT",
  "SESSION",
  "PROJECT_KT",
  "PRACTICAL_PREPARATION",
  "PACKAGE",
  "CAREER_GUIDANCE",
] as const;

export type LeadType = (typeof LEAD_TYPES)[number];

export interface StudentLeadPayload {
  name: string;
  email: string;
  phone: string;
  message?: string;
  project?: string;
  projectSlug?: string;
  packageId?: string;
  selectedOptions?: string[];
  leadType: LeadType;
  sourcePage: string;
  createdAt?: string;
}

export interface StudentLeadResult {
  ok: boolean;
  message: string;
  /** Temporary/private download URL when backend authorizes one */
  downloadUrl?: string;
}
