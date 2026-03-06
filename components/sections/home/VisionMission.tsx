"use client";

import Container from "@/components/ui/Container";
import { homeContent } from "@/lib/content";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { Eye, HandHeart } from "lucide-react";

export default function VisionMission() {
  const revealRef = useRevealOnScroll();

  return (
    <section className="py-24 bg-brand-white relative overflow-hidden" ref={revealRef}>
      <div className="absolute inset-0 bg-brand-navy-950/5 skew-y-3 origin-bottom-left -z-10 transform scale-110"></div>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          <div data-reveal className="space-y-5" style={{ transitionDelay: "0ms" }}>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-navy-900 text-brand-gold-600">
              <Eye className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-brand-navy-950 md:text-4xl leading-[1.1]">Our Vision</h2>
            <p className="text-lg text-brand-slate-500 leading-relaxed max-w-lg">
              &quot;{homeContent.visionMission.vision}&quot;
            </p>
          </div>

          <div data-reveal className="space-y-5" style={{ transitionDelay: "120ms" }}>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-gold-600 text-brand-navy-950">
              <HandHeart className="h-7 w-7" />
            </div>
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-brand-navy-950 md:text-4xl leading-[1.1]">Our Mission</h2>
            <p className="text-lg text-brand-slate-500 leading-relaxed max-w-lg">
              &quot;{homeContent.visionMission.mission}&quot;
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}
