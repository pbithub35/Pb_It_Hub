"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { STRINGS } from "@/config/strings";
import { cn } from "@/lib/utils";

function ServiceIcon({ id }: { id: string }) {
  switch (id) {
    case "sessions":
      return (
        <svg
          className="h-5 w-5 text-cyan"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      );
    case "project-kt":
      return (
        <svg
          className="h-5 w-5 text-cyan"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      );
    case "buy-project":
      return (
        <svg
          className="h-5 w-5 text-cyan"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
      );
    case "build-with-us":
      return (
        <svg
          className="h-5 w-5 text-cyan"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      );
    case "practical-prep":
      return (
        <svg
          className="h-5 w-5 text-cyan"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "career-guidance":
      return (
        <svg
          className="h-5 w-5 text-emerald-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      );
    case "all-in-one-package":
    default:
      return (
        <svg
          className="h-5 w-5 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      );
  }
}

export function StudentServicesScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const scrollAmount = direction === "left" ? -360 : 360;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const { studentServicesScroll: copy } = STRINGS;

  return (
    <section
      id="student-services"
      className="surface-dark relative overflow-hidden py-10 md:py-14"
      aria-labelledby="student-services-heading"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-fade opacity-30" />
        <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan/10 blur-[100px]" />
        <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue/10 blur-[100px]" />
      </div>

      <Container wide className="relative">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="eyebrow text-cyan/90">{copy.eyebrow}</p>
            <h2
              id="student-services-heading"
              className="mt-2 font-display text-[length:var(--text-3xl)] text-white"
            >
              {copy.headline}
            </h2>
            <p className="mt-2 max-w-2xl text-xs text-white/65 sm:text-sm">
              {copy.description}
            </p>
          </Reveal>

          {/* Desktop scroll arrows */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll offerings left"
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white transition hover:border-cyan/40 hover:bg-white/[0.08] active:scale-95",
                !canScrollLeft && "cursor-not-allowed opacity-30 hover:border-white/10 hover:bg-white/[0.04]",
              )}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll offerings right"
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white transition hover:border-cyan/40 hover:bg-white/[0.08] active:scale-95",
                !canScrollRight && "cursor-not-allowed opacity-30 hover:border-white/10 hover:bg-white/[0.04]",
              )}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal scroll cards */}
        <div
          ref={containerRef}
          className="no-scrollbar mt-6 -mx-4 flex gap-4 overflow-x-auto px-4 pb-4 pt-1 snap-x snap-mandatory sm:-mx-6 sm:px-6 md:mt-8 md:gap-5"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {copy.items.map((item) => (
            <article
              key={item.id}
              className="flex w-[290px] shrink-0 snap-start flex-col justify-between rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.03] to-white/[0.01] p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan/40 hover:bg-white/[0.07] hover:-translate-y-1 sm:w-[330px] sm:p-6"
            >
              <div>
                {/* Header row: Number + Icon + Badge */}
                <div className="flex items-center justify-between">
                  <div className="rounded-md border border-white/10 bg-white/[0.04] p-1.5">
                    <ServiceIcon id={item.id} />
                  </div>
                  <span
                    className={cn(
                      "rounded-md px-2 py-0.5 text-[10px] font-semibold tracking-wider uppercase border",
                      item.badge === "100% FREE"
                        ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                        : item.badge === "BEST VALUE"
                        ? "border-amber-500/40 bg-amber-500/10 text-amber-300"
                        : "border-cyan/30 bg-cyan/10 text-cyan",
                    )}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="mt-3.5 font-display text-base font-semibold text-white sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-cyan/90">
                  {item.tagline}
                </p>

                {/* Description */}
                <p className="mt-2 text-xs leading-relaxed text-white/60">
                  {item.description}
                </p>

                {/* Benefits / Deliverables list */}
                <div className="mt-4 border-t border-white/5 pt-3.5">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                    What You Get:
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {item.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] leading-snug text-white/75 sm:text-xs">
                        <span className="shrink-0 font-bold text-cyan mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action CTA */}
              <div className="mt-5 pt-2">
                <Link
                  href={item.ctaHref}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-cyan/30 bg-cyan/10 px-3.5 py-2 text-xs font-semibold text-cyan transition hover:border-cyan hover:bg-cyan hover:text-black active:scale-[0.98]"
                >
                  <span>{item.ctaText}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <p className="mt-2 text-center text-[11px] text-white/40 sm:hidden">
          ← {copy.scrollHint} →
        </p>
      </Container>
    </section>
  );
}
