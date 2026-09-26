import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { ProjectAccordion } from "./ProjectAccordion";
import { CareerGuidanceCTA } from "./CareerGuidanceCTA";
import { STRINGS } from "@/config/strings";

export function LearnBuildHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-4 sm:pt-28 sm:pb-8 md:pt-32 md:pb-10">
      <Container wide className="relative">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-6 lg:gap-8">
            <div className="min-w-0 flex-1">
              <p className="eyebrow text-[color:var(--learn-accent-secondary)]">
                {STRINGS.learnBuild.eyebrow}
              </p>
              <h1 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[length:var(--text-hero)] leading-[1.08] text-white">
                <span className="learn-gradient-text">
                  {STRINGS.learnBuild.heroHeadlinePart1}
                </span>{" "}
                <span className="whitespace-normal sm:whitespace-nowrap">
                  {STRINGS.learnBuild.heroHeadlinePart2}
                </span>
              </h1>
              <p className="mt-3 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-slate-200">
                {STRINGS.learnBuild.heroDescription}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:mt-6 sm:gap-3">
                <Button href="#projects" className="learn-accent-btn border-0 text-xs sm:text-sm">
                  {STRINGS.learnBuild.ctaExploreProjects}
                </Button>
                <Button
                  href="/learn-and-build/career-guidance"
                  variant="secondary"
                  className="text-xs sm:text-sm"
                >
                  {STRINGS.learnBuild.ctaFreeGuidance}
                </Button>
              </div>
            </div>

            <div className="w-full max-w-[280px] xs:max-w-[320px] mx-auto sm:mx-0 sm:w-[38%] sm:max-w-[360px] lg:max-w-[420px] shrink-0">
              <MediaImage
                src="learn-build/projects-pricing-badge"
                alt="Projects under ₹1,999 – ₹5,999. Real projects, source code, optional support."
                width={1024}
                height={512}
                className="h-auto w-full mix-blend-screen drop-shadow-md"
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 38vw, 420px"
                priority
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function LearnBuildHomeProjects() {
  return (
    <section id="projects" className="section-pad !pt-2 md:!pt-6">
      <Container wide>
        <div className="mb-4 sm:mb-6 md:mb-8">
          <p className="eyebrow text-[color:var(--learn-accent-secondary)]">
            {STRINGS.learnBuild.projectsEyebrow}
          </p>
          <h2 className="mt-1.5 sm:mt-2 font-display text-xl sm:text-2xl text-white md:text-3xl">
            {STRINGS.learnBuild.projectsTitle}
          </h2>
        </div>
        <ProjectAccordion />
        <div className="mt-8 sm:mt-10">
          <CareerGuidanceCTA />
        </div>
      </Container>
    </section>
  );
}
