import { siteConfig } from "@/config/site";

export type MediaSource = "local" | "backend" | "cdn" | "remote" | "fallback";

export type MediaKey =
  | `hero/${string}`
  | `services/${string}`
  | `work/${string}`
  | `technology/${string}`
  | `about/${string}`
  | `brand/${string}`
  | (string & {});

export interface ResolvedMedia {
  src: string;
  source: MediaSource;
  alt?: string;
}

const localRegistry: Record<string, string> = {
  "brand/logo": "/images/pb-it-hub-mark.png",
  "brand/mark-dark": "/images/pb-it-hub-dark.jpg",
  "hero/workspace": "/images/hero/workspace.png",
  "work/studio-ledger/hero": "/images/work/studio-ledger/hero.webp",
  "work/excellent-educators/hero": "/images/work/excellent-educators/hero.webp",
  "work/mahajan-vastra/hero": "/images/work/mahajan-vastra/hero.webp",
  "work/tamanna-makeover/hero": "/images/work/tamanna-makeover/hero.webp",
  "work/creator-influencer-platform/hero":
    "/images/work/creator-influencer-platform/hero.webp",
  "services/web": "/images/services/web.webp",
  "services/saas": "/images/services/saas.webp",
  "services/mobile": "/images/services/mobile.webp",
  "services/ai": "/images/services/ai.webp",
  "services/crm": "/images/services/crm.webp",
  "learn-build/career-guidance": "/images/learn-build/career-guidance.jpg",
  "learn-build/projects-pricing-badge":
    "/images/learn-build/projects-pricing-badge.jpg",
};

const remoteOverrides: Record<string, string> = {
  // Example: "work/dealerji/hero": "https://cdn.example.com/dealerji-hero.webp",
};

function isAbsoluteUrl(value: string) {
  return /^https?:\/\//i.test(value);
}

/**
 * Resolve a media key to a usable URL.
 * Priority: remote override → CDN → backend → local registry → constructed local path → fallback
 */
export function getMediaUrl(key: MediaKey): ResolvedMedia {
  if (remoteOverrides[key]) {
    return { src: remoteOverrides[key], source: "remote" };
  }

  if (siteConfig.media.cdnUrl) {
    return {
      src: `${siteConfig.media.cdnUrl.replace(/\/$/, "")}/${key}`,
      source: "cdn",
    };
  }

  if (siteConfig.media.baseUrl) {
    return {
      src: `${siteConfig.media.baseUrl.replace(/\/$/, "")}/${key}`,
      source: "backend",
    };
  }

  if (localRegistry[key]) {
    return { src: localRegistry[key], source: "local" };
  }

  if (isAbsoluteUrl(key)) {
    return { src: key, source: "remote" };
  }

  const constructed = `/images/${key}`;
  return { src: constructed, source: "local" };
}

export function getMediaSrc(key: MediaKey): string {
  return getMediaUrl(key).src;
}

export function getFallbackMedia(): ResolvedMedia {
  return {
    src: siteConfig.media.fallback,
    source: "fallback",
  };
}

export function resolveImageSrc(keyOrUrl?: string | null): string {
  if (!keyOrUrl) return getFallbackMedia().src;
  if (isAbsoluteUrl(keyOrUrl) || keyOrUrl.startsWith("/")) return keyOrUrl;
  return getMediaSrc(keyOrUrl);
}
