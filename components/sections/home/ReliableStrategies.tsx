"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import IconCircle from "@/components/ui/IconCircle";
import { homeContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { ShieldAlert, Users, Target } from "lucide-react";

export default function ReliableStrategies() {
  const revealRef = useRevealOnScroll();
  const icons = [Users, ShieldAlert, Target];

  return (
    <section className="py-24 bg-brand-mist-50" ref={revealRef}>
      <Container>
        <div data-reveal className="mb-16">
          <SectionHeading
            title={homeContent.strategies.heading}
            subtitle={homeContent.strategies.subtext}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeContent.strategies.cards.map((card, idx) => {
            const Icon = icons[idx] || Target;
            return (
              <div data-reveal key={card.title} style={{ transitionDelay: `${idx * 100}ms` }}>
                <Card className="h-full border-t-4 border-t-brand-gold-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <IconCircle className="mb-6 bg-brand-navy-950/5 text-brand-navy-950">
                    <Icon className="h-6 w-6" />
                  </IconCircle>
                  <h3 className="mb-3 text-xl font-bold tracking-tight text-brand-navy-950">
                    {card.title}
                  </h3>
                  <p className="text-brand-slate-500 leading-relaxed text-sm md:text-base">
                    {card.text}
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
