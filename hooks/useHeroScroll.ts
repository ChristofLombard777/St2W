"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations/gsapClient";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import { useGSAP } from "@gsap/react";

export function useHeroScroll(isMobile: boolean) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    // Determine dynamically if should pin based on motion preferences and mobile layout
    if (prefersReducedMotion || !containerRef.current) return;

    const heroObject = containerRef.current.querySelector("[data-hero-object]");
    const hazeOverlay = containerRef.current.querySelector("[data-hero-haze]");
    const textBlock = containerRef.current.querySelector("[data-hero-text]");
    const iconRailItems = containerRef.current.querySelectorAll("[data-hero-icon]");

    if (!isMobile) {
      // Desktop signature scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=120%",
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Signature Scroll Logic
      tl.to(heroObject, { scale: 1.08, y: -30, ease: "none" }, 0)
        .to(hazeOverlay, { y: 20, opacity: 0.45, ease: "none" }, 0)

      // Ensure specific initial states
      gsap.set(textBlock, { opacity: 0, y: 10 });
      gsap.set(iconRailItems, { opacity: 0, y: 8 });

      // Elements reveal over time while scrolling down
      tl.to(textBlock, { opacity: 1, y: 0, ease: "power2.out", duration: 0.4 }, 0.1);
      if (iconRailItems.length > 0) {
        tl.to(iconRailItems, {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: "power2.out",
          duration: 0.2
        }, 0.2);
      }
    } else {
      // Mobile - simpler reveal, no pinning or scrub
      gsap.set(textBlock, { opacity: 0, y: 10 });
      gsap.set(iconRailItems, { opacity: 0, y: 8 });
      gsap.set(hazeOverlay, { opacity: 0.30 });

      gsap.to(textBlock, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2
      });

      if (iconRailItems.length > 0) {
        gsap.to(iconRailItems, {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: "power2.out",
          delay: 0.4,
          duration: 0.6
        });
      }
    }
  }, { scope: containerRef, dependencies: [isMobile, prefersReducedMotion] });

  return containerRef;
}
