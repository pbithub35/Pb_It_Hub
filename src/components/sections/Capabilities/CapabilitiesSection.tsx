"use client";

import { motion, useReducedMotion } from "framer-motion";
import { capabilityPillars, tickerCapabilities } from "@/data/capabilities";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ShowMoreFade } from "@/components/ui/ShowMoreFade";
import { STRINGS } from "@/config/strings";

function CapabilityIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "web":
      return (
        <svg
          className="h-5 w-5 stroke-current sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      );
    case "mobile":
      return (
        <svg
          className="h-5 w-5 stroke-current sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      );
    case "saas":
      return (
        <svg
          className="h-5 w-5 stroke-current sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
          <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
          <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
        </svg>
      );
    case "ai":
      return (
        <svg
          className="h-5 w-5 stroke-current sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
          <path d="M20 3v4" />
          <path d="M22 5h-4" />
          <path d="M4 17v2" />
          <path d="M5 18H3" />
        </svg>
      );
    case "crm":
      return (
        <svg
          className="h-5 w-5 stroke-current sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      );
    case "api":
    default:
      return (
        <svg
          className="h-5 w-5 stroke-current sm:h-6 sm:w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 16 4-4-4-4" />
          <path d="m6 8-4 4 4 4" />
          <path d="m14.5 4-5 16" />
        </svg>
      );
  }
}

function CapabilityCard({
  pillar,
  reduce,
}: {
  pillar: (typeof capabilityPillars)[number];
  reduce: boolean | null;
}) {
  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative flex h-full flex-col justify-between rounded-md border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-cyan/40 hover:bg-white/[0.05] hover:shadow-[0_16px_40px_rgba(34,211,238,0.1)] sm:rounded-xl sm:p-7"
    >
      <div className="pointer-events-none absolute -inset-px rounded-[inherit] bg-gradient-to-br from-cyan/10 via-transparent to-blue/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10 text-cyan transition-all duration-300 group-hover:bg-cyan group-hover:text-navy-deep group-hover:shadow-[0_4px_16px_rgba(34,211,238,0.4)] sm:h-12 sm:w-12">
            <CapabilityIcon icon={pillar.icon} />
          </div>
          <span className="font-display text-[10px] font-semibold tracking-wider text-white/40 transition-colors group-hover:text-cyan sm:text-xs">
            {`${pillar.number} // ${pillar.category}`}
          </span>
        </div>

        <h3 className="mt-4 font-display text-base text-white transition-colors group-hover:text-cyan sm:text-xl md:text-2xl">
          {pillar.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-white/65 sm:text-sm">
          {pillar.description}
        </p>
      </div>

      <div className="relative mt-5 border-t border-white/8 pt-4 sm:mt-6 sm:pt-5">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {pillar.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium text-white/75 transition-colors duration-200 group-hover:border-cyan/25 group-hover:text-cyan sm:text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function CapabilitiesSection() {
  const reduce = useReducedMotion();
  const duplicatedTicker = [...tickerCapabilities, ...tickerCapabilities];
  const previewPillars = capabilityPillars.slice(0, 3);
  const extraPillars = capabilityPillars.slice(3);

  return (
    <section id="capabilities" className="surface-dark section-pad relative overflow-hidden noise-overlay">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-fade opacity-45" />
        <div className="absolute top-1/4 -right-10 h-80 w-80 rounded-full bg-blue/15 blur-[120px]" />
        <div className="absolute bottom-10 -left-10 h-80 w-80 rounded-full bg-cyan/15 blur-[120px]" />
      </div>

      <Container wide className="relative">
        <Reveal>
          <SectionHeading
            eyebrow={STRINGS.capabilities.eyebrow}
            title={STRINGS.capabilities.title}
            description={STRINGS.capabilities.description}
            noWrap
            titleClassName="md:text-[clamp(1.55rem,2.7vw,3.25rem)]"
          />
        </Reveal>

        <div className="relative mt-5 mb-6 overflow-hidden py-1.5 md:mt-6 md:mb-7">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy-deep to-transparent sm:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy-deep to-transparent sm:w-28" />

          <motion.div
            className="flex w-max items-center gap-2.5 sm:gap-4"
            animate={
              reduce
                ? undefined
                : {
                    x: ["0%", "-50%"],
                  }
            }
            transition={{
              duration: 32,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedTicker.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80 shadow-[0_2px_12px_rgba(0,0,0,0.3)] backdrop-blur-md sm:px-5 sm:py-2.5 sm:text-xs"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Desktop: full grid */}
        <div className="hidden gap-4 sm:grid-cols-2 md:grid md:gap-6 lg:grid-cols-3">
          {capabilityPillars.map((pillar) => (
            <CapabilityCard key={pillar.id} pillar={pillar} reduce={reduce} />
          ))}
        </div>

        {/* Mobile: 3 + fade / arrow */}
        <div className="md:hidden">
          <ShowMoreFade
            expandFromMd={false}
            moreLabel={STRINGS.capabilities.seeMore}
            lessLabel={STRINGS.capabilities.showLess}
            visible={
              <div className="grid gap-3">
                {previewPillars.map((pillar) => (
                  <CapabilityCard key={pillar.id} pillar={pillar} reduce={reduce} />
                ))}
              </div>
            }
            hidden={
              <div className="grid gap-3">
                {extraPillars.map((pillar) => (
                  <CapabilityCard key={pillar.id} pillar={pillar} reduce={reduce} />
                ))}
              </div>
            }
          />
        </div>
      </Container>
    </section>
  );
}
