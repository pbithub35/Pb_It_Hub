"use client";

import { motion } from "framer-motion";
import type { ShowcaseItem } from "./showcaseData";

interface ConnectionLinesProps {
  items: ShowcaseItem[];
  activeId: string;
  side: "left" | "right";
  reduceMotion?: boolean;
}

export function ConnectionLines({
  items,
  activeId,
  side,
  reduceMotion = false,
}: ConnectionLinesProps) {
  const count = items.length;
  if (count === 0) return null;

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {items.map((item, index) => {
        const active = item.id === activeId;
        const y = ((index + 0.5) / count) * 100;
        const startX = side === "left" ? 4 : 96;
        const endX = side === "left" ? 92 : 8;
        const midX = side === "left" ? 55 : 45;
        const d = `M ${startX} ${y} C ${midX} ${y}, ${midX} 50, ${endX} 50`;

        return (
          <g key={item.id}>
            <path
              d={d}
              fill="none"
              stroke={active ? "rgba(29,78,216,0.35)" : "rgba(11,18,32,0.08)"}
              strokeWidth={active ? 0.55 : 0.28}
              vectorEffect="non-scaling-stroke"
            />
            {active ? (
              <motion.path
                d={d}
                fill="none"
                stroke={`url(#showcase-line-grad-${side})`}
                strokeWidth={0.7}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                initial={
                  reduceMotion
                    ? { pathLength: 1, opacity: 0.9 }
                    : { pathLength: 0, opacity: 0.4 }
                }
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: reduceMotion ? 0.1 : 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            ) : null}
          </g>
        );
      })}
      <defs>
        <linearGradient
          id={`showcase-line-grad-${side}`}
          x1={side === "left" ? "0%" : "100%"}
          y1="0%"
          x2={side === "left" ? "100%" : "0%"}
          y2="0%"
        >
          <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.15" />
          <stop offset="55%" stopColor="#1d4ed8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  );
}
