import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OfficeMap } from "@/components/ui/OfficeMap";
import { ProjectInquiryForm } from "@/components/forms/ProjectInquiryForm";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Pathankot Team",
  description:
    "Start a website, app or student project with PB_IT_HUB in Pathankot — WhatsApp-friendly support.",
  path: "/contact",
});

const contactPoints = [
  {
    label: "WhatsApp",
    value: `+${siteConfig.whatsapp}`,
    href: buildWhatsAppUrl("Hi PB_IT_HUB — I’d like to discuss a project."),
    hint: "Fastest for briefs & student orders",
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    hint: "Best for docs & longer proposals",
  },
  {
    label: "Location",
    value: `${siteConfig.location}, ${siteConfig.region}`,
    href: siteConfig.maps.url,
    hint: "Open in Google Maps · Punjab, Jammu & Himachal",
  },
];

export default function ContactPage() {
  return (
    <div className="surface-light page-shell min-h-[100svh]">
      <Container wide>
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Have an idea worth building?"
              description="Share a short brief and we will follow up to explore scope, approach and next steps."
            />

            <ul className="mt-6 space-y-3">
              {contactPoints.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      item.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="block rounded-2xl border border-navy/10 bg-white px-4 py-3.5 transition hover:border-blue/25 hover:bg-off-white"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue">
                      {item.label}
                    </p>
                    <p className="mt-1 font-display text-sm font-semibold text-ink md:text-base">
                      {item.value}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">{item.hint}</p>
                  </a>
                </li>
              ))}
            </ul>

            <OfficeMap className="mt-6" />

            <p className="mt-5 text-sm leading-relaxed text-muted-strong">
              Serving{" "}
              {siteConfig.areasServed.filter((a) => a !== "India").join(", ")}.{" "}
              <Link
                href="/locations"
                className="text-blue underline-offset-4 hover:underline"
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
                    className="text-blue underline-offset-4 hover:underline"
                  >
                    Google Business Profile
                  </a>
                </>
              ) : null}
            </p>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-paper p-5 md:p-7">
            <div className="mb-5">
              <p className="eyebrow text-blue">Project brief</p>
              <h2 className="mt-1.5 font-display text-xl font-semibold text-ink md:text-[length:var(--text-3xl)]">
                Tell us what you want to build
              </h2>
              <p className="mt-2 text-sm text-muted-strong">
                Required fields marked with *. We reply on WhatsApp.
              </p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-off-white/80 p-4 md:p-6">
              <ProjectInquiryForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
