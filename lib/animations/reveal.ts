"use client";

import { gsap, ScrollTrigger } from "./gsapClient";

export function createRevealBatch(selector: string) {
  ScrollTrigger.batch(selector, {
    start: "top 85%",
    once: true,
    onEnter: (batch) => {
      gsap.fromTo(
        batch,
        { autoAlpha: 0, y: 12 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    },
  });
}
