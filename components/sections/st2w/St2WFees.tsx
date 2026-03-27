"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { st2wContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { DollarSign } from "lucide-react";

export default function St2WFees() {
  const revealRef = useRevealOnScroll();
  const { fees } = st2wContent;

  return (
    <section id="fees" className="py-14 md:py-24 bg-brand-navy-950" ref={revealRef}>
      <Container>
        <div data-reveal className="mb-8 md:mb-12">
          <SectionHeading title={fees.heading} align="center" className="[&_h2]:text-white" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">

          <div data-reveal>
            {/* Mobile cards */}
            <div className="sm:hidden grid gap-3 mb-6">
              {fees.standardRows.map((row) => (
                <div key={row.plan} className="shine-card rounded-xl p-4" style={{ '--card-bg': '#0B1E38' } as React.CSSProperties}>
                  <div className="mb-2 font-bold font-display text-white">{row.plan}</div>
                  <div className="flex justify-between text-base">
                    <span className="text-brand-mist-50/70">Setup: <span className="font-semibold text-brand-mist-50">{row.setup}</span></span>
                    <span className="text-brand-mist-50/70">Buy-up: <span className="font-semibold text-brand-mist-50">{row.buyUp}</span></span>
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop table */}
            <div className="hidden sm:block overflow-x-auto pb-4">
              <div className="shine-card min-w-[440px] overflow-hidden rounded-xl" style={{ '--card-bg': '#0B1E38' } as React.CSSProperties}>
                <div className="grid grid-cols-3 border-b border-white/10 bg-white/8 p-4 font-bold font-display text-white">
                  <div>Plan</div>
                  <div>Setup Fee</div>
                  <div>Buy-up Fee</div>
                </div>
                {fees.standardRows.map((row) => (
                  <div key={row.plan} className="grid grid-cols-3 border-b border-white/8 p-4 font-medium transition-colors hover:bg-white/5 last:border-0">
                    <div className="text-lg font-bold font-display text-white">{row.plan}</div>
                    <div className="text-base text-brand-mist-50/75">{row.setup}</div>
                    <div className="text-base text-brand-mist-50/75">{row.buyUp}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div data-reveal className="grid sm:grid-cols-2 gap-6">
            {fees.specialFees.map((fee, idx) => (
              <div key={idx} className="shine-card rounded-2xl p-6 text-white" style={{ '--card-bg': '#022248' } as React.CSSProperties}>
                <h4 className="font-bold font-display text-sky-400 mb-2">{fee.plan}</h4>
                <div className="text-2xl font-bold font-display mb-1">{fee.fee}</div>
                <div className="text-sm font-medium text-brand-mist-100/60 uppercase tracking-widest">{fee.note}</div>
              </div>
            ))}
          </div>

          <div data-reveal className="shine-card mt-8 flex items-center justify-center gap-3 rounded-xl py-4 text-lg font-bold font-display text-white" style={{ '--card-bg': '#0B1E38' } as React.CSSProperties}>
            <DollarSign className="h-6 w-6 text-sky-400" />
            {fees.noMonthly}
          </div>

        </div>
      </Container>
    </section>
  );
}
