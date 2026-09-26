import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { BackButton } from "@/components/ui/BackButton";
import { CareerGuidanceCTA, CareerGuidanceFAQ } from "@/components/learn-build";
import { STRINGS } from "@/config/strings";

export const metadata: Metadata = createPageMetadata({
  title: "Free Career Guidance | PB_IT_HUB",
  description:
    "We care about your career. Connect 1-on-1 with active software engineers who know the real 2026 tech market. 100% free personalized mentorship.",
  path: "/learn-and-build/career-guidance",
});

export default function CareerGuidancePage() {
  return (
    <div className="relative overflow-hidden pb-16">
      {/* Background Glow Accents */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 top-96 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px]" />

      <section className="pt-24 pb-8 md:pt-28 md:pb-10">
        <Container wide className="max-w-5xl">
          <BackButton href="/learn-and-build" label="Back to Learn or Buy" tone="dark" />

          {/* Hero Header */}
          <div className="mt-6 space-y-4">
            <h1 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-[length:var(--text-3xl)] leading-[1.15]">
              We Care About Your Career.{" "}
              <br className="hidden sm:inline" />
              <span className="learn-gradient-text">
                Get Guided By Engineers Who Know The Real Market.
              </span>
            </h1>

            <p className="max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base md:text-lg">
              Too many engineering students are trapped in tutorial hell, learning outdated technologies
              or building copy-paste clone projects that get ignored by recruiters. At PB_IT_HUB, we connect
              you directly with working software engineers who know what companies are actually hiring for in 2026.
              No hidden costs. No sales pitches. Just honest, practical guidance.
            </p>

            {/* Quick Trust Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-200">
                <span className="text-cyan-400">📹</span> 45-Min 1-on-1 Google Meet
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-200">
                <span className="text-cyan-400">📈</span> 2026 Tech Market Reality
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-200">
                <span className="text-cyan-400">🎯</span> Portfolio & GitHub Audit
              </span>
            </div>
          </div>

          {/* Interactive Career Guidance Hero Banner */}
          <div className="mt-7">
            <CareerGuidanceCTA />
          </div>

          {/* The Reality Gap: Generic Tutorials vs Real Engineering */}
          <div className="mt-10 sm:mt-12">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-6 sm:mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                The Industry Reality
              </p>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Why Most College Students Struggle To Land Tech Roles
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Understanding what tech companies actually evaluate makes all the difference.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Left: The Common Trap */}
              <div className="rounded-xl border border-red-500/30 bg-theme-card/90 p-6 sm:p-7 shadow-lg">
                <div className="flex items-center gap-2.5 text-red-400 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-500/15 font-bold text-sm">
                    ✕
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    The Generic Tutorial & Bootcamp Trap
                  </h3>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                    <span>Learning 5 different programming languages superficially without mastering system architecture.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                    <span>Building copy-paste YouTube clone projects (Netflix, Todo apps) that every recruiter has seen hundreds of times.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                    <span>Submitting 500+ generic applications with buzzword-heavy resumes with zero interview callbacks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-400 font-bold shrink-0 mt-0.5">✕</span>
                    <span>Paying thousands of dollars for pre-recorded courses with empty job guarantees and zero 1-on-1 mentorship.</span>
                  </li>
                </ul>
              </div>

              {/* Right: The PB_IT_HUB Engineering Standard */}
              <div className="rounded-xl border border-cyan-500/40 bg-theme-panel/90 p-6 sm:p-7 shadow-lg">
                <div className="flex items-center gap-2.5 text-cyan-400 mb-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/20 font-bold text-sm">
                    ✓
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    The PB_IT_HUB Engineering Standard
                  </h3>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>Mastering 1 core modern stack (e.g. Next.js/React + Go/Node + PostgreSQL) with deep fundamental mastery.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>Building production-grade applications with genuine business logic, database migrations, state flow, and security.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>Crafting a high-conviction GitHub repository and project portfolio that makes engineering managers stop scrolling.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 font-bold shrink-0 mt-0.5">✓</span>
                    <span>100% free 1-on-1 mentorship from working engineers who genuinely care about your long-term success.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* What Happens During The 45-Minute Call */}
          <div className="mt-10 sm:mt-12">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-6 sm:mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                {STRINGS.career.insideCallTitle}
              </p>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                {STRINGS.career.insideCallHeading}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                {STRINGS.career.insideCallSub}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-700/80 bg-theme-card p-6 shadow-md">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/15 font-display text-xs font-bold text-cyan-400 mb-4">
                  01
                </span>
                <h3 className="font-display text-base font-bold text-white">
                  {STRINGS.career.steps.step1}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                  We look at your current semester, your coding background, what you have built so far, and what specific roles you want to pursue.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/80 bg-theme-card p-6 shadow-md">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 font-display text-xs font-bold text-blue-400 mb-4">
                  02
                </span>
                <h3 className="font-display text-base font-bold text-white">
                  {STRINGS.career.steps.step2}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                  We review your GitHub projects and resume live on screen. We tell you candidly what tech leads will think and highlight the exact missing pieces.
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/80 bg-theme-card p-6 shadow-md">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500/15 font-display text-xs font-bold text-teal-400 mb-4">
                  03
                </span>
                <h3 className="font-display text-base font-bold text-white">
                  {STRINGS.career.steps.step3}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                  You leave with a personalized 3-to-6 month project checklist, recommended resources, and answers to any college or viva questions.
                </p>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="mt-10 sm:mt-12">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-6 sm:mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Got Questions?
              </p>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Everything you need to know about our free mentorship sessions.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <CareerGuidanceFAQ />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
