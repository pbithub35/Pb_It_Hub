import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackButton } from "@/components/ui/BackButton";
import { ProjectInquiryForm } from "@/components/forms/ProjectInquiryForm";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Start a project with PB_IT_HUB. Tell us what you want to build.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="surface-dark pt-24 pb-12 md:pt-28 md:pb-14 min-h-[100svh]">
      <Container wide>
        <BackButton href="/" label="Back to home" tone="dark" />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <SectionHeading
            tone="dark"
            eyebrow="Contact"
            title="Have an idea worth building?"
            description="Share a short brief and we will follow up to explore scope, approach and next steps."
          />
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <ProjectInquiryForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
