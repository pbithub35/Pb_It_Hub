"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations";
import { motionEase } from "@/lib/motion";

const technologies = [
  {
    id: "next",
    label: "Next.js",
    blurb: "Fast, SEO-ready web products with App Router and modern DX.",
  },
  {
    id: "react",
    label: "React",
    blurb: "Component-driven interfaces that stay maintainable as you grow.",
  },
  {
    id: "laravel",
    label: "Laravel",
    blurb: "Reliable APIs, auth and business logic for production backends.",
  },
  {
    id: "node",
    label: "Node.js",
    blurb: "Real-time services, integrations and scalable API layers.",
  },
  {
    id: "flutter",
    label: "Flutter",
    blurb: "Cross-platform mobile apps with one polished codebase.",
  },
  {
    id: "ai",
    label: "AI",
    blurb: "Assistants, document intelligence and workflow automation.",
  },
  {
    id: "api",
    label: "APIs",
    blurb: "Clean contracts between products, partners and systems.",
  },
  {
    id: "cloud",
    label: "Cloud",
    blurb: "Deployments, CDN and infrastructure built for uptime.",
  },
  {
    id: "db",
    label: "Databases",
    blurb: "PostgreSQL, MySQL and MongoDB modeled for real operations.",
  },
];

const PAGE_SIZE = 3;

export function TechnologyGraphSection() {
  const reduce = useReducedMotion();
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(technologies.length / PAGE_SIZE);

  const visible = useMemo(
    () =>
      technologies.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE),
    [page],
  );

  return (
    <section className="section-pad bg-off-white">
      <Container wide>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <FadeIn>
            <p className="eyebrow mb-2">Technology</p>
            <h2 className="heading-section">
              Tools we ship with
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-strong">
              A focused stack for web, mobile, AI and cloud — chosen for clarity,
              speed and long-term maintenance.
            </p>
          </FadeIn>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous technologies"
              disabled={page === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-[var(--shadow-soft)] transition hover:border-blue/30 hover:text-blue disabled:cursor-not-allowed disabled:opacity-35"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next technologies"
              disabled={page >= totalPages - 1}
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-[var(--shadow-soft)] transition hover:border-blue/30 hover:text-blue disabled:cursor-not-allowed disabled:opacity-35"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-8 md:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: motionEase }}
            >
              {visible.map((tech, index) => (
                <motion.article
                  key={tech.id}
                  className="rounded-2xl border border-navy/10 bg-paper p-5 shadow-[var(--shadow-soft)] md:p-6"
                  initial={reduce ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: motionEase,
                    delay: reduce ? 0 : index * 0.08,
                  }}
                  whileHover={
                    reduce ? undefined : { y: -4, transition: { duration: 0.22 } }
                  }
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue/15 bg-blue/[0.06] font-display text-sm font-bold text-blue">
                    {String(page * PAGE_SIZE + index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 font-display text-xl text-ink">
                    {tech.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-strong">
                    {tech.blurb}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-1.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to technology page ${i + 1}`}
                onClick={() => setPage(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === page ? "w-6 bg-blue" : "w-1.5 bg-navy/15 hover:bg-navy/30"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
