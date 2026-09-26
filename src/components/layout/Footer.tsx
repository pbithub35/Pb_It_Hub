import Link from "next/link";
import Image from "next/image";
import { footerNav, legalNav } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { getMediaSrc } from "@/lib/media";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { STRINGS } from "@/config/strings";
import { buildWhatsAppUrl, getWhatsAppNumber } from "@/lib/whatsapp";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.74 1.46h.01c6.54 0 11.88-5.34 11.88-11.9 0-3.18-1.24-6.16-3.41-8.43ZM12.05 21.1h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.22-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.26C2.17 6.45 6.6 2 12.05 2a9.82 9.82 0 0 1 9.88 9.9c0 5.45-4.43 9.9-9.88 9.9Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function CallIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.6 3.8c.4-.4 1-.5 1.5-.3l2.1.8c.5.2.8.7.8 1.2v2.1c0 .4-.2.8-.5 1L9.2 9.8c1.2 2.3 3 4.1 5.3 5.3l1.2-1.3c.2-.3.6-.5 1-.5h2.1c.5 0 1 .3 1.2.8l.8 2.1c.2.5.1 1.1-.3 1.5l-1.2 1.2c-.4.4-1 .6-1.6.5-3.5-.5-6.8-2.4-9.3-4.9S4.2 9.3 3.7 5.8c-.1-.6.1-1.2.5-1.6L6.6 3.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  const phoneDigits = getWhatsAppNumber();
  const whatsappHref = buildWhatsAppUrl(
    "Hi PB_IT_HUB — I’d like to connect.",
    phoneDigits,
  );
  const callHref =
    siteConfig.phone.startsWith("+") || siteConfig.phone.startsWith("0")
      ? `tel:${siteConfig.phone}`
      : phoneDigits
        ? `tel:+${phoneDigits}`
        : "tel:";

  const connect = [
    {
      label: STRINGS.footer.whatsapp,
      href: whatsappHref,
      icon: WhatsAppIcon,
      className: "hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300",
    },
    {
      label: STRINGS.footer.instagram,
      href: siteConfig.social.instagram,
      icon: InstagramIcon,
      className: "hover:border-pink-400/50 hover:bg-pink-400/10 hover:text-pink-300",
    },
    {
      label: STRINGS.footer.call,
      href: callHref,
      icon: CallIcon,
      className: "hover:border-cyan/50 hover:bg-cyan/10 hover:text-cyan",
    },
  ];

  const exploreLinks = footerNav.slice(0, 4);
  const companyLinks = footerNav.slice(4);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-deep">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-fade opacity-25" />
        <div className="absolute -bottom-24 left-1/2 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-blue/10 blur-[100px]" />
      </div>

      <Container wide className="relative py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr_1fr_auto] lg:gap-12">
          {/* Brand + CTA */}
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src={getMediaSrc("brand/logo")}
                alt={siteConfig.name}
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg object-cover"
              />
              <span className="font-display text-base tracking-[0.08em] text-white md:text-lg">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              {STRINGS.brand.footerSlogan}
            </p>
            <div className="mt-6">
              <Button href="/contact" size="sm">
                {STRINGS.hero.ctaProject}
              </Button>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan/80">
              {STRINGS.footer.explore}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan/80">
              {STRINGS.footer.company}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/60">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan/80">
              {STRINGS.footer.connect}
            </p>
            <ul className="mt-4 flex items-center gap-2.5">
              {connect.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.label === STRINGS.footer.call ? undefined : "_blank"}
                      rel={item.label === STRINGS.footer.call ? undefined : "noreferrer"}
                      aria-label={item.label}
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-white/80 transition ${item.className}`}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-4 block text-sm text-white/50 transition hover:text-cyan"
            >
              {siteConfig.email}
            </a>
            <p className="mt-2 text-xs text-white/35">
              {siteConfig.location}, {siteConfig.region}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>{STRINGS.brand.copyrightNotice(new Date().getFullYear())}</p>
          <div className="flex flex-wrap gap-4 md:gap-5">
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white/75"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
