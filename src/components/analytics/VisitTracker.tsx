"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  doc,
  increment,
  serverTimestamp,
  writeBatch,
} from "firebase/firestore";
import { getFirestoreDb, isFirebaseConfigured } from "@/lib/firebase";
import {
  getDeviceType,
  getOrCreateSessionId,
  getTrafficSource,
  hasCountedThisSession,
  inferPathVisitorType,
  markSessionCounted,
  mergeVisitorTypes,
  readStoredVisitorType,
  storeVisitorType,
} from "@/lib/visit-tracker";

/**
 * Counts each browser tab session once (no duplicate people).
 * Writes `visits/{sessionId}` + increments `stats/site.totalVisitors`.
 */
export function VisitTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const started = useRef(false);

  useEffect(() => {
    if (!isFirebaseConfigured() || !pathname) return;
    if (hasCountedThisSession() || started.current) return;
    started.current = true;

    const pathType = inferPathVisitorType(pathname);
    const visitorType = mergeVisitorTypes(readStoredVisitorType(), pathType);
    storeVisitorType(visitorType);

    const sessionId = getOrCreateSessionId();
    if (!sessionId) return;

    const traffic = getTrafficSource();
    const db = getFirestoreDb();
    if (!db) return;

    const visitRef = doc(db, "visits", sessionId);
    const statsRef = doc(db, "stats", "site");

    const batch = writeBatch(db);
    batch.set(visitRef, {
      sessionId,
      path: pathname.slice(0, 200),
      visitorType,
      device: getDeviceType(),
      referrerHost: traffic.referrerHost.slice(0, 120),
      utmSource: traffic.utmSource,
      utmMedium: traffic.utmMedium,
      utmCampaign: traffic.utmCampaign,
      createdAt: serverTimestamp(),
    });
    batch.set(
      statsRef,
      {
        totalVisitors: increment(1),
        [`byType.${visitorType}`]: increment(1),
        updatedAt: serverTimestamp(),
      },
      { merge: true },
    );

    void batch
      .commit()
      .then(() => {
        markSessionCounted();
      })
      .catch(() => {
        // Permission / duplicate create — allow a retry on next navigation.
        started.current = false;
      });
  }, [pathname, searchParams]);

  return null;
}
