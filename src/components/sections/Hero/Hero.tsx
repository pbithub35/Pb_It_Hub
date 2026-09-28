"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/Button";
import { useContactModal } from "@/components/forms/ContactModalContext";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { STRINGS } from "@/config/strings";
import { resolveImageSrc } from "@/lib/media";
import { heroItem, staggerContainer } from "@/lib/motion";

export function Hero() {
  const { openModal } = useContactModal();
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative isolate min-h-[min(78svh,44rem)] overflow-hidden bg-navy-deep md:min-h-[min(92svh,52rem)]"
    >
      {/* Full-bleed workspace — edge to edge */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.06, opacity: 0.85 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={resolveImageSrc("hero/workspace")}
          alt=""
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
      </motion.div>

      {/* Cool slate wash — readable text, keeps photo present */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(6,11,20,0.88) 0%, rgba(6,11,20,0.72) 42%, rgba(6,11,20,0.35) 68%, rgba(6,11,20,0.2) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(6,11,20,0.55) 0%, transparent 42%)",
        }}
      />

      <Container wide className="relative flex min-h-[min(78svh,44rem)] flex-col justify-end pb-9 pt-24 sm:pb-12 sm:pt-28 md:min-h-[min(92svh,52rem)] md:justify-center md:pb-20 md:pt-28">
        <motion.div
          className="max-w-xl md:max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={reduce ? undefined : staggerContainer}
        >
          <motion.p
            variants={reduce ? undefined : heroItem}
            className="font-display text-[clamp(2.35rem,6.5vw,4.25rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-white"
          >
            {siteConfig.displayName}
          </motion.p>

          <motion.h1
            variants={reduce ? undefined : heroItem}
            className="mt-5 max-w-lg font-display text-[clamp(1.35rem,3.2vw,2rem)] font-semibold leading-[1.2] tracking-tight text-white/92"
          >
            {STRINGS.hero.headlinePart1} {STRINGS.hero.headlinePart2}
          </motion.h1>

          <motion.p
            variants={reduce ? undefined : heroItem}
            className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-white/70"
          >
            {STRINGS.hero.descriptionShort}
          </motion.p>

          <motion.div
            variants={reduce ? undefined : heroItem}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton onClick={openModal} size="md">
              {STRINGS.hero.ctaProject}
            </MagneticButton>
            <Button href="/work" variant="light" size="md">
              {STRINGS.hero.ctaWork}
            </Button>
          </motion.div>

          <motion.p
            variants={reduce ? undefined : heroItem}
            className="mt-8 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45"
          >
            {STRINGS.hero.locationLine}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
