"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectFrame } from "@/components/ui/ProjectFrame";
import { resolveImageSrc } from "@/lib/media";
import { theme } from "@/config/theme";
import { STRINGS } from "@/config/strings";

gsap.registerPlugin(ScrollTrigger);

function formatProjectIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

function frameUrl(url?: string): string | undefined {
  if (!url) return undefined;
  try {
    return new URL(url).hostname;
  } catch {
    return url.replace(/^https?:\/\//, "");
  }
}

function screenBg(tone?: "cream" | "warm" | "dark" | "white"): string {
  switch (tone) {
    case "dark":
      return theme.navy;
    case "warm":
      return theme.panelSoft;
    case "white":
      return theme.card;
    case "cream":
    default:
      return theme.bgPage;
  }
}

export function WorkSection({ limit }: { limit?: number } = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const displayed = limit ? projects.slice(0, limit) : projects;
  const hasMore = Boolean(limit && projects.length > limit);

  useEffect(() => {
    if (reduce || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-work-item]");
      items.forEach((item) => {
        const media = item.querySelector("[data-work-media]");
        if (media) {
          gsap.fromTo(
            media,
            { scale: 1.04, y: 28 },
            {
              scale: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "bottom 40%",
                scrub: true,
              },
            },
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="surface-dark section-pad relative overflow-hidden noise-overlay"
    >
      {/* Ambient Grid and Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-fade opacity-45" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-purple/15 blur-[120px]" />
        <div className="absolute bottom-10 -left-20 h-72 w-72 rounded-full bg-blue/15 blur-[120px]" />
      </div>

      <Container wide className="relative">
        <SectionHeading
          eyebrow={STRINGS.work.eyebrow}
          title={STRINGS.work.title}
          description={STRINGS.work.description}
          noWrap
        />

        {/* Mobile: Compact Dark Glass Cards */}
        <div className="mt-5 grid grid-cols-2 gap-3 lg:hidden">
          {displayed.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group overflow-hidden rounded-md border border-white/10 bg-white/[0.03] transition-all duration-300 active:scale-[0.98] hover:border-cyan/40 hover:bg-white/[0.05]"
            >
              <div
                className="relative aspect-[16/10]"
                style={{ backgroundColor: screenBg(project.screenTone) }}
              >
                <Image
                  src={resolveImageSrc(project.heroImage)}
                  alt={`${project.title} — PB_IT_HUB Pathankot case study`}
                  fill
                  className="object-contain object-top"
                  sizes="50vw"
                />
              </div>
              <div className="space-y-1 p-3">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-cyan">
                  {formatProjectIndex(index)} ·{" "}
                  {project.category.split("/")[0]?.trim()}
                </p>
                <h3 className="font-display text-sm font-semibold leading-snug text-white transition-colors group-hover:text-cyan">
                  {project.title}
                </h3>
                <p className="line-clamp-2 text-[11px] leading-snug text-white/60">
                  {project.description}
                </p>
                <span className="inline-flex pt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan">
                  {STRINGS.work.viewProject}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop / Tablet: Asymmetrical Product Presentation */}
        <div className="mt-6 hidden space-y-10 lg:block lg:space-y-12">
          {displayed.map((project, index) => (
            <article
              key={project.slug}
              data-work-item
              className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10"
            >
              <div data-work-text className={cnOrder(index, "text")}>
                <p className="eyebrow text-cyan">
                  {STRINGS.work.projectPrefix} {formatProjectIndex(index)}
                </p>
                <h3 className="mt-3 font-display text-2xl text-white sm:text-3xl lg:text-4xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-white/65">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white/70"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {project.caseStudy ? (
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan transition hover:gap-3 hover:text-white"
                    >
                      {STRINGS.work.viewCaseStudy}
                      <span aria-hidden>→</span>
                    </Link>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/50 transition hover:text-white"
                    >
                      {STRINGS.work.liveSite}
                      <span aria-hidden>↗</span>
                    </a>
                  ) : null}
                </div>
              </div>

              <div className={cnOrder(index, "media")}>
                <ProjectFrame
                  src={project.heroImage}
                  alt={`${project.title} — PB_IT_HUB product case study`}
                  screenTone={project.screenTone ?? "dark"}
                  urlLabel={frameUrl(project.liveUrl)}
                  mediaAttr
                  sizes="58vw"
                />
              </div>
            </article>
          ))}
        </div>

        {hasMore || !limit ? (
          <div className="mt-8 text-center md:mt-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80 transition hover:border-cyan/40 hover:bg-white/[0.08] hover:text-white"
            >
              {STRINGS.work.viewAllWork}
              <span aria-hidden>→</span>
            </Link>
          </div>
        ) : null}
      </Container>
    </section>
  );
}

function cnOrder(index: number, part: "text" | "media") {
  const odd = index % 2 === 1;
  if (part === "text") {
    return odd
      ? "lg:col-span-5 lg:col-start-8 lg:row-start-1"
      : "lg:col-span-5";
  }
  return odd
    ? "lg:col-span-7 lg:col-start-1 lg:row-start-1"
    : "lg:col-span-7";
}
