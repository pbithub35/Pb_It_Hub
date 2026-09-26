import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackButton } from "@/components/ui/BackButton";
import { ProjectAccordion } from "@/components/learn-build";

export const metadata: Metadata = createPageMetadata({
  title: "Student Projects",
  description:
    "Choose a practical project and learn by building with real technologies.",
  path: "/learn-and-build/projects",
});

export default function StudentProjectsPage() {
  return (
    <section className="section-pad">
      <Container wide>
        <BackButton href="/learn-and-build" label="Back to Learn or Buy" tone="dark" />
        <SectionHeading
          tone="dark"
          eyebrow="Projects"
          title="Choose a project to buy"
          description="Expand a project for details. Source code on the right — add-ons below — buy at the end."
        />
        <div className="mt-8 md:mt-10">
          <ProjectAccordion />
        </div>
      </Container>
    </section>
  );
}
