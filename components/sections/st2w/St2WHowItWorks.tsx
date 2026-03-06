"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { st2wContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { Check, ArrowRight } from "lucide-react";

export default function St2WHowItWorks() {
  const revealRef = useRevealOnScroll();

  return (
    <section id="how-it-works" className="py-14 md:py-24 bg-brand-navy-950 text-brand-white" ref={revealRef}>
      <Container>
        <div data-reveal className="mb-10 md:mb-16">
          <SectionHeading
            title={st2wContent.howItWorks.heading}
            align="center"
            className="text-brand-white"
          />
        </div>

        <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto mb-20">
          {/* How to earn */}
          <div data-reveal className="space-y-8">
            <h3 className="text-xl md:text-2xl font-bold text-brand-gold-600 mb-4 md:mb-6 border-b border-brand-navy-800 pb-4">Steps to Start</h3>
            <ul className="space-y-6">
              {st2wContent.howItWorks.steps.map((step, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-navy-900 font-bold text-brand-gold-600 border border-brand-gold-600/30">
                    {idx + 1}
                  </div>
                  <span className="text-lg font-medium text-brand-mist-50/90 tracking-wide mt-1">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Success System */}
          <div data-reveal className="space-y-8">
            <h3 className="text-xl md:text-2xl font-bold text-brand-gold-600 mb-4 md:mb-6 border-b border-brand-navy-800 pb-4">
              {st2wContent.successSystem.heading}
            </h3>
            <ul className="space-y-4 bg-brand-navy-900/50 p-6 rounded-2xl border border-brand-navy-800">
              {st2wContent.successSystem.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-brand-gold-600 shrink-0 mt-0.5" />
                  <span className="text-brand-mist-100/80 font-medium">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Another Income Stream */}
        <div data-reveal className="bg-brand-mist-50 rounded-2xl p-6 sm:p-8 md:p-12 text-brand-navy-950 max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 bg-brand-gold-600/10 rounded-full blur-3xl mix-blend-multiply"></div>

          <h3 className="text-2xl md:text-3xl font-bold mb-5 md:mb-8">
            {st2wContent.anotherIncome.heading}
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {st2wContent.anotherIncome.bullets.map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <ArrowRight className="h-5 w-5 text-brand-gold-600 shrink-0" />
                <span className="font-semibold text-brand-slate-500">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
