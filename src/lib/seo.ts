import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PageSeoInput {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = "/images/pb-it-hub-dark.jpg",
  noIndex = false,
}: PageSeoInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    slogan: siteConfig.tagline,
  };
}

/** Only emit when a verified location is configured — never invent an address. */
export function localBusinessJsonLd() {
  if (!siteConfig.location) return null;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone || undefined,
    areaServed: siteConfig.areasServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location,
      addressRegion: "Punjab",
      addressCountry: "IN",
    },
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  };
}

export function serviceJsonLd(
  services: Array<{ name: string; description: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        url: service.url,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
