import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackButton } from "@/components/ui/BackButton";
import { ProjectAccordion } from "@/components/learn-build";

export const metadata: Metadata = createPageMetadata({
  title: "Final Year Projects & Source Code for BCA, MCA, B.Tech Students",
  description:
    "Explore production-grade student projects with full source code, architecture diagrams, viva preparation, and setup support. Available in React, Flutter, Python, Node.js, AI/ML, PHP, and Java.",
  path: "/learn-and-build/projects",
  keywords: [
    "final year projects BCA MCA BTech",
    "student projects source code",
    "React student projects",
    "Flutter college projects",
    "Python AI ML final year project",
    "college project source code download",
    "buy student projects",
    "PB_IT_HUB projects",
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
