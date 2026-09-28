"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectFrame } from "@/components/ui/ProjectFrame";
import { Reveal } from "@/components/ui/Reveal";
import { resolveImageSrc } from "@/lib/media";
import { theme } from "@/config/theme";
import { STRINGS } from "@/config/strings";

const ease = [0.22, 1, 0.36, 1] as const;

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
  const reduce = useReducedMotion();
  const displayed = limit ? projects.slice(0, limit) : projects;
  const hasMore = Boolean(limit && projects.length > limit);

  return (
    <section
      id="work"
      className="section-pad relative overflow-hidden"
      style={{ backgroundColor: "#F3F6FA" }}
    >
      <Container wide className="relative">
        <Reveal>
          <SectionHeading
            eyebrow={STRINGS.work.eyebrow}
            title={STRINGS.work.title}
            description={STRINGS.work.description}
            noWrap
          />
        </Reveal>

        {/* Mobile: compact project cards */}
        <div className="mt-5 grid grid-cols-2 gap-3 lg:hidden">
          {displayed.map((project, index) => {
            const fromX = index % 2 === 0 ? -25 : 25;
            return (
              <motion.div
                key={project.slug}
                initial={reduce ? false : { opacity: 0, x: fromX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease, delay: index * 0.04 }}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:border-blue/20 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <motion.div
                    className="relative aspect-[16/10] overflow-hidden"
                    style={{ backgroundColor: screenBg(project.screenTone) }}
                    initial={reduce ? false : { scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover={reduce ? undefined : { scale: 1.03 }}
                    transition={{ duration: 0.5, ease }}
                  >
                    <Image
                      src={resolveImageSrc(project.heroImage)}
                      alt={`${project.title} — PB IT HUB Pathankot case study`}
                      fill
                      className="object-contain object-top"
                      sizes="50vw"
                    />
                  </motion.div>
                  <div className="space-y-1 p-3">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-blue">
                      {formatProjectIndex(index)} ·{" "}
                      {project.category.split("/")[0]?.trim()}
                    </p>
                    <h3 className="font-display text-sm font-semibold leading-snug text-navy transition-colors group-hover:text-blue">
                      {project.title}
                    </h3>
                    <p className="line-clamp-2 text-[11px] leading-snug text-muted-strong">
                      {project.description}
                    </p>
                    <span className="inline-flex pt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-blue">
                      {STRINGS.work.viewProject}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop / Tablet: asymmetrical product presentation */}
        <div className="mt-6 hidden space-y-10 lg:block lg:space-y-12">
          {displayed.map((project, index) => {
            const fromX = index % 2 === 0 ? -25 : 25;
            return (
              <article
                key={project.slug}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10"
              >
                <motion.div
                  className={cnOrder(index, "text")}
                  initial={reduce ? false : { opacity: 0, x: fromX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease }}
                >
                  <p className="eyebrow text-sm text-blue">
                    {STRINGS.work.projectPrefix} {formatProjectIndex(index)}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink lg:text-[1.85rem]">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-muted-strong lg:text-lg">
                    {project.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-navy/10 bg-white px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-muted-strong shadow-[var(--shadow-soft)]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    {project.caseStudy ? (
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-blue transition hover:gap-3 hover:text-navy"
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
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-muted transition hover:text-navy"
                      >
                        {STRINGS.work.liveSite}
                        <span aria-hidden>↗</span>
                      </a>
                    ) : null}
                  </div>
                </motion.div>

                <div className={cnOrder(index, "media")}>
                  <motion.div
                    className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
                    initial={reduce ? false : { scale: 0.95, opacity: 0.85 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    whileHover={reduce ? undefined : { scale: 1.03 }}
                    transition={{ duration: 0.6, ease }}
                  >
                    <ProjectFrame
                      src={project.heroImage}
                      alt={`${project.title} — PB IT HUB product case study`}
                      screenTone={project.screenTone ?? "dark"}
                      urlLabel={frameUrl(project.liveUrl)}
                      mediaAttr
                      sizes="58vw"
                    />
                  </motion.div>
                </div>
              </article>
            );
          })}
        </div>

        {hasMore || !limit ? (
          <div className="mt-8 text-center md:mt-12">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:border-blue/25 hover:shadow-[var(--shadow-card)]"
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
