import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getLocationBySlug,
  locations,
} from "@/data/locations";
import {
  createPageMetadata,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { OfficeMap } from "@/components/ui/OfficeMap";
import { ContactCTASection } from "@/components/sections/Contact";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return createPageMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/locations/${location.slug}`,
    keywords: location.keywords,
  });
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const nearby = location.nearbySlugs
    .map((nearbySlug) => getLocationBySlug(nearbySlug))
    .filter(Boolean);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Locations", path: "/locations" },
    { name: location.name, path: `/locations/${location.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      {location.faqs.length ? (
        <JsonLd data={faqJsonLd(location.faqs)} />
      ) : null}

      <div className="surface-light page-shell">
        <Container wide className="max-w-4xl">
          <p className="eyebrow text-blue">
            {location.regionLabel}
            {location.isHq ? " · Headquarters" : ""}
          </p>
          <SectionHeading
            tone="light"
            title={location.headline}
            description={location.intro}
            className="mt-2"
          />

          <div className="mt-5 flex flex-wrap gap-2.5">
            <Button href="/contact" variant="primary" size="md">
              Start a Project
            </Button>
            <Button href="/learn-and-build/projects" variant="ghost" size="md">
              Browse student projects
            </Button>
            {location.isHq ? (
              <Button
                href={siteConfig.maps.url}
                variant="secondary"
                size="md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </Button>
            ) : null}
          </div>

          {location.isHq ? <OfficeMap className="mt-8" /> : null}

          <div className="mt-8 space-y-8 md:mt-10 md:space-y-10">
            <section>
              <h2 className="heading-section">
                For businesses in {location.name}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-strong md:text-lg">
                {location.businessFocus}
              </p>
              <Link
                href="/services"
                className="mt-4 inline-block text-sm text-blue underline-offset-4 hover:underline"
              >
                Explore services
              </Link>
            </section>

            <section>
              <h2 className="heading-section">
                For students in {location.name}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-strong md:text-lg">
                {location.studentFocus}
              </p>
              <Link
                href="/learn-and-build"
                className="mt-4 inline-block text-sm text-blue underline-offset-4 hover:underline"
              >
                Learn or Buy
              </Link>
            </section>

            {location.faqs.length ? (
              <section>
                <h2 className="heading-section">
                  FAQ — {location.name}
                </h2>
                <ul className="mt-5 space-y-5">
                  {location.faqs.map((faq) => (
                    <li key={faq.question}>
                      <h3 className="text-base font-medium text-navy md:text-lg">
                        {faq.question}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-strong md:text-base">
                        {faq.answer}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {nearby.length ? (
              <section>
                <h2 className="heading-section">
                  Nearby cities
                </h2>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-blue">
                  {nearby.map((city) =>
                    city ? (
                      <li key={city.slug}>
                        <Link
                          href={`/locations/${city.slug}`}
                          className="underline-offset-4 hover:underline"
                        >
                          {city.name}
                        </Link>
                      </li>
                    ) : null,
                  )}
                </ul>
              </section>
            ) : null}
          </div>
        </Container>
      </div>

      <ContactCTASection />
    </>
  );
}
