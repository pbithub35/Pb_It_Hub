import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MediaImage } from "@/components/ui/MediaImage";
import { ProjectAccordion } from "./ProjectAccordion";
import { CareerGuidanceCTA } from "./CareerGuidanceCTA";
import { STRINGS } from "@/config/strings";

export function LearnBuildHero() {
  return (
    <section className="relative overflow-hidden page-shell !pb-4 md:!pb-6">
      <Container wide className="relative">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6 lg:gap-8">
            <div className="min-w-0 flex-1">
              <p className="eyebrow text-blue">{STRINGS.learnBuild.eyebrow}</p>
              <h1 className="heading-page mt-2 text-balance">
                <span className="text-blue">
                  {STRINGS.learnBuild.heroHeadlinePart1}
                </span>{" "}
                <span>{STRINGS.learnBuild.heroHeadlinePart2}</span>
              </h1>
              <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-muted-strong">
                {STRINGS.learnBuild.heroDescription}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <Button href="#projects" size="md">
                  {STRINGS.learnBuild.ctaExploreProjects}
                </Button>
                <Button
                  href="/learn-and-build/career-guidance"
                  variant="secondary"
                  size="md"
                >
                  {STRINGS.learnBuild.ctaFreeGuidance}
                </Button>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[280px] shrink-0 sm:mx-0 sm:w-[36%] sm:max-w-[340px] lg:max-w-[380px]">
              <MediaImage
                src="learn-build/projects-pricing-badge"
                alt="Projects under ₹1,999 – ₹5,999. Real projects, source code, optional support."
                width={733}
                height={334}
                className="h-auto w-full drop-shadow-md"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 36vw, 380px"
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
    <section id="projects" className="pb-10 pt-2 md:pb-12 md:pt-4">
      <Container wide>
        <div className="mb-4 md:mb-5">
          <p className="eyebrow text-blue">{STRINGS.learnBuild.projectsEyebrow}</p>
          <h2 className="heading-section mt-1.5">
            {STRINGS.learnBuild.projectsTitle}
          </h2>
        </div>
        <ProjectAccordion />
        <div className="mt-8 md:mt-10">
          <CareerGuidanceCTA />
        </div>
      </Container>
    </section>
  );
}
