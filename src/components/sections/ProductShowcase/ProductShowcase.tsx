"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import {
  leftShowcaseItems,
  rightShowcaseItems,
  showcaseItems,
} from "./showcaseData";
import { ShowcaseCard } from "./ShowcaseCard";
import { ShowcaseDevice, useShowcaseParallax } from "./ShowcaseDevice";
import { ConnectionLines } from "./ConnectionLines";

const AUTO_MS = 5000;
const IDLE_RESUME_MS = 5000;

export function ProductShowcase() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [activeId, setActiveId] = useState(showcaseItems[0]?.id ?? "dashboard");
  const [userLocked, setUserLocked] = useState(false);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const active = useMemo(
    () => showcaseItems.find((i) => i.id === activeId) ?? showcaseItems[0],
    [activeId],
  );

  const { stageRef, mouseX, mouseY, onPointerMove, onPointerLeave } =
    useShowcaseParallax();

  const clearTimers = useCallback(() => {
    if (idleTimer.current) clearTimeout(idleTimer.current);
    if (autoTimer.current) clearInterval(autoTimer.current);
    idleTimer.current = null;
    autoTimer.current = null;
  }, []);

  const bumpInteraction = useCallback(() => {
    setUserLocked(true);
    clearTimers();
    if (reduce) return;
    idleTimer.current = setTimeout(() => {
      setUserLocked(false);
    }, IDLE_RESUME_MS);
  }, [clearTimers, reduce]);

  const selectItem = useCallback(
    (id: string, fromUser = true) => {
      setActiveId(id);
      if (fromUser) bumpInteraction();
    },
    [bumpInteraction],
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    clearTimers();
    if (reduce || !inView || userLocked) return;

    autoTimer.current = setInterval(() => {
      setActiveId((current) => {
        const idx = showcaseItems.findIndex((i) => i.id === current);
        const next = showcaseItems[(idx + 1) % showcaseItems.length];
        return next.id;
      });
    }, AUTO_MS);

    return clearTimers;
  }, [reduce, inView, userLocked, clearTimers]);

  const onTabListKeyDown = (event: React.KeyboardEvent) => {
    const ids = showcaseItems.map((i) => i.id);
    const index = ids.indexOf(activeId);
    if (index < 0) return;

    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      next = (index + 1) % ids.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      next = (index - 1 + ids.length) % ids.length;
    } else if (event.key === "Home") {
      event.preventDefault();
      next = 0;
    } else if (event.key === "End") {
      event.preventDefault();
      next = ids.length - 1;
    } else {
      return;
    }

    selectItem(ids[next], true);
    requestAnimationFrame(() => {
      document.getElementById(`showcase-card-${ids[next]}`)?.focus();
    });
  };

  if (!active) return null;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden surface-light py-6 md:py-8"
      aria-label="Interactive product showcase"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-blue/10 blur-[90px]" />
        <div className="absolute -right-16 bottom-8 h-72 w-72 rounded-full bg-cyan/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(21,32,51,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(21,32,51,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 45%, black 15%, transparent 75%)",
          }}
        />
      </div>

      <Container wide className="relative">
        {/* Desktop */}
        <div
          ref={stageRef}
          onPointerMove={reduce ? undefined : onPointerMove}
          onPointerLeave={reduce ? undefined : onPointerLeave}
          className="relative hidden lg:block"
        >
          <div className="grid grid-cols-[minmax(0,128px)_minmax(0,1fr)_minmax(0,128px)] items-center gap-3 xl:gap-5">
            <div
              role="tablist"
              aria-label="Product features left"
              aria-orientation="vertical"
              onKeyDown={onTabListKeyDown}
              className="relative z-10 flex flex-col gap-1.5"
            >
              <div className="absolute inset-y-0 -right-6 left-[35%] -z-10">
                <ConnectionLines
                  items={leftShowcaseItems}
                  activeId={activeId}
                  side="left"
                  reduceMotion={!!reduce}
                />
              </div>
              {leftShowcaseItems.map((item) => (
                <ShowcaseCard
                  key={item.id}
                  item={item}
                  active={item.id === activeId}
                  onSelect={(id) => selectItem(id, true)}
                  reduceMotion={!!reduce}
                />
              ))}
            </div>

            <div className="relative px-1 py-2">
              <ShowcaseDevice
                active={active}
                reduceMotion={!!reduce}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </div>

            <div
              role="tablist"
              aria-label="Product features right"
              aria-orientation="vertical"
              onKeyDown={onTabListKeyDown}
              className="relative z-10 flex flex-col gap-1.5"
            >
              <div className="absolute inset-y-0 -left-6 right-[35%] -z-10">
                <ConnectionLines
                  items={rightShowcaseItems}
                  activeId={activeId}
                  side="right"
                  reduceMotion={!!reduce}
                />
              </div>
              {rightShowcaseItems.map((item) => (
                <ShowcaseCard
                  key={item.id}
                  item={item}
                  active={item.id === activeId}
                  onSelect={(id) => selectItem(id, true)}
                  reduceMotion={!!reduce}
                />
              ))}
            </div>
          </div>

          <div
            className="mt-4 flex flex-wrap items-center justify-center gap-1.5"
            role="presentation"
          >
            {showcaseItems.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Show ${item.title}`}
                onClick={() => selectItem(item.id, true)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  item.id === activeId
                    ? "w-6 bg-blue"
                    : "w-1.5 bg-navy/20 hover:bg-navy/35",
                )}
              />
            ))}
          </div>
        </div>

        {/* Mobile / tablet — laptop only */}
        <div className="lg:hidden">
          <div className="mx-auto max-w-[360px] px-2">
            <ShowcaseDevice
              active={active}
              reduceMotion
              mouseX={mouseX}
              mouseY={mouseY}
            />
          </div>

          <div
            role="tablist"
            aria-label="Product features"
            aria-orientation="horizontal"
            onKeyDown={onTabListKeyDown}
            className="mt-3 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {showcaseItems.map((item) => (
              <ShowcaseCard
                key={item.id}
                item={item}
                active={item.id === activeId}
                onSelect={(id) => selectItem(id, true)}
                reduceMotion={!!reduce}
                compact
              />
            ))}
          </div>

          <div className="mt-3 flex justify-center gap-1.5">
            {showcaseItems.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Show ${item.title}`}
                onClick={() => selectItem(item.id, true)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  item.id === activeId ? "w-5 bg-blue" : "w-1.5 bg-navy/20",
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
