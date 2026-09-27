"use client";

import { useId, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { STRINGS } from "@/config/strings";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function FaqAccordion() {
  const searchInputId = useId();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(["q1", "q2"]),
  );

  const toggleOpen = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return STRINGS.faq.items.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      return (
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
      );
    });
  }, [selectedCategory, searchQuery]);

  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hi PB IT HUB, I have a question about projects and services.",
  )}`;

  return (
    <div className="mt-8 space-y-10 md:mt-12">
      {/* Search and Category Filter Bar */}
      <div className="space-y-4">
        <div className="relative max-w-xl">
          <label htmlFor={searchInputId} className="sr-only">
            {STRINGS.faq.searchPlaceholder}
          </label>
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            id={searchInputId}
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={STRINGS.faq.searchPlaceholder}
            className="w-full rounded-full border border-navy/10 bg-white py-3 pl-11 pr-4 text-sm text-navy placeholder-muted/60 shadow-[var(--shadow-soft)] transition-colors focus:border-blue focus:outline-none focus:ring-1 focus:ring-blue"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted hover:text-navy"
            >
              Clear
            </button>
          ) : null}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
              selectedCategory === "all"
                ? "bg-blue text-white shadow-md shadow-blue/20"
                : "border border-navy/10 bg-white text-muted-strong hover:border-navy/20 hover:text-navy"
            }`}
          >
            {STRINGS.faq.allCategory}
          </button>
          {STRINGS.faq.categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-blue text-white shadow-md shadow-blue/20"
                    : "border border-navy/10 bg-white text-muted-strong hover:border-navy/20 hover:text-navy"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Accordion Questions List */}
      <div className="space-y-3.5">
        {filteredItems.length === 0 ? (
          <div className="rounded-2xl border border-navy/10 bg-white p-8 text-center shadow-[var(--shadow-soft)]">
            <p className="text-base text-muted-strong">
              No matching questions found for &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 text-xs font-semibold uppercase tracking-wider text-blue hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          filteredItems.map((item) => {
            const isOpen = openIds.has(item.id);
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[var(--shadow-soft)] transition-colors hover:border-navy/20"
              >
                <button
                  type="button"
                  onClick={() => toggleOpen(item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left md:p-6"
                >
                  <span className="font-display text-base font-semibold text-navy md:text-lg">
                    {item.question}
                  </span>
                  <span
                    className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-navy/[0.03] text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-navy" : ""
                    }`}
                  >
                    <ChevronDownIcon className="h-3.5 w-3.5" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                      <div className="border-t border-navy/10 px-5 pb-6 pt-4 md:px-6">
                        <p className="text-sm leading-relaxed text-muted-strong md:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>

      {/* Still Have Questions CTA */}
      <div className="rounded-3xl border border-blue/20 bg-gradient-to-b from-blue/[0.06] to-blue/[0.02] p-6 md:p-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
              {STRINGS.faq.stillQuestions}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-strong md:text-base">
              {STRINGS.faq.stillQuestionsSub}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="md"
            >
              {STRINGS.faq.whatsappCTA}
            </Button>
            <Button href="/contact" variant="secondary" size="md">
              {STRINGS.faq.contactCTA}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
