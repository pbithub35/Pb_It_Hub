import type { Metadata } from "next";
import { createPageMetadata, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { STRINGS } from "@/config/strings";

export const metadata: Metadata = createPageMetadata({
  title: "Student & Business FAQ",
  description:
    "Answers on student project source code, viva help, pricing and custom software from Pathankot.",
  path: "/faq",
  keywords: [
    "PB IT HUB FAQ",
    "student projects FAQ",
    "final year projects BCA MCA",
    "website company Pathankot FAQ",
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
    <div className="page-shell min-h-[100svh]">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLd data={faqJsonLd(faqData)} />

      <Container wide className="max-w-5xl">

        <SectionHeading
          eyebrow={STRINGS.faq.eyebrow}
          title={STRINGS.faq.title}
          description={STRINGS.faq.description}
        />

        <FaqAccordion />
      </Container>
    </div>
  );
}
