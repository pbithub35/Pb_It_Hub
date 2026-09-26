"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  calculateStudentPlan,
  isOfferIncludedInPackage,
  type StudentActionMode,
  type StudentPlanResult,
  type StudentPlanSelection,
} from "@/lib/studentPricing";
import { studentOffers } from "@/data/studentOffers";

const INITIAL_SELECTION: StudentPlanSelection = {
  packageSelected: false,
  offerIds: [],
  mode: "project-download",
};

function withSelection(
  overrides: Partial<StudentPlanSelection> = {},
): StudentPlanSelection {
  return {
    ...INITIAL_SELECTION,
    ...overrides,
    offerIds: overrides.offerIds ?? [],
  };
}

interface StudentActionContextValue {
  selection: StudentPlanSelection;
  plan: StudentPlanResult;
  drawerOpen: boolean;
  hasSelection: boolean;
  openDrawer: (mode?: StudentActionMode) => void;
  closeDrawer: () => void;
  /** Select project without opening drawer */
  selectProject: (slug: string) => void;
  openProjectDownload: (slug: string) => void;
  openCareerGuidance: () => void;
  selectPackage: () => void;
  clearPackage: () => void;
  /** Toggle add-on without opening drawer */
  toggleOffer: (offerId: string) => void;
  clearAll: () => void;
  setMode: (mode: StudentActionMode) => void;
}

const StudentActionContext = createContext<StudentActionContextValue | null>(
  null,
);

export function StudentActionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selection, setSelection] =
    useState<StudentPlanSelection>(INITIAL_SELECTION);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const plan = useMemo(() => calculateStudentPlan(selection), [selection]);

  const hasSelection = useMemo(() => {
    if (selection.mode === "career-guidance") return true;
    return Boolean(
      selection.projectSlug ||
        selection.packageSelected ||
        selection.offerIds.length,
    );
  }, [selection]);

  const openDrawer = useCallback((mode?: StudentActionMode) => {
    if (mode) {
      setSelection((prev) => ({ ...prev, mode }));
    }
    setDrawerOpen(true);
  }, []);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const selectProject = useCallback((slug: string) => {
    setSelection((prev) => ({
      ...prev,
      projectSlug: slug,
      mode: "project-download",
    }));
  }, []);

  const openProjectDownload = useCallback((slug: string) => {
    setSelection(
      withSelection({
        projectSlug: slug,
        mode: "project-download",
        packageSelected: false,
        offerIds: [],
      }),
    );
    setDrawerOpen(true);
  }, []);

  const openCareerGuidance = useCallback(() => {
    setSelection(
      withSelection({
        mode: "career-guidance",
        projectSlug: undefined,
        packageSelected: false,
        offerIds: [],
      }),
    );
    setDrawerOpen(true);
  }, []);

  const selectPackage = useCallback(() => {
    setSelection((prev) => ({
      ...prev,
      packageSelected: true,
      offerIds: [],
      mode: "package",
    }));
  }, []);

  const clearPackage = useCallback(() => {
    setSelection((prev) => ({
      ...prev,
      packageSelected: false,
      mode: "project-download",
    }));
  }, []);

  const toggleOffer = useCallback((offerId: string) => {
    setSelection((prev) => {
      if (isOfferIncludedInPackage(offerId, prev.packageSelected)) {
        return prev;
      }
      const exists = prev.offerIds.includes(offerId);
      const offerIds = exists
        ? prev.offerIds.filter((id) => id !== offerId)
        : [...prev.offerIds, offerId];

      let mode: StudentActionMode = "project-download";
      if (!exists) {
        if (offerId === studentOffers.sessions.id) mode = "session";
        if (offerId === studentOffers.projectKT.id) mode = "project-kt";
        if (offerId === studentOffers.practicalPreparation.id) {
          mode = "practical-preparation";
        }
      }

      return {
        ...prev,
        packageSelected: false,
        offerIds,
        mode,
      };
    });
  }, []);

  const clearAll = useCallback(() => {
    setSelection(INITIAL_SELECTION);
  }, []);

  const setMode = useCallback((mode: StudentActionMode) => {
    setSelection((prev) => ({ ...prev, mode }));
  }, []);

  const value = useMemo(
    () => ({
      selection,
      plan,
      drawerOpen,
      hasSelection,
      openDrawer,
      closeDrawer,
      selectProject,
      openProjectDownload,
      openCareerGuidance,
      selectPackage,
      clearPackage,
      toggleOffer,
      clearAll,
      setMode,
    }),
    [
      selection,
      plan,
      drawerOpen,
      hasSelection,
      openDrawer,
      closeDrawer,
      selectProject,
      openProjectDownload,
      openCareerGuidance,
      selectPackage,
      clearPackage,
      toggleOffer,
      clearAll,
      setMode,
    ],
  );

  return (
    <StudentActionContext.Provider value={value}>
      {children}
    </StudentActionContext.Provider>
  );
}

export function useStudentAction() {
  const ctx = useContext(StudentActionContext);
  if (!ctx) {
    throw new Error("useStudentAction must be used within StudentActionProvider");
  }
  return ctx;
}
