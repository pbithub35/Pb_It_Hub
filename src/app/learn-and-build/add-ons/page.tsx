import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SimpleAddOnsSection } from "@/components/learn-build";

export const metadata: Metadata = createPageMetadata({
  title: "Learning Add-ons",
  description:
    "Add 1-to-1 sessions, project knowledge transfer, practical preparation or free career guidance.",
  path: "/learn-and-build/add-ons",
});

export default function AddOnsPage() {
  return (
    <section className="page-shell">
      <Container wide>
        <SectionHeading
          eyebrow="Add-ons"
          title="Optional learning support"
          description="Select what you need — offers show as % OFF or FREE. Prices stay private."
        />
        <div className="mt-5 md:mt-6">
          <SimpleAddOnsSection />
        </div>
      </Container>
    </section>
  );
}
