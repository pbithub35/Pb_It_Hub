"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { processSteps } from "@/data/process";
import { STRINGS } from "@/config/strings";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

function StepIcon({
  type,
  className,
}: {
  type: NonNullable<(typeof processSteps)[number]["icon"]>;
  className?: string;
}) {
  const props = {
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
    case "idea":
      return (
        <svg {...props}>
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2Z" />
        </svg>
      );
    case "research":
      return (
        <svg {...props}>
          <path d="M3 3v18h18" />
          <path d="M7 14v4M12 10v8M17 6v12" />
          <circle cx="17" cy="7" r="3" />
        </svg>
      );
    case "plan":
      return (
        <svg {...props}>
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "design":
      return (
        <svg {...props}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="m15 8 2 2-6 6H9v-2l6-6Z" />
        </svg>
      );
    case "test":
      return (
        <svg {...props}>
          <path d="M9 11l2 2 4-4" />
          <path d="M21 12a9 9 0 1 1-9-9" />
          <path d="M21 3v6h-6" />
        </svg>
      );
    case "launch":
      return (
        <svg {...props}>
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      );
    case "growth":
      return (
        <svg {...props}>
          <path d="M3 3v18h18" />
          <path d="m7 14 4-4 4 3 5-6" />
          <path d="M17 7h3v3" />
        </svg>
      );
  }
}

function nodePosition(index: number, total: number, radius: number) {
  // Start at top (-90deg), go clockwise
  const angle = -Math.PI / 2 + (index / total) * Math.PI * 2;
  return {
    x: 50 + radius * Math.cos(angle),
    y: 50 + radius * Math.sin(angle),
  };
}

export function ProcessSection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const steps = processSteps;
  const current = steps[active] ?? steps[0];

  const positions = useMemo(
    () => steps.map((_, i) => nodePosition(i, steps.length, 38)),
    [steps],
  );

  return (
    <section
      className="section-pad relative overflow-hidden bg-paper"
      style={{ backgroundColor: "#e5edf5" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-blue/10 blur-[100px]" />
        <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan/10 blur-[110px]" />
      </div>

      <Container wide className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left copy */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease }}
          >
            <p className="eyebrow text-blue">{STRINGS.process.eyebrow}</p>
            <h2 className="mt-3 font-display text-[clamp(2.4rem,5vw,4.25rem)] leading-[0.95] text-ink">
              Product <span className="text-blue">Development</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-strong md:text-base">
              {STRINGS.process.description}
            </p>
            <div className="mt-5 h-px w-24 bg-gradient-to-r from-blue to-transparent" />
            <p className="mt-5 font-display text-xl text-ink md:text-2xl">
              From <span className="text-ink">Idea</span> to{" "}
              <span className="text-blue">Impact</span>
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.number}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="mt-8 rounded-2xl border p-4 shadow-[var(--shadow-soft)] sm:p-5"
                style={{
                  backgroundColor: `${current.accent}18`,
                  borderColor: `${current.accent}40`,
                }}
              >
                <p
                  className="text-xs font-bold tracking-[0.16em]"
                  style={{ color: current.accent }}
                >
                  STAGE {current.number}
                </p>
                <h3 className="mt-2 font-display text-xl text-ink sm:text-2xl">
                  {current.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-strong">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Circular diagram — same UI on all breakpoints */}
          <motion.div
            className="relative mx-auto aspect-square w-full max-w-[min(100%,28rem)] sm:max-w-[34rem] md:max-w-[560px]"
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease }}
            aria-label="Product development process stages"
          >
            <div className="absolute inset-[8%] rounded-full border border-dashed border-navy/15 bg-white/50" />
            <div className="absolute inset-[18%] rounded-full border border-navy/8 bg-off-white/80" />

            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden
            >
              {positions.map((pos, i) => {
                const next = positions[(i + 1) % positions.length];
                return (
                  <path
                    key={`arc-${i}`}
                    d={`M ${pos.x} ${pos.y} Q 50 50 ${next.x} ${next.y}`}
                    stroke={
                      i === active
                        ? steps[i]?.accent ?? "rgba(29,78,216,0.45)"
                        : "rgba(42,54,72,0.14)"
                    }
                    strokeWidth={i === active ? 0.45 : 0.25}
                    strokeDasharray="1.2 1.4"
                    className="transition-all duration-300"
                  />
                );
              })}
            </svg>

            <div className="absolute left-1/2 top-1/2 z-[2] flex w-[32%] -translate-x-1/2 -translate-y-1/2 flex-col items-center sm:w-[34%]">
              <div className="relative flex aspect-square w-full items-center justify-center rounded-xl border border-blue/20 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] sm:rounded-2xl">
                <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_50%_25%,rgba(59,130,246,0.12),transparent_65%)] sm:rounded-2xl" />
                <div className="relative flex flex-col items-center px-1 text-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue/10 text-blue sm:h-12 sm:w-12">
                    <StepIcon type="idea" className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <p className="mt-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-muted-strong sm:mt-2 sm:text-[10px] sm:tracking-[0.18em]">
                    Product Idea
                  </p>
                </div>
              </div>
            </div>

            {steps.map((step, index) => {
              const pos = positions[index];
              const isActive = index === active;
              return (
                <button
                  key={step.number}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={cn(
                    "absolute z-[3] flex w-[4.25rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center transition duration-300 sm:w-[5.5rem]",
                    isActive ? "scale-110" : "scale-100 opacity-90 hover:opacity-100",
                  )}
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  aria-pressed={isActive}
                  aria-label={`${step.number}. ${step.title}`}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full border text-white shadow-md transition sm:h-12 sm:w-12",
                      isActive ? "border-white ring-2 ring-navy/10" : "border-white/70",
                    )}
                    style={{
                      backgroundColor: step.accent,
                      boxShadow: isActive
                        ? `0 10px 28px ${step.accent}55`
                        : `0 8px 18px ${step.accent}33`,
                    }}
                  >
                    {step.icon ? (
                      <StepIcon type={step.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
                    ) : null}
                  </span>
                  <span className="mt-1.5 text-[9px] font-bold tracking-[0.1em] text-muted sm:mt-2 sm:text-[10px] sm:tracking-[0.12em]">
                    {step.number}
                  </span>
                  <span className="mt-0.5 max-w-[4.25rem] text-[10px] font-semibold leading-tight text-ink sm:max-w-[5.5rem] sm:text-[11px]">
                    {step.shortTitle ?? step.title}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
