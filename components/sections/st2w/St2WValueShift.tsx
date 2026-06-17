"use client";

import Container from "@/components/ui/Container";
import { st2wContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { ArrowRight, Users, Sparkles, Quote } from "lucide-react";

export default function St2WValueShift() {
  const revealRef = useRevealOnScroll();
  const quote = st2wContent.quotes[0];

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 bg-[#f8f9fb]"
      ref={revealRef}
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-5xl">
          {/* Section header */}
          <div data-reveal className="text-center mb-14 md:mb-20">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold-600/60 mb-4">
              The St2W Advantage
            </span>
            <h2 className="font-display text-3xl md:text-[2.6rem] font-extrabold tracking-[-0.04em] text-brand-navy-950 leading-[1.08] mb-5">
              Reimagine your insurance
            </h2>
            <p className="text-base md:text-lg text-brand-navy-800 max-w-md mx-auto leading-relaxed">
              What if the products you already needed could also build your wealth?
            </p>
          </div>

          {/* Premium card grid */}
          <div className="grid gap-6 md:grid-cols-2 md:gap-7 items-stretch">
            {/* Card 1 */}
            <div
              data-reveal
              className="group relative overflow-hidden rounded-[1.75rem] bg-white p-9 md:p-11 transition-all duration-500 hover:shadow-[0_24px_64px_rgba(15,44,88,0.1)] hover:-translate-y-1.5"
              style={{ boxShadow: "0 2px 8px rgba(15,44,88,0.03), 0 8px 24px rgba(15,44,88,0.04), 0 0 0 1px rgba(15,44,88,0.04)" }}
            >
              {/* Top gold accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold-400/60 via-brand-gold-500/80 to-brand-gold-400/60" />

              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a2040] to-[#061c3a] shadow-lg shadow-brand-navy-950/10 ring-1 ring-white/10 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-brand-navy-950/15 group-hover:scale-[1.03]">
                <Sparkles className="h-6 w-6 text-brand-gold-400" strokeWidth={1.8} />
              </div>

              <h3 className="mb-4 font-display text-[1.5rem] font-extrabold tracking-[-0.03em] text-brand-navy-950 leading-[1.15]">
                {st2wContent.valueShift.heading}
              </h3>

              <p className="text-[0.98rem] leading-[1.8] text-brand-navy-800">
                {st2wContent.valueShift.body}
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-semibold tracking-wide text-brand-gold-600 transition-all duration-300 group-hover:gap-3 group-hover:text-brand-gold-600 cursor-pointer">
                <span>Discover how it works</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </div>
            </div>

            {/* Card 2 */}
            <div
              data-reveal
              className="group relative overflow-hidden rounded-[1.75rem] bg-white p-9 md:p-11 transition-all duration-500 hover:shadow-[0_24px_64px_rgba(15,44,88,0.1)] hover:-translate-y-1.5"
              style={{ boxShadow: "0 2px 8px rgba(15,44,88,0.03), 0 8px 24px rgba(15,44,88,0.04), 0 0 0 1px rgba(15,44,88,0.04)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold-400/60 via-brand-gold-500/80 to-brand-gold-400/60" />

              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a2040] to-[#061c3a] shadow-lg shadow-brand-navy-950/10 ring-1 ring-white/10 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-brand-navy-950/15 group-hover:scale-[1.03]">
                <Users className="h-6 w-6 text-brand-gold-400" strokeWidth={1.8} />
              </div>

              <h3 className="mb-4 font-display text-[1.5rem] font-extrabold tracking-[-0.03em] text-brand-navy-950 leading-[1.15]">
                {st2wContent.whoIsItFor.heading}
              </h3>

              <p className="text-[0.98rem] leading-[1.8] text-brand-navy-800 mb-5">
                {st2wContent.whoIsItFor.body}
              </p>
              <p className="text-[0.92rem] font-semibold leading-[1.65] text-brand-navy-900">
                {st2wContent.whoIsItFor.closing}
              </p>
            </div>
          </div>

          {/* Editorial quote */}
          <div data-reveal className="mt-16 md:mt-20 flex justify-center">
            <div className="relative px-10 py-7 max-w-xl">
              <span className="absolute top-2 left-2 text-6xl font-serif text-brand-gold-400/15 leading-none select-none">"</span>
              <p className="text-center text-[0.95rem] md:text-base italic text-brand-navy-800 leading-relaxed">
                {quote.text}
              </p>
              <p className="text-center text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-brand-gold-600 mt-3">
                {quote.author}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
