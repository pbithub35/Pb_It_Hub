import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/data/services";
import { projects } from "@/data/projects";
import { processSteps } from "@/data/process";
import { relatedServicesFor } from "@/data/businessSeo";
import { createPageMetadata, breadcrumbJsonLd, serviceJsonLd, absoluteUrl } from "@/lib/seo";
import { resolveImageSrc } from "@/lib/media";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ContactCTASection } from "@/components/sections/Contact";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.title,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedWork = projects
    .filter((project) =>
      project.technologies.some((tech) =>
        service.technologies.some(
          (item) => item.toLowerCase() === tech.toLowerCase(),
        ),
      ),
    )
    .slice(0, 3);

  const relatedServices = relatedServicesFor(service.slug, services, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd
        data={serviceJsonLd([
          {
            name: service.title,
            description: service.description,
            url: absoluteUrl(`/services/${service.slug}`),
          },
        ])}
      />

      <section className="surface-light page-shell !pb-8 md:!pb-10">
        <Container wide>
          <p className="eyebrow text-blue">Service {service.number}</p>
          <h1 className="heading-page mt-2 max-w-4xl">
            {service.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-strong">
            {service.description}
          </p>
          <div className="mt-5">
            <Button href="/contact">Start a Project</Button>
          </div>
          <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-[1.25rem] border border-navy/10">
            <Image
              src={resolveImageSrc(service.visualKey)}
              alt={`PB IT HUB ${service.shortTitle} visual`}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </Container>
      </section>

      <section className="surface-light section-pad">
        <Container wide className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div>
            <h2 className="heading-section">Capabilities</h2>
            <ul className="mt-4 space-y-2.5">
              {service.capabilities.map((item) => (
                <li
                  key={item}
                  className="border-b border-navy/8 pb-2.5 text-sm text-muted-strong"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="heading-section">Technology</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-navy/10 bg-off-white px-3 py-1.5 text-sm text-ink"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="surface-soft section-pad">
        <Container wide>
          <h2 className="heading-section">Process</h2>
          <ol className="mt-5 grid gap-3 md:grid-cols-5 md:gap-4">
            {processSteps.map((step) => (
              <li
                key={step.number}
                className="rounded-xl border border-navy/8 bg-white p-4"
              >
                <p className="text-xs tracking-[0.14em] text-blue">{step.number}</p>
                <p className="mt-2 font-display text-base font-semibold text-ink">{step.title}</p>
                <p className="mt-1.5 text-sm text-muted-strong">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {relatedWork.length ? (
        <section className="surface-light section-pad !pt-0">
          <Container wide>
            <h2 className="heading-section">Relevant work</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-3 md:gap-4">
              {relatedWork.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/work/${project.slug}`}
                    className="block rounded-xl border border-navy/10 bg-off-white p-5 transition hover:border-navy/20"
                  >
                    <p className="text-xs uppercase tracking-[0.14em] text-muted-strong">
                      {project.category}
                    </p>
                    <p className="mt-2 font-display text-lg font-semibold text-ink">
                      {project.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="surface-soft section-pad !pt-0">
        <Container wide>
          <h2 className="heading-section">Related services</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-3 md:gap-4">
            {relatedServices.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className="block rounded-xl border border-navy/10 bg-white p-5 transition hover:border-navy/20"
                >
                  <p className="text-xs uppercase tracking-[0.14em] text-blue">
                    {item.number}
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold text-ink">
                    {item.title}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-strong">
                    {item.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactCTASection />
    </>
  );
}
