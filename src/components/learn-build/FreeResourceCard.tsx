import Link from "next/link";
import type { FreeResource } from "@/types/student-resource";

export function FreeResourceCard({ resource }: { resource: FreeResource }) {
  return (
    <Link
      href={`/learn-and-build/resources/${resource.slug}`}
      className="group flex h-full flex-col rounded-[var(--learn-radius)] border border-slate-700/70 bg-theme-card p-5 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-theme-card-hover shadow-sm"
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--learn-accent-secondary)]">
        {resource.category}
      </p>
      <h3 className="mt-2 font-display text-lg text-white group-hover:text-[color:var(--learn-accent-secondary)]">
        {resource.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-slate-300">{resource.description}</p>
      <span className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300">
        Read →
      </span>
    </Link>
  );
}
