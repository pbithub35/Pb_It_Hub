import Link from "next/link";
import type { FreeResource } from "@/types/student-resource";

export function FreeResourceCard({ resource }: { resource: FreeResource }) {
  return (
    <Link
      href={`/learn-and-build/resources/${resource.slug}`}
      className="group flex h-full flex-col rounded-[var(--learn-radius)] border border-navy/10 bg-white p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-blue/30 hover:shadow-[var(--shadow-card)]"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--learn-accent-secondary)]">
        {resource.category}
      </p>
      <h3 className="mt-2 font-display text-lg text-navy group-hover:text-[color:var(--learn-accent-secondary)]">
        {resource.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-muted-strong">{resource.description}</p>
      <span className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-blue group-hover:text-blue-bright">
        {resource.category === "Free Source Code" || resource.codeBlocks?.length
          ? "Get free code →"
          : "Read →"}
      </span>
    </Link>
  );
}
