"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaImage } from "@/components/ui/MediaImage";
import { BackButton } from "@/components/ui/BackButton";
import { STRINGS } from "@/config/strings";
import { ProductShowcase } from "@/components/sections/ProductShowcase";

const ease = [0.22, 1, 0.36, 1] as const;

function cnOrder(index: number, part: "text" | "media") {
  const odd = index % 2 === 1;
  if (part === "text") {
    return odd
      ? "lg:col-span-5 lg:col-start-8 lg:row-start-1"
      : "lg:col-span-5";
  }
  return odd
    ? "lg:col-span-7 lg:col-start-1 lg:row-start-1"
    : "lg:col-span-7";
}

export function ServicesShowcase() {
  const reduce = useReducedMotion();

  return (
    <>
      <div className="surface-light page-shell !pb-4 md:!pb-5">
        <Container wide>
          <BackButton href="/" label={STRINGS.actions.backToHome} />
          <SectionHeading
            tone="light"
            eyebrow={STRINGS.services.eyebrow}
            title="What we design and engineer"
            description="Product-focused technology capabilities built around real business needs."
          />
        </Container>
      </div>

      <ProductShowcase />

      <div className="surface-light page-shell !pt-6 md:!pt-8">
        <Container wide>
        {/* Mobile: compact cards — all services open */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
          {services.map((service, index) => {
            const fromX = index % 2 === 0 ? -20 : 20;
            return (
              <motion.div
                key={service.slug}
                initial={reduce ? false : { opacity: 0, x: fromX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease, delay: index * 0.03 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:border-blue/20 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-off-white">
                    <MediaImage
                      src={service.visualKey}
                      alt={`${service.shortTitle} development by PB_IT_HUB Pathankot`}
                      fill
                      className="object-contain object-center p-1.5 transition duration-500 group-hover:scale-[1.02]"
                      imageType="card"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <div className="space-y-1.5 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-blue">
                      {STRINGS.services.servicePrefix} {service.number}
                    </p>
                    <h2 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-blue">
                      {service.title}
                    </h2>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-strong">
                      {service.description}
                    </p>
                    <span className="inline-flex pt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-blue">
                      {STRINGS.services.exploreLink}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop: left–right product UI — all services open */}
        <div className="mt-8 hidden space-y-12 lg:block lg:space-y-14">
          {services.map((service, index) => {
            const fromX = index % 2 === 0 ? -28 : 28;
            return (
              <article
                key={service.slug}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10"
              >
                <motion.div
                  className={cnOrder(index, "text")}
                  initial={reduce ? false : { opacity: 0, x: fromX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease }}
                >
                  <p className="eyebrow text-sm text-blue">
                    {STRINGS.services.servicePrefix} {service.number}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-ink lg:text-[1.85rem]">
                    {service.title}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted-strong lg:text-lg">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {service.capabilities.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-strong"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-navy/10 bg-white px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-muted-strong shadow-[var(--shadow-soft)]"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-blue transition hover:gap-3 hover:text-navy"
                    >
                      {STRINGS.services.exploreLink}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </motion.div>

                <div className={cnOrder(index, "media")}>
                  <motion.div
                    className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
                    initial={reduce ? false : { scale: 0.95, opacity: 0.85 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    whileHover={reduce ? undefined : { scale: 1.02 }}
                    transition={{ duration: 0.6, ease }}
                  >
                    <div className="relative aspect-[16/9] w-full bg-off-white">
                      <MediaImage
                        src={service.visualKey}
                        alt={`${service.shortTitle} services by PB_IT_HUB in Pathankot`}
                        fill
                        className="object-contain object-center p-2 sm:p-3"
                        imageType="screenshot"
                        sizes="58vw"
                        priority={index < 2}
                      />
                    </div>
                  </motion.div>
                </div>
              </article>
            );
          })}
        </div>
        </Container>
      </div>
    </>
  );
}
