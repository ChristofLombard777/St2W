"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { st2wContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { Check, Sparkles, TrendingUp, Users, Wallet } from "lucide-react";

const anotherIncomeIcons = [TrendingUp, Users, Wallet, Sparkles];

export default function St2WHowItWorks() {
  const revealRef = useRevealOnScroll();

  return (
    <section
      id="how-it-works"
      className="relative py-20 md:py-32 overflow-hidden"
      ref={revealRef}
      style={{
        background: "linear-gradient(135deg, #020d1f 0%, #031428 40%, #061c35 70%, #020d1f 100%)"
      }}
    >
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-sky-400/5 blur-[80px]" />
      </div>

      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <Container className="relative z-10">
        <div data-reveal className="mb-14 md:mb-20">
          <SectionHeading
            title={st2wContent.howItWorks.heading}
            align="center"
            className="[&_h2]:text-white"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mb-12">

          {/* Steps to Start — glass cards */}
          <div data-reveal>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
              <h3 className="text-base font-bold font-display uppercase tracking-[0.18em] text-sky-400">Steps to Start</h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-sky-500/40 to-transparent" />
            </div>
            <ul className="space-y-4">
              {st2wContent.howItWorks.steps.map((step, idx) => (
                <li
                  key={idx}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 transition-all duration-300 hover:border-sky-400/30 hover:bg-white/8 hover:-translate-y-0.5"
                  style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-bold font-display text-sm text-white transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, rgba(56,189,248,0.35) 0%, rgba(14,165,233,0.2) 100%)",
                      border: "1px solid rgba(56,189,248,0.4)",
                      boxShadow: "0 0 16px rgba(56,189,248,0.2)"
                    }}
                  >
                    {idx + 1}
                  </div>
                  <span className="text-base font-medium text-white/85 leading-relaxed mt-1">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Success System — premium glass card */}
          <div data-reveal>
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
              <h3 className="text-base font-bold font-display uppercase tracking-[0.18em] text-sky-400">{st2wContent.successSystem.heading}</h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-sky-500/40 to-transparent" />
            </div>
            <div
              className="rounded-2xl border border-white/12 bg-white/6 backdrop-blur-2xl p-6"
              style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.2)" }}
            >
              <ul className="space-y-4">
                {st2wContent.successSystem.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full mt-0.5"
                      style={{
                        background: "linear-gradient(135deg, rgba(56,189,248,0.3) 0%, rgba(14,165,233,0.15) 100%)",
                        border: "1px solid rgba(56,189,248,0.4)"
                      }}
                    >
                      <Check className="h-3.5 w-3.5 text-sky-300" />
                    </div>
                    <span className="text-base font-medium text-white/85 leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Another Income Stream — wide glass hero card */}
        <div
          data-reveal
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/12 bg-white/6 backdrop-blur-2xl p-8 md:p-12"
          style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)" }}
        >
          {/* Internal glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sky-500/12 blur-[60px]" />
          <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-blue-600/10 blur-[50px]" />

          <div className="mb-8 flex items-center gap-4">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(56,189,248,0.3) 0%, rgba(14,165,233,0.15) 100%)",
                border: "1px solid rgba(56,189,248,0.4)",
                boxShadow: "0 0 24px rgba(56,189,248,0.2)"
              }}
            >
              <TrendingUp className="h-6 w-6 text-sky-300" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-display text-white tracking-tight">
              {st2wContent.anotherIncome.heading}
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 relative z-10">
            {st2wContent.anotherIncome.bullets.map((bullet, idx) => {
              const Icon = anotherIncomeIcons[idx % anotherIncomeIcons.length];
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/4 px-4 py-3 transition-all duration-300 hover:border-sky-400/25 hover:bg-white/7"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
                >
                  <Icon className="h-5 w-5 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-base font-semibold text-white/85">
                    {bullet}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
