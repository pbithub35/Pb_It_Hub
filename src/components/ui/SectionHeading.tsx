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
  tone = "light",
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
            "eyebrow mb-1.5 md:mb-2",
            tone === "light" ? "text-blue" : "text-blue-bright/90",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "heading-section",
          noWrap
            ? "whitespace-normal md:whitespace-nowrap [text-wrap:unset] md:[text-wrap:nowrap]"
            : "text-balance",
          tone === "dark" && "text-white",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-2 max-w-2xl text-sm leading-relaxed md:text-[0.95rem]",
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
