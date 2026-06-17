"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { st2wContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { Plus, Minus, MessageCircle } from "lucide-react";

export default function St2WFAQ() {
  const revealRef = useRevealOnScroll();
  const [open, setOpen] = useState<number | null>(0);
  const faqs = st2wContent.faq;

  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 bg-brand-navy-950"
      ref={revealRef}
    >
      {/* Subtle background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(192,169,109,1) 0%, transparent 70%)"
        }}
      />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div data-reveal className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-gold-500/60 mb-4">
              Common Questions
            </span>
            <h2 className="font-display text-3xl md:text-[2.6rem] font-extrabold tracking-[-0.04em] text-white leading-[1.08] mb-5">
              Got questions? We have answers.
            </h2>
            <p className="text-base text-brand-mist-50/50 max-w-md mx-auto leading-relaxed">
              Everything you need to know before getting started with St2W.
            </p>
          </div>

          {/* Accordion */}
          <div data-reveal className="space-y-3">
            {faqs.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: isOpen
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(255,255,255,0.03)",
                    border: isOpen
                      ? "1px solid rgba(192,169,109,0.2)"
                      : "1px solid rgba(255,255,255,0.06)"
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                    onClick={() => setOpen(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className={`font-display font-semibold text-[0.98rem] md:text-base leading-snug transition-colors duration-200 ${isOpen ? "text-white" : "text-brand-mist-50/80 group-hover:text-white"}`}>
                      {item.q}
                    </span>
                    <span
                      className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300"
                      style={{
                        background: isOpen
                          ? "linear-gradient(135deg, #D4AF5A, #E8C96A)"
                          : "rgba(255,255,255,0.08)"
                      }}
                    >
                      {isOpen
                        ? <Minus className="h-3.5 w-3.5 text-brand-navy-950" strokeWidth={2.5} />
                        : <Plus className="h-3.5 w-3.5 text-brand-mist-50/60" strokeWidth={2.5} />
                      }
                    </span>
                  </button>

                  {/* Answer panel */}
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: isOpen ? "400px" : "0px" }}
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px w-full bg-white/5 mb-5" />
                      <p className="text-[0.95rem] leading-[1.8] text-brand-mist-50/60">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div data-reveal className="mt-14 text-center">
            <p className="text-sm text-brand-mist-50/40 mb-5">
              Still have a question not answered above?
            </p>
            <a
              href="https://wa.me/27724688254"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 px-6 py-3 text-sm font-semibold text-[#25D366] transition-all duration-300 hover:bg-[#25D366]/20 hover:border-[#25D366]/40"
            >
              <MessageCircle className="h-4 w-4" />
              Ask us on WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
