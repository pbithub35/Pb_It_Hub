"use client";

import { motion } from "framer-motion";
import { MediaImage } from "@/components/ui/MediaImage";
import { cn } from "@/lib/utils";
import type { ShowcaseItem } from "./showcaseData";

interface ShowcaseCardProps {
  item: ShowcaseItem;
  active: boolean;
  onSelect: (id: string) => void;
  reduceMotion?: boolean;
  compact?: boolean;
}

export function ShowcaseCard({
  item,
  active,
  onSelect,
  reduceMotion = false,
  compact = false,
}: ShowcaseCardProps) {
  return (
    <motion.button
      type="button"
      id={`showcase-card-${item.id}`}
      role="tab"
      aria-selected={active}
      aria-controls="showcase-device-stage"
      aria-label={`${item.title} — ${item.projectLabel}`}
      tabIndex={active ? 0 : -1}
      onClick={() => onSelect(item.id)}
      whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      className={cn(
        "group relative overflow-hidden rounded-lg border text-left transition-[border-color,box-shadow,opacity] duration-300",
        "bg-white shadow-[var(--shadow-soft)]",
        compact ? "min-w-[112px] shrink-0" : "w-full",
        active
          ? "border-blue/40 opacity-100 shadow-[0_0_0_1px_rgba(29,78,216,0.22),0_8px_20px_rgba(29,78,216,0.12)]"
          : "border-navy/10 opacity-65 hover:opacity-100 hover:border-navy/20",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-off-white",
          compact ? "aspect-[16/10] w-[112px]" : "aspect-[16/10] w-full",
        )}
      >
        <MediaImage
          src={item.thumbImage}
          alt=""
          fill
          className={cn(
            "object-contain object-center p-0.5 transition duration-500",
            active ? "opacity-100" : "opacity-80 group-hover:opacity-95",
          )}
          imageType="thumbnail"
          sizes="140px"
        />
      </div>
    </motion.button>
  );
}
