import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackButton } from "@/components/ui/BackButton";
import { FreeResourceCard } from "@/components/learn-build/FreeResourceCard";
import { getPublicFreeResources } from "@/data/freeResources";

export const metadata: Metadata = createPageMetadata({
  title: "Free Source Code for BCA & MCA",
  description:
    "Free practical source code for BCA, MCA, B.Tech and Diploma labs — plus project ideas and viva guides.",
  path: "/learn-and-build/resources",
  keywords: [
    "free source code BCA practical",
    "free source code MCA project",
    "B.Tech CSE practical source code",
    "college project free code",
  ],
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
          title="Free source code & practical guides"
          description="Copy-ready starters for BCA, MCA, B.Tech, B.Sc and Diploma practicals — plus project ideas, viva prep and career guidance."
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
