import {
  completeProjectPackage,
  studentInternalPrices,
  studentOffers,
} from "@/data/studentOffers";
import { getStudentProjectBySlug } from "@/data/studentProjects";

export type StudentActionMode =
  | "project-download"
  | "package"
  | "session"
  | "project-kt"
  | "practical-preparation"
  | "career-guidance";

export interface StudentPlanSelection {
  projectSlug?: string;
  packageSelected: boolean;
  /** Offer ids: sessions-4 | project-kt | practical-preparation */
  offerIds: string[];
  mode: StudentActionMode;
}

export interface SelectedPlanItem {
  id: string;
  label: string;
  detail?: string;
  offerLabel?: string; // "10% OFF" | "FREE" | "Included"
}

export interface StudentPlanResult {
  items: SelectedPlanItem[];
  /** Internal only — do not render in UI */
  subtotal: number;
  discountAmount: number;
  total: number;
  isFreeFlow: boolean;
}

function money(n: number) {
  return Math.max(0, Math.round(n));
}

/**
 * Internal pricing engine. Public UI must not display monetary values.
 */
export function calculateStudentPlan(
  selection: StudentPlanSelection,
): StudentPlanResult {
  if (selection.mode === "career-guidance") {
    return {
      items: [
        {
          id: "career-guidance",
          label: studentOffers.careerGuidance.name,
          detail: studentOffers.careerGuidance.description,
          offerLabel: "FREE",
        },
      ],
      subtotal: 0,
      discountAmount: 0,
      total: 0,
      isFreeFlow: true,
    };
  }

  const project = selection.projectSlug
    ? getStudentProjectBySlug(selection.projectSlug)
    : undefined;

  const items: SelectedPlanItem[] = [];
  let subtotal = 0;
  let discountAmount = 0;

  if (project) {
    items.push({
      id: "project",
      label: project.name,
      detail: "Selected project",
      offerLabel: "Included",
    });
    subtotal += studentInternalPrices.project;
  }

  if (selection.packageSelected) {
    items.push({
      id: completeProjectPackage.id,
      label: completeProjectPackage.name,
      detail: "4 sessions · Project KT · Practical preparation",
      offerLabel: "Package",
    });
    subtotal += studentInternalPrices.package - studentInternalPrices.project;
    // Apply combined offer discounts conceptually inside package
    const pkgDiscount =
      (studentInternalPrices.sessions * studentOffers.sessions.discount) / 100 +
      (studentInternalPrices.projectKT * studentOffers.projectKT.discount) /
        100 +
      (studentInternalPrices.practicalPreparation *
        studentOffers.practicalPreparation.discount) /
        100;
    discountAmount += money(pkgDiscount);

    return {
      items,
      subtotal: money(subtotal),
      discountAmount: money(discountAmount),
      total: money(subtotal - discountAmount),
      isFreeFlow: false,
    };
  }

  for (const offerId of selection.offerIds) {
    if (offerId === studentOffers.sessions.id) {
      const raw = studentInternalPrices.sessions;
      const off = money((raw * studentOffers.sessions.discount) / 100);
      items.push({
        id: offerId,
        label: studentOffers.sessions.name,
        detail: studentOffers.sessions.description,
        offerLabel: `${studentOffers.sessions.discount}% OFF`,
      });
      subtotal += raw;
      discountAmount += off;
    }
    if (offerId === studentOffers.projectKT.id) {
      const raw = studentInternalPrices.projectKT;
      const off = money((raw * studentOffers.projectKT.discount) / 100);
      items.push({
        id: offerId,
        label: studentOffers.projectKT.name,
        detail: studentOffers.projectKT.description,
        offerLabel: `${studentOffers.projectKT.discount}% OFF`,
      });
      subtotal += raw;
      discountAmount += off;
    }
    if (offerId === studentOffers.practicalPreparation.id) {
      const raw = studentInternalPrices.practicalPreparation;
      const off = money(
        (raw * studentOffers.practicalPreparation.discount) / 100,
      );
      items.push({
        id: offerId,
        label: studentOffers.practicalPreparation.name,
        detail: studentOffers.practicalPreparation.description,
        offerLabel: `${studentOffers.practicalPreparation.discount}% OFF`,
      });
      subtotal += raw;
      discountAmount += off;
    }
  }

  return {
    items,
    subtotal: money(subtotal),
    discountAmount: money(discountAmount),
    total: money(subtotal - discountAmount),
    isFreeFlow: false,
  };
}

export function isOfferIncludedInPackage(offerId: string, packageSelected: boolean) {
  if (!packageSelected) return false;
  return (completeProjectPackage.includeOfferIds as readonly string[]).includes(
    offerId,
  );
}
