import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackButton } from "@/components/ui/BackButton";
import { ProjectAccordion } from "@/components/learn-build";

export const metadata: Metadata = createPageMetadata({
  title: "Final Year Projects with Source Code",
  description:
    "BCA, MCA and B.Tech projects in React, Flutter, Python and more — full source code and viva support.",
  path: "/learn-and-build/projects",
  keywords: [
    "final year projects BCA MCA BTech",
    "student projects source code",
    "React Flutter college projects",
    "buy student projects Pathankot",
  ],
});

export default function StudentProjectsPage() {
  return (
    <section className="section-pad">
      <Container wide>
        <BackButton href="/learn-and-build" label="Back to Learn or Buy" tone="dark" />
        <SectionHeading
          tone="dark"
          eyebrow="Projects"
          title="Final-year projects with source code"
          description="BCA, MCA and B.Tech packages — expand for details, then order on WhatsApp."
        />
        <div className="mt-8 md:mt-10">
          <ProjectAccordion />
        </div>
      </Container>
    </section>
  );
}
