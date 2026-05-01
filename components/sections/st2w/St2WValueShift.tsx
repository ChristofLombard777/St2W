"use client";

import Container from "@/components/ui/Container";
import { st2wContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function St2WValueShift() {
  const revealRef = useRevealOnScroll();

  return (
    <section
      className="relative overflow-hidden bg-white py-16 md:py-24"
      ref={revealRef}
    >
      {/* Soft radial glow behind text */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-brand-gold-500/6 blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          {/* Gold accent line */}
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-gold-500/20 to-brand-gold-600/10 shadow-[0_0_24px_rgba(212,175,90,0.18)]">
            <ShieldCheck className="h-6 w-6 text-brand-gold-600" />
          </div>

          <h2 className="mb-5 font-display text-2xl font-extrabold tracking-[-0.04em] text-brand-navy-950 md:text-3xl lg:text-4xl leading-[1.08]">
            {st2wContent.valueShift.heading}
          </h2>

          <p className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-brand-navy-900/80">
            {st2wContent.valueShift.body}
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-brand-gold-600">
            <span>Discover how it works</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Container>
    </section>
  );
}
