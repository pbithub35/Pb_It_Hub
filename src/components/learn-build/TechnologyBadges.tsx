import { cn } from "@/lib/utils";

interface TechnologyBadgesProps {
  technologies: string[];
  size?: "sm" | "md";
  className?: string;
}

export function TechnologyBadges({
  technologies,
  size = "md",
  className,
}: TechnologyBadgesProps) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {technologies.map((tech) => (
        <li
          key={tech}
          className={cn(
            "rounded-full border border-slate-700/80 bg-slate-800/80 font-medium text-slate-200",
            size === "sm"
              ? "px-2 py-0.5 text-[10px]"
              : "px-2.5 py-1 text-xs",
          )}
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}
