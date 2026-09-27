import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTASection } from "@/components/sections/Contact";
import { Button } from "@/components/ui/Button";
import { STRINGS } from "@/config/strings";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "About PB IT HUB Pathankot",
  description:
    "Pathankot technology company building websites, apps and student projects for Punjab, Jammu and Himachal.",
  path: "/about",
});

const focusAreas = [
  {
    title: "Business products",
    body: "Websites, SaaS platforms, mobile apps, CRM and AI workflows built around real operations — not template demos.",
  },
  {
    title: "Student learning",
    body: "Final-year and practical projects with source code, optional mentoring, viva prep and free career guidance.",
  },
  {
    title: "Local + remote delivery",
    body: "Based in Pathankot with clear WhatsApp-first communication for Punjab, Jammu, Himachal and beyond.",
  },
];

const values = [
  {
    title: "Clarity over noise",
    body: "We keep scope honest, timelines realistic and communication simple so teams know what ships and why.",
  },
  {
    title: "Useful by default",
    body: "Every build should solve a daily workflow — for a shop, clinic, campus project or growing product team.",
  },
  {
    title: "Teach while we ship",
    body: "For students, source code is only the start. We help you understand, customize and defend the work.",
  },
  {
    title: "Long-term thinking",
    body: "We design systems that can grow — clean structure, maintainable code and space for the next feature.",
  },
];

const howWeWork = [
  {
    step: "01",
    title: "Discover",
    body: "Understand the business, users, constraints and success criteria before writing a line of code.",
  },
  {
    step: "02",
    title: "Design",
    body: "Shape the experience, architecture and delivery plan so engineering starts with direction.",
  },
  {
    step: "03",
    title: "Build",
    body: "Engineer, test and iterate in focused cycles with visible progress and clear checkpoints.",
  },
  {
    step: "04",
    title: "Launch & support",
    body: "Ship to production, hand over documentation, and stay available for improvements when needed.",
  },
];

const whoWeServe = [
  "Local businesses that need a credible website or booking system",
  "Founders building SaaS, dashboards or internal tools",
  "Teams adding AI assistants, automation or CRM workflows",
  "BCA, MCA and B.Tech students needing real projects with source code",
];

export default function AboutPage() {
  return (
    <>
      <section className="surface-light page-shell">
        <Container wide className="max-w-5xl">
          <SectionHeading
            tone="light"
            eyebrow={STRINGS.about.eyebrow}
            title={STRINGS.about.title}
            description="PB IT HUB is a Pathankot-based technology partner for digital products, business platforms and student project learning — built with practical engineering, not empty buzzwords."
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-3 md:mt-8 md:gap-4">
            {focusAreas.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-navy/10 bg-white p-5"
              >
                <h2 className="font-display text-base font-semibold text-ink md:text-lg">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-strong">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface/50">
        <Container wide className="max-w-5xl">
          <p className="eyebrow text-blue">Our story</p>
          <h2 className="heading-section mt-2">
            Built in Pathankot for real work across North India
          </h2>
          <div className="mt-5 max-w-3xl space-y-3.5 text-sm leading-relaxed text-muted-strong md:text-base">
            <p>
              {siteConfig.name} started with a simple belief: businesses and
              students in Pathankot, Punjab, Jammu and Himachal deserve the same
              quality of product engineering as metro markets — delivered with
              clear communication and practical pricing.
            </p>
            <p>
              We partner with teams to design and engineer systems around real
              workflows: websites that convert, apps that people actually use,
              SaaS platforms that scale, and AI tools that remove repetitive
              work. The goal is always the same — useful, durable technology
              ready to grow.
            </p>
            <p>
              Alongside business work, we help college students ship final-year
              and practical projects with complete source code, optional
              mentoring and viva preparation so they can learn by building —
              not by copying blindly.
            </p>
            <p>
              Based in {siteConfig.location}, {siteConfig.region}.{" "}
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
      </section>

      <section className="section-pad bg-paper">
        <Container wide className="max-w-5xl">
          <p className="eyebrow text-blue">What we believe</p>
          <h2 className="heading-section mt-2">Principles that shape every engagement</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:gap-4">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-navy/10 bg-off-white p-5"
              >
                <h3 className="font-display text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-strong">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad bg-surface/50">
        <Container wide className="max-w-5xl">
          <p className="eyebrow text-blue">How we work</p>
          <h2 className="heading-section mt-2">A clear path from idea to launch</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
            {howWeWork.map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-navy/10 bg-white p-5"
              >
                <p className="text-xs font-semibold tracking-[0.14em] text-blue">
                  {item.step}
                </p>
                <h3 className="mt-2 font-display text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-strong">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-pad bg-paper">
        <Container wide className="max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="eyebrow text-blue">Who we help</p>
              <h2 className="heading-section mt-2">
                Businesses shipping products. Students shipping projects.
              </h2>
              <ul className="mt-5 space-y-2.5">
                {whoWeServe.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted-strong"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-navy/10 bg-off-white p-6">
              <p className="eyebrow text-blue">Visit / talk</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                {siteConfig.location}, {siteConfig.region}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-strong">
                Prefer WhatsApp for quick briefs. Prefer email for longer
                documents. Prefer a call when scope needs a conversation.
              </p>
              <dl className="mt-4 space-y-2 text-sm text-muted-strong">
                <div className="flex flex-wrap gap-x-2">
                  <dt className="font-semibold text-ink">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-blue underline-offset-4 hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="font-semibold text-ink">WhatsApp</dt>
                  <dd>+{siteConfig.whatsapp}</dd>
                </div>
              </dl>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <Button href="/contact" size="md">
                  Start a Project
                </Button>
                <Button href="/learn-and-build" variant="secondary" size="md">
                  Learn or Buy
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ContactCTASection />
    </>
  );
}
