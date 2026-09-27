"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/Button";
import { useContactModal } from "@/components/forms/ContactModalContext";
import { STRINGS } from "@/config/strings";

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactCTASection() {
  const { openModal } = useContactModal();
  const reduce = useReducedMotion();

  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden border-y border-navy/8 bg-paper py-12 md:py-14"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 50% 0%, rgba(29,78,216,0.1), transparent 65%)",
        }}
      />
      <Container className="relative text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.04 },
            },
          }}
        >
          <motion.p
            className="eyebrow text-blue"
            variants={{
              hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease },
              },
            }}
          >
            {STRINGS.contactCta.eyebrow}
          </motion.p>
          <motion.h2
            className="heading-section mx-auto mt-2 max-w-2xl text-balance text-ink"
            variants={{
              hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease },
              },
            }}
          >
            {STRINGS.contactCta.headline}
          </motion.h2>
          <motion.p
            className="mx-auto mt-2 max-w-xl text-sm text-muted-strong"
            variants={{
              hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 12 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease },
              },
            }}
          >
            {STRINGS.contactCta.description}
          </motion.p>
          <motion.div
            className="mt-6 flex flex-row flex-wrap items-center justify-center gap-2.5 md:gap-3"
            variants={{
              hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 10 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease },
              },
            }}
          >
            <MagneticButton onClick={openModal} size="md">
              {STRINGS.contactCta.ctaProject}
            </MagneticButton>
            <Button href="/contact" variant="secondary" size="md">
              {STRINGS.contactCta.ctaTalk}
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
