import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms for using PB IT HUB website, business services, and Learn or Buy student offerings.",
  path: "/terms",
});

const updatedOn = "27 September 2026";

const sections = [
  {
    id: "agreement",
    title: "1. Agreement",
    content: (
      <>
        <p>
          By using the {siteConfig.name} website (
          <Link href="/" className="text-blue underline-offset-2 hover:underline">
            {siteConfig.url}
          </Link>
          ) or requesting our services, you agree to these Terms &amp;
          Conditions. If you do not agree, do not use the site or submit
          requests.
        </p>
        <p>
          <strong>Operator:</strong> {siteConfig.legalName}
          <br />
          <strong>Location:</strong> {siteConfig.location}, {siteConfig.region}
          <br />
          <strong>Contact:</strong>{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-blue underline-offset-2 hover:underline"
          >
            {siteConfig.email}
          </a>{" "}
          · WhatsApp +{siteConfig.whatsapp}
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "2. What we offer",
    content: (
      <>
        <p>{siteConfig.name} provides:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong>Business services</strong> — websites, SaaS, mobile apps,
            CRM, AI tooling and related digital product work
          </li>
          <li>
            <strong>Learn or Buy (students)</strong> — academic / practical
            project source code, optional mentoring / add-ons, and free career
            guidance where offered
          </li>
        </ul>
        <p>
          Website content is informational. Final scope, timeline, deliverables
          and pricing are confirmed in writing (usually WhatsApp or email)
          before paid work or source delivery begins.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "3. Eligibility & accounts",
    content: (
      <>
        <p>
          You must be able to enter a binding agreement under applicable law. If
          you request services on behalf of a business or college group, you
          confirm you are authorized to do so.
        </p>
        <p>
          You agree to provide accurate contact details. We may refuse or pause
          service if information appears fraudulent, abusive or incomplete.
        </p>
      </>
    ),
  },
  {
    id: "student-projects",
    title: "4. Student projects & source code",
    content: (
      <>
        <p>
          Learn or Buy projects are learning materials and starter codebases
          intended to help students understand real-world structure, customize
          features and prepare for viva / practicals.
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            You are responsible for understanding college / university academic
            integrity rules before purchasing or submitting any project.
          </li>
          <li>
            Source code is licensed for personal learning and authorized
            academic use as agreed at purchase — not for unlimited resale or
            redistribution as your own commercial product catalog.
          </li>
          <li>
            Delivery typically happens after confirmation and payment via the
            channel we agree (often WhatsApp). Setup support depends on the
            package or add-on you select.
          </li>
          <li>
            Customization timelines depend on scope. Estimates are not hard
            deadlines unless we confirm them in writing.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "mentoring",
    title: "5. Mentoring, KT & career guidance",
    content: (
      <>
        <p>
          Optional add-ons (sessions, knowledge transfer, practical / viva prep)
          and free career guidance are educational. They are not a guarantee of
          grades, placements, internships or hiring outcomes.
        </p>
        <p>
          Session slots are scheduled by mutual availability. Missed sessions
          without reasonable notice may be forfeited unless we agree otherwise
          in writing.
        </p>
      </>
    ),
  },
  {
    id: "business",
    title: "6. Business engagements",
    content: (
      <>
        <p>
          Business projects may include discovery, design, development,
          deployment and support. A separate proposal, statement of work or chat
          confirmation may define:
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Scope and out-of-scope items</li>
          <li>Milestones, acceptance criteria and revision limits</li>
          <li>Fees, payment schedule and taxes if applicable</li>
          <li>Ownership / license of custom work after full payment</li>
        </ul>
        <p>
          Change requests outside the agreed scope may require revised pricing
          and timelines.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "7. Payments, pricing & refunds",
    content: (
      <>
        <p>
          Prices shown on marketing pages (if any) are indicative. Final amounts
          are confirmed before payment. We do not collect card details on this
          website.
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            Student source-code deliveries are generally non-refundable once
            download / delivery links or files have been shared, unless we fail
            to deliver the agreed package.
          </li>
          <li>
            Mentoring / session fees may be refundable only if we cancel and
            cannot reschedule, or as otherwise agreed in writing.
          </li>
          <li>
            Business project deposits are applied to the engagement; unused
            portions are handled per the written agreement for that project.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "ip",
    title: "8. Intellectual property",
    content: (
      <>
        <p>
          Website text, branding, layouts and original marketing materials
          belong to {siteConfig.name} or respective owners. You may not copy the
          site design or content for competing commercial use without
          permission.
        </p>
        <p>
          For custom business software, ownership / license terms are defined in
          the project agreement after full payment. Third-party libraries,
          fonts, stock assets and open-source components remain under their own
          licenses.
        </p>
        <p>
          Student project packages remain our IP (or licensed IP) except for the
          limited license granted to you for learning / academic use.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "9. Acceptable use",
    content: (
      <>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Abuse forms, spam our contacts or attempt unauthorized access</li>
          <li>
            Use delivered code for illegal activity, malware or harmful systems
          </li>
          <li>
            Resell unmodified student packages as a commercial marketplace
            product without written permission
          </li>
          <li>
            Misrepresent our work as exclusively your original authorship when
            college rules require disclosure of assistance
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "10. Disclaimers",
    content: (
      <>
        <p>
          The website and materials are provided on an &ldquo;as is&rdquo; and
          &ldquo;as available&rdquo; basis. We aim for accuracy but do not
          warrant that every description, timeline estimate or third-party
          integration will be error-free or uninterrupted.
        </p>
        <p>
          Academic results, exam outcomes and employment decisions depend on
          many factors outside our control.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "11. Limitation of liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by law, {siteConfig.name} is not
          liable for indirect, incidental, special or consequential damages
          (including loss of profits, data or academic opportunity) arising from
          use of the site or services.
        </p>
        <p>
          Our total liability for a paid engagement is limited to the fees you
          actually paid us for that specific engagement in the three months
          before the claim, unless a written contract states otherwise.
        </p>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "12. Third-party services",
    content: (
      <>
        <p>
          WhatsApp, Instagram, Google, hosting providers and other linked
          services have their own terms and privacy policies. Your use of those
          platforms is governed by them, not by this page alone.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "13. Privacy",
    content: (
      <>
        <p>
          How we handle personal information is described in our{" "}
          <Link
            href="/privacy"
            className="text-blue underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>
          . By using the site, you also acknowledge that policy.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "14. Changes to these terms",
    content: (
      <>
        <p>
          We may update these Terms &amp; Conditions periodically. The
          &ldquo;Last updated&rdquo; date will change when we do. Continued use
          after updates constitutes acceptance of the revised terms, except
          where applicable law requires a different process for existing paid
          contracts.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "15. Governing law",
    content: (
      <>
        <p>
          These terms are governed by the laws of India. Courts in or with
          jurisdiction over {siteConfig.location}, {siteConfig.region} shall
          have exclusive jurisdiction, subject to mandatory consumer protections
          that may apply.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "16. Contact",
    content: (
      <>
        <p>
          Questions about these terms:{" "}
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
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="surface-light page-shell">
      <Container className="max-w-3xl">
        <p className="eyebrow text-blue">Legal</p>
        <h1 className="heading-page mt-2">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-muted-strong">
          Last updated: {updatedOn}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-strong">
          These terms cover use of the {siteConfig.name} website, business
          project work, and Learn or Buy student offerings.
        </p>

        <nav
          aria-label="Terms sections"
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
