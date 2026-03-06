"use client";

import { ensureGsap } from "./gsapClient";

export function buildHeroTimeline(args: {
  root: HTMLElement;
  objectEl: HTMLElement;
  hazeEl: HTMLElement;
  textEl: HTMLElement;
  iconEls: HTMLElement[];
}) {
  const gsap = ensureGsap();

  const tl = gsap.timeline();
  tl.fromTo(
    args.textEl,
    { autoAlpha: 0, y: 10 },
    { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
    0.05
  );

  tl.fromTo(
    args.objectEl,
    { scale: 1, y: 0 },
    { scale: 1.08, y: -30, duration: 1, ease: "none" },
    0
  );

  tl.fromTo(
    args.hazeEl,
    { y: 0, autoAlpha: 0.30 },
    { y: 20, autoAlpha: 0.45, duration: 1, ease: "none" },
    0
  );

  if (args.iconEls.length) {
    tl.fromTo(
      args.iconEls,
      { autoAlpha: 0, y: 8 },
      { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.08 },
      0.15
    );
  }

  return tl;
}
