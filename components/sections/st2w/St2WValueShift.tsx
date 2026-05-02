"use client";

import Container from "@/components/ui/Container";
import { st2wContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { ArrowRight, Users, Sparkles, Quote } from "lucide-react";

export default function St2WValueShift() {
  const revealRef = useRevealOnScroll();
  const quote = st2wContent.quotes[0];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-white" ref={revealRef}>
      <Container className="relative z-10">
        <div data-reveal className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 items-stretch">
            <div className="rounded-2xl border border-brand-navy-900/8 bg-gradient-to-br from-white to-[#f6f8fc] p-7 md:p-9 shadow-[0_8px_32px_rgba(15,44,88,0.08)]">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy-950 shadow-lg shadow-brand-navy-950/20">
                <Sparkles className="h-5 w-5 text-brand-gold-400" />
              </div>
              <h3 className="mb-3 font-display text-xl font-extrabold tracking-[-0.03em] text-brand-navy-950 md:text-2xl">{st2wContent.valueShift.heading}</h3>
              <p className="text-base leading-relaxed text-brand-navy-800/85">{st2wContent.valueShift.body}</p>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-gold-600">
                <span>Discover how it works</span><ArrowRight className="h-4 w-4" />
              </div>
            </div>
            <div className="rounded-2xl border border-brand-navy-900/8 bg-gradient-to-br from-white to-[#f6f8fc] p-7 md:p-9 shadow-[0_8px_32px_rgba(15,44,88,0.08)]">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy-950 shadow-lg shadow-brand-navy-950/20">
                <Users className="h-5 w-5 text-brand-gold-400" />
              </div>
              <h3 className="mb-3 font-display text-xl font-extrabold tracking-[-0.03em] text-brand-navy-950 md:text-2xl">{st2wContent.whoIsItFor.heading}</h3>
              <p className="text-base leading-relaxed text-brand-navy-800/85 mb-3">{st2wContent.whoIsItFor.body}</p>
              <p className="text-sm font-semibold leading-relaxed text-brand-navy-950">{st2wContent.whoIsItFor.closing}</p>
            </div>
          </div>
          <div data-reveal className="mt-8 text-center">
            <p className="inline-flex items-center gap-2 text-sm italic text-brand-navy-600/60">
              <Quote className="h-3.5 w-3.5" />
              {quote.text} <span className="not-italic font-medium text-brand-navy-600/40">— {quote.author}</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
