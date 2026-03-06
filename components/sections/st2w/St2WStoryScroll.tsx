"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { st2wContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export default function St2WStoryScroll() {
  const revealRef = useRevealOnScroll();

  return (
    <section className="py-14 md:py-24 bg-brand-white border-b border-brand-line" ref={revealRef}>
      <Container>
        <div data-reveal className="max-w-4xl mx-auto rounded-2xl md:rounded-3xl bg-brand-mist-50 p-6 sm:p-10 md:p-16 text-center shadow-sm border border-brand-line/50">
          <SectionHeading
            title={st2wContent.story.heading}
            align="center"
          />

          <div className="mt-12 flex flex-col gap-6 md:gap-8 items-center">
            {st2wContent.story.steps.map((step, idx) => (
              <div
                key={idx}
                className="w-full max-w-2xl bg-brand-white py-4 px-5 sm:py-6 sm:px-8 rounded-xl md:rounded-2xl shadow-sm border border-brand-slate-500/10 text-base sm:text-xl md:text-2xl font-semibold text-brand-navy-900 transition-all hover:border-brand-gold-600/50 hover:shadow-soft"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
