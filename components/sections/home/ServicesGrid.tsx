"use client";

import Container from "@/components/ui/Container";
import { homeContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ServicesGrid() {
  const revealRef = useRevealOnScroll();

  return (
    <section className="py-24 bg-brand-navy-950 border-t border-brand-navy-800" ref={revealRef}>
      <Container>
        <div data-reveal className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-white md:text-4xl lg:text-5xl mb-6">
            Comprehensive Suite
          </h2>
          <p className="text-xl text-brand-mist-100/70 max-w-2xl mx-auto">
            A wide array of solutions tailored to match your specific financial landscape.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16">
          {homeContent.servicesGrid.map((service) => (
            <div
              data-reveal
              key={service}
              className="flex items-center gap-3 rounded-lg border border-brand-navy-800 bg-brand-navy-900/50 p-4 transition-colors hover:border-brand-gold-600/50 hover:bg-brand-navy-800"
            >
              <CheckCircle2 className="h-5 w-5 text-brand-gold-600 shrink-0" />
              <span className="font-medium text-brand-mist-50 text-sm md:text-base">{service}</span>
            </div>
          ))}
        </div>

        <div data-reveal className="flex justify-center">
          <Button href="/our-services" variant="secondary">
            View Service Details
          </Button>
        </div>
      </Container>
    </section>
  );
}
