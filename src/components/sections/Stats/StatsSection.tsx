"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { cn } from "@/lib/utils";

type BarPattern = "solid" | "stripes" | "dots";

type StatCard = {
  label: string;
  value: number;
  suffix: string;
  trend: string;
  trendLabel: string;
  tone: "lavender" | "sky" | "rose" | "mint";
  icon: "box" | "users" | "check" | "map";
  bars: Array<{ height: number; pattern: BarPattern }>;
};

const stats: StatCard[] = [
  {
    label: "Products shipped",
    value: 10,
    suffix: "+",
    trend: "18%",
    trendLabel: "vs last year",
    tone: "lavender",
    icon: "box",
    bars: [
      { height: 38, pattern: "solid" },
      { height: 52, pattern: "stripes" },
      { height: 44, pattern: "dots" },
      { height: 68, pattern: "solid" },
      { height: 56, pattern: "stripes" },
      { height: 78, pattern: "dots" },
      { height: 64, pattern: "solid" },
      { height: 88, pattern: "stripes" },
    ],
  },
  {
    label: "Student projects",
    value: 50,
    suffix: "+",
    trend: "24%",
    trendLabel: "vs last year",
    tone: "sky",
    icon: "users",
    bars: [
      { height: 42, pattern: "dots" },
      { height: 58, pattern: "solid" },
      { height: 48, pattern: "stripes" },
      { height: 72, pattern: "dots" },
      { height: 60, pattern: "solid" },
      { height: 82, pattern: "stripes" },
      { height: 70, pattern: "dots" },
      { height: 92, pattern: "solid" },
    ],
  },
  {
    label: "Delivery focus",
    value: 100,
    suffix: "%",
    trend: "12%",
    trendLabel: "consistency",
    tone: "rose",
    icon: "check",
    bars: [
      { height: 50, pattern: "stripes" },
      { height: 62, pattern: "dots" },
      { height: 55, pattern: "solid" },
      { height: 74, pattern: "stripes" },
      { height: 66, pattern: "dots" },
      { height: 84, pattern: "solid" },
      { height: 76, pattern: "stripes" },
      { height: 96, pattern: "dots" },
    ],
  },
  {
    label: "Regions served",
    value: 4,
    suffix: "",
    trend: "33%",
    trendLabel: "coverage up",
    tone: "mint",
    icon: "map",
    bars: [
      { height: 36, pattern: "solid" },
      { height: 48, pattern: "dots" },
      { height: 40, pattern: "stripes" },
      { height: 58, pattern: "solid" },
      { height: 52, pattern: "dots" },
      { height: 70, pattern: "stripes" },
      { height: 64, pattern: "solid" },
      { height: 86, pattern: "dots" },
    ],
  },
];

const toneStyles = {
  lavender: {
    card: "bg-[#ebe7f8]",
    bar: "bg-[#3d3558]",
    badge: "bg-emerald-500/15 text-emerald-700",
    icon: "text-[#6b5b95]/70",
  },
  sky: {
    card: "bg-[#e4eef8]",
    bar: "bg-[#2f4a66]",
    badge: "bg-emerald-500/15 text-emerald-700",
    icon: "text-[#4a6d8c]/70",
  },
  rose: {
    card: "bg-[#f6e6ea]",
    bar: "bg-[#5a3545]",
    badge: "bg-emerald-500/15 text-emerald-700",
    icon: "text-[#8c5a6a]/70",
  },
  mint: {
    card: "bg-[#e6f2ee]",
    bar: "bg-[#2f4f45]",
    badge: "bg-emerald-500/15 text-emerald-700",
    icon: "text-[#3d6b5c]/70",
  },
} as const;

function StatIcon({ type, className }: { type: StatCard["icon"]; className?: string }) {
  const common = {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (type) {
    case "box":
      return (
        <svg {...common}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <path d="M3.3 7 12 12l8.7-5M12 22V12" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4 12 14.01l-3-3" />
        </svg>
      );
    case "map":
      return (
        <svg {...common}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
  }
}

function UpTrendIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 11.5 5.5 8l2.5 2.5L14 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 4.5H14V8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ImpactBars({
  bars,
  barClass,
  active,
}: {
  bars: StatCard["bars"];
  barClass: string;
  active: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="mt-3 flex h-10 items-end gap-1 md:mt-6 md:h-16 md:gap-1.5 lg:h-[4.5rem] lg:gap-2" aria-hidden>
      {bars.map((bar, index) => (
        <motion.div
          key={`${bar.pattern}-${index}`}
          className={cn(
            `relative w-full overflow-hidden rounded-full ${barClass}`,
            index >= 5 && "max-md:hidden",
          )}
          initial={reduce ? false : { height: 6 }}
          animate={
            active || reduce
              ? { height: `${bar.height}%` }
              : { height: 6 }
          }
          transition={{
            duration: 0.85,
            delay: reduce ? 0 : 0.08 * index,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ minHeight: 6 }}
        >
          {bar.pattern === "stripes" ? (
            <span
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(255,255,255,0.35) 3px, rgba(255,255,255,0.35) 6px)",
              }}
            />
          ) : null}
          {bar.pattern === "dots" ? (
            <span
              className="absolute inset-0 opacity-80"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1.2px)",
                backgroundSize: "5px 5px",
              }}
            />
          ) : null}
          {bar.pattern === "solid" ? (
            <span className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          ) : null}
        </motion.div>
      ))}
    </div>
  );
}

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
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="section-pad bg-paper">
      <Container wide>
        <FadeIn>
          <p className="eyebrow mb-2 text-muted">Impact</p>
          <h2 className="heading-section text-ink">Built for real outcomes</h2>
        </FadeIn>

        <div ref={ref} className="mt-5 md:mt-8">
          <StaggerContainer className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-4">
            {stats.map((stat) => {
              const tone = toneStyles[stat.tone];
              return (
                <StaggerItem key={stat.label}>
                  <motion.article
                    className={`relative overflow-hidden rounded-2xl p-3.5 shadow-[0_8px_22px_rgba(15,23,42,0.05)] sm:p-4 md:rounded-[2rem] md:p-6 ${tone.card}`}
                    whileHover={{ y: -3, transition: { duration: 0.25 } }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-[11px] font-medium leading-snug text-ink/70 sm:text-xs md:text-[15px]">
                        {stat.label}
                      </p>
                      <StatIcon
                        type={stat.icon}
                        className={`h-3.5 w-3.5 shrink-0 md:h-5 md:w-5 ${tone.icon}`}
                      />
                    </div>

                    <div className="mt-2.5 flex flex-wrap items-end gap-1.5 md:mt-5 md:gap-2.5">
                      <p className="font-display text-2xl leading-none tracking-tight text-ink sm:text-3xl md:text-[2.75rem]">
                        <CountUp
                          value={stat.value}
                          suffix={stat.suffix}
                          active={inView}
                        />
                      </p>
                      <span
                        className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[9px] font-semibold md:gap-1 md:px-2 md:py-1 md:text-[11px] ${tone.badge}`}
                      >
                        <UpTrendIcon className="h-2.5 w-2.5 md:h-3 md:w-3" />
                        {stat.trend}
                      </span>
                    </div>
                    <p className="mt-1 text-[10px] text-ink/45 md:mt-1.5 md:text-xs">
                      {stat.trendLabel}
                    </p>

                    <ImpactBars
                      bars={stat.bars}
                      barClass={tone.bar}
                      active={inView}
                    />
                  </motion.article>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
