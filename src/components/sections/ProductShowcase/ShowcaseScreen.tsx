"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MediaImage } from "@/components/ui/MediaImage";
import { cn } from "@/lib/utils";
import type { ScreenTone } from "./showcaseData";

function screenBg(tone?: ScreenTone): string {
  switch (tone) {
    case "dark":
      return "#152033";
    case "warm":
      return "#f4f1ec";
    case "cream":
      return "#f7f4ee";
    case "white":
      return "#ffffff";
    default:
      return "#152033";
  }
}

interface ShowcaseScreenProps {
  imageKey: string;
  alt: string;
  activeKey: string;
  reduceMotion?: boolean;
  className?: string;
  priority?: boolean;
  tone?: ScreenTone;
}

export function ShowcaseScreen({
  imageKey,
  alt,
  activeKey,
  reduceMotion = false,
  className,
  priority = false,
  tone = "dark",
}: ShowcaseScreenProps) {
  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      style={{ backgroundColor: screenBg(tone) }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeKey}
          className="absolute inset-0"
          initial={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 1.03, x: 16 }
          }
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={
            reduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 0.97, x: -16 }
          }
          transition={{
            duration: reduceMotion ? 0.15 : 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <MediaImage
            src={imageKey}
            alt={alt}
            fill
            className="object-contain object-center"
            imageType="screenshot"
            sizes="(max-width: 1024px) 90vw, 480px"
            priority={priority}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
