"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { aiCapabilities } from "@/data/why-us";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { STRINGS } from "@/config/strings";

const stages = [
  { id: "query", label: "Query", detail: "Find me a 3BHK in Mohali under ₹80L" },
  { id: "process", label: "Processing", detail: "Parsing intent · location · budget" },
  { id: "search", label: "Search", detail: "Matching listings against constraints" },
  { id: "results", label: "Results", detail: "Ranked property options ready to explore" },
] as const;

export function AISection() {
  const [stage, setStage] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => {
      setStage((current) => (current + 1) % stages.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [reduce]);

  return (
    <section id="ai" className="surface-dark section-pad relative overflow-hidden noise-overlay">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-10 h-80 w-80 rounded-full bg-purple/25 blur-[120px]" />
        <div className="absolute bottom-0 left-[-5%] h-72 w-72 rounded-full bg-cyan/20 blur-[110px]" />
      </div>

      <Container wide className="relative">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow={STRINGS.aiSection.eyebrow}
            title={STRINGS.aiSection.title}
            description={STRINGS.aiSection.description}
            noWrap
          />
        </Reveal>

        <div className="mt-5 grid gap-4 lg:mt-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          <Reveal delay={0.1}>
            <ul className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-3">
              {aiCapabilities.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[11px] leading-snug text-white/75 md:rounded-xl md:px-5 md:py-4 md:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-md border border-white/10 bg-white/[0.04] p-3.5 md:rounded-xl md:p-8">
              <div className="mb-3 flex items-center justify-between gap-3 md:mb-6">
                <p className="text-[9px] uppercase tracking-[0.14em] text-white/40 md:text-[11px] md:tracking-[0.18em]">
                  {STRINGS.aiSection.visualDemo}
                </p>
                <p className="text-[9px] uppercase tracking-[0.12em] text-cyan md:text-[11px]">
                  {STRINGS.aiSection.stagePrefix} {String(stage + 1).padStart(2, "0")}
                </p>
              </div>

              <div className="mb-3 flex flex-wrap gap-1.5 md:mb-6 md:gap-2">
                {stages.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setStage(index)}
                    className={`rounded-full px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] transition md:px-3 md:text-[10px] md:tracking-[0.14em] ${
                      index === stage
                        ? "bg-blue text-white"
                        : "bg-white/5 text-white/45 hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={stages[stage].id}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[140px] rounded-lg border border-white/10 bg-navy-deep/80 p-3.5 md:min-h-[220px] md:rounded-xl md:p-6"
                >
                  <p className="text-[10px] uppercase tracking-[0.14em] text-blue-bright md:text-xs md:tracking-[0.16em]">
                    {stages[stage].label}
                  </p>
                  <p className="mt-2 font-display text-base text-white md:mt-4 md:text-3xl">
                    {stages[stage].detail}
                  </p>

                  {stages[stage].id === "results" ? (
                    <div className="mt-3 grid grid-cols-3 gap-1.5 md:mt-6 md:gap-3">
                      {["Sector 70", "Airport Road", "Kharar"].map((area) => (
                        <div
                          key={area}
                          className="rounded-md border border-cyan/20 bg-cyan/5 p-2 md:rounded-lg md:p-3"
                        >
                          <p className="text-[9px] text-white/45 md:text-xs">{STRINGS.aiSection.matchLabel}</p>
                          <p className="mt-0.5 text-[11px] text-white md:mt-1 md:text-sm">{area}</p>
                          <p className="mt-1 text-[9px] text-cyan md:mt-2 md:text-xs">3BHK · under ₹80L</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-4 space-y-2 md:mt-8 md:space-y-3">
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/10 md:h-2">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue via-cyan to-purple"
                          initial={{ width: "12%" }}
                          animate={{ width: `${((stage + 1) / stages.length) * 100}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <p className="text-[10px] text-white/40 md:text-xs">
                        {STRINGS.aiSection.demoNote}
                      </p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
