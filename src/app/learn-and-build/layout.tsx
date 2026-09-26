import {
  StudentActionProvider,
  StudentActionDrawer,
} from "@/components/learn-build";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Learn or Buy",
  description: siteConfig.studentDescription,
  path: "/learn-and-build",
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
