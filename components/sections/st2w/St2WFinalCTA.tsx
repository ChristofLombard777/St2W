"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { st2wContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { CheckCircle2 } from "lucide-react";

export default function St2WFinalCTA() {
  const revealRef = useRevealOnScroll();
  const { finalCTA } = st2wContent;

  return (
    <section className="py-14 md:py-24 bg-brand-navy-950" ref={revealRef}>
      <Container>
        <div data-reveal className="shine-card rounded-3xl p-8 md:p-16 max-w-5xl mx-auto relative overflow-hidden flex flex-col items-center" style={{ '--card-bg': '#091E39' } as React.CSSProperties}>

          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/8 rounded-full blur-[80px]" />

          <SectionHeading
            title={finalCTA.heading}
            align="center"
            className="text-brand-white mb-10 z-10"
          />

          <ul className="mb-8 md:mb-12 space-y-3 md:space-y-4 max-w-2xl w-full z-10">
            {finalCTA.bullets.map((bullet, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <CheckCircle2 className="h-6 w-6 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-lg font-medium text-brand-mist-50/90 leading-relaxed">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>

          <div className="shine-card rounded-2xl p-5 sm:p-8 w-full max-w-2xl text-center z-10" style={{ '--card-bg': '#022248' } as React.CSSProperties}>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-brand-white mb-3">
              {finalCTA.goingFromHere.heading}
            </h3>
            <p className="text-brand-mist-50/70 mb-8 max-w-lg mx-auto">
              {finalCTA.goingFromHere.text}
            </p>
            <Button href="https://wa.me/27724688254" variant="secondary" className="w-full sm:w-auto text-base sm:text-lg h-12 sm:h-14 px-8 sm:px-10">
              WhatsApp Us Now
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}
