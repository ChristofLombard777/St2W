"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { st2wContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { Info } from "lucide-react";

export default function St2WEarnings() {
  const revealRef = useRevealOnScroll();
  const { earnings } = st2wContent;

  return (
    <section id="earnings" className="py-14 md:py-24 bg-brand-white" ref={revealRef}>
      <Container>
        <div data-reveal className="mb-8 md:mb-12">
          <SectionHeading title={earnings.heading} align="center" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Intro points */}
          <div data-reveal className="mb-8 md:mb-12 grid gap-3 bg-brand-mist-50 p-5 sm:p-8 rounded-2xl border border-brand-line">
            {earnings.bullets.map((bullet, idx) => (
              <p key={idx} className="text-sm sm:text-lg text-brand-navy-900 font-medium leading-relaxed">
                • {bullet}
              </p>
            ))}
          </div>

          {/* Standard Plans — card grid on mobile, table on sm+ */}
          <div data-reveal className="mb-8 md:mb-10">
            {/* Mobile cards */}
            <div className="sm:hidden grid gap-3">
              {earnings.standardPlan.map((plan) => (
                <div key={plan.name} className="rounded-xl border border-brand-line bg-brand-mist-50 p-4">
                  <div className="font-bold text-brand-navy-950 mb-2">{plan.name}</div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-slate-500">Base: <span className="font-semibold">{plan.base}</span></span>
                    <span className="text-brand-gold-700">Buy-up: <span className="font-semibold">{plan.buyUp}</span></span>
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop table */}
            <div className="hidden sm:block overflow-x-auto pb-4">
              <div className="min-w-[500px] rounded-xl border border-brand-line overflow-hidden">
                <div className="grid grid-cols-3 bg-brand-navy-950 text-brand-white font-bold p-4">
                  <div>Plan Level</div>
                  <div>Base Earnings</div>
                  <div>With Optional Buy-up</div>
                </div>
                {earnings.standardPlan.map((plan, idx) => (
                  <div
                    key={plan.name}
                    className={`grid grid-cols-3 p-4 border-b border-brand-line last:border-0 font-medium transition-colors hover:bg-brand-mist-50 ${idx % 2 === 0 ? "bg-white" : "bg-brand-mist-50/50"}`}
                  >
                    <div className="text-brand-navy-950 font-bold">{plan.name}</div>
                    <div className="text-brand-slate-500">{plan.base}</div>
                    <div className="text-brand-gold-700">{plan.buyUp}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Special Plans / Notes */}
          <div data-reveal className="grid sm:grid-cols-2 gap-6">
            {earnings.specialNotes.map((note, idx) => (
              <div key={idx} className="bg-brand-navy-50 border-l-4 border-brand-gold-600 p-6 rounded-r-xl shadow-sm">
                <h4 className="flex items-center gap-2 font-bold text-brand-navy-950 mb-2">
                  <Info className="h-5 w-5 text-brand-gold-600" />
                  {note.plan}
                </h4>
                <p className="text-brand-slate-500 font-medium leading-snug">
                  {note.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
