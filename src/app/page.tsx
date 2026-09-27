import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { StudentServicesScroll } from "@/components/sections/StudentServices";
import { ServicesSection } from "@/components/sections/Services";
import { WhyUsSection } from "@/components/sections/WhyUs";
import { ContactCTASection } from "@/components/sections/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  organizationJsonLd,
  localBusinessJsonLd,
  serviceJsonLd,
  webSiteJsonLd,
  absoluteUrl,
} from "@/lib/seo";
import { services } from "@/data/services";

const StatsSection = dynamic(() =>
  import("@/components/sections/Stats").then((m) => m.StatsSection),
);

const WorkSection = dynamic(() =>
  import("@/components/sections/Work").then((m) => m.WorkSection),
);

const ProcessSection = dynamic(() =>
  import("@/components/sections/Process").then((m) => m.ProcessSection),
);

const TechnologyGraphSection = dynamic(() =>
  import("@/components/sections/TechnologyGraph").then(
    (m) => m.TechnologyGraphSection,
  ),
);

export default function HomePage() {
  const localBusiness = localBusinessJsonLd();

  return (
    <>
      <JsonLd data={webSiteJsonLd()} />
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
      <StatsSection />
      <StudentServicesScroll />
      <ServicesSection limit={3} />
      <WorkSection limit={3} />
      <ProcessSection />
      <TechnologyGraphSection />
      <WhyUsSection />
      <ContactCTASection />
    </>
  );
}
