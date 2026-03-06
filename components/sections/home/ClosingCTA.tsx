"use client";

import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { homeContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export default function ClosingCTA() {
  const revealRef = useRevealOnScroll();

  return (
    <section className="py-24 bg-brand-mist-50" ref={revealRef}>
      <Container>
        <div
          data-reveal
          className="rounded-xl2 border border-brand-gold-500/40 bg-brand-white p-8 md:p-16 lg:p-24 text-center max-w-4xl mx-auto"
          style={{ boxShadow: '0 0 0 1px rgba(212,175,90,0.12), 0 20px 60px rgba(2,34,72,0.1), 0 0 40px rgba(212,175,90,0.08)' }}
        >
          <SectionHeading
            title={homeContent.closing.heading}
            subtitle={homeContent.closing.subheading}
            align="center"
          />
          <p className="mt-6 mx-auto max-w-2xl text-lg text-brand-slate-500 leading-relaxed mb-10">
            {homeContent.closing.body}
          </p>
          <div className="flex justify-center flex-col sm:flex-row gap-4">
            <Button href={homeContent.closing.cta.href} variant="primary">
              {homeContent.closing.cta.label}
            </Button>
            <Button href="/st2w" variant="outline">
              Learn about St2W
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
