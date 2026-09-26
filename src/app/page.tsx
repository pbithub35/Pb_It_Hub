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

const WorkSection = dynamic(() =>
  import("@/components/sections/Work").then((m) => m.WorkSection),
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
      <StudentServicesScroll />
      <ServicesSection limit={4} />
      <WorkSection limit={3} />
      <WhyUsSection />
      <ContactCTASection />
    </>
  );
}
