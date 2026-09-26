"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { technologyGroups } from "@/data/technologies";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ShowMoreFade } from "@/components/ui/ShowMoreFade";
import { STRINGS } from "@/config/strings";
import type { TechnologyGroup } from "@/data/technologies";

function TechIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "frontend":
      return (
        <svg
          className="h-5 w-5 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      );
    case "backend":
      return (
        <svg
          className="h-5 w-5 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
          <line x1="6" x2="6.01" y1="6" y2="6" />
          <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
      );
    case "mobile":
      return (
        <svg
          className="h-5 w-5 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      );
    case "database":
      return (
        <svg
          className="h-5 w-5 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case "cloud":
      return (
        <svg
          className="h-5 w-5 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      );
    case "ai":
    default:
      return (
        <svg
          className="h-5 w-5 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="M5 3v4" />
          <path d="M19 17v4" />
          <path d="M3 5h4" />
          <path d="M17 19h4" />
        </svg>
      );
  }
}

export function TechnologiesSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const reduce = useReducedMotion();

  const filterOptions = [
    { id: "all", label: STRINGS.technologies.filters.all },
    { id: "frontend", label: STRINGS.technologies.filters.frontend },
    { id: "backend", label: STRINGS.technologies.filters.backend },
    { id: "mobile", label: STRINGS.technologies.filters.mobile },
    { id: "database", label: STRINGS.technologies.filters.database },
    { id: "cloud", label: STRINGS.technologies.filters.cloud },
    { id: "ai", label: STRINGS.technologies.filters.ai },
  ];

  const displayedGroups =
    selectedFilter === "all"
      ? technologyGroups
      : technologyGroups.filter((g) => g.id === selectedFilter);

  const previewGroups =
    selectedFilter === "all" ? displayedGroups.slice(0, 2) : displayedGroups;
  const extraGroups =
    selectedFilter === "all" ? displayedGroups.slice(2) : [];

  function TechCard({ group }: { group: TechnologyGroup }) {
    return (
      <motion.div
        layout
        initial={reduce ? false : { opacity: 0, scale: 0.94, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={reduce ? undefined : { opacity: 0, scale: 0.92, y: -10 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        whileHover={reduce ? undefined : { y: -6 }}
        className="group relative flex h-full flex-col justify-between rounded-md border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-cyan/40 hover:bg-white/[0.05] hover:shadow-[0_16px_40px_rgba(34,211,238,0.1)] sm:rounded-xl sm:p-7"
      >
        <div className="pointer-events-none absolute -inset-px rounded-[inherit] bg-gradient-to-br from-cyan/10 via-transparent to-blue/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative">
          <div className="flex items-center justify-between gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/10 text-cyan transition-all duration-300 group-hover:bg-cyan group-hover:text-navy-deep group-hover:shadow-[0_4px_16px_rgba(34,211,238,0.4)] sm:h-11 sm:w-11">
              <TechIcon icon={group.icon} />
            </div>
            <span className="rounded-full border border-cyan/20 bg-cyan/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan sm:text-[11px]">
              {group.highlight}
            </span>
          </div>

          <h3 className="mt-4 font-display text-lg text-white transition-colors group-hover:text-cyan sm:text-2xl">
            {group.label}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-white/65 sm:text-sm">
            {group.description}
          </p>
        </div>

        <div className="relative mt-5 border-t border-white/8 pt-4 sm:mt-6 sm:pt-5">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40 sm:text-[11px]">
            {STRINGS.technologies.coreHeading}
          </p>
          <ul className="flex flex-wrap gap-1.5 sm:gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/80 transition-colors duration-200 group-hover:border-cyan/25 group-hover:text-cyan hover:!border-cyan hover:!bg-cyan/15 sm:px-3 sm:py-1.5 sm:text-xs"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  }

  return (
    <section id="technologies" className="surface-dark section-pad relative overflow-hidden noise-overlay">
      {/* Background ambient lighting and grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-fade opacity-45" />
        <div className="absolute top-1/4 -right-10 h-80 w-80 rounded-full bg-cyan/15 blur-[120px]" />
        <div className="absolute bottom-10 -left-10 h-80 w-80 rounded-full bg-blue/15 blur-[120px]" />
      </div>

      <Container wide className="relative">
        <Reveal>
          <SectionHeading
            eyebrow={STRINGS.technologies.eyebrow}
            title={STRINGS.technologies.title}
            description={STRINGS.technologies.description}
            noWrap
          />
        </Reveal>

        {/* Filter Navigation Pills: Horizontally Scrollable on Mobile */}
        <Reveal delay={0.1}>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 no-scrollbar sm:mx-0 sm:px-0 sm:flex-wrap mt-4 md:mt-6">
            {filterOptions.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`relative shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 md:px-4 md:py-2 ${
                    isActive
                      ? "text-white shadow-[0_0_20px_rgba(59,130,246,0.45)]"
                      : "border border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTechTab"
                      className="absolute inset-0 rounded-full bg-blue"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Desktop: full grid */}
        <motion.div
          layout
          className="mt-5 hidden gap-4 sm:grid-cols-2 md:mt-7 md:grid md:gap-5 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {displayedGroups.map((group) => (
              <TechCard key={`desk-${group.id}`} group={group} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile: 2 cards + fade / dropdown */}
        <div className="mt-4 md:hidden">
          {selectedFilter !== "all" || extraGroups.length === 0 ? (
            <div className="grid gap-3">
              {displayedGroups.map((group) => (
                <TechCard key={group.id} group={group} />
              ))}
            </div>
          ) : (
            <ShowMoreFade
              expandFromMd={false}
              moreLabel={STRINGS.technologies.seeMore}
              lessLabel={STRINGS.technologies.showLess}
              visible={
                <div className="grid gap-3">
                  {previewGroups.map((group) => (
                    <TechCard key={group.id} group={group} />
                  ))}
                </div>
              }
              hidden={
                <div className="grid gap-3">
                  {extraGroups.map((group) => (
                    <TechCard key={group.id} group={group} />
                  ))}
                </div>
              }
            />
          )}
        </div>
      </Container>
    </section>
  );
}
