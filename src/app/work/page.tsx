import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/seo";
import { resolveImageSrc } from "@/lib/media";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BackButton } from "@/components/ui/BackButton";
import { STRINGS } from "@/config/strings";

export const metadata: Metadata = createPageMetadata({
  title: "Our Work & Case Studies",
  description:
    "Selected websites and digital products engineered by PB_IT_HUB in Pathankot for local businesses.",
  path: "/work",
});

function screenBg(tone?: string) {
  if (tone === "dark") return "#0B1220";
  if (tone === "white") return "#ffffff";
  if (tone === "warm") return "#F7F1EA";
  return "#FFF8EE";
}

export default function WorkIndexPage() {
  return (
    <div className="surface-light pb-10 pt-16 md:pb-14 md:pt-24">
      <Container wide>
        <BackButton href="/" label={STRINGS.actions.backToHome} />
        <SectionHeading
          tone="light"
          eyebrow={STRINGS.work.eyebrow}
          title="Selected products and systems"
          description="A growing collection of platforms we've designed and engineered."
        />

        <div className="mt-5 grid grid-cols-2 gap-2.5 md:mt-8 md:gap-4.5">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group overflow-hidden rounded-md border border-navy/10 bg-white shadow-[0_12px_30px_rgba(5,7,11,0.06)] transition active:scale-[0.98] hover:-translate-y-0.5 hover:border-navy/20 hover:shadow-[0_18px_40px_rgba(5,7,11,0.1)] md:rounded-xl"
            >
              <div
                className="relative aspect-[16/10] border-b border-navy/5"
                style={{ backgroundColor: screenBg(project.screenTone) }}
              >
                <Image
                  src={resolveImageSrc(project.heroImage)}
                  alt={`${project.title} visual`}
                  fill
                  className="object-contain object-top transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 50vw, 50vw"
                />
              </div>
              <div className="space-y-1 p-2.5 md:space-y-2 md:p-6">
                <p className="text-[9px] uppercase tracking-[0.12em] text-muted-strong md:text-xs md:tracking-[0.16em]">
                  {project.category}
                </p>
                <h2 className="font-display text-[13px] leading-snug text-navy md:text-2xl">
                  {project.title}
                </h2>
                <p className="line-clamp-2 text-[11px] text-muted-strong md:line-clamp-none md:text-sm">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
