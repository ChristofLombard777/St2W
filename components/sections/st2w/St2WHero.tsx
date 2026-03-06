"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { st2wContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { Coins, BookOpen, CreditCard, PlayCircle } from "lucide-react";

export default function St2WHero() {
  const revealRef = useRevealOnScroll();
  const icons = [Coins, BookOpen, CreditCard, PlayCircle];

  return (
    <section className="relative min-h-[90svh] w-full bg-brand-navy-950 flex flex-col justify-center pt-32 pb-16" ref={revealRef}>
      {/* Background Graphic */}
      <div
        className="absolute inset-x-0 bottom-0 top-0 h-full w-full opacity-40 mix-blend-screen"
        style={{
          background: "radial-gradient(circle at center pb-20, rgba(160,142,89,0.3) 0%, rgba(2,34,72,1) 70%)"
        }}
      />

      <Container className="relative z-10 w-full text-center">
        <div data-reveal className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="mb-6 inline-flex items-center justify-center rounded-full bg-brand-gold-600/20 px-4 py-1.5 text-sm font-semibold tracking-widest text-brand-gold-600 uppercase">
            {st2wContent.hero.eyebrow}
          </span>
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl text-brand-white">
            {st2wContent.hero.title}
          </h1>
          <p className="mb-10 max-w-2xl text-xl text-brand-mist-50/90 font-medium">
            {st2wContent.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto mb-16">
            <Button href={st2wContent.hero.ctaPrimary.href} variant="secondary" className="w-full sm:w-auto h-14 px-8 text-lg font-bold">
              {st2wContent.hero.ctaPrimary.label}
            </Button>
            <div className="flex flex-col items-center gap-2">
              <Button href={st2wContent.hero.ctaSecondary.href} variant="outline" className="w-full sm:w-auto border-brand-gold-600 text-brand-white hover:bg-brand-gold-600 hover:text-brand-navy-950">
                {st2wContent.hero.ctaSecondary.label}
              </Button>
              <span className="text-sm tracking-wide text-brand-mist-50/60 font-medium">
                {st2wContent.hero.extraLine}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-3xl">
            {st2wContent.hero.railLabels.map((label, idx) => {
              const Icon = icons[idx] || Coins;
              return (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-brand-navy-800 bg-brand-navy-900/50 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1 hover:border-brand-gold-600/50"
                >
                  <Icon className="h-8 w-8 text-brand-gold-600" />
                  <span className="text-sm font-semibold tracking-wide text-brand-white uppercase">
                    {label}
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
