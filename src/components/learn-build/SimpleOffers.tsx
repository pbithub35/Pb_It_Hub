"use client";

import { useStudentAction } from "./StudentActionContext";
import {
  completeProjectPackage,
  studentOffers,
} from "@/data/studentOffers";
import { FeatureList } from "./FeatureList";
import { cn } from "@/lib/utils";

export function SimplePackageSection() {
  const { selectPackage, openDrawer } = useStudentAction();

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-blue/25 bg-white p-6 md:p-8">
      <p className="eyebrow text-blue">Package</p>
      <h2 className="heading-section mt-2">
        {completeProjectPackage.name}
      </h2>
      <p className="mt-2 text-sm text-muted-strong">
        {completeProjectPackage.description}
      </p>
      <div className="mt-5">
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
        className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-blue text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-blue-bright"
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
            className={cn(
              "rounded-2xl border bg-white p-5 text-left transition",
              item.selected
                ? "border-blue/40 bg-blue/5 ring-1 ring-blue/20"
                : "border-navy/10 hover:border-navy/20 hover:bg-off-white",
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-semibold text-ink">
                {item.name}
              </h3>
              <span className="rounded-full border border-blue/20 bg-blue/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue">
                {item.badge}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-strong">{item.description}</p>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-blue">
              {item.selected ? "✓ Selected" : "+ Add"}
            </p>
          </button>
        ))}

        <button
          type="button"
          onClick={openCareerGuidance}
          className="rounded-2xl border border-teal-200 bg-white p-5 text-left transition hover:border-teal-300 hover:bg-off-white md:col-span-2"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-semibold text-ink">
              {studentOffers.careerGuidance.name}
            </h3>
            <span className="rounded-full border border-teal-200 bg-teal-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-700">
              FREE
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-strong">
            {studentOffers.careerGuidance.description}
          </p>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-teal-700">
            Book Free Guidance
          </p>
        </button>
      </div>

      {selection.offerIds.length > 0 ? (
        <button
          type="button"
          onClick={() => openDrawer()}
          className="inline-flex h-11 w-full items-center justify-center rounded-full bg-blue text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-blue-bright md:w-auto md:px-8"
        >
          Buy
        </button>
      ) : null}
    </div>
  );
}
