"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { st2wContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { HelpCircle } from "lucide-react";

export default function St2WChallenges() {
  const revealRef = useRevealOnScroll();

  return (
    <section className="py-14 md:py-24 bg-brand-white" ref={revealRef}>
      <Container>
        <div data-reveal className="mb-10 md:mb-16">
          <SectionHeading
            title={st2wContent.challenges.heading}
            align="center"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {st2wContent.challenges.items.map((item, idx) => (
            <div data-reveal key={idx} className="flex gap-4 items-start p-6 rounded-2xl bg-brand-mist-50 border border-brand-line transition-all hover:-translate-y-1 hover:shadow-sm">
              <div className="shrink-0 mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy-950 text-brand-gold-600">
                <HelpCircle className="h-5 w-5" />
              </div>
              <p className="text-brand-slate-500 text-base md:text-lg leading-relaxed font-medium">
                {item}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
