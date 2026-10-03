"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { STRINGS } from "@/config/strings";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

function ServiceIcon({ id }: { id: string }) {
  switch (id) {
    case "sessions":
      return (
        <svg
          className="h-5 w-5 text-blue"
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
          className="h-5 w-5 text-blue"
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
          className="h-5 w-5 text-blue"
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
          className="h-5 w-5 text-blue"
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
          className="h-5 w-5 text-blue"
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
          className="h-5 w-5 text-teal-600"
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
          className="h-5 w-5 text-amber-600"
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
  const [activeIndex, setActiveIndex] = useState(0);
  const reduce = useReducedMotion();

  const { studentServicesScroll: copy } = STRINGS;
  const totalItems = copy.items.length;

  const checkScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);

    const card = el.querySelector<HTMLElement>("[data-student-card]");
    if (card) {
      const styles = getComputedStyle(el);
      const gap = parseFloat(styles.columnGap || styles.gap || "24") || 24;
      const cardWidth = card.offsetWidth + gap;
      if (cardWidth > 0) {
        const index = Math.round(el.scrollLeft / cardWidth);
        setActiveIndex(Math.min(Math.max(0, index), totalItems - 1));
      }
    }
  }, [totalItems]);

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
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-student-card]");
    const styles = getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || "24") || 24;
    const amount = card ? card.offsetWidth + gap : el.clientWidth;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-student-card]");
    if (cards[index]) {
      cards[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <section
      id="student-services"
      className="relative overflow-hidden py-10 md:py-16"
      style={{ backgroundColor: "var(--pb-surface)" }}
      aria-labelledby="student-services-heading"
    >
      <Container wide className="relative">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease }}
          >
            <p className="eyebrow text-blue">{copy.eyebrow}</p>
            <h2
              id="student-services-heading"
              className="heading-section mt-2 text-balance"
            >
              {copy.headline}
            </h2>
            <p className="mt-2 max-w-2xl text-xs text-muted-strong sm:text-sm">
              {copy.description}
            </p>
          </motion.div>

          <div className="flex items-center justify-between sm:justify-end gap-3">
            <span className="text-xs font-semibold text-muted sm:hidden">
              {activeIndex + 1} / {totalItems}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll offerings left"
                className={cn(
                  "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-navy/10 bg-white text-navy shadow-[var(--shadow-soft)] transition hover:border-blue/25 hover:text-blue active:scale-95",
                  !canScrollLeft &&
                    "cursor-not-allowed opacity-30 hover:border-navy/10 hover:text-navy",
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
                  "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-navy/10 bg-white text-navy shadow-[var(--shadow-soft)] transition hover:border-blue/25 hover:text-blue active:scale-95",
                  !canScrollRight &&
                    "cursor-not-allowed opacity-30 hover:border-navy/10 hover:text-navy",
                )}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="mt-6 overflow-hidden md:mt-8">
          <motion.div
            ref={containerRef}
            className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 pt-1 sm:gap-5 lg:gap-6"
            style={{ WebkitOverflowScrolling: "touch" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.07, delayChildren: 0.05 },
              },
            }}
          >
            {copy.items.map((item) => (
              <motion.article
                key={item.id}
                data-student-card
                variants={
                  reduce
                    ? undefined
                    : {
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4, ease },
                        },
                      }
                }
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.22, ease }}
                className="flex w-[84vw] max-w-[340px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-navy/10 bg-white p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-blue/30 hover:shadow-lg sm:w-[calc((100%-1.25rem)/2)] sm:max-w-none sm:p-6 lg:w-[calc((100%-3rem)/3)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="rounded-xl border border-blue/15 bg-blue/[0.05] p-2">
                      <ServiceIcon id={item.id} />
                    </div>
                    <span
                      className={cn(
                        "rounded-md px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase border",
                        item.badge === "100% FREE"
                          ? "border-emerald-500/30 bg-emerald-50 text-emerald-700"
                          : item.badge === "BEST VALUE"
                            ? "border-amber-500/30 bg-amber-50 text-amber-700"
                            : "border-blue/20 bg-blue/[0.06] text-blue",
                      )}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-base font-semibold text-navy sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-blue">{item.tagline}</p>

                  <p className="mt-2.5 text-xs leading-relaxed text-muted-strong">
                    {item.description}
                  </p>

                  <div className="mt-4 border-t border-navy/8 pt-3.5">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
                      What You Get:
                    </p>
                    <ul className="mt-2 space-y-2">
                      {item.benefits.map((benefit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs leading-snug text-muted-strong"
                        >
                          <span className="mt-0.5 shrink-0 font-bold text-blue">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    href={item.ctaHref}
                    className="inline-flex min-h-[42px] w-full items-center justify-center gap-1.5 rounded-xl border border-blue/20 bg-blue/[0.06] px-4 py-2.5 text-xs font-semibold text-blue transition hover:border-blue hover:bg-blue hover:text-white active:scale-[0.98]"
                  >
                    <span>{item.ctaText}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots & Hint */}
        <div className="mt-4 flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Card navigation">
            {copy.items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to card ${idx + 1}`}
                aria-selected={activeIndex === idx}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  activeIndex === idx
                    ? "w-6 bg-blue"
                    : "w-2 bg-navy/15 hover:bg-navy/30",
                )}
              />
            ))}
          </div>

          <p className="text-center text-[11px] text-muted sm:hidden">
            ← {copy.scrollHint} →
          </p>
        </div>
      </Container>
    </section>
  );
}
