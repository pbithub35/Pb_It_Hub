import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  freeResources,
  getFreeResourceBySlug,
} from "@/data/freeResources";
import { createPageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CareerGuidanceCTA } from "@/components/learn-build";
import { ResourceCodeBlock } from "@/components/learn-build/ResourceCodeBlock";

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

      <article className="page-shell">
        <Container className="max-w-3xl">
          <p className="eyebrow text-blue">
            {resource.category}
          </p>
          <h1 className="heading-page mt-2">
            {resource.content.h1}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-strong">
            {resource.content.intro}
          </p>

          <div className="mt-6 space-y-6">
            {resource.content.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-xl font-semibold text-ink">
                  {section.heading}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-strong">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          {resource.codeBlocks?.length ? (
            <div className="mt-12 space-y-6">
              <h2 className="font-display text-2xl text-navy">
                Free source code
              </h2>
              <p className="text-sm text-muted">
                Copy the files below into your project folder and run as
                described above.
              </p>
              {resource.codeBlocks.map((block) => (
                <ResourceCodeBlock key={block.filename} block={block} />
              ))}
            </div>
          ) : null}

          {resource.upgradePath ? (
            <div className="mt-10 rounded-xl border border-blue/20 bg-blue/[0.04] p-5">
              <p className="text-sm leading-relaxed text-muted-strong">
                Need a complete final-year / major project with full source
                code, docs and viva support?
              </p>
              <div className="mt-4">
                <Button href={resource.upgradePath} variant="primary" size="sm">
                  Browse full projects
                </Button>
              </div>
            </div>
          ) : null}

          <div className="mt-12 flex flex-wrap gap-2">
            {resource.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-navy/10 bg-white px-3 py-1 text-[11px] font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted">
            More free guides:{" "}
            <Link
              href="/learn-and-build/resources"
              className="text-blue underline-offset-4 hover:underline"
            >
              all resources
            </Link>
          </p>

          <div className="mt-14">
            <CareerGuidanceCTA />
          </div>
        </Container>
      </article>
    </>
  );
}
