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
  const showGlobe = false;
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
    <section className="relative min-h-[100svh] w-full flex flex-col justify-center overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover brightness-[0.74] saturate-[0.9]"
          priority
        />
      </div>

      <div className="absolute inset-0 z-[1] bg-brand-navy-950/36" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-brand-navy-950/62 via-brand-navy-950/28 to-brand-navy-950/48" />

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
            "radial-gradient(ellipse 65% 55% at 68% 50%, rgba(200,168,75,0.10) 0%, transparent 65%), radial-gradient(ellipse 30% 30% at 50% 80%, rgba(212,169,60,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Globe — right half */}
      {showGlobe && (
        <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-[-18%] sm:right-[-14%] md:right-[-8%] lg:right-[-2%] xl:right-[0%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[520px] md:h-[520px] lg:w-[620px] lg:h-[620px] xl:w-[660px] xl:h-[660px]">
          <Globe />
        </div>
      )}


      {/* Content */}
      <Container className="relative z-10 w-full py-24 sm:py-28 lg:py-0">
        <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-center justify-between w-full">

          {/* Left: brand + text */}
          <div className="max-w-2xl text-brand-white lg:max-w-[640px] lg:pr-20">
            <div className="rounded-[2rem] border border-brand-white/10 bg-brand-navy-950/34 px-5 py-6 shadow-[0_22px_80px_rgba(2,18,43,0.34)] backdrop-blur-md sm:px-7 sm:py-8 lg:px-8 lg:py-9">

            {/* Eyebrow */}
            <div ref={logoRef} className="mb-6 space-y-1.5">
              <p className="text-xs font-bold tracking-[0.22em] text-brand-gold-400 uppercase drop-shadow-[0_4px_14px_rgba(2,18,43,0.4)] sm:text-sm">
                Short-Term To Wealth
              </p>
              <p className="text-xs font-semibold tracking-[0.12em] text-brand-white/95 uppercase drop-shadow-[0_4px_14px_rgba(2,18,43,0.38)] sm:text-sm">
                An Easy Pathway To Financial Increase
              </p>
            </div>

            {/* Headline — word-by-word reveal */}
            <h1 className="mb-5 text-3xl font-black leading-[1.06] tracking-[-0.02em] drop-shadow-[0_10px_28px_rgba(2,18,43,0.35)] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.25rem]">
              {titleWords.map((word, i) => {
                const isHighlight = word.toLowerCase().includes("st2w");
                return (
                  <span key={i} className="inline-block mr-[0.25em]">
                    <span
                      ref={(el) => { if (el) wordsRef.current[i] = el; }}
                      className={
                        isHighlight
                          ? "inline-flex items-center rounded-full px-3 py-1.5 text-brand-navy-950 btn-gold shadow-[0_8px_24px_rgba(212,169,60,0.35)]"
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
              className="mb-7 max-w-lg text-sm text-brand-mist-50/88 drop-shadow-[0_6px_18px_rgba(2,18,43,0.28)] sm:text-base md:text-lg leading-[1.75] tracking-wide"
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
          </div>

          {/* Right: rail labels */}
          <div ref={iconsRef} className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:gap-3 lg:absolute lg:right-[22%] xl:right-[23%] lg:top-1/2 lg:z-20 lg:w-[240px] lg:-translate-y-1/2 lg:flex-col lg:gap-4">
            {st2wContent.hero.railLabels.map((label, idx) => {
              const Icon = railIcons[idx] || Coins;
              return (
                <div
                  key={label}
                  data-hero-icon
                  className="group flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-brand-white/16 bg-brand-navy-950/54 px-3 sm:px-5 py-2.5 sm:py-3.5 backdrop-blur-xl shadow-[0_22px_60px_rgba(2,18,43,0.34)] transition-all duration-300 hover:border-brand-gold-500/50 hover:bg-brand-navy-900/68 cursor-default lg:w-full"
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
