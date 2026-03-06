"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import IconCircle from "@/components/ui/IconCircle";
import { servicesContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { Activity, Shield, Users, LineChart } from "lucide-react";

export default function WhyChoose() {
  const revealRef = useRevealOnScroll();
  const icons = [Activity, Shield, Users, LineChart];

  return (
    <section className="py-24 bg-brand-white border-t border-brand-line" ref={revealRef}>
      <Container>
        <div data-reveal className="mb-16">
          <SectionHeading
            title="Why Choose Worldwide Wealth"
            align="center"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesContent.whyChoose.map((item, idx) => {
            const Icon = icons[idx] || Shield;
            return (
              <div data-reveal key={idx}>
                <Card className="h-full text-center flex flex-col items-center">
                  <IconCircle className="mb-6 h-16 w-16 bg-brand-gold-600 text-brand-navy-950">
                    <Icon className="h-8 w-8" />
                  </IconCircle>
                  <h3 className="mb-3 text-lg font-bold text-brand-navy-950">
                    {item.title}
                  </h3>
                  <p className="text-brand-slate-500 font-medium">
                    {item.text}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
