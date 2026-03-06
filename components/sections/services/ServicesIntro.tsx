"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { servicesContent } from "@/lib/content";

export default function ServicesIntro() {
  return (
    <section className="bg-brand-navy-950 pt-36 pb-20 text-brand-white">
      <Container>
        <div className="max-w-3xl">
          <SectionHeading
            title={servicesContent.intro.title}
            subtitle={servicesContent.intro.subtitle}
            className="text-brand-white"
          />
        </div>
      </Container>
    </section>
  );
}
