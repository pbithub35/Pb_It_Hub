import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { BackButton } from "@/components/ui/BackButton";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using PB_IT_HUB website, business services, and Learn or Buy student offerings.",
  path: "/terms",
});

const updatedOn = "26 September 2026";

export default function TermsPage() {
  return (
    <div className="surface-light pt-28 pb-20">
      <Container className="max-w-3xl">
        <BackButton href="/" label="Back to home" />
        <h1 className="font-display text-4xl text-navy">Terms & Conditions</h1>
        <p className="mt-3 text-sm text-muted-strong">Last updated: {updatedOn}</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-navy/80 sm:text-base">
          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">1. Agreement</h2>
            <p>
              By using the {siteConfig.name} website (
              <Link href="/" className="text-blue underline-offset-2 hover:underline">
                {siteConfig.url}
              </Link>
              ) or requesting our services, you agree to these Terms &amp;
              Conditions. If you do not agree, please do not use the site or
              submit requests.
            </p>
            <p>
              <strong>Operator:</strong> {siteConfig.name}
              <br />
              <strong>Location:</strong> {siteConfig.location},{" "}
              {siteConfig.region}
              <br />
              <strong>Areas served:</strong> Pathankot, Punjab, Jammu, Himachal
              &amp; beyond
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
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">2. What we offer</h2>
            <p>{siteConfig.name} provides:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <strong>Business services</strong> — websites, SaaS, mobile apps,
                CRM, AI, and related digital product work
              </li>
              <li>
                <strong>Learn or Buy (students)</strong> — academic/practical
                project source code, optional mentoring/add-ons, and free career
                guidance where offered
              </li>
            </ul>
            <p>
              Website content describes offerings for information. Final scope,
              delivery timeline, and pricing are confirmed through direct
              communication (usually WhatsApp or email) before work or source
              delivery begins.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">3. Student projects &amp; source code</h2>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                Listed prices (for example ₹1,999–₹5,999) are indicative ranges
                unless we confirm a final amount with you.
              </li>
              <li>
                Source code and learning support are delivered only after
                confirmation and payment arrangements agreed with us.
              </li>
              <li>
                Projects are for learning, college submission support, and skill
                building. You are responsible for understanding the work you
                submit to your college or university and for following your
                institution&apos;s academic honesty rules.
              </li>
              <li>
                Unless otherwise agreed in writing, we grant you a personal,
                non-transferable license to use delivered project materials for
                your own academic/learning purpose. Reselling, redistributing, or
                publishing our full source packs without permission is not
                allowed.
              </li>
              <li>
                Custom &ldquo;write your demands&rdquo; work is scoped case by
                case.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">4. Mentoring &amp; career guidance</h2>
            <p>
              Optional add-ons (sessions, knowledge transfer, viva prep) and free
              career guidance are educational support. They are not a guarantee
              of grades, placements, or job offers. Scheduling is subject to
              mentor availability.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">5. Business engagements</h2>
            <p>
              Business projects start only after mutual confirmation of scope,
              commercial terms, and timeline. Website inquiry forms are requests
              for discussion, not automatic contracts.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">6. Payments &amp; refunds</h2>
            <p>
              Payments are arranged directly (for example UPI/bank transfer or
              another method we confirm). Refund eligibility depends on the
              specific order and how much work has already been delivered. If a
              refund applies, we will confirm it in writing on WhatsApp or email.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">7. Intellectual property</h2>
            <p>
              Website design, branding, copy, and marketing assets belong to{" "}
              {siteConfig.name} unless stated otherwise. Client business work
              product ownership is defined in the project agreement for that
              engagement. Student packs remain subject to the license in section
              3.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">8. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Misuse the website or attempt unauthorized access</li>
              <li>Submit false contact details or abusive messages</li>
              <li>Use delivered materials in ways that break law or academic rules</li>
              <li>Copy or scrape site content for competing commercial reuse without permission</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">9. Disclaimers</h2>
            <p>
              The website is provided &ldquo;as is.&rdquo; We aim for accuracy but
              do not warrant that all descriptions, availability, or timelines
              are error-free. To the fullest extent permitted by law,{" "}
              {siteConfig.name} is not liable for indirect or consequential
              losses arising from use of the site or services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">10. Limitation of liability</h2>
            <p>
              Where liability cannot be excluded, our total liability related to
              a student or business order is limited to the amount you actually
              paid us for that specific order, except in cases of proven willful
              misconduct where applicable law requires otherwise.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">11. Privacy</h2>
            <p>
              How we handle personal data is described in our{" "}
              <Link
                href="/privacy"
                className="text-blue underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">12. Changes</h2>
            <p>
              We may update these Terms from time to time. The &ldquo;Last
              updated&rdquo; date will change when we do. Continued use of the
              site after changes means you accept the updated Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">13. Governing law</h2>
            <p>
              These Terms are governed by the laws of India. Courts having
              jurisdiction in Punjab, India may hear disputes arising from these
              Terms, subject to applicable law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">14. Contact</h2>
            <p>
              Questions about these Terms:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-blue underline-offset-2 hover:underline"
              >
                {siteConfig.email}
              </a>{" "}
              or WhatsApp +{siteConfig.whatsapp}.
            </p>
            <p className="text-xs text-muted-strong">
              These Terms are a practical baseline for our website and services.
              For specialty legal review, consult a qualified professional.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
