import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackButton } from "@/components/ui/BackButton";
import { ProjectInquiryForm } from "@/components/forms/ProjectInquiryForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Pathankot Team",
  description:
    "Start a website, app or student project with PB_IT_HUB in Pathankot — WhatsApp-friendly support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="surface-dark pt-24 pb-12 md:pt-28 md:pb-14 min-h-[100svh]">
      <Container wide>
        <BackButton href="/" label="Back to home" tone="dark" />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Contact"
              title="Have an idea worth building?"
              description="Share a short brief and we will follow up to explore scope, approach and next steps."
            />
            <p className="mt-5 text-sm leading-relaxed text-white/45">
              Based in {siteConfig.location}, {siteConfig.region}. Serving{" "}
              {siteConfig.areasServed.filter((a) => a !== "India").join(", ")}.{" "}
              <Link
                href="/locations"
                className="text-cyan/80 underline-offset-4 hover:text-cyan hover:underline"
              >
                City pages
              </Link>
              {siteConfig.social.google ? (
                <>
                  {" · "}
                  <a
                    href={siteConfig.social.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan/80 underline-offset-4 hover:text-cyan hover:underline"
                  >
                    Google Business Profile
                  </a>
                </>
              ) : null}
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <ProjectInquiryForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
