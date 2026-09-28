/**
 * Anonymous visit logging — no names, emails, or phones.
 * One Firestore row + one stats increment per browser tab session (no duplicates).
 */

export type VisitorType = "student" | "business" | "mixed" | "general";

const SESSION_KEY = "pb_visit_session";
const TYPE_KEY = "pb_visit_type";
const COUNTED_KEY = "pb_visit_counted";

const STUDENT_PREFIXES = ["/learn-and-build"];

const BUSINESS_PREFIXES = [
  "/services",
  "/work",
  "/contact",
  "/about",
  "/locations",
];

function startsWithAny(path: string, prefixes: string[]) {
  return prefixes.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );
}

export function inferPathVisitorType(path: string): VisitorType {
  const student = startsWithAny(path, STUDENT_PREFIXES);
  const business = startsWithAny(path, BUSINESS_PREFIXES);

  if (student && business) return "mixed";
  if (student) return "student";
  if (business) return "business";
  return "general";
}

export function mergeVisitorTypes(
  current: VisitorType | null,
  next: VisitorType,
): VisitorType {
  if (!current || current === "general") return next;
  if (next === "general") return current;
  if (current === next) return current;
  if (current === "mixed" || next === "mixed") return "mixed";
  return "mixed";
}

export function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  try {
    const existing = window.sessionStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const id =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
    window.sessionStorage.setItem(SESSION_KEY, id);
    return id;
  } catch {
    return `s_${Date.now().toString(36)}`;
  }
}

export function hasCountedThisSession(): boolean {
  if (typeof window === "undefined") return true;
  try {
    return window.sessionStorage.getItem(COUNTED_KEY) === "1";
  } catch {
    return false;
  }
}

export function markSessionCounted() {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(COUNTED_KEY, "1");
  } catch {
    /* ignore */
  }
}

export function readStoredVisitorType(): VisitorType | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.sessionStorage.getItem(TYPE_KEY);
    if (
      value === "student" ||
      value === "business" ||
      value === "mixed" ||
      value === "general"
    ) {
      return value;
    }
  } catch {
    /* ignore */
  }
  return null;
}

export function storeVisitorType(type: VisitorType) {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(TYPE_KEY, type);
  } catch {
    /* ignore */
  }
}

export function getDeviceType(): "mobile" | "tablet" | "desktop" {
  if (typeof window === "undefined") return "desktop";
  const w = window.innerWidth;
  if (w < 768) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
}

export function getTrafficSource(): {
  referrerHost: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
} {
  if (typeof window === "undefined") {
    return { referrerHost: "", utmSource: "", utmMedium: "", utmCampaign: "" };
  }

  let referrerHost = "";
  try {
    if (document.referrer) {
      referrerHost = new URL(document.referrer).hostname;
    }
  } catch {
    referrerHost = "";
  }

  const params = new URLSearchParams(window.location.search);
  return {
    referrerHost,
    utmSource: params.get("utm_source")?.slice(0, 80) ?? "",
    utmMedium: params.get("utm_medium")?.slice(0, 80) ?? "",
    utmCampaign: params.get("utm_campaign")?.slice(0, 80) ?? "",
  };
}
