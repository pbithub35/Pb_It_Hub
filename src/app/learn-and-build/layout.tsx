import {
  StudentActionProvider,
  StudentActionDrawer,
} from "@/components/learn-build";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Student Projects & Source Code — Learn or Buy",
  description:
    "Industry-grade student projects, complete source code, viva preparation, and 1-to-1 mentorship for BCA, MCA, B.Tech, BE, B.Sc & CS/IT students.",
  path: "/learn-and-build",
  keywords: [
    "student projects source code",
    "final year projects BCA MCA BTech",
    "buy student projects",
    "college coding projects",
    "1-to-1 project mentorship",
    "PB_IT_HUB learn and build",
  ],
});

export default function LearnBuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StudentActionProvider>
      <div className="theme-page min-h-[100svh]">
        {children}
        <StudentActionDrawer />
      </div>
    </StudentActionProvider>
  );
}
