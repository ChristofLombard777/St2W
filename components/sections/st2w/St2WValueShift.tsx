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

        {/* Who is St2W for */}
        <div data-reveal className="mt-16 md:mt-24 mx-auto max-w-3xl">
          <div
            className="rounded-3xl p-6 sm:p-8 md:p-10"
            style={{
              background: "#e8edf8",
              boxShadow: "12px 12px 28px rgba(163,177,198,0.7), -12px -12px 28px rgba(255,255,255,0.95)"
            }}
          >
            <h3 className="mb-4 font-display text-xl font-extrabold tracking-[-0.03em] text-brand-navy-950 md:text-2xl">
              {st2wContent.whoIsItFor.heading}
            </h3>
            <p className="text-base leading-relaxed text-brand-navy-800/85 mb-4">
              {st2wContent.whoIsItFor.body}
            </p>
            <p className="text-base font-semibold leading-relaxed text-brand-navy-950">
              {st2wContent.whoIsItFor.closing}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
