"use client";

import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Button } from "@/components/ui/Button";
import { useContactModal } from "@/components/forms/ContactModalContext";
import { Reveal } from "@/components/ui/Reveal";
import { STRINGS } from "@/config/strings";

export function ContactCTASection() {
  const { openModal } = useContactModal();

  return (
    <section id="contact-cta" className="surface-dark section-pad relative overflow-hidden noise-overlay">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue/25 blur-[110px]" />
      </div>

      <Container className="relative text-center">
        <Reveal>
          <p className="eyebrow text-white/45">{STRINGS.contactCta.eyebrow}</p>
          <h2 className="mt-2.5 font-display text-[length:var(--text-4xl)] text-white text-balance md:mt-3.5">
            {STRINGS.contactCta.headline}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/60 md:mt-3 md:text-lg">
            {STRINGS.contactCta.description}
          </p>
          <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-2.5 md:mt-6 md:gap-3">
            <MagneticButton onClick={openModal} size="md">
              {STRINGS.contactCta.ctaProject}
            </MagneticButton>
            <Button href="/contact" variant="secondary" size="md">
              {STRINGS.contactCta.ctaTalk}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
