import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { ServicesShowcase } from "@/components/sections/Services/ServicesShowcase";

export const metadata: Metadata = createPageMetadata({
  title: "Web, App & Software Services",
  description:
    "Website, mobile app, SaaS, Shopify and SEO services for businesses in Pathankot, Jammu, Himachal and Punjab.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return <ServicesShowcase />;
}
