import { cn } from "@/lib/utils";

interface FeatureListProps {
  items: string[];
  className?: string;
}

export function FeatureList({ items, className }: FeatureListProps) {
  return (
    <ul className={cn("grid gap-2 sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 rounded-xl border border-navy/10 bg-off-white px-3.5 py-3 text-sm text-muted-strong"
        >
          <span
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--learn-accent)]/15 text-[10px] font-bold text-[color:var(--learn-accent-secondary)]"
            aria-hidden
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
