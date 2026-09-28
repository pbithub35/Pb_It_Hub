"use client";

import { Suspense } from "react";
import { VisitTracker } from "@/components/analytics/VisitTracker";

/** Suspense wrapper required because VisitTracker uses useSearchParams. */
export function VisitTrackerBoundary() {
  return (
    <Suspense fallback={null}>
      <VisitTracker />
    </Suspense>
  );
}
