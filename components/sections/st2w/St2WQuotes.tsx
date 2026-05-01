"use client";

import Container from "@/components/ui/Container";
import { st2wContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { Quote } from "lucide-react";

export default function St2WQuotes() {
  const revealRef = useRevealOnScroll();

  return (
    <section
      className="relative overflow-hidden py-14 md:py-20"
      ref={revealRef}
      style={{ background: "linear-gradient(135deg, #020d1f 0%, #061c3a 50%, #022248 100%)" }}
    >
      {/* Depth blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-gold-500/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-sky-500/5 blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div data-reveal className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {st2wContent.quotes.map((q, idx) => (
              <div
                key={idx}
                className="glass-step group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold-500/30"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)" }}
              >
                <Quote className="mb-4 h-7 w-7 text-brand-gold-500/60" />
                <p className="mb-5 text-lg font-medium leading-relaxed text-white/90">
                  &ldquo;{q.text}&rdquo;
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  <span className="text-sm font-semibold text-brand-gold-400 tracking-wide">
                    {q.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
