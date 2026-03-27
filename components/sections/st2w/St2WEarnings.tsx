"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { st2wContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { Sparkles, Star, TrendingUp } from "lucide-react";

const PLAN_GRADIENTS = [
  "linear-gradient(135deg,#6ee7f7,#38bdf8)",
  "linear-gradient(135deg,#93c5fd,#6366f1)",
  "linear-gradient(135deg,#34d399,#059669)",
  "linear-gradient(135deg,#fbbf24,#f59e0b)",
  "linear-gradient(135deg,#f472b6,#ec4899)",
  "linear-gradient(135deg,#a78bfa,#7c3aed)",
];

export default function St2WEarnings() {
  const revealRef = useRevealOnScroll();
  const { earnings } = st2wContent;

  return (
    <section
      id="earnings"
      className="relative py-20 md:py-32 overflow-hidden"
      ref={revealRef}
      style={{ background: "#e8edf8" }}
    >
      {/* Subtle noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <Container className="relative z-10">
        <div data-reveal className="mb-12 md:mb-16">
          <SectionHeading title={earnings.heading} align="center" className="[&_h2]:text-brand-navy-950" />
        </div>

        <div className="max-w-4xl mx-auto">

          {/* Intro bullets — neumorphic raised card */}
          <div
            data-reveal
            className="mb-10 rounded-3xl p-6 sm:p-8 md:mb-14"
            style={{
              background: "#e8edf8",
              boxShadow: "12px 12px 28px rgba(163,177,198,0.7), -12px -12px 28px rgba(255,255,255,0.95)"
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
                  boxShadow: "4px 4px 12px rgba(14,165,233,0.35), -2px -2px 6px rgba(255,255,255,0.6)"
                }}
              >
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-bold font-display text-brand-navy-950">How You Earn</h3>
            </div>
            <div className="grid gap-4">
              {earnings.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-2xl px-4 py-3 transition-all duration-200"
                  style={{
                    background: "#e8edf8",
                    boxShadow: "inset 4px 4px 10px rgba(163,177,198,0.5), inset -4px -4px 10px rgba(255,255,255,0.85)"
                  }}
                >
                  <div
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold font-display text-white"
                    style={{
                      background: PLAN_GRADIENTS[idx % PLAN_GRADIENTS.length],
                      boxShadow: "2px 2px 6px rgba(0,0,0,0.15)"
                    }}
                  >
                    {idx + 1}
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-brand-navy-800 sm:text-base">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Plans — mobile neumorphic cards */}
          <div data-reveal className="mb-8 md:mb-10">
            <div className="sm:hidden grid gap-4">
              {earnings.standardPlan.map((plan, idx) => (
                <div
                  key={plan.name}
                  className="flex items-center justify-between rounded-2xl px-5 py-4"
                  style={{
                    background: "#e8edf8",
                    boxShadow: "8px 8px 20px rgba(163,177,198,0.65), -8px -8px 20px rgba(255,255,255,0.9)"
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ background: PLAN_GRADIENTS[idx % PLAN_GRADIENTS.length], boxShadow: "0 0 8px rgba(0,0,0,0.2)" }}
                    />
                    <div className="font-bold font-display text-brand-navy-950">{plan.name}</div>
                  </div>
                  <div className="text-right text-sm">
                    <div className="text-brand-navy-800/65 text-xs">{plan.base}</div>
                    <div
                      className="font-bold text-sm px-2 py-0.5 rounded-full text-white mt-0.5"
                      style={{ background: PLAN_GRADIENTS[idx % PLAN_GRADIENTS.length] }}
                    >
                      {plan.buyUp}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop neumorphic table */}
            <div className="hidden sm:block">
              <div
                className="shine-card overflow-hidden rounded-3xl"
                style={{
                  '--card-bg': '#e8edf8',
                  background: "#e8edf8",
                  boxShadow: "16px 16px 36px rgba(163,177,198,0.7), -16px -16px 36px rgba(255,255,255,0.95)"
                } as React.CSSProperties}
              >
                {/* Header */}
                <div
                  className="grid grid-cols-3 p-5 font-bold font-display text-white"
                  style={{ background: "linear-gradient(135deg, #022248 0%, #0a2a50 100%)" }}
                >
                  <div className="text-sm uppercase tracking-wider">Plan Level</div>
                  <div className="text-sm uppercase tracking-wider">Base Earnings</div>
                  <div className="text-sm uppercase tracking-wider">With Buy-up</div>
                </div>
                {/* Rows */}
                {earnings.standardPlan.map((plan, idx) => (
                  <div
                    key={plan.name}
                    className="grid grid-cols-3 items-center border-b border-[#d0d8e8]/60 px-5 py-4 last:border-0 transition-all duration-200 hover:bg-white/40 group"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="h-2.5 w-2.5 rounded-full transition-transform duration-200 group-hover:scale-150"
                        style={{
                          background: PLAN_GRADIENTS[idx % PLAN_GRADIENTS.length],
                          boxShadow: `0 0 8px rgba(0,0,0,0.18)`
                        }}
                      />
                      <span className="text-base font-bold font-display text-brand-navy-950">{plan.name}</span>
                    </div>
                    <div className="text-base text-brand-navy-800/70">{plan.base}</div>
                    <div>
                      <span
                        className="inline-block rounded-full px-3 py-1 text-sm font-bold text-white"
                        style={{ background: PLAN_GRADIENTS[idx % PLAN_GRADIENTS.length], boxShadow: "2px 2px 8px rgba(0,0,0,0.15)" }}
                      >
                        {plan.buyUp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Special notes — neumorphic raised cards with gradient accent */}
          <div data-reveal className="grid sm:grid-cols-2 gap-6">
            {earnings.specialNotes.map((note, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-3xl p-6"
                style={{
                  background: "#e8edf8",
                  boxShadow: "10px 10px 24px rgba(163,177,198,0.65), -10px -10px 24px rgba(255,255,255,0.9)"
                }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                  style={{ background: PLAN_GRADIENTS[(idx + 4) % PLAN_GRADIENTS.length] }}
                />
                <div className="mb-3 mt-2 flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-xl"
                    style={{
                      background: PLAN_GRADIENTS[(idx + 4) % PLAN_GRADIENTS.length],
                      boxShadow: "3px 3px 10px rgba(0,0,0,0.15), -1px -1px 4px rgba(255,255,255,0.4)"
                    }}
                  >
                    {idx === 1 ? <Star className="h-4 w-4 text-white" /> : <Sparkles className="h-4 w-4 text-white" />}
                  </div>
                  <h4 className="font-bold font-display text-brand-navy-950">{note.plan}</h4>
                </div>
                <div
                  className="rounded-2xl px-4 py-3"
                  style={{
                    background: "#e8edf8",
                    boxShadow: "inset 4px 4px 10px rgba(163,177,198,0.5), inset -4px -4px 10px rgba(255,255,255,0.85)"
                  }}
                >
                  <p className="text-sm font-medium leading-relaxed text-brand-navy-800/80">
                    {note.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
