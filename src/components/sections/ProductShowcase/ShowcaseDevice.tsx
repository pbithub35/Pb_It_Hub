"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { ShowcaseItem } from "./showcaseData";
import { ShowcaseScreen } from "./ShowcaseScreen";

interface ShowcaseDeviceProps {
  active: ShowcaseItem;
  reduceMotion?: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export function ShowcaseDevice({
  active,
  reduceMotion = false,
  mouseX,
  mouseY,
}: ShowcaseDeviceProps) {
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], reduceMotion ? [0, 0] : [6, -6]),
    { stiffness: 120, damping: 22 },
  );
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], reduceMotion ? [0, 0] : [-2, 2]),
    { stiffness: 120, damping: 22 },
  );

  return (
    <div
      id="showcase-device-stage"
      role="tabpanel"
      aria-labelledby={`showcase-card-${active.id}`}
      className="relative mx-auto w-full max-w-[440px] sm:max-w-[480px]"
      style={{ perspective: "1600px" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-14 w-[55%] -translate-x-1/2 rounded-[100%] bg-navy/15 blur-2xl"
      />

      <motion.div
        className="relative z-10 w-full origin-bottom"
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Live Preview badge — overlaid on bezel, no extra top gap */}
        <div className="absolute left-3 top-3 z-20 sm:left-4 sm:top-3.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-navy/10 bg-white/95 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-strong shadow-[var(--shadow-soft)] backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-blue/45" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-blue" />
            </span>
            Live Preview
          </span>
        </div>

        {/* Monitor panel */}
        <div
          className="relative mx-auto"
          style={{
            transform: "perspective(1200px) rotateX(2deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Outer shell — thin black bezel, slight curve via border-radius + shadow */}
          <div
            className="relative overflow-hidden rounded-[18px] bg-[#0a0c10] p-[7px] shadow-[0_28px_60px_rgba(15,23,42,0.28),0_2px_0_rgba(255,255,255,0.06)_inset]"
            style={{
              // Fake horizontal curve: stronger side shadow falloff
              boxShadow:
                "0 28px 60px rgba(15,23,42,0.28), inset 12px 0 24px rgba(0,0,0,0.35), inset -12px 0 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            {/* Top / side near-borderless rim */}
            <div className="rounded-[12px] bg-[#050608] p-[3px]">
              {/* Screen */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-[8px] bg-[#0b1220]">
                <ShowcaseScreen
                  imageKey={active.desktopImage}
                  alt={`${active.title} — ${active.projectLabel}`}
                  activeKey={`desk-${active.id}`}
                  reduceMotion={reduceMotion}
                  tone={active.screenTone}
                  priority
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(105deg, rgba(255,255,255,0.06) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.1) 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stand neck */}
        <div className="relative z-[1] mx-auto -mt-px flex flex-col items-center">
          <div
            className="h-7 w-[14px] rounded-b-[3px] bg-gradient-to-b from-[#d8dde6] via-[#c5ccd8] to-[#b0b8c6]"
            style={{
              boxShadow:
                "inset 2px 0 3px rgba(255,255,255,0.55), inset -2px 0 3px rgba(0,0,0,0.12)",
            }}
          />
          <div className="h-1.5 w-6 rounded-full bg-gradient-to-b from-[#cfd5e0] to-[#a8b0c0] shadow-sm" />
        </div>

        {/* Stand base plate */}
        <div className="relative z-0 mx-auto -mt-0.5 flex justify-center">
          <div
            className="h-[8px] w-[38%] max-w-[180px] rounded-[5px] bg-gradient-to-b from-[#e8ecf2] via-[#d4dae4] to-[#b8c0ce]"
            style={{
              boxShadow:
                "0 6px 16px rgba(15,23,42,0.18), inset 0 1px 0 rgba(255,255,255,0.7)",
            }}
          />
        </div>

        <div
          aria-hidden
          className="pointer-events-none mx-auto mt-1 h-5 w-[45%] rounded-[100%] bg-navy/10 blur-lg"
        />
      </motion.div>
    </div>
  );
}

export function useShowcaseParallax() {
  const stageRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onPointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function onPointerLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return { stageRef, mouseX, mouseY, onPointerMove, onPointerLeave };
}
