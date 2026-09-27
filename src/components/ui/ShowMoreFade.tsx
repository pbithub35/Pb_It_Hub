"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex h-7 w-7 items-center justify-center rounded-full border border-navy/12 bg-white text-blue transition duration-300",
        open && "rotate-180 border-blue/30 bg-blue/[0.06]",
      )}
      aria-hidden
    >
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

interface ShowMoreFadeProps {
  /** Always-visible preview content */
  visible: React.ReactNode;
  /** Extra content revealed on expand */
  hidden: React.ReactNode;
  moreLabel?: string;
  lessLabel?: string;
  /** Keep full list open from md breakpoint up */
  expandFromMd?: boolean;
  className?: string;
}

export function ShowMoreFade({
  visible,
  hidden,
  moreLabel = "Show more",
  lessLabel = "Show less",
  expandFromMd = true,
  className,
}: ShowMoreFadeProps) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className={cn(className)}>
      {expandFromMd ? (
        <div className="hidden md:block">
          {visible}
          {hidden}
        </div>
      ) : null}

      <div className={cn(expandFromMd && "md:hidden")}>
        <div className="relative">
          {visible}

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                key="extra"
                initial={reduce ? false : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={reduce ? undefined : { opacity: 0, height: 0 }}
                transition={{ duration: 0.32, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="pt-3">{hidden}</div>
              </motion.div>
            ) : (
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-t from-white via-white/90 to-transparent"
                aria-hidden
              />
            )}
          </AnimatePresence>
        </div>

        <div className="relative z-10 -mt-2 flex justify-center pt-1">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-navy shadow-[var(--shadow-soft)] transition hover:border-blue/25 hover:text-blue"
          >
            <span>{open ? lessLabel : moreLabel}</span>
            <Chevron open={open} />
          </button>
        </div>
      </div>
    </div>
  );
}
