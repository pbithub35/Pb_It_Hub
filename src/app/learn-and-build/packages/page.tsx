import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SimplePackageSection } from "@/components/learn-build";

export const metadata: Metadata = createPageMetadata({
  title: "Complete Project Package",
  description:
    "Get a selected project with 1-to-1 sessions, project knowledge transfer and practical preparation.",
  path: "/learn-and-build/packages",
});

export default function PackagesPage() {
  return (
    <section className="page-shell">
      <Container wide>
        <SectionHeading
          eyebrow="Package"
          title="Get everything together"
          description="One simple package — selected project plus learning support. No prices on the page."
        />
        <div className="mt-5 md:mt-6">
          <SimplePackageSection />
        </div>
      </Container>
    </section>
  );
}
