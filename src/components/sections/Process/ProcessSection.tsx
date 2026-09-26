"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STRINGS } from "@/config/strings";

gsap.registerPlugin(ScrollTrigger);

export function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-process-step]",
        { opacity: 0.35, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 65%",
            end: "bottom 55%",
            scrub: true,
          },
        },
      );
    }, ref);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      id="process"
      ref={ref}
      className="surface-dark section-pad relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-fade opacity-35" />
        <div className="absolute top-1/3 -right-16 h-64 w-64 rounded-full bg-blue/10 blur-[100px]" />
      </div>

      <Container wide className="relative">
        <SectionHeading
          tone="dark"
          eyebrow={STRINGS.process.eyebrow}
          title={STRINGS.process.title}
          description={STRINGS.process.description}
        />

        <ol className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3 md:mt-7 md:grid-cols-5 md:gap-3.5">
          {processSteps.map((step) => (
            <li
              key={step.number}
              data-process-step
              className="rounded-md border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-md md:rounded-xl md:p-5"
            >
              <p className="text-[10px] tracking-[0.14em] text-cyan md:text-xs md:tracking-[0.16em]">
                {step.number}
              </p>
              <h3 className="mt-2 font-display text-sm uppercase text-white md:mt-4 md:text-xl">
                {step.title}
              </h3>
              <p className="mt-1.5 text-[11px] leading-relaxed text-white/55 md:mt-3 md:text-sm">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
