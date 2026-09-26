import Image from "next/image";
import { cn } from "@/lib/utils";
import { resolveImageSrc } from "@/lib/media";

interface ProjectFrameProps {
  src: string;
  alt: string;
  className?: string;
  /** Soft screen backdrop behind contain-fit screenshots */
  screenTone?: "cream" | "warm" | "dark" | "white";
  priority?: boolean;
  sizes?: string;
  /** Optional live URL shown in the fake browser bar */
  urlLabel?: string;
  mediaAttr?: boolean;
}

const toneClass: Record<NonNullable<ProjectFrameProps["screenTone"]>, string> = {
  cream: "bg-[#FFF8EE]",
  warm: "bg-[#F7F1EA]",
  dark: "bg-[#0B1220]",
  white: "bg-white",
};

/**
 * Browser-style 3D frame that shows full website screenshots
 * without harsh cropping, so page backgrounds stay intact.
 */
export function ProjectFrame({
  src,
  alt,
  className,
  screenTone = "cream",
  priority,
  sizes = "(max-width: 1024px) 100vw, 58vw",
  urlLabel,
  mediaAttr,
}: ProjectFrameProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-md border border-navy/10 bg-navy-deep shadow-[0_25px_60px_rgba(5,7,11,0.18),0_8px_20px_rgba(5,7,11,0.08)] md:rounded-xl",
        "transform-gpu transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(5,7,11,0.22)]",
        className,
      )}
    >
      {/* Subtle 3D rim */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10" />

      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#121826] px-3 py-2.5 md:px-4 md:py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57] md:h-2.5 md:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E] md:h-2.5 md:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-[#28C840] md:h-2.5 md:w-2.5" />
        </div>
        <div className="ml-1 min-w-0 flex-1 truncate rounded-full border border-white/8 bg-white/5 px-3 py-1 text-[9px] text-white/45 md:text-[10px]">
          {urlLabel ?? "pbithub.com/work"}
        </div>
      </div>

      {/* Screen — contain keeps full page, no side/top crop */}
      <div
        {...(mediaAttr ? { "data-work-media": true } : {})}
        className={cn(
          "relative aspect-[16/9] w-full",
          toneClass[screenTone],
        )}
      >
        <Image
          src={resolveImageSrc(src)}
          alt={alt}
          fill
          preload={priority}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          className="object-contain object-top"
          sizes={sizes}
          quality={85}
        />
      </div>
    </div>
  );
}
