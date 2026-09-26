import type { Metadata } from "next";
import { createPageMetadata, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackButton } from "@/components/ui/BackButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { STRINGS } from "@/config/strings";

export const metadata: Metadata = createPageMetadata({
  title: "Frequently Asked Questions (FAQ) — Student Projects & Services",
  description: STRINGS.faq.description,
  path: "/faq",
  keywords: [
    "PB_IT_HUB FAQ",
    "student projects FAQ",
    "source code download questions",
    "final year projects BCA MCA BTech",
    "1-on-1 viva session help",
    "custom software development FAQ",
  ],
});

export default function FaqPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ];

  const faqData = STRINGS.faq.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <div className="min-h-[100svh] pt-24 pb-16 md:pt-28 md:pb-24">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={faqJsonLd(faqData)} />

      <Container wide className="max-w-5xl">
        <BackButton
          href="/"
          label={STRINGS.actions.backToHome}
          tone="dark"
        />

        <SectionHeading
          tone="dark"
          eyebrow={STRINGS.faq.eyebrow}
          title={STRINGS.faq.title}
          description={STRINGS.faq.description}
        />

        <FaqAccordion />
      </Container>
    </div>
  );
}
