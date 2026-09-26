import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { StudentServicesScroll } from "@/components/sections/StudentServices";
import { ServicesSection } from "@/components/sections/Services";
import { TechnologiesSection } from "@/components/sections/Technologies";
import { WhyUsSection } from "@/components/sections/WhyUs";
import { AboutSection } from "@/components/sections/About";
import { ContactCTASection } from "@/components/sections/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  organizationJsonLd,
  localBusinessJsonLd,
  serviceJsonLd,
  absoluteUrl,
} from "@/lib/seo";
import { services } from "@/data/services";

const WorkSection = dynamic(() =>
  import("@/components/sections/Work").then((m) => m.WorkSection),
);
const AISection = dynamic(() =>
  import("@/components/sections/AI").then((m) => m.AISection),
);
const ProcessSection = dynamic(() =>
  import("@/components/sections/Process").then((m) => m.ProcessSection),
);
const CapabilitiesSection = dynamic(() =>
  import("@/components/sections/Capabilities").then((m) => m.CapabilitiesSection),
);

export default function HomePage() {
  const localBusiness = localBusinessJsonLd();

  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      {localBusiness ? <JsonLd data={localBusiness} /> : null}
      <JsonLd
        data={serviceJsonLd(
          services.map((service) => ({
            name: service.title,
            description: service.description,
            url: absoluteUrl(`/services/${service.slug}`),
          })),
        )}
      />
      <Hero />
      <StudentServicesScroll />
      <ServicesSection />
      <WorkSection />
      <AISection />
      <TechnologiesSection />
      <WhyUsSection />
      <ProcessSection />
      <CapabilitiesSection />
      <AboutSection />
      <ContactCTASection />
    </>
  );
}
