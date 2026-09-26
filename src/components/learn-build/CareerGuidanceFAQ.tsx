"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Is this session genuinely 100% free? Are there any hidden fees or upselling?",
    answer:
      "Yes, it is 100% completely free with zero hidden conditions. We never sell pre-recorded courses, push paid bootcamp packages, or pressure you into buying anything. We are working software engineers who want to give back to the student community and help bridge the gap between academic theory and real industry demands.",
  },
  {
    question: "Who will be conducting my 1-on-1 session?",
    answer:
      "You will speak directly with active software engineers and engineering mentors who build production web applications, design databases, and participate in hiring. You get ground-truth feedback from someone who actually works in the current tech ecosystem.",
  },
  {
    question: "I am in 1st/2nd year or from a non-CS branch. Is this relevant for me?",
    answer:
      "Absolutely. In fact, getting guidance early is the best decision you can make! Many students wait until their final semester before realizing their projects or skills do not match market expectations. Getting clarity early saves you years of wasted effort.",
  },
  {
    question: "Can I ask questions about my final year project or college viva?",
    answer:
      "Yes! We frequently help students review project architecture, database schemas, API choices, and viva defense strategies so they can present their work to evaluators with complete confidence.",
  },
  {
    question: "How does the session happen and how do I schedule it?",
    answer:
      "After you submit your contact details via the 'Book Free Guidance' button, our team reaches out on WhatsApp or email to find a convenient time that fits your college schedule. The session is held 1-on-1 on Google Meet with screen sharing enabled.",
  },
];

export function CareerGuidanceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className={cn(
              "overflow-hidden rounded-2xl border transition-all duration-200",
              isOpen
                ? "border-cyan-400/50 bg-theme-card-hover shadow-sm"
                : "border-slate-700/80 bg-theme-card hover:border-slate-600 hover:bg-theme-card-hover",
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-semibold text-white sm:text-base"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-xs font-bold text-cyan-400">
                  ?
                </span>
                <span>{faq.question}</span>
              </span>
              <span
                className={cn(
                  "shrink-0 text-xs text-slate-400 transition-transform duration-200",
                  isOpen && "rotate-180 text-cyan-400",
                )}
                aria-hidden
              >
                ▼
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="border-t border-slate-700/60 px-5 pb-5 pt-3">
                    <p className="text-xs leading-relaxed text-slate-200 sm:text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
