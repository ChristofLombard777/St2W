"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Globe } from "@/components/ui/CSSGlobe";
import Image from "next/image";
import { st2wContent } from "@/lib/content";
import { Coins, BookOpen, CreditCard, PlayCircle } from "lucide-react";

const railIcons = [Coins, BookOpen, CreditCard, PlayCircle];

export default function HeroCinematic() {
  const logoRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const els: Array<{ el: HTMLElement; delay: number }> = [];

    if (logoRef.current) els.push({ el: logoRef.current, delay: 0 });
    wordsRef.current.forEach((el, i) => { if (el) els.push({ el, delay: 120 + i * 90 }); });
    if (subRef.current) els.push({ el: subRef.current, delay: 120 + wordsRef.current.length * 90 + 80 });
    if (ctaRef.current) els.push({ el: ctaRef.current, delay: 120 + wordsRef.current.length * 90 + 200 });

    els.forEach(({ el, delay }) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(22px)";
      el.style.filter = "blur(4px)";
    });

    els.forEach(({ el, delay }) => {
      setTimeout(() => {
        el.style.transition =
          "opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1), filter 0.75s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        el.style.filter = "blur(0)";
      }, delay);
    });

    const icons = iconsRef.current?.querySelectorAll<HTMLElement>("[data-hero-icon]");
    icons?.forEach((el, i) => {
      el.style.opacity = "0";
      el.style.transform = "translateX(20px)";
      setTimeout(() => {
        el.style.transition =
          "opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1)";
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
      }, 500 + i * 100);
    });
  }, []);

  const titleWords = st2wContent.hero.title.split(" ");

  return (
    <section className="relative min-h-[100svh] w-full bg-brand-navy-950 flex flex-col justify-center overflow-hidden">

      {/* Dot-grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Radial ambient glow — richer gold */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 68% 50%, rgba(200,168,75,0.12) 0%, transparent 65%), radial-gradient(ellipse 45% 45% at 18% 42%, rgba(2,34,72,0.7) 0%, transparent 80%), radial-gradient(ellipse 30% 30% at 50% 80%, rgba(212,169,60,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Globe — right half */}
      <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-[-25%] sm:right-[-20%] md:right-[-10%] lg:right-[-5%] w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] md:w-[560px] md:h-[560px] lg:w-[700px] lg:h-[700px]">
        <Globe />
      </div>

      {/* Fade edge left of globe */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[70%] sm:w-[60%] lg:w-[55%] bg-gradient-to-r from-brand-navy-950 via-brand-navy-950/90 to-transparent" />

      {/* Content */}
      <Container className="relative z-10 w-full py-24 sm:py-28 lg:py-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-center justify-between w-full">

          {/* Left: brand + text */}
          <div className="max-w-2xl text-brand-white">

            {/* Logo mark + eyebrow row */}
            <div ref={logoRef} className="mb-6 flex items-center gap-3">
              <Image
                src="/logos/St2W Logo.png"
                alt="St2W Logo"
                width={80}
                height={80}
                className="object-contain drop-shadow-[0_0_12px_rgba(212,169,60,0.4)] w-16 h-16 sm:w-20 sm:h-20"
                priority
              />
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold tracking-[0.3em] text-brand-gold-500 uppercase gold-glow">
                  Short-Term to Wealth
                </span>
                <span className="text-[10px] font-medium tracking-[0.15em] text-brand-white/40 uppercase mt-0.5">
                  An easy pathway to financial increase
                </span>
              </div>
            </div>

            {/* Headline — word-by-word reveal */}
            <h1 className="mb-5 text-3xl font-black leading-[1.06] tracking-[-0.02em] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem]">
              {titleWords.map((word, i) => {
                const isHighlight = word.toLowerCase().includes("st2w");
                return (
                  <span key={i} className="inline-block mr-[0.25em]">
                    <span
                      ref={(el) => { if (el) wordsRef.current[i] = el; }}
                      className={
                        isHighlight
                          ? "inline-block text-gradient-gold"
                          : "inline-block"
                      }
                    >
                      {word}
                    </span>
                  </span>
                );
              })}
            </h1>

            {/* Subtitle */}
            <p
              ref={subRef}
              className="mb-7 max-w-lg text-sm sm:text-base text-brand-mist-50/65 md:text-lg leading-[1.75] tracking-wide"
            >
              {st2wContent.hero.subtitle}
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
              <Button href={st2wContent.hero.ctaPrimary.href} variant="secondary" className="h-12 px-7 text-sm font-bold tracking-wide">
                {st2wContent.hero.ctaPrimary.label}
              </Button>
              <Button
                href={st2wContent.hero.ctaSecondary.href}
                variant="outline"
                className="h-12 px-7 border-brand-gold-500/50 text-brand-white hover:bg-brand-gold-600 hover:border-brand-gold-500 hover:text-brand-navy-950 hover:shadow-glow"
              >
                {st2wContent.hero.ctaSecondary.label}
              </Button>
            </div>
          </div>

          {/* Right: rail labels */}
          <div ref={iconsRef} className="grid grid-cols-2 sm:flex sm:flex-row lg:flex-col gap-2 sm:gap-3 lg:overflow-visible shrink-0">
            {st2wContent.hero.railLabels.map((label, idx) => {
              const Icon = railIcons[idx] || Coins;
              return (
                <div
                  key={label}
                  data-hero-icon
                  className="group flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-brand-white/8 bg-brand-navy-900/40 px-3 sm:px-5 py-2.5 sm:py-3.5 backdrop-blur-md transition-all duration-300 hover:border-brand-gold-500/50 hover:bg-brand-navy-800/70 cursor-default"
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-gold-600/15 text-brand-gold-500 transition-all duration-300 group-hover:bg-brand-gold-600/25"
                    style={{ boxShadow: "0 0 14px rgba(212,169,60,0.3)" }}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-brand-white/85 tracking-wider uppercase whitespace-nowrap">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </Container>

      {/* Bottom gradient bleed */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-brand-navy-950 to-transparent" />
    </section>
  );
}
