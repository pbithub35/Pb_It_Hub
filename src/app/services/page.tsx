import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STRINGS } from "@/config/strings";

export const metadata: Metadata = createPageMetadata({
  title: "Web, App & Software Services",
  description:
    "Website, mobile app, SaaS, Shopify and SEO services for businesses in Pathankot and Punjab.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <div className="surface-light page-shell">
      <Container wide>
        <SectionHeading
          tone="light"
          eyebrow={STRINGS.services.eyebrow}
          title="What we design and engineer"
          description="Product-focused technology capabilities built around real business needs."
        />
        <div className="mt-5 space-y-2.5 md:mt-6 md:space-y-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="flex flex-col gap-3 rounded-[1.35rem] border border-navy/10 bg-off-white px-6 py-6 transition hover:border-navy/20 hover:bg-white md:flex-row md:items-center md:justify-between"
            >
              <div className="flex gap-5">
                <span className="font-display text-sm text-blue">
                  {service.number}
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold text-ink md:text-xl">
                    {service.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-muted-strong">
                    {service.description}
                  </p>
                </div>
              </div>
              <span className="text-xs uppercase tracking-[0.16em] text-blue">
                {STRINGS.services.exploreLink}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
