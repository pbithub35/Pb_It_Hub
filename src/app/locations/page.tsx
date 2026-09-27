import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTASection } from "@/components/sections/Contact";
import { locations, locationRegions } from "@/data/locations";
import { STRINGS } from "@/config/strings";

export const metadata: Metadata = createPageMetadata({
  title: "Pathankot, Punjab, Jammu & Himachal",
  description:
    "City pages for websites and college projects across Pathankot, Punjab, Jammu and Himachal.",
  path: "/locations",
  keywords: [
    "website company Pathankot",
    "final year projects Punjab",
    "student projects Jammu Himachal",
  ],
});

export default function LocationsIndexPage() {
  return (
    <>
      <div className="surface-light page-shell">
        <Container wide>
          <SectionHeading
            tone="light"
            eyebrow="Locations"
            title="Pathankot home base — Punjab, Jammu & Himachal"
            description="City pages for businesses and college students we serve. Pick your city for local context, then start a project or browse student packages."
          />

          <div className="mt-6 space-y-8 md:mt-8 md:space-y-10">
            {locationRegions.map((region) => {
              const cities = locations.filter((l) => l.region === region.id);
              if (!cities.length) return null;

              return (
                <section key={region.id}>
                  <h2 className="heading-section">
                    {region.label}
                  </h2>
                  <ul className="mt-5 space-y-3 md:mt-6 md:space-y-3.5">
                    {cities.map((city) => (
                      <li key={city.slug}>
                        <Link
                          href={`/locations/${city.slug}`}
                          className="flex flex-col gap-2 rounded-[1.35rem] border border-navy/10 bg-off-white px-5 py-5 transition hover:border-navy/20 hover:bg-white md:flex-row md:items-center md:justify-between md:px-6 md:py-6"
                        >
                          <div>
                            <p className="font-display text-lg font-semibold text-ink md:text-xl">
                              {city.name}
                              {city.isHq ? (
                                <span className="ml-2 text-xs font-sans uppercase tracking-[0.14em] text-blue">
                                  HQ
                                </span>
                              ) : null}
                            </p>
                            <p className="mt-1.5 max-w-2xl text-sm text-muted-strong">
                              {city.blurb}
                            </p>
                          </div>
                          <span className="text-xs uppercase tracking-[0.16em] text-blue">
                            View city
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </Container>
      </div>
      <ContactCTASection />
    </>
  );
}
