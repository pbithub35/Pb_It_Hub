import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackButton } from "@/components/ui/BackButton";
import { SimpleAddOnsSection } from "@/components/learn-build";

export const metadata: Metadata = createPageMetadata({
  title: "Learning Add-ons",
  description:
    "Add 1-to-1 sessions, project knowledge transfer, practical preparation or free career guidance.",
  path: "/learn-and-build/add-ons",
});

export default function AddOnsPage() {
  return (
    <section className="section-pad">
      <Container wide>
        <BackButton href="/learn-and-build" label="Back to Learn or Buy" tone="dark" />
        <SectionHeading
          tone="dark"
          eyebrow="Add-ons"
          title="Optional learning support"
          description="Select what you need — offers show as % OFF or FREE. Prices stay private."
        />
        <div className="mt-10">
          <SimpleAddOnsSection />
        </div>
      </Container>
    </section>
  );
}
