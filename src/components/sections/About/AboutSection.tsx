import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { STRINGS } from "@/config/strings";

export function AboutSection() {
  return (
    <section id="about" className="surface-dark section-pad relative overflow-hidden noise-overlay">
      {/* Ambient Grid and Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-fade opacity-40" />
        <div className="absolute top-1/2 -left-20 h-72 w-72 rounded-full bg-cyan/15 blur-[120px]" />
        <div className="absolute bottom-0 -right-20 h-72 w-72 rounded-full bg-blue/15 blur-[120px]" />
      </div>

      <Container wide className="relative">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal>
            <SectionHeading
              eyebrow={STRINGS.about.eyebrow}
              title={STRINGS.about.title}
              description={STRINGS.about.description}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {STRINGS.about.focusList.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-3 text-xs font-semibold text-white/90 backdrop-blur-md transition-all duration-200 hover:border-cyan/35 hover:bg-white/[0.06] hover:text-cyan md:rounded-xl md:px-5 md:py-4 md:text-sm"
                >
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    <span>{item}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
