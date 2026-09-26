import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  titleClassName?: string;
  noWrap?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  titleClassName,
  noWrap = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        noWrap ? "max-w-4xl lg:max-w-6xl xl:max-w-none" : "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow mb-2 md:mb-3.5",
            tone === "light" ? "text-muted-strong" : "text-cyan/80",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-[length:var(--text-4xl)] leading-[1.08]",
          noWrap
            ? "whitespace-normal md:whitespace-nowrap [text-wrap:unset] md:[text-wrap:nowrap]"
            : "text-balance",
          tone === "light" ? "text-navy" : "text-white",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-2.5 max-w-2xl text-sm leading-relaxed md:mt-4 md:text-base lg:text-lg",
            noWrap && "max-w-3xl",
            align === "center" && "mx-auto",
            tone === "light" ? "text-muted-strong" : "text-white/65",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
