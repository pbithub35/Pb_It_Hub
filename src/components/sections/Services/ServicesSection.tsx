"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaImage } from "@/components/ui/MediaImage";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { STRINGS } from "@/config/strings";

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const [openSlug, setOpenSlug] = useState<string | null>(
    services[0]?.slug ?? null,
  );
  const reduce = useReducedMotion();
  const current = services[active] ?? services[0];

  return (
    <section id="services" className="surface-dark section-pad relative overflow-clip noise-overlay">
      {/* Ambient Grid and Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-fade opacity-50" />
        <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-blue/15 blur-[120px]" />
        <div className="absolute bottom-10 -right-20 h-80 w-80 rounded-full bg-cyan/15 blur-[120px]" />
      </div>

      <Container wide className="relative">
        <Reveal>
          <SectionHeading
            eyebrow={STRINGS.services.eyebrow}
            title={STRINGS.services.title}
            description={STRINGS.services.description}
            noWrap
          />
        </Reveal>

        {/* Mobile: Professional Dark Glass Cards */}
        <div className="mt-6 space-y-3 md:hidden">
          {services.map((service) => {
            const isOpen = openSlug === service.slug;
            return (
              <div
                key={service.slug}
                className={cn(
                  "overflow-hidden rounded-md border transition-all duration-300 backdrop-blur-md",
                  isOpen
                    ? "border-cyan/35 bg-white/[0.06] shadow-[0_8px_30px_rgba(34,211,238,0.08)]"
                    : "border-white/10 bg-white/[0.03]",
                )}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between p-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenSlug((currentSlug) =>
                      currentSlug === service.slug ? null : service.slug,
                    )
                  }
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan/10 font-display text-xs font-bold text-cyan">
                      {service.number}
                    </span>
                    <span className="font-display text-base font-semibold text-white">
                      {service.shortTitle}
                    </span>
                  </div>
                  <span
                    className={cn(
                      "text-xs text-white/50 transition-transform duration-200",
                      isOpen && "rotate-180 text-cyan",
                    )}
                    aria-hidden
                  >
                    ▼
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3.5 border-t border-white/8 px-4 pb-4 pt-3">
                        <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-white/10 bg-navy-deep">
                          <MediaImage
                            src={service.visualKey}
                            alt={`PB_IT_HUB ${service.shortTitle}`}
                            fill
                            className="object-cover"
                            sizes="100vw"
                          />
                        </div>
                        <p className="text-xs leading-relaxed text-white/70">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex flex-wrap gap-1.5">
                            {service.capabilities.slice(0, 3).map((cap) => (
                              <span
                                key={cap}
                                className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/70"
                              >
                                {cap}
                              </span>
                            ))}
                          </div>
                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-cyan hover:underline"
                          >
                            {STRINGS.services.exploreLink}
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop / tablet: list + large sticky visual */}
        <div className="mt-6 md:mt-8 hidden items-start gap-8 md:grid md:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:gap-12">
          <div className="space-y-2.5">
            {services.map((service, index) => {
              const isActive = index === active;
              return (
                <button
                  key={service.slug}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={cn(
                    "group w-full rounded-xl border px-5 py-4 text-left transition-all duration-300 md:px-6 backdrop-blur-md",
                    isActive
                      ? "border-cyan/35 bg-white/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                      : "border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]",
                  )}
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <span
                      className={cn(
                        "font-display text-sm font-bold transition-colors",
                        isActive ? "text-cyan" : "text-white/40 group-hover:text-white/70",
                      )}
                    >
                      {service.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3
                          className={cn(
                            "font-display text-xl transition-colors md:text-2xl",
                            isActive ? "text-white" : "text-white/80 group-hover:text-white",
                          )}
                        >
                          {service.title}
                        </h3>
                        <Link
                          href={`/services/${service.slug}`}
                          className="shrink-0 text-[10px] uppercase tracking-[0.16em] text-cyan opacity-0 transition group-hover:opacity-100 group-focus-within:opacity-100"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {STRINGS.services.viewLink}
                        </Link>
                      </div>
                      <p
                        className={cn(
                          "mt-2 max-w-xl text-sm leading-relaxed transition-all",
                          isActive
                            ? "max-h-24 text-white/70 opacity-100"
                            : "max-h-0 overflow-hidden text-white/40 opacity-0 md:max-h-24 md:opacity-60",
                        )}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative sticky top-28 self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={reduce ? false : { opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.28 }}
                className="w-full"
              >
                <div className="relative aspect-[5/4] w-full overflow-hidden rounded-xl border border-white/12 bg-navy-deep shadow-[0_20px_60px_rgba(0,0,0,0.5)] lg:aspect-[4/3] lg:min-h-[420px] xl:min-h-[460px]">
                  <MediaImage
                    src={current.visualKey}
                    alt={`PB_IT_HUB ${current.shortTitle} visual`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 50vw, 55vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/25 to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan">
                      {STRINGS.services.servicePrefix} {current.number}
                    </p>
                    <p className="mt-1 font-display text-xl font-bold text-white md:text-2xl">
                      {current.shortTitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
