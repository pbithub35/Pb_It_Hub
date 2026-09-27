import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How PB_IT_HUB collects, uses, stores and protects your information for business and student services.",
  path: "/privacy",
});

const updatedOn = "27 September 2026";

const sections = [
  {
    id: "who-we-are",
    title: "1. Who we are",
    content: (
      <>
        <p>
          This Privacy Policy explains how <strong>{siteConfig.name}</strong>{" "}
          (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses,
          stores and shares information when you visit{" "}
          <Link href="/" className="text-blue underline-offset-2 hover:underline">
            {siteConfig.url}
          </Link>
          , submit forms, message us on WhatsApp, or use our business or Learn
          or Buy student services.
        </p>
        <p>
          <strong>Business name:</strong> {siteConfig.legalName}
          <br />
          <strong>Location:</strong> {siteConfig.location}, {siteConfig.region}
          <br />
          <strong>Areas served:</strong> Pathankot, Punjab, Jammu, Himachal and
          other regions of India
          <br />
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-blue underline-offset-2 hover:underline"
          >
            {siteConfig.email}
          </a>
          <br />
          <strong>WhatsApp:</strong> +{siteConfig.whatsapp}
        </p>
      </>
    ),
  },
  {
    id: "scope",
    title: "2. Scope of this policy",
    content: (
      <>
        <p>This policy applies to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Our public website and all pages linked under our domain</li>
          <li>Contact / project inquiry forms and related WhatsApp handoff</li>
          <li>
            Learn or Buy flows (project selection, add-ons, packages, career
            guidance requests)
          </li>
          <li>
            Communications by email, phone or WhatsApp that relate to our
            services
          </li>
        </ul>
        <p>
          It does not cover third-party websites, app stores, payment apps, or
          college portals you may visit through external links.
        </p>
      </>
    ),
  },
  {
    id: "collect",
    title: "3. Information we collect",
    content: (
      <>
        <p>
          <strong>A. Information you provide</strong>
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Name, email address, phone / WhatsApp number</li>
          <li>
            Project brief, selected service, student project, add-ons or package
            choices
          </li>
          <li>Messages, attachments and notes you send us</li>
          <li>
            Optional academic context (course, college, deadline) when relevant
            to student work
          </li>
        </ul>
        <p className="mt-3">
          <strong>B. Information collected automatically</strong>
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            Basic device and browser data (for example browser type, OS, screen
            size)
          </li>
          <li>Pages visited, referral source and approximate timestamps</li>
          <li>
            IP address and standard server / hosting logs (for security and
            reliability)
          </li>
        </ul>
        <p className="mt-3">
          We do <strong>not</strong> collect payment card numbers on this
          website. Payments, if any, are handled through separate, agreed
          channels (for example UPI or bank transfer) confirmed in writing.
        </p>
      </>
    ),
  },
  {
    id: "use",
    title: "4. How we use your information",
    content: (
      <>
        <p>We use personal information to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Respond to business project inquiries and prepare proposals</li>
          <li>
            Process Learn or Buy requests (source code delivery, mentoring,
            viva prep, career guidance)
          </li>
          <li>
            Continue conversations on WhatsApp / email with your selected items
            and contact details
          </li>
          <li>Improve website content, performance and service quality</li>
          <li>Prevent abuse, spam and unauthorized access</li>
          <li>Comply with applicable Indian law and lawful requests</li>
        </ul>
        <p>
          We do not sell your personal information to data brokers or use it for
          unrelated advertising networks.
        </p>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "5. Legal basis / reasons for processing",
    content: (
      <>
        <p>Where applicable, we process information because:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>You asked us to provide a quote, service or student package</li>
          <li>
            Processing is needed to take steps before a contract or to perform
            an agreed engagement
          </li>
          <li>
            We have a legitimate interest in securing our site and improving
            delivery
          </li>
          <li>We must meet a legal obligation</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "6. Sharing of information",
    content: (
      <>
        <p>We may share information only with:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            Service providers that help us operate the site (hosting, email,
            analytics) under appropriate safeguards
          </li>
          <li>
            Messaging platforms you choose to use (for example WhatsApp) when
            you start or continue a chat with us
          </li>
          <li>
            Professional advisers or authorities when required by law or to
            protect rights and safety
          </li>
        </ul>
        <p>
          Team members working on your project may access only what they need to
          deliver the work. We do not publish your private briefs publicly.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "7. Cookies, analytics and similar tech",
    content: (
      <>
        <p>
          Our site may use essential cookies / local storage for basic
          functionality (for example remembering UI preferences). If analytics
          tools are enabled, they may collect aggregated usage metrics to help
          us understand which pages are useful.
        </p>
        <p>
          You can control cookies through your browser settings. Blocking some
          cookies may affect site features.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "8. Data retention",
    content: (
      <>
        <p>
          We keep inquiry and project-related records for as long as needed to
          deliver the service, resolve follow-ups, maintain business records, or
          meet legal / accounting requirements. When information is no longer
          needed, we delete or anonymize it where reasonably possible.
        </p>
        <p>
          WhatsApp and email threads may also remain in those platforms according
          to their own retention settings until you or we delete them.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "9. Security",
    content: (
      <>
        <p>
          We use reasonable technical and organizational measures to protect
          personal information (access controls, HTTPS where available, limited
          internal access). No method of transmission or storage is 100% secure;
          if you suspect unauthorized use of your data with us, contact{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-blue underline-offset-2 hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "10. Your choices and rights",
    content: (
      <>
        <p>Subject to applicable law, you may request to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Access the personal information we hold about you</li>
          <li>Correct inaccurate information</li>
          <li>Delete information that is no longer required</li>
          <li>Withdraw consent for optional communications</li>
        </ul>
        <p>
          Email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-blue underline-offset-2 hover:underline"
          >
            {siteConfig.email}
          </a>{" "}
          with the subject &ldquo;Privacy request&rdquo;. We may need to verify
          your identity before acting on a request.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "11. Children's privacy",
    content: (
      <>
        <p>
          Our business services are intended for adults and organizations.
          Student offerings are aimed at college / university learners. We do
          not knowingly collect personal information from children under 13. If
          you believe a child has provided data, contact us and we will take
          appropriate steps to remove it.
        </p>
      </>
    ),
  },
  {
    id: "international",
    title: "12. Cross-border processing",
    content: (
      <>
        <p>
          We primarily operate from India. Infrastructure providers (hosting,
          email, messaging) may process data in other countries. By using our
          site or contacting us, you understand that information may be
          processed in locations outside your state of residence, subject to
          applicable safeguards.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "13. Changes to this policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time. The
          &ldquo;Last updated&rdquo; date at the top will change when we do. Continued
          use of the site after updates means you accept the revised policy,
          unless applicable law requires additional notice or consent.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "14. Contact",
    content: (
      <>
        <p>
          Questions about privacy or this policy:{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-blue underline-offset-2 hover:underline"
          >
            {siteConfig.email}
          </a>{" "}
          · WhatsApp +{siteConfig.whatsapp} ·{" "}
          <Link
            href="/contact"
            className="text-blue underline-offset-2 hover:underline"
          >
            Contact page
          </Link>
          .
        </p>
        <p>
          Related:{" "}
          <Link
            href="/terms"
            className="text-blue underline-offset-2 hover:underline"
          >
            Terms &amp; Conditions
          </Link>
          .
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="surface-light page-shell">
      <Container className="max-w-3xl">
        <p className="eyebrow text-blue">Legal</p>
        <h1 className="heading-page mt-2">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-strong">
          Last updated: {updatedOn}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-strong">
          This page explains how {siteConfig.name} handles personal information
          for website visitors, business clients and students using Learn or
          Buy.
        </p>

        <nav
          aria-label="Privacy policy sections"
          className="mt-6 rounded-2xl border border-navy/10 bg-off-white p-4"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
            On this page
          </p>
          <ol className="mt-2 columns-1 gap-x-8 text-sm text-blue sm:columns-2">
            {sections.map((section) => (
              <li key={section.id} className="break-inside-avoid py-0.5">
                <a
                  href={`#${section.id}`}
                  className="underline-offset-2 hover:underline"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-strong">
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 space-y-3"
            >
              <h2 className="font-display text-xl font-semibold text-ink">
                {section.title}
              </h2>
              {section.content}
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
