import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import { createPageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectShowcase } from "@/components/work";
import { ContactCTASection } from "@/components/sections/Contact";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return createPageMetadata({
    title: project.title,
    description: project.description,
    path: `/work/${project.slug}`,
  });
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
          { name: project.title, path: `/work/${project.slug}` },
        ])}
      />
      <ProjectShowcase project={project} />
      <ContactCTASection />
    </>
  );
}
