import {
  StudentActionProvider,
  StudentActionDrawer,
} from "@/components/learn-build";
import { createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Student Projects with Source Code",
  description:
    "Buy BCA, MCA and B.Tech projects with source code, viva prep and mentorship from Pathankot engineers.",
  path: "/learn-and-build",
  keywords: [
    "student projects source code",
    "final year projects BCA MCA BTech",
    "buy student projects Pathankot",
    "college coding projects Punjab",
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
