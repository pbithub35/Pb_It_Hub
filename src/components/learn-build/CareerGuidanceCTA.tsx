"use client";

import { useStudentAction } from "./StudentActionContext";
import { MediaImage } from "@/components/ui/MediaImage";
import { cn } from "@/lib/utils";
import { STRINGS } from "@/config/strings";

interface CareerGuidanceCTAProps {
  className?: string;
  compact?: boolean;
}

export function CareerGuidanceCTA({ className, compact = false }: CareerGuidanceCTAProps) {
  const { openCareerGuidance } = useStudentAction();

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[var(--shadow-soft)] transition-colors",
        compact ? "p-5 sm:p-7" : "p-6 sm:p-9 lg:p-11",
        className,
      )}
    >
      <div className="relative z-10 flex flex-col gap-6 lg:gap-8">
        {/* Title + image: image below title on phone, right side on desktop */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-8">
          <div className="min-w-0 flex-1 space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue">
              {STRINGS.career.ctaEyebrow}
            </p>
            <h2 className="font-display text-xl font-bold tracking-tight text-navy sm:text-2xl lg:text-2xl xl:text-3xl">
              {STRINGS.career.ctaHeadline}{" "}
              <span className="learn-gradient-text">{STRINGS.career.ctaHeadlineAccent}</span>
            </h2>

            {/* Mobile / tablet: image under title */}
            <div className="mt-1 w-full overflow-hidden rounded-xl border border-navy/10 bg-off-white lg:hidden">
              <MediaImage
                src="learn-build/career-guidance"
                alt="Confused about your tech career? Talk directly to working engineers for free guidance."
                width={1024}
                height={576}
                className="h-auto w-full"
                sizes="(max-width: 1023px) 100vw, 0px"
                priority={!compact}
              />
            </div>

            <p className="text-sm leading-relaxed text-muted-strong sm:text-base">
              {STRINGS.career.ctaDescription}
            </p>
          </div>

          {/* Desktop: medium image on the right */}
          <div className="hidden w-full max-w-sm shrink-0 overflow-hidden rounded-xl border border-navy/10 bg-off-white lg:block xl:max-w-md">
            <MediaImage
              src="learn-build/career-guidance"
              alt="Confused about your tech career? Talk directly to working engineers for free guidance."
              width={1024}
              height={576}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 28rem, 0px"
              priority={!compact}
            />
          </div>
        </div>

        {/* 4 Market-Tested Guidance Pillars */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-navy/10 bg-off-white p-4 transition-colors hover:border-blue/30">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue/10 text-base font-bold text-blue">
              📈
            </div>
            <h3 className="font-display text-sm font-bold text-navy">
              2026 Market Demand
            </h3>
            <p className="mt-1 text-xs leading-snug text-muted-strong">
              Cut through social media hype. Learn which stacks, cloud tools, and architectures tech companies are actually hiring for.
            </p>
          </div>

          <div className="rounded-xl border border-navy/10 bg-off-white p-4 transition-colors hover:border-blue/30">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue/10 text-base font-bold text-blue">
              🎯
            </div>
            <h3 className="font-display text-sm font-bold text-navy">
              Portfolio & Resume Audit
            </h3>
            <p className="mt-1 text-xs leading-snug text-muted-strong">
              Get an honest critique of your GitHub and projects. Discover what makes an engineering manager stop scrolling.
            </p>
          </div>

          <div className="rounded-xl border border-navy/10 bg-off-white p-4 transition-colors hover:border-blue/30">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10 text-base font-bold text-teal">
              🗺️
            </div>
            <h3 className="font-display text-sm font-bold text-navy">
              Personalized Roadmap
            </h3>
            <p className="mt-1 text-xs leading-snug text-muted-strong">
              A customized semester-by-semester or month-by-month study plan tailored to your target engineering roles.
            </p>
          </div>

          <div className="rounded-xl border border-navy/10 bg-off-white p-4 transition-colors hover:border-blue/30">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-base font-bold text-emerald-600">
              🤝
            </div>
            <h3 className="font-display text-sm font-bold text-navy">
              Zero Upselling Guarantee
            </h3>
            <p className="mt-1 text-xs leading-snug text-muted-strong">
              Genuine engineering guidance from real developers. No course selling, no obligations, just transparent advice.
            </p>
          </div>
        </div>

        {/* Belief Prompt & Engineer's Pledge */}
        <div className="rounded-xl border border-blue/20 bg-blue/[0.04] p-4 sm:p-5">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-blue">★</span>
                <p className="text-xs font-bold uppercase tracking-wider text-blue">
                  {STRINGS.career.pledgeTitle}
                </p>
              </div>
              <p className="text-xs font-medium italic text-muted-strong sm:text-sm">
                &ldquo;{STRINGS.career.pledgeQuote}&rdquo;
              </p>
            </div>

            <button
              type="button"
              onClick={openCareerGuidance}
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2.5 rounded-xl bg-blue px-6 text-xs font-bold uppercase tracking-[0.16em] text-white transition-all hover:bg-blue-bright active:scale-[0.98]"
            >
              <span>{STRINGS.career.bookBtn}</span>
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>

        {/* Trust Guarantees Footer Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-navy/10 pt-4 text-xs text-muted-strong">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="text-blue">✓</span> 45-Min Google Meet Call
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="text-blue">✓</span> Experienced Tech Mentors
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="text-blue">✓</span> Free Forever · No Credit Card Required
            </span>
          </div>

          <span className="text-[11px] font-semibold text-blue">
            Limited slots per week to ensure deep personalized attention
          </span>
        </div>
      </div>
    </div>
  );
}
