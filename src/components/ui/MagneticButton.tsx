"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "@/components/ui/Button";

type MagneticButtonProps = ButtonProps & {
  strength?: number;
};

export function MagneticButton({
  strength = 0.28,
  className,
  children,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20 });
  const springY = useSpring(y, { stiffness: 260, damping: 20 });

  function onMove(event: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX * strength);
    y.set(offsetY * strength);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("inline-flex", className)}
    >
      <Button {...props}>{children}</Button>
    </motion.div>
  );
}
