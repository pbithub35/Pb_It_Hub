"use client";

import { motion, useReducedMotion } from "framer-motion";
import { whyUsItems, type WhyUsItem } from "@/data/why-us";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ShowMoreFade } from "@/components/ui/ShowMoreFade";
import { STRINGS } from "@/config/strings";

function ApproachIcon({ icon }: { icon: WhyUsItem["icon"] }) {
  switch (icon) {
    case "strategy":
      return (
        <svg
          className="h-6 w-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      );
    case "engineering":
      return (
        <svg
          className="h-6 w-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" x2="10" y1="4" y2="20" />
        </svg>
      );
    case "tech":
      return (
        <svg
          className="h-6 w-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "collaboration":
      return (
        <svg
          className="h-6 w-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "growth":
    default:
      return (
        <svg
          className="h-6 w-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
  }
}

export function WhyUsSection() {
  const reduce = useReducedMotion();
  const previewItems = whyUsItems.slice(0, 3);
  const extraItems = whyUsItems.slice(3);

  function WhyCard({ item, featured = false }: { item: WhyUsItem; featured?: boolean }) {
    return (
      <motion.article
        whileHover={reduce ? undefined : { y: -6 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className={
          featured
            ? "group relative flex h-full flex-col justify-between rounded-md border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-cyan/40 hover:bg-white/[0.05] hover:shadow-[0_16px_40px_rgba(34,211,238,0.1)] sm:rounded-xl sm:p-7 md:p-8"
            : "group relative flex h-full flex-col justify-between rounded-md border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-cyan/40 hover:bg-white/[0.05] hover:shadow-[0_16px_40px_rgba(34,211,238,0.1)] sm:rounded-xl sm:p-6"
        }
      >
        <div className="pointer-events-none absolute -inset-px rounded-[inherit] bg-gradient-to-br from-cyan/10 via-transparent to-blue/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative">
          <div className="flex items-center justify-between gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10 text-cyan transition-all duration-300 group-hover:bg-cyan group-hover:text-navy-deep group-hover:shadow-[0_4px_16px_rgba(34,211,238,0.4)] sm:h-11 sm:w-11">
              <ApproachIcon icon={item.icon} />
            </div>
            <div className="flex items-center gap-2.5">
              <span className="rounded-full border border-cyan/20 bg-cyan/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cyan sm:text-xs">
                {item.highlight}
              </span>
              <span className="font-display text-xs font-bold text-white/40 transition-colors group-hover:text-cyan sm:text-sm">
                {item.number}
              </span>
            </div>
          </div>

          <h3 className="mt-4 font-display text-base text-white transition-colors group-hover:text-cyan sm:text-xl md:text-2xl">
            {item.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-white/65 sm:text-sm">
            {item.description}
          </p>
        </div>

        <div className="relative mt-4 border-t border-white/8 pt-4 sm:mt-5">
          <ul className="space-y-1.5">
            {item.points.map((pt) => (
              <li
                key={pt}
                className="flex items-center gap-2 text-xs font-medium text-white/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    );
  }

  return (
    <section id="why" className="surface-dark section-pad relative overflow-hidden noise-overlay">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-fade opacity-45" />
        <div className="absolute top-1/3 -left-10 h-80 w-80 rounded-full bg-blue/15 blur-[120px]" />
        <div className="absolute bottom-10 -right-10 h-80 w-80 rounded-full bg-cyan/15 blur-[120px]" />
      </div>

      <Container wide className="relative">
        <Reveal>
          <SectionHeading
            eyebrow={STRINGS.whyUs.eyebrow}
            title={STRINGS.whyUs.title}
            description={STRINGS.whyUs.description}
            noWrap
          />
        </Reveal>

        {/* Desktop */}
        <div className="mt-6 hidden gap-5 md:mt-7 md:grid md:grid-cols-2 lg:grid-cols-3">
          {whyUsItems.map((item) => (
            <WhyCard key={item.number} item={item} />
          ))}
        </div>

        {/* Mobile: 3 + arrow */}
        <div className="mt-8 md:hidden">
          <ShowMoreFade
            expandFromMd={false}
            moreLabel={STRINGS.whyUs.seeMore}
            lessLabel={STRINGS.whyUs.showLess}
            visible={
              <div className="grid gap-3">
                {previewItems.map((item) => (
                  <WhyCard key={item.number} item={item} />
                ))}
              </div>
            }
            hidden={
              <div className="grid gap-3">
                {extraItems.map((item) => (
                  <WhyCard key={item.number} item={item} />
                ))}
              </div>
            }
          />
        </div>
      </Container>
    </section>
  );
}
