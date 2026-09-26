"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/Button";
import { useContactModal } from "@/components/forms/ContactModalContext";
import { Container } from "@/components/ui/Container";
import { STRINGS } from "@/config/strings";

const nodes = [
  { id: "web", label: "Web App", x: 18, y: 28 },
  { id: "mobile", label: "Mobile", x: 72, y: 18 },
  { id: "ai", label: "AI Assistant", x: 58, y: 48 },
  { id: "crm", label: "CRM", x: 28, y: 62 },
  { id: "api", label: "API", x: 78, y: 68 },
  { id: "auto", label: "Automation", x: 46, y: 78 },
  { id: "dash", label: "Dashboard", x: 42, y: 32 },
];

export function Hero() {
  const { openModal } = useContactModal();
  const visualRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !visualRef.current) return;
    if (window.matchMedia("(max-width: 1023px)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-node]",
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.2,
        },
      );

      gsap.fromTo(
        "[data-line]",
        { strokeDashoffset: 120 },
        {
          strokeDashoffset: 0,
          duration: 1.2,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.35,
        },
      );

      gsap.to("[data-float]", {
        y: -8,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    }, visualRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section className="relative overflow-hidden surface-dark noise-overlay pt-16 pb-6 md:pt-24 md:pb-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-fade opacity-40 md:opacity-70" />
        <div className="absolute -left-24 top-24 h-48 w-48 rounded-full bg-blue/20 blur-[80px] md:h-72 md:w-72 md:blur-[100px]" />
        <div className="absolute right-0 top-40 hidden h-80 w-80 rounded-full bg-purple/20 blur-[120px] md:block" />
      </div>

      <Container wide className="relative grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <p className="eyebrow text-xs sm:text-sm font-semibold tracking-[0.18em] text-white/65">{STRINGS.hero.eyebrow}</p>
          <h1 className="mt-2.5 font-display text-[clamp(2.15rem,7.4vw,6.25rem)] leading-[1.04] text-white text-balance md:mt-4 md:text-[clamp(2.75rem,5.6vw,5.5rem)] xl:text-[clamp(3.3rem,5.2vw,6.25rem)] md:leading-[0.96]">
            {STRINGS.hero.headlinePart1}
            <span className="block text-white/90">{STRINGS.hero.headlinePart2}</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 md:mt-5 md:text-base lg:text-lg">
            {STRINGS.hero.description}
          </p>

          <div className="mt-5 flex flex-row flex-wrap gap-2.5 md:mt-7 md:gap-3">
            <MagneticButton onClick={openModal} size="md" className="flex-1 sm:flex-none">
              {STRINGS.hero.ctaProject}
            </MagneticButton>
            <Button href="/#work" variant="secondary" size="md" className="flex-1 sm:flex-none">
              {STRINGS.hero.ctaWork}
            </Button>
          </div>

          <div className="mt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-white/35 md:mt-6 md:gap-6 md:text-[11px] md:tracking-[0.2em]">
            <span>{STRINGS.hero.steps.build}</span>
            <span aria-hidden>→</span>
            <span>{STRINGS.hero.steps.automate}</span>
            <span aria-hidden>→</span>
            <span>{STRINGS.hero.steps.grow}</span>
          </div>

          {/* Mobile High-Tech Architecture Matrix Widget */}
          <div className="mt-6 rounded-lg border border-white/12 bg-white/[0.03] p-3.5 backdrop-blur-md lg:hidden shadow-[0_12px_36px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between border-b border-white/8 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan">
                  {STRINGS.hero.matrix.title}
                </span>
              </div>
              <span className="text-[9px] font-medium uppercase tracking-wider text-white/40">
                {STRINGS.hero.matrix.status}
              </span>
            </div>

            <div className="mt-2.5 grid grid-cols-2 gap-1.5 text-left">
              <div className="rounded-md border border-white/8 bg-navy-deep/70 p-2.5">
                <p className="text-[9px] uppercase tracking-wider text-white/40">Platforms</p>
                <p className="mt-1 font-display text-xs font-semibold text-white">{STRINGS.hero.matrix.platforms}</p>
                <p className="mt-0.5 text-[10px] text-cyan">{STRINGS.hero.matrix.platformsSub}</p>
              </div>
              <div className="rounded-md border border-white/8 bg-navy-deep/70 p-2.5">
                <p className="text-[9px] uppercase tracking-wider text-white/40">Intelligence</p>
                <p className="mt-1 font-display text-xs font-semibold text-white">{STRINGS.hero.matrix.intelligence}</p>
                <p className="mt-0.5 text-[10px] text-blue-bright">{STRINGS.hero.matrix.intelligenceSub}</p>
              </div>
              <div className="rounded-md border border-white/8 bg-navy-deep/70 p-2.5">
                <p className="text-[9px] uppercase tracking-wider text-white/40">Scale</p>
                <p className="mt-1 font-display text-xs font-semibold text-white">{STRINGS.hero.matrix.scale}</p>
                <p className="mt-0.5 text-[10px] text-purple/90">{STRINGS.hero.matrix.scaleSub}</p>
              </div>
              <div className="rounded-md border border-white/8 bg-navy-deep/70 p-2.5">
                <p className="text-[9px] uppercase tracking-wider text-white/40">Cloud</p>
                <p className="mt-1 font-display text-xs font-semibold text-white">{STRINGS.hero.matrix.cloud}</p>
                <p className="mt-0.5 text-[10px] text-white/60">{STRINGS.hero.matrix.cloudSub}</p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={visualRef}
          className="relative mx-auto hidden aspect-square w-full max-w-[560px] lg:block"
          aria-label="PB_IT_HUB digital product ecosystem"
        >
          <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden
          >
            {[
              ["web", "dash"],
              ["dash", "ai"],
              ["ai", "mobile"],
              ["crm", "api"],
              ["dash", "crm"],
              ["ai", "auto"],
              ["api", "auto"],
            ].map(([from, to]) => {
              const a = nodes.find((n) => n.id === from)!;
              const b = nodes.find((n) => n.id === to)!;
              return (
                <line
                  key={`${from}-${to}`}
                  data-line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="rgba(96,165,250,0.35)"
                  strokeWidth="0.35"
                  strokeDasharray="120"
                  strokeDashoffset="120"
                />
              );
            })}
          </svg>

          {nodes.map((node) => (
            <div
              key={node.id}
              data-node
              data-float
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-navy/80 px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <p className="whitespace-nowrap text-[11px] uppercase tracking-[0.14em] text-white/80">
                {node.label}
              </p>
            </div>
          ))}

          <div className="absolute left-1/2 top-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-blue/30 bg-gradient-to-br from-blue/20 via-navy to-purple/20 p-4 shadow-[var(--shadow-glow)]">
            <p className="text-[10px] uppercase tracking-[0.18em] text-cyan">
              {STRINGS.hero.productSystem.badge}
            </p>
            <p className="mt-2 font-display text-xl text-white">
              {STRINGS.hero.productSystem.title}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
