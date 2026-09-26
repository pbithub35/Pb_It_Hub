"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  filterStudentProjects,
  getPublicStudentProjects,
  getStudentProjectBySlug,
  projectLevelFilters,
  projectPlatformFilters,
  type ProjectLevelFilterId,
  type ProjectPlatformFilterId,
} from "@/data/studentProjects";
import {
  completeProjectPackage,
  studentOffers,
} from "@/data/studentOffers";
import { useStudentAction } from "./StudentActionContext";
import { TechnologyBadges } from "./TechnologyBadges";
import { cn } from "@/lib/utils";
import { STRINGS } from "@/config/strings";

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <polyline
        points="20 6 9 17 4 12"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="16" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="8" r="1" fill="currentColor" />
    </svg>
  );
}

function VideoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="2" y="4" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <polygon points="22 7 16 12 22 17 22 7" fill="currentColor" />
    </svg>
  );
}

interface OfferItem {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  whatWeProvide: readonly string[];
  isPackage?: boolean;
}

const detailedOffers: OfferItem[] = [
  {
    id: studentOffers.projectKT.id,
    name: studentOffers.projectKT.name,
    badge: studentOffers.projectKT.badge,
    tagline: studentOffers.projectKT.tagline,
    description: studentOffers.projectKT.description,
    whatWeProvide: studentOffers.projectKT.whatWeProvide,
  },
  {
    id: studentOffers.sessions.id,
    name: studentOffers.sessions.name,
    badge: studentOffers.sessions.badge,
    tagline: studentOffers.sessions.tagline,
    description: studentOffers.sessions.description,
    whatWeProvide: studentOffers.sessions.whatWeProvide,
  },
  {
    id: studentOffers.practicalPreparation.id,
    name: studentOffers.practicalPreparation.name,
    badge: studentOffers.practicalPreparation.badge,
    tagline: studentOffers.practicalPreparation.tagline,
    description: studentOffers.practicalPreparation.description,
    whatWeProvide: studentOffers.practicalPreparation.whatWeProvide,
  },
  {
    id: completeProjectPackage.id,
    name: completeProjectPackage.name,
    badge: completeProjectPackage.badge,
    tagline: completeProjectPackage.tagline,
    description: completeProjectPackage.description,
    whatWeProvide: completeProjectPackage.whatWeProvide,
    isPackage: true,
  },
];

export function ProjectAccordion() {
  const reduce = useReducedMotion();
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<ProjectLevelFilterId>("all");
  const [platformFilter, setPlatformFilter] =
    useState<ProjectPlatformFilterId>("all");

  const projects = useMemo(() => {
    const base = filterStudentProjects(
      getPublicStudentProjects(),
      levelFilter,
      platformFilter,
    );
    if (!searchQuery.trim()) return base;
    const q = searchQuery.toLowerCase().trim();
    return base.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.platform.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)) ||
        p.features.some((f) => f.toLowerCase().includes(q)),
    );
  }, [levelFilter, platformFilter, searchQuery]);

  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [infoModalOffer, setInfoModalOffer] = useState<OfferItem | null>(null);

  const {
    selection,
    plan,
    hasSelection,
    selectProject,
    toggleOffer,
    selectPackage,
    clearPackage,
    openDrawer,
    openProjectDownload,
    clearAll,
  } = useStudentAction();

  const selectedProject = selection.projectSlug
    ? getStudentProjectBySlug(selection.projectSlug)
    : undefined;

  function handleOfferClick(offer: OfferItem, projectSlug: string) {
    if (!selection.projectSlug) {
      selectProject(projectSlug);
    }
    if (offer.isPackage) {
      if (selection.packageSelected) clearPackage();
      else selectPackage();
    } else {
      toggleOffer(offer.id);
    }
  }

  function isOfferActive(offer: OfferItem) {
    if (offer.isPackage) return selection.packageSelected;
    return selection.offerIds.includes(offer.id);
  }

  return (
    <div className="space-y-4">
      {/* FILTER & SEARCH BAR */}
      <div className="space-y-2.5 rounded-xl border border-slate-700/60 bg-slate-900/60 p-3 sm:p-4 backdrop-blur-sm">
        {/* Search Bar Input */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={STRINGS.learnBuild.searchPlaceholder}
            className="w-full rounded-lg border border-slate-700 bg-slate-950/80 py-2 pl-9 pr-9 text-xs sm:text-sm text-white placeholder-slate-400 transition-colors focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-slate-400 hover:text-white"
            >
              ✕
            </button>
          ) : null}
        </div>

        {/* Stack Filters Bar - smooth horizontal scroll on mobile, flex-wrap on sm */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 -mx-0.5 px-0.5 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline shrink-0">
            {STRINGS.learnBuild.stackLabel}
          </span>
          {projectPlatformFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setPlatformFilter(filter.id)}
              className={cn(
                "shrink-0 rounded-full border px-3 py-1 text-[11px] font-semibold transition-all",
                platformFilter === filter.id
                  ? "border-cyan/60 bg-cyan/20 text-cyan shadow-sm"
                  : "border-slate-700/80 bg-slate-900/70 text-slate-300 hover:border-slate-500 hover:text-white",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Level Filters Bar & Results Count */}
        <div className="flex flex-col gap-2 border-t border-slate-800/80 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 -mx-0.5 px-0.5 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline shrink-0">
              {STRINGS.learnBuild.levelLabel}
            </span>
            {projectLevelFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setLevelFilter(filter.id)}
                className={cn(
                  "shrink-0 rounded-md border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors",
                  levelFilter === filter.id
                    ? "border-cyan/50 bg-cyan/15 text-cyan"
                    : "border-slate-700/60 bg-slate-950/40 text-slate-300 hover:border-slate-500 hover:text-white",
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <p className="text-[11px] font-medium text-slate-400 shrink-0 self-end sm:self-auto">
            {STRINGS.learnBuild.showingProjects(projects.length)}
          </p>
        </div>
      </div>

      {/* PROJECTS LIST ACCORDION */}
      <div className="space-y-2.5 sm:space-y-3">
        {projects.length === 0 ? (
          <div className="rounded-xl border border-slate-700/70 bg-theme-card p-6 text-sm text-slate-300">
            {STRINGS.learnBuild.noMatches} &ldquo;{searchQuery || platformFilter}&rdquo;. Try another search keyword or{" "}
            <button
              type="button"
              className="font-semibold text-cyan underline-offset-2 hover:underline"
              onClick={() => {
                setSearchQuery("");
                setLevelFilter("all");
                setPlatformFilter("all");
              }}
            >
              {STRINGS.learnBuild.clearFilters}
            </button>
            .
          </div>
        ) : null}
        {projects.map((project, index) => {
          const isOpen = openSlug === project.slug;
          const isSelected = selection.projectSlug === project.slug;
          const number = String(index + 1).padStart(2, "0");

          return (
            <div
              key={project.slug}
              className={cn(
                "overflow-hidden rounded-xl border transition-all duration-300",
                isOpen
                  ? "border-cyan/50 bg-theme-card-hover shadow-md"
                  : "border-slate-700/70 bg-theme-card/90 hover:border-slate-600 hover:bg-theme-card-hover",
                isSelected && "ring-2 ring-cyan/50",
              )}
            >
              {/* Compact Accordion Header */}
              <div className="flex w-full items-center gap-2 px-3 py-2.5 sm:gap-3 sm:px-5 sm:py-3">
                <button
                  type="button"
                  className="flex min-w-0 flex-1 items-center gap-2.5 text-left sm:gap-3.5"
                  aria-expanded={isOpen}
                  onClick={() => {
                    setOpenSlug((current) => {
                      const next = current === project.slug ? null : project.slug;
                      if (next) selectProject(project.slug);
                      return next;
                    });
                  }}
                >
                  <span
                    className={cn(
                      "flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg font-display text-[11px] sm:text-xs font-bold transition-colors",
                      isOpen
                        ? "bg-cyan/20 text-cyan border border-cyan/40"
                        : "bg-slate-800 text-slate-300 border border-slate-700/60",
                    )}
                  >
                    {number}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <h3 className="font-display text-sm sm:text-base font-semibold text-white">
                        {project.name}
                      </h3>
                      <span className="rounded-md border border-slate-600/80 bg-slate-800/80 px-2 py-0.2 text-[9px] sm:text-[10px] font-semibold text-slate-200">
                        {project.platform}
                      </span>
                      {project.level === "senior" ? (
                        <span className="rounded-md border border-violet-500/40 bg-violet-500/15 px-1.5 py-0.2 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-violet-200">
                          Senior
                        </span>
                      ) : null}
                      {project.level === "custom" ? (
                        <span className="rounded-md border border-amber-500/40 bg-amber-500/15 px-1.5 py-0.2 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-amber-200">
                          Custom
                        </span>
                      ) : null}
                      {isSelected ? (
                        <span className="inline-flex items-center gap-1 rounded-full border border-cyan/30 bg-cyan/20 px-2 py-0.2 text-[9px] font-bold uppercase tracking-wider text-cyan">
                          Selected
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-0.5 truncate text-[11px] text-slate-300 sm:text-xs">
                      {project.shortDescription}
                    </p>
                  </div>

                  <span
                    className={cn(
                      "shrink-0 text-xs text-slate-400 transition-transform duration-200",
                      isOpen && "rotate-180 text-cyan",
                    )}
                    aria-hidden
                  >
                    ▼
                  </span>
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openProjectDownload(project.slug);
                  }}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider transition sm:px-3 sm:py-2 sm:text-[11px]",
                    isSelected
                      ? "border-cyan/50 bg-cyan text-navy-deep"
                      : "border-cyan/40 bg-cyan/15 text-cyan hover:bg-cyan/25",
                  )}
                  aria-label={`Download source code for ${project.name}`}
                >
                  <DownloadIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>Source Code</span>
                </button>
              </div>

              {/* Accordion Expanded Content */}
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduce ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-slate-700/60 px-3.5 pb-4 pt-3.5 sm:px-6 sm:pb-6 sm:pt-4">
                      <div className="min-w-0 space-y-2.5 sm:space-y-3.5">
                        <p className="text-xs leading-relaxed text-slate-200 sm:text-sm">
                          {project.description}
                        </p>

                        <div className="space-y-1">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-300">
                            {STRINGS.learnBuild.coreModulesLabel}
                          </p>
                          <ul className="flex flex-wrap gap-1">
                            {project.features.map((feature) => (
                              <li
                                key={feature}
                                className="rounded-md border border-slate-700 bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-200 font-medium sm:px-2.5 sm:py-1 sm:text-[11px]"
                              >
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-0.5">
                          <TechnologyBadges
                            technologies={project.technologies}
                            size="sm"
                          />
                        </div>
                      </div>

                      {/* CLEAR, STRUCTURED ADD-ONS SECTION */}
                      <div className="mt-4 border-t border-slate-700/60 pt-3.5 sm:mt-6 sm:pt-5">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-cyan" />
                              <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-white">
                                {STRINGS.learnBuild.optionalAddonsTitle}
                              </h4>
                            </div>
                            <p className="mt-0.5 text-[11px] text-slate-300 sm:text-xs">
                              {STRINGS.learnBuild.optionalAddonsSubtitle}
                            </p>
                          </div>
                          <span className="text-[10px] text-cyan-300 font-medium sm:text-[11px]">
                            {STRINGS.learnBuild.clickInfoTip}
                          </span>
                        </div>

                        {/* Add-on Cards Grid */}
                        <div className="mt-3 grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
                          {detailedOffers.map((offer) => {
                            const active = isOfferActive(offer);

                            return (
                              <div
                                key={offer.id}
                                onClick={() => handleOfferClick(offer, project.slug)}
                                className={cn(
                                  "group relative flex cursor-pointer flex-col justify-between rounded-xl border p-2.5 sm:p-3.5 transition-all duration-200",
                                  active
                                    ? "border-cyan-400 bg-cyan-950/40 shadow-[0_0_20px_rgba(34,211,238,0.18)] ring-1 ring-cyan-400"
                                    : "border-slate-700/80 bg-theme-panel-soft hover:border-slate-600 hover:bg-theme-panel",
                                )}
                              >
                                <div>
                                  {/* Card Top: Checkbox + Badges + Info Button */}
                                  <div className="flex items-start justify-between gap-1.5 sm:gap-2">
                                    <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                                      <span
                                        className={cn(
                                          "flex h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 items-center justify-center rounded transition-colors",
                                          active
                                            ? "bg-cyan text-navy-deep"
                                            : "border border-slate-500 bg-slate-800/80 group-hover:border-cyan",
                                        )}
                                      >
                                        {active && <CheckIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3 stroke-[3]" />}
                                      </span>
                                      <span className="truncate font-display text-xs sm:text-sm font-semibold text-white group-hover:text-cyan transition-colors">
                                        {offer.name}
                                      </span>
                                    </div>

                                    {/* INFO ICON BUTTON: Trigger 'What We Provide' */}
                                    <button
                                      type="button"
                                      aria-label={`View what we provide for ${offer.name}`}
                                      title="What we provide"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setInfoModalOffer(offer);
                                      }}
                                      className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full border border-slate-600 bg-slate-800/80 text-slate-300 transition hover:border-cyan hover:bg-cyan/15 hover:text-cyan"
                                    >
                                      <InfoIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                                    </button>
                                  </div>

                                  {/* Badge & Tagline */}
                                  <div className="mt-1.5 sm:mt-2 flex items-center gap-2">
                                    <span className="rounded-full bg-cyan/20 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-cyan border border-cyan/30">
                                      {offer.badge}
                                    </span>
                                  </div>

                                  <p className="mt-1 sm:mt-2 text-[11px] sm:text-xs leading-snug text-slate-300 line-clamp-2">
                                    {offer.tagline}
                                  </p>
                                </div>

                                {/* Bottom Quick Indicator */}
                                <div className="mt-2.5 sm:mt-3.5 flex items-center justify-between border-t border-slate-700/60 pt-2 sm:pt-2.5 text-[10px] sm:text-[11px]">
                                  <span
                                    className={cn(
                                      "font-medium transition-colors",
                                      active ? "text-cyan-300" : "text-slate-400",
                                    )}
                                  >
                                    {active ? STRINGS.buy.addedToPlan : STRINGS.buy.addToPlan}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setInfoModalOffer(offer);
                                    }}
                                    className="text-[9px] sm:text-[10px] text-slate-400 underline underline-offset-2 hover:text-cyan font-medium"
                                  >
                                    {STRINGS.buy.whatIsThis}
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* PROFESSIONAL BUY SYSTEM: FLOATING CHECKOUT DOCK */}
      {hasSelection ? (
        <div className="sticky bottom-16 sm:bottom-4 z-40 overflow-hidden rounded-xl sm:rounded-2xl border border-amber-200/80 bg-[#fdfbf7] p-2.5 sm:p-5 text-slate-900 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.8)_inset]">
          {/* Subtle Warm Top Accent Stripe */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500" />

          <button
            type="button"
            onClick={clearAll}
            aria-label={STRINGS.actions.clearSelection}
            className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-slate-300/80 bg-white text-slate-500 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 hover:text-slate-800 sm:right-3 sm:top-3 sm:h-8 sm:w-8"
          >
            <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="relative flex flex-col gap-2.5 pr-8 lg:flex-row lg:items-center lg:justify-between sm:gap-4 sm:pr-10">
            {/* Left: Selected Project & Add-on Summary */}
            <div className="min-w-0 flex-1 space-y-1.5 sm:space-y-2">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-600/20 bg-emerald-100/90 px-2 py-0.5 text-[9px] sm:text-[11px] font-extrabold uppercase tracking-wider text-emerald-800">
                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-600" />
                  </span>
                  <span>{STRINGS.buy.readyToOrder}</span>
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-100/80 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-amber-900">
                  <span>⚡</span>
                  <span>{STRINGS.buy.studentDiscount}</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                {selectedProject ? (
                  <span className="inline-flex items-center gap-1 rounded-md sm:rounded-lg border border-slate-300/80 bg-white px-2 py-0.5 text-[11px] sm:px-3 sm:py-1 sm:text-xs font-semibold text-slate-800 shadow-sm">
                    <span className="text-slate-500 font-medium">{STRINGS.buy.projectLabel}</span>
                    <span className="font-bold text-slate-900 truncate max-w-[160px] sm:max-w-none">{selectedProject.name}</span>
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-500 italic">
                    {STRINGS.buy.selectProjectAbove}
                  </span>
                )}

                {/* Selected Add-on Badges */}
                {plan.items
                  .filter((item) => item.id !== "project")
                  .map((item) => (
                    <span
                      key={item.id}
                      className="inline-flex items-center gap-1 rounded-md sm:rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] sm:px-2.5 sm:py-1 sm:text-xs font-semibold text-emerald-900 shadow-sm"
                    >
                      <CheckIcon className="h-3 w-3 text-emerald-600 stroke-[2.5]" />
                      <span>{item.label}</span>
                      {item.offerLabel ? (
                        <span className="rounded bg-emerald-200/80 px-1 py-0.2 text-[9px] font-black text-emerald-950">
                          {item.offerLabel}
                        </span>
                      ) : null}
                    </span>
                  ))}
              </div>
            </div>

            {/* Right: Checkout CTA Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openDrawer()}
                className="group relative inline-flex h-9 sm:h-11 items-center justify-center gap-2 overflow-hidden rounded-lg sm:rounded-xl bg-slate-900 px-5 sm:px-7 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-200 hover:bg-slate-800 hover:shadow-lg active:scale-[0.98]"
              >
                <span className="text-xs sm:text-sm">🛒</span>
                <span>{STRINGS.buy.proceedToBuy}</span>
                <span className="text-xs sm:text-sm font-bold transition-transform duration-200 group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* "WHAT WE PROVIDE YOU" INFO MODAL */}
      <AnimatePresence>
        {infoModalOffer ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInfoModalOffer(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Dialog Content */}
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-xl border border-slate-700 bg-theme-card p-6 shadow-lg sm:p-7"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan/15 text-cyan">
                    <VideoIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                      {infoModalOffer.name}
                    </h3>
                    <p className="text-xs text-slate-300">{infoModalOffer.tagline}</p>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Close dialog"
                  onClick={() => setInfoModalOffer(null)}
                  className="rounded-full border border-slate-700 bg-slate-800 p-1.5 text-slate-300 hover:border-slate-500 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Overview */}
              <p className="mt-4 text-xs leading-relaxed text-slate-200 sm:text-sm">
                {infoModalOffer.description}
              </p>

              {/* WHAT WE PROVIDE YOU — Clear Deliverables */}
              <div className="mt-5 rounded-xl border border-cyan-500/30 bg-theme-panel p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-cyan" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-cyan">
                    {STRINGS.buy.whatWeProvideYou}
                  </p>
                </div>

                <ul className="mt-3 space-y-2.5 text-xs text-slate-100 sm:text-sm font-medium">
                  {infoModalOffer.whatWeProvide.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan/20 text-cyan">
                        ✓
                      </span>
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer Controls */}
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between pt-2 border-t border-slate-700">
                <span className="rounded-full bg-cyan/15 border border-cyan/30 px-3 py-1 text-center text-xs font-bold text-cyan">
                  {STRINGS.learnBuild.specialOfferPrefix} {infoModalOffer.badge}
                </span>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (selectedProject) {
                        handleOfferClick(infoModalOffer, selectedProject.slug);
                      } else if (projects[0]) {
                        handleOfferClick(infoModalOffer, projects[0].slug);
                      }
                      setInfoModalOffer(null);
                    }}
                    className={cn(
                      "inline-flex h-10 flex-1 sm:flex-none items-center justify-center rounded-xl px-4 text-xs font-semibold uppercase tracking-wider transition-all",
                      isOfferActive(infoModalOffer)
                        ? "border border-red-400/30 bg-red-500/10 text-red-300 hover:bg-red-500/20"
                        : "bg-cyan text-navy-deep font-bold hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]",
                    )}
                  >
                    {isOfferActive(infoModalOffer)
                      ? STRINGS.learnBuild.removeFromPlan
                      : STRINGS.learnBuild.addToMyProject}
                  </button>

                  <button
                    type="button"
                    onClick={() => setInfoModalOffer(null)}
                    className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 px-4 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:bg-slate-700 hover:text-white"
                  >
                    {STRINGS.learnBuild.done}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
