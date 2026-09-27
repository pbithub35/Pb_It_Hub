"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useStudentAction } from "./StudentActionContext";
import { StudentDetailsForm } from "./StudentDetailsForm";
import { STRINGS } from "@/config/strings";

export function StudentActionDrawer() {
  const { drawerOpen, closeDrawer, selection, plan } = useStudentAction();
  const reduce = useReducedMotion();

  const isCareer = selection.mode === "career-guidance" || plan.isFreeFlow;

  return (
    <AnimatePresence>
      {drawerOpen ? (
        <>
          <motion.button
            type="button"
            aria-label="Close drawer"
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="student-action-title"
            className="fixed inset-x-0 bottom-0 z-[70] flex max-h-[92svh] flex-col overflow-hidden rounded-t-3xl border border-slate-200 bg-[#fbf9f5] shadow-[0_-25px_70px_rgba(0,0,0,0.45)] md:inset-y-0 md:left-auto md:right-0 md:h-full md:max-h-none md:w-full md:max-w-md md:rounded-none md:rounded-l-3xl"
            initial={reduce ? false : { y: "100%" }}
            animate={{ y: 0, x: 0 }}
            exit={reduce ? undefined : { y: "100%" }}
            transition={{ type: "spring", stiffness: 380, damping: 36 }}
          >
            <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-slate-300 md:hidden" />

            <header className="flex items-start justify-between gap-3 border-b border-slate-200/80 bg-white px-5 py-4 sm:px-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                  PB IT HUB · Student
                </p>
                <h2
                  id="student-action-title"
                  className="mt-1 font-display text-lg font-extrabold text-slate-900 sm:text-xl"
                >
                  {isCareer ? STRINGS.career.title : STRINGS.buy.completeOrder}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeDrawer}
                aria-label={STRINGS.form.close}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-slate-50 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </header>

            <div className="space-y-5 overflow-y-auto bg-white px-5 py-5 sm:px-6">
              {!isCareer && plan.items.length > 0 ? (
                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-700">
                    {STRINGS.form.orderSummary}
                  </p>
                  <ul className="space-y-2">
                    {plan.items.map((item) => (
                      <li
                        key={item.id}
                        className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 shadow-sm"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-display text-sm font-bold text-slate-900">
                              {item.label}
                            </p>
                            {item.detail ? (
                              <p className="mt-0.5 text-xs text-slate-600">
                                {item.detail}
                              </p>
                            ) : null}
                          </div>
                          {item.offerLabel ? (
                            <span className="shrink-0 rounded border border-emerald-300 bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                              {item.offerLabel}
                            </span>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className={isCareer || plan.items.length === 0 ? undefined : "border-t border-slate-200 pt-4"}>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-700">
                  {STRINGS.form.enterDetails}
                </p>
                <StudentDetailsForm />
              </div>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
