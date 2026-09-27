import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackButton } from "@/components/ui/BackButton";
import { ContactCTASection } from "@/components/sections/Contact";
import { STRINGS } from "@/config/strings";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "About PB_IT_HUB Pathankot",
  description:
    "Pathankot technology company building websites, apps and student projects for Punjab, Jammu and Himachal.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <div className="surface-light pt-24 pb-12 md:pt-28 md:pb-14">
        <Container wide className="max-w-4xl">
          <BackButton href="/" label={STRINGS.actions.backToHome} />
          <SectionHeading
            tone="light"
            eyebrow={STRINGS.about.eyebrow}
            title={STRINGS.about.title}
            description="PB_IT_HUB is a technology company focused on building digital products, business platforms, SaaS systems and AI-powered solutions for teams that want to move with clarity."
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-strong md:mt-8 md:space-y-4.5 md:text-lg">
            <p>
              We partner with businesses to design and engineer systems around
              real workflows — not generic templates. The goal is always the
              same: create technology that is useful, durable and ready to grow.
            </p>
            <p>
              From product discovery through design, engineering and launch, we
              stay close to the problem being solved and the people who will use
              the product every day.
            </p>
            <p>
              Based in {siteConfig.location}, {siteConfig.region}, we serve
              businesses and college students across Punjab, Jammu and Himachal.{" "}
              <Link
                href="/locations"
                className="text-blue underline-offset-4 hover:underline"
              >
                See cities we serve
              </Link>
              .
            </p>
          </div>
        </Container>
      </div>
      <ContactCTASection />
    </>
  );
}
