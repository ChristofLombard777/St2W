"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { st2wContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export default function St2WStoryScroll() {
  const revealRef = useRevealOnScroll();

  return (
    <section
      className="relative py-14 md:py-24 overflow-hidden"
      ref={revealRef}
      style={{ background: "linear-gradient(160deg, #022248 0%, #061c3a 30%, #0a2040 55%, #031428 80%, #020d1f 100%)" }}
    >
      {/* Background depth blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-sky-600/8 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/6 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] rounded-full bg-indigo-600/5 blur-[80px]" />
      </div>
      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      />
      <Container className="relative z-10">
        <div data-reveal className="mx-auto max-w-4xl text-center">
          <SectionHeading
            title={st2wContent.story.heading}
            align="center"
            headingClass="heading-gradient-white"
          />

          <div className="mt-12 flex flex-col gap-5 md:gap-6 items-center">
            {st2wContent.story.steps.map((step, idx) => (
              <div
                key={idx}
                className="glass-step w-full max-w-2xl rounded-2xl px-5 py-4 text-base font-bold text-white sm:px-8 sm:py-6 sm:text-xl md:text-2xl font-display tracking-[-0.01em]"
                style={{ '--sweep-delay': `${idx * 0.7}s` } as React.CSSProperties}
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
