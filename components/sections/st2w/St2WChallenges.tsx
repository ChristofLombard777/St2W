"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { st2wContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { TrendingDown, ShieldOff, AlertTriangle, Users } from "lucide-react";

const CARD_ICONS = [TrendingDown, ShieldOff, AlertTriangle, Users];

const CARD_ACCENTS = [
  { color: "rgba(251,113,133,1)", glow: "rgba(251,113,133,0.25)", bg: "rgba(251,113,133,0.12)", border: "rgba(251,113,133,0.3)" },
  { color: "rgba(251,191,36,1)",  glow: "rgba(251,191,36,0.25)",  bg: "rgba(251,191,36,0.10)",  border: "rgba(251,191,36,0.3)" },
  { color: "rgba(248,113,113,1)", glow: "rgba(248,113,113,0.25)", bg: "rgba(248,113,113,0.12)", border: "rgba(248,113,113,0.3)" },
  { color: "rgba(253,186,116,1)", glow: "rgba(253,186,116,0.25)", bg: "rgba(253,186,116,0.10)", border: "rgba(253,186,116,0.3)" },
];

export default function St2WChallenges() {
  const revealRef = useRevealOnScroll();

  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden"
      ref={revealRef}
      style={{ background: "linear-gradient(160deg, #0d1f3c 0%, #112444 35%, #0e1e3a 65%, #162a4e 100%)" }}
    >
      {/* Warm glow blobs — convey urgency/problems */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-rose-600/12 blur-[110px]" />
        <div className="absolute top-1/2 -right-20 w-[350px] h-[350px] rounded-full bg-amber-500/10 blur-[90px]" />
        <div className="absolute -bottom-20 left-1/3 w-[300px] h-[300px] rounded-full bg-orange-600/8 blur-[80px]" />
      </div>

      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Large faint background "!" */}
      <div
        className="pointer-events-none absolute right-[8%] top-1/2 -translate-y-1/2 select-none font-display font-black text-[20rem] leading-none text-white/[0.018] hidden lg:block"
        aria-hidden
      >
        !
      </div>

      <Container className="relative z-10">
        <div data-reveal className="mb-14 md:mb-20">
          <SectionHeading
            title={st2wContent.challenges.heading}
            align="center"
            headingClass="heading-gradient-white"
          />
          <p className="mt-3 text-center text-base text-white/45 font-medium tracking-wide">
            The financial reality most South Africans face every day
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 max-w-5xl mx-auto">
          {st2wContent.challenges.items.map((item, idx) => {
            const accent = CARD_ACCENTS[idx % CARD_ACCENTS.length];
            const Icon = CARD_ICONS[idx % CARD_ICONS.length];
            return (
              <div
                data-reveal
                key={idx}
                className="group relative overflow-hidden rounded-2xl border backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                style={{
                  background: `linear-gradient(135deg, ${accent.bg.replace('0.12','0.18')} 0%, rgba(255,255,255,0.04) 100%)`,
                  borderColor: accent.border.replace('0.3','0.2'),
                  boxShadow: `0 8px 32px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 0 1px ${accent.border.replace('0.3','0.08')}`
                }}
              >
                {/* Hover accent glow in corner */}
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{ background: accent.glow }}
                />

                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: accent.color }}
                />

                <div className="flex items-start gap-4 pl-3">
                  {/* Icon badge */}
                  <div
                    className="shrink-0 mt-0.5 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: accent.bg,
                      border: `1px solid ${accent.border}`,
                      boxShadow: `0 4px 16px ${accent.glow}`
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: accent.color }} />
                  </div>

                  <p className="text-base font-medium leading-relaxed text-white/80 md:text-lg group-hover:text-white/95 transition-colors duration-200">
                    {item}
                  </p>
                </div>

                {/* Bottom shimmer line on hover */}
                <div
                  className="absolute bottom-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${accent.color}, transparent)` }}
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
