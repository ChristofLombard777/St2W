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
    <section id="fees" className="py-14 md:py-24 bg-brand-mist-50 border-y border-brand-line" ref={revealRef}>
      <Container>
        <div data-reveal className="mb-8 md:mb-12">
          <SectionHeading title={fees.heading} align="center" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">

          <div data-reveal>
            {/* Mobile cards */}
            <div className="sm:hidden grid gap-3 mb-6">
              {fees.standardRows.map((row) => (
                <div key={row.plan} className="rounded-xl border border-brand-line bg-brand-white p-4 shadow-sm">
                  <div className="font-bold text-brand-navy-950 mb-2">{row.plan}</div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-slate-500">Setup: <span className="font-semibold text-brand-navy-950">{row.setup}</span></span>
                    <span className="text-brand-slate-500">Buy-up: <span className="font-semibold">{row.buyUp}</span></span>
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop table */}
            <div className="hidden sm:block overflow-x-auto pb-4">
              <div className="min-w-[440px] rounded-xl border border-brand-line bg-brand-white shadow-sm overflow-hidden">
                <div className="grid grid-cols-3 bg-brand-gold-600/10 text-brand-navy-950 font-bold p-4 border-b border-brand-gold-600/20">
                  <div>Plan</div>
                  <div>Setup Fee</div>
                  <div>Buy-up Fee</div>
                </div>
                {fees.standardRows.map((row) => (
                  <div key={row.plan} className="grid grid-cols-3 p-4 border-b border-brand-line last:border-0 font-medium">
                    <div className="text-brand-navy-950 font-bold">{row.plan}</div>
                    <div className="text-brand-slate-500">{row.setup}</div>
                    <div className="text-brand-slate-500 text-sm">{row.buyUp}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div data-reveal className="grid sm:grid-cols-2 gap-6">
            {fees.specialFees.map((fee, idx) => (
              <div key={idx} className="bg-brand-navy-950 text-brand-white p-6 rounded-2xl shadow-soft">
                <h4 className="font-bold text-brand-gold-600 mb-2">{fee.plan}</h4>
                <div className="text-2xl font-bold mb-1">{fee.fee}</div>
                <div className="text-sm font-medium text-brand-mist-100/60 uppercase tracking-widest">{fee.note}</div>
              </div>
            ))}
          </div>

          <div data-reveal className="flex items-center justify-center gap-3 mt-8 bg-brand-white py-4 rounded-xl shadow-sm font-bold text-lg text-brand-navy-900">
            <DollarSign className="h-6 w-6 text-brand-gold-600" />
            {fees.noMonthly}
          </div>

        </div>
      </Container>
    </section>
  );
}
