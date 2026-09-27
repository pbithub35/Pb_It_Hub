"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations";
import { motionEase, viewportOnce } from "@/lib/motion";
import { STRINGS } from "@/config/strings";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the business, users and problem.",
  },
  {
    number: "02",
    title: "Design",
    description: "Shape experience, architecture and delivery plan.",
  },
  {
    number: "03",
    title: "Build",
    description: "Engineer, test and iterate with clarity.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Ship, monitor and improve continuously.",
  },
];

export function ProcessSection() {
  const reduce = useReducedMotion();

  return (
    <section className="section-pad bg-paper">
      <Container wide>
        <FadeIn>
          <p className="eyebrow mb-2">{STRINGS.process?.eyebrow ?? "Process"}</p>
          <h2 className="heading-section">
            {STRINGS.process?.title ?? "From idea to product"}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-strong">
            {STRINGS.process?.description ??
              "A clear path from discovery to launch — without unnecessary process theater."}
          </p>
        </FadeIn>

        <div className="relative mt-8 md:mt-10">
          <svg
            className="pointer-events-none absolute left-0 top-8 hidden h-0.5 w-full md:block"
            viewBox="0 0 100 2"
            preserveAspectRatio="none"
            aria-hidden
          >
            <motion.path
              d="M 2 1 L 98 1"
              stroke="rgba(37,99,235,0.25)"
              strokeWidth="0.4"
              fill="none"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1, ease: motionEase, delay: 0.2 }}
            />
          </svg>

          <ol className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-5">
            {steps.map((step, index) => (
              <motion.li
                key={step.number}
                className="rounded-2xl border border-navy/10 bg-off-white p-5"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{
                  duration: 0.55,
                  ease: motionEase,
                  delay: 0.15 + index * 0.12,
                }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
              >
                <p className="text-[11px] font-bold tracking-[0.16em] text-blue">
                  {step.number}
                </p>
                <h3 className="mt-3 font-display text-xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-strong">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
