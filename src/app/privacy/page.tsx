import type { Metadata } from "next";
import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { BackButton } from "@/components/ui/BackButton";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "How PB_IT_HUB collects, uses, and protects your information when you use our website and services.",
  path: "/privacy",
});

const updatedOn = "26 September 2026";

export default function PrivacyPage() {
  return (
    <div className="surface-light pt-28 pb-20">
      <Container className="max-w-3xl">
        <BackButton href="/" label="Back to home" />
        <h1 className="font-display text-4xl text-navy">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-strong">Last updated: {updatedOn}</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-navy/80 sm:text-base">
          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">1. Who we are</h2>
            <p>
              This Privacy Policy explains how <strong>{siteConfig.name}</strong>{" "}
              (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) handles
              information when you visit{" "}
              <Link href="/" className="text-blue underline-offset-2 hover:underline">
                {siteConfig.url}
              </Link>{" "}
              or contact us for business or student services.
            </p>
            <p>
              <strong>Business location:</strong> {siteConfig.location},{" "}
              {siteConfig.region}
              <br />
              <strong>Areas served:</strong> Pathankot, Punjab, Jammu, Himachal
              &amp; beyond
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
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">2. Information we collect</h2>
            <p>We may collect information you voluntarily provide, including:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Name, email address, and phone number</li>
              <li>Project details, selected student projects, add-ons, or package choices</li>
              <li>Messages you send through forms or WhatsApp</li>
              <li>Basic technical data such as browser type, device, and pages visited (via standard hosting/analytics logs, if enabled)</li>
            </ul>
            <p>
              We do not ask for payment card details on this website. Orders and
              guidance requests are typically completed through WhatsApp or direct
              communication.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">3. How we use your information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Respond to business project inquiries</li>
              <li>Process Learn or Buy student requests (source code, mentoring, career guidance)</li>
              <li>Share selected items and contact details so we can continue the conversation on WhatsApp</li>
              <li>Improve our website and service quality</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">4. Sharing of information</h2>
            <p>
              We do not sell your personal information. We may share limited data
              with:
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Service providers who help us operate hosting, email, or messaging tools</li>
              <li>Authorities when required by law</li>
            </ul>
            <p>
              When you submit a form that opens WhatsApp, your message is sent
              through WhatsApp&apos;s platform under WhatsApp&apos;s own terms and
              privacy practices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">5. Cookies and analytics</h2>
            <p>
              Our site may use essential cookies for basic functionality. If we
              enable analytics tools later, they may collect anonymized or
              aggregated usage data to understand site performance.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">6. Data retention</h2>
            <p>
              We keep inquiry and order-related messages only as long as needed
              to fulfill your request, provide support, resolve disputes, or meet
              legal requirements. You may ask us to update or delete your contact
              details by emailing us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">7. Your choices</h2>
            <p>You may:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Request access to the personal information you shared with us</li>
              <li>Ask us to correct inaccurate details</li>
              <li>Ask us to stop contacting you for non-essential communication</li>
            </ul>
            <p>
              Contact us at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-blue underline-offset-2 hover:underline"
              >
                {siteConfig.email}
              </a>{" "}
              for privacy requests.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">8. Security</h2>
            <p>
              We take reasonable steps to protect information shared with us.
              No method of transmission over the internet is 100% secure, so we
              cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">9. Children&apos;s privacy</h2>
            <p>
              Our services are intended for students and businesses who can
              lawfully enter into arrangements. If you believe a minor has shared
              personal data with us without appropriate consent, contact us and
              we will take reasonable steps to remove it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">10. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The
              &ldquo;Last updated&rdquo; date at the top will change when we do.
              Continued use of the site after updates means you accept the
              revised policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-xl text-navy">11. Contact</h2>
            <p>
              For privacy questions, email{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-blue underline-offset-2 hover:underline"
              >
                {siteConfig.email}
              </a>{" "}
              or message us on WhatsApp at +{siteConfig.whatsapp}.
            </p>
            <p className="text-xs text-muted-strong">
              This page is provided for transparency and general information. For
              formal legal advice, consult a qualified professional.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
