"use client";

import { useStudentAction } from "./StudentActionContext";
import {
  completeProjectPackage,
  studentOffers,
} from "@/data/studentOffers";
import { FeatureList } from "./FeatureList";

export function SimplePackageSection() {
  const { selectPackage, openDrawer } = useStudentAction();

  return (
    <div className="mx-auto max-w-xl rounded-[var(--learn-radius)] border border-[color:var(--learn-accent)]/40 bg-theme-card p-6 md:p-8 shadow-lg">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--learn-accent-secondary)]">
        Package
      </p>
      <h2 className="mt-3 font-display text-2xl text-white md:text-3xl">
        {completeProjectPackage.name}
      </h2>
      <p className="mt-2 text-sm text-slate-200">
        {completeProjectPackage.description}
      </p>
      <div className="mt-6">
        <FeatureList
          items={[
            "Selected Project",
            "4 × 1-to-1 Sessions",
            "Project Knowledge Transfer",
            "Practical Preparation",
          ]}
          className="sm:grid-cols-1"
        />
      </div>
      <button
        type="button"
        onClick={() => {
          selectPackage();
          openDrawer("package");
        }}
        className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full learn-accent-btn text-xs font-semibold uppercase tracking-[0.14em] text-white"
      >
        Choose Package
      </button>
    </div>
  );
}

export function SimpleAddOnsSection() {
  const { toggleOffer, openCareerGuidance, selection, openDrawer } =
    useStudentAction();

  const items = [
    {
      ...studentOffers.sessions,
      badge: `${studentOffers.sessions.discount}% OFF`,
      onClick: () => toggleOffer(studentOffers.sessions.id),
      selected: selection.offerIds.includes(studentOffers.sessions.id),
    },
    {
      ...studentOffers.projectKT,
      badge: `${studentOffers.projectKT.discount}% OFF`,
      onClick: () => toggleOffer(studentOffers.projectKT.id),
      selected: selection.offerIds.includes(studentOffers.projectKT.id),
    },
    {
      ...studentOffers.practicalPreparation,
      badge: `${studentOffers.practicalPreparation.discount}% OFF`,
      onClick: () => toggleOffer(studentOffers.practicalPreparation.id),
      selected: selection.offerIds.includes(
        studentOffers.practicalPreparation.id,
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={item.onClick}
            className="rounded-[var(--learn-radius)] border border-slate-700/70 bg-theme-card p-5 text-left transition hover:border-cyan-400/50 hover:bg-theme-card-hover shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg text-white">{item.name}</h3>
              <span className="rounded-full bg-cyan/20 border border-cyan/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan">
                {item.badge}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
              {item.selected ? "✓ Selected" : "+ Add"}
            </p>
          </button>
        ))}

        <button
          type="button"
          onClick={openCareerGuidance}
          className="rounded-[var(--learn-radius)] border border-[color:var(--learn-accent-secondary)]/40 bg-theme-card p-5 text-left md:col-span-2 shadow-sm hover:border-[color:var(--learn-accent-secondary)]/70 hover:bg-theme-card-hover transition"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg text-white">
              {studentOffers.careerGuidance.name}
            </h3>
            <span className="rounded-full bg-[color:var(--learn-accent-secondary)]/20 border border-[color:var(--learn-accent-secondary)]/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[color:var(--learn-accent-secondary)]">
              FREE
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-300">
            {studentOffers.careerGuidance.description}
          </p>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-[color:var(--learn-accent-secondary)]">
            Book Free Guidance
          </p>
        </button>
      </div>

      {selection.offerIds.length > 0 ? (
        <button
          type="button"
          onClick={() => openDrawer()}
          className="inline-flex h-11 w-full items-center justify-center rounded-full learn-accent-btn text-xs font-semibold uppercase tracking-[0.14em] text-white md:w-auto md:px-8"
        >
          Buy
        </button>
      ) : null}
    </div>
  );
}
