import Image from "next/image";
import Link from "next/link";
import { resolveImageSrc } from "@/lib/media";
import type { ProjectItem } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ProjectFrame } from "@/components/ui/ProjectFrame";

export function ProjectHero({ project }: { project: ProjectItem }) {
  return (
    <section className="surface-light page-shell !pb-8 md:!pb-10">
      <Container wide>
        <p className="eyebrow text-blue">{project.category}</p>
        <h1 className="heading-page mt-2 max-w-4xl">
          {project.title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-strong">
          {project.summary}
        </p>
        <div className="mt-6">
          <ProjectFrame
            src={project.heroImage}
            alt={`${project.title} overview visual`}
            screenTone={project.screenTone ?? "cream"}
            urlLabel={
              project.liveUrl
                ? (() => {
                    try {
                      const u = new URL(project.liveUrl);
                      return u.host + u.pathname.replace(/\/$/, "");
                    } catch {
                      return project.liveUrl;
                    }
                  })()
                : undefined
            }
            priority
            sizes="100vw"
          />
        </div>
      </Container>
    </section>
  );
}

export function ProjectMeta({ project }: { project: ProjectItem }) {
  return (
    <div className="rounded-[1.25rem] border border-navy/10 bg-off-white p-6">
      <p className="eyebrow text-muted-strong">Project</p>
      <dl className="mt-4 space-y-4 text-sm">
        <div>
          <dt className="text-muted-strong">Category</dt>
          <dd className="mt-1 font-medium text-navy">{project.category}</dd>
        </div>
        <div>
          <dt className="text-muted-strong">Focus</dt>
          <dd className="mt-1 font-medium text-navy">{project.tags.join(" · ")}</dd>
        </div>
      </dl>
    </div>
  );
}

export function ProjectTechnologies({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div>
      <h2 className="font-display text-2xl text-navy">Technology</h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-navy/10 bg-white px-3 py-1.5 text-sm text-navy"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectGallery({
  project,
}: {
  project: ProjectItem;
}) {
  if (!project.gallery.length) {
    return (
      <div className="rounded-[1.25rem] border border-dashed border-navy/15 bg-off-white p-8 text-sm text-muted-strong">
        {/* TODO: Add approved screenshots to public/images/work/{slug}/ and project.gallery */}
        Gallery screenshots will appear here once approved project media is available.
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {project.gallery.map((image) => (
        <div
          key={image}
          className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-navy/10"
        >
          <Image
            src={resolveImageSrc(image)}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  );
}

export function ProjectShowcase({ project }: { project: ProjectItem }) {
  return (
    <article className="surface-light">
      <ProjectHero project={project} />
      <Container wide className="section-pad !pt-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.4fr]">
          <div className="space-y-10">
            <section>
              <h2 className="font-display text-2xl text-navy">Overview</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-strong">
                {project.overview || project.summary}
              </p>
            </section>

            {(project.problem || project.solution) && (
              <section className="grid gap-6 md:grid-cols-2">
                {project.problem ? (
                  <div>
                    <h2 className="font-display text-2xl text-navy">Problem</h2>
                    <p className="mt-4 text-muted-strong">{project.problem}</p>
                  </div>
                ) : null}
                {project.solution ? (
                  <div>
                    <h2 className="font-display text-2xl text-navy">Solution</h2>
                    <p className="mt-4 text-muted-strong">{project.solution}</p>
                  </div>
                ) : null}
              </section>
            )}

            {!project.problem && !project.solution ? (
              <p className="rounded-xl border border-dashed border-navy/15 bg-off-white px-4 py-3 text-sm text-muted-strong">
                {/* TODO: Add approved problem/solution narrative for this case study. */}
                Detailed problem and solution narrative coming soon.
              </p>
            ) : null}

            <section>
              <h2 className="font-display text-2xl text-navy">Key features</h2>
              <ul className="mt-4 space-y-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="border-b border-navy/8 pb-3 text-muted-strong"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <ProjectTechnologies technologies={project.technologies} />

            <section>
              <h2 className="mb-4 font-display text-2xl text-navy">Screenshots</h2>
              <ProjectGallery project={project} />
            </section>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <ProjectMeta project={project} />
            {project.liveUrl ? (
              <Button
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                variant="ghost"
                className="w-full"
              >
                View Live Site
              </Button>
            ) : null}
            <Button href="/contact" className="w-full">
              Start a Project
            </Button>
            <Link
              href="/work"
              className="block text-center text-xs uppercase tracking-[0.16em] text-muted-strong"
            >
              ← All work
            </Link>
          </aside>
        </div>
      </Container>
    </article>
  );
}
