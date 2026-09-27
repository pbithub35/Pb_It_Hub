"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations";
import { motionEase, viewportOnce } from "@/lib/motion";
import { STRINGS } from "@/config/strings";

export function ServicesSection({ limit = 3 }: { limit?: number } = {}) {
  const listed = services.slice(0, limit);
  const hasMore = services.length > listed.length;
  const reduce = useReducedMotion();

  return (
    <section id="services" className="section-pad bg-paper">
      <Container wide>
        <FadeIn>
          <SectionHeading
            eyebrow={STRINGS.services.eyebrow}
            title={STRINGS.services.title}
            description={STRINGS.services.description}
          />
        </FadeIn>

        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 md:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.05 },
            },
          }}
        >
          {listed.map((service) => (
            <motion.article
              key={service.slug}
              variants={
                reduce
                  ? undefined
                  : {
                      hidden: { opacity: 0, y: 24 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.45, ease: motionEase },
                      },
                    }
              }
              whileHover={
                reduce ? undefined : { y: -5, transition: { duration: 0.22 } }
              }
              className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-off-white p-5 shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:border-blue/25 hover:bg-paper hover:shadow-[var(--shadow-card-hover)] md:p-6"
            >
              <span className="font-display text-sm font-bold text-blue">
                {service.number}
              </span>
              <h3 className="mt-3 font-display text-xl text-ink md:text-2xl">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-strong">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue transition group-hover:gap-2.5"
              >
                {STRINGS.services.exploreLink}
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {hasMore ? (
          <FadeIn delay={0.15} className="mt-8 text-center md:mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy shadow-[var(--shadow-soft)] transition hover:border-blue/30 hover:text-blue"
            >
              {STRINGS.services.viewAllServices}
              <span aria-hidden>→</span>
            </Link>
          </FadeIn>
        ) : null}
      </Container>
    </section>
  );
}
