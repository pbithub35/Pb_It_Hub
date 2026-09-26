import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  freeResources,
  getFreeResourceBySlug,
} from "@/data/freeResources";
import { createPageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { BackButton } from "@/components/ui/BackButton";
import { CareerGuidanceCTA } from "@/components/learn-build";

export function generateStaticParams() {
  return freeResources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getFreeResourceBySlug(slug);
  if (!resource) return {};

  return createPageMetadata({
    title: resource.seo.title,
    description: resource.seo.description,
    path: `/learn-and-build/resources/${resource.slug}`,
  });
}

export default async function ResourceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getFreeResourceBySlug(slug);
  if (!resource) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Learn or Buy", path: "/learn-and-build" },
          { name: "Resources", path: "/learn-and-build/resources" },
          {
            name: resource.title,
            path: `/learn-and-build/resources/${resource.slug}`,
          },
        ])}
      />

      <article className="section-pad">
        <Container className="max-w-3xl">
          <BackButton
            href="/learn-and-build/resources"
            label="Back to resources"
            tone="dark"
          />
          <p className="eyebrow text-[color:var(--learn-accent-secondary)]">
            {resource.category}
          </p>
          <h1 className="mt-3 font-display text-[length:var(--text-4xl)] text-white">
            {resource.content.h1}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-200">
            {resource.content.intro}
          </p>

          <div className="mt-10 space-y-8">
            {resource.content.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl text-white">
                  {section.heading}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 md:text-base">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-2">
            {resource.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-700/80 bg-slate-800/80 px-3 py-1 text-[11px] text-slate-200 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-14">
            <CareerGuidanceCTA />
          </div>
        </Container>
      </article>
    </>
  );
}
