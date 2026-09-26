import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackButton } from "@/components/ui/BackButton";
import { FreeResourceCard } from "@/components/learn-build/FreeResourceCard";
import { getPublicFreeResources } from "@/data/freeResources";

export const metadata: Metadata = createPageMetadata({
  title: "Free Coding Resources",
  description:
    "Free project ideas, viva prep, interview questions and career guides for students learning by building.",
  path: "/learn-and-build/resources",
});

export default function ResourcesPage() {
  const resources = getPublicFreeResources();

  return (
    <section className="section-pad">
      <Container wide>
        <BackButton href="/learn-and-build" label="Back to Learn or Buy" tone="dark" />
        <SectionHeading
          tone="dark"
          eyebrow="Free resources"
          title="Learn with practical guides"
          description="Project ideas, viva preparation, interview questions and career guidance written for real student search intent."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <FreeResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </Container>
    </section>
  );
}
