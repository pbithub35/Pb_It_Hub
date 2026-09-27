"use client";

import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useContactModal } from "@/components/forms/ContactModalContext";
import { ProjectInquiryForm } from "@/components/forms/ProjectInquiryForm";
import { durations, easings } from "@/lib/animations";
import { STRINGS } from "@/config/strings";

export function ContactModal() {
  const { open, closeModal } = useContactModal();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") closeModal();
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeModal]);

  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-[80] flex items-end justify-center md:items-center md:p-6">
          <motion.button
            type="button"
            aria-label="Close project inquiry dialog"
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquiry-title"
            className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-2xl border border-navy/10 bg-white shadow-[var(--shadow-card)] md:rounded-2xl"
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: durations.base, ease: easings.outExpo }}
          >
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative hidden overflow-hidden border-b border-navy/8 bg-off-white p-6 md:block md:border-b-0 md:border-r md:border-navy/8 md:p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue/[0.08] via-transparent to-cyan/[0.06]" />
                <div className="relative">
                  <p className="eyebrow text-blue">{STRINGS.form.startProject}</p>
                  <h2 className="heading-section mt-3">
                    {STRINGS.form.tellUsBuild}
                  </h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-strong md:text-base">
                    {STRINGS.form.inquiryDescription}
                  </p>
                  <div className="mt-6 space-y-2 text-xs uppercase tracking-[0.18em] text-muted">
                    <p>{STRINGS.hero.steps.build}</p>
                    <p className="pl-4 text-blue">↓ {STRINGS.hero.steps.automate}</p>
                    <p className="pl-8 text-cyan">↓ {STRINGS.hero.steps.grow}</p>
                  </div>
                </div>
              </div>

              <div className="overflow-y-auto p-4 md:p-8">
                <div className="mb-3.5 flex items-start justify-between gap-3 md:mb-5 md:gap-4">
                  <div>
                    <h2
                      id="inquiry-title"
                      className="font-display text-xl text-navy md:hidden"
                    >
                      {STRINGS.form.startProject}
                    </h2>
                    <p className="mt-1 text-xs text-muted-strong md:text-sm">
                      {STRINGS.form.requiredNote}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-full border border-navy/12 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-muted-strong transition hover:border-blue/25 hover:bg-blue/[0.04] hover:text-navy"
                  >
                    {STRINGS.form.close}
                  </button>
                </div>
                <ProjectInquiryForm />
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
