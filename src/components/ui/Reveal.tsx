"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easings } from "@/lib/animations";

const REVEAL_DURATION = 0.55;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        duration: REVEAL_DURATION,
        ease: easings.outExpo,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.97 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: REVEAL_DURATION, ease: easings.outExpo },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

type RevealCardFrom = "left" | "right" | "up";

export function RevealCard({
  children,
  className,
  from = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  from?: RevealCardFrom;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const offset =
    from === "left"
      ? { x: -24, y: 0 }
      : from === "right"
        ? { x: 24, y: 0 }
        : { x: 0, y: 28 };

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...offset, scale: 0.98 }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{
        duration: REVEAL_DURATION,
        ease: easings.outExpo,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
