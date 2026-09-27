"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { motionDurations, motionEase, viewportOnce } from "@/lib/motion";

const stats = [
  { label: "Products shipped", value: 10, suffix: "+" },
  { label: "Student projects", value: 50, suffix: "+" },
  { label: "Delivery focus", value: 100, suffix: "%" },
  { label: "Regions served", value: 4, suffix: "" },
];

function CountUp({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix: string;
  active: boolean;
}) {
  const [display, setDisplay] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!active) return;
    if (reduce) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1100;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reduce, value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <section className="section-pad bg-paper">
      <Container wide>
        <FadeIn>
          <p className="eyebrow mb-2">Impact</p>
          <h2 className="heading-section">
            Built for real outcomes
          </h2>
        </FadeIn>

        <div ref={ref} className="mt-6 md:mt-8">
          <StaggerContainer className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <motion.div
                  className="rounded-2xl border border-navy/10 bg-off-white px-4 py-5 md:px-5 md:py-6"
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                >
                  <p className="font-display text-3xl text-ink md:text-4xl">
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                      active={inView}
                    />
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-muted md:text-[11px]">
                    {stat.label}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
