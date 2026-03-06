"use client";

import { useEffect, useRef } from "react";

export function useRevealOnScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = Array.from(container.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!elements.length) return;

    if (prefersReduced) {
      elements.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.filter = "none";
      });
      return;
    }

    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px) scale(0.97)";
      el.style.filter = "blur(5px)";
      el.style.willChange = "opacity, transform, filter";
    });

    const observed = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !observed.has(entry.target)) {
            observed.add(entry.target);
            const siblings = Array.from(container.querySelectorAll<HTMLElement>("[data-reveal]"));
            const idx = siblings.indexOf(entry.target as HTMLElement);
            const delay = idx * 70;
            setTimeout(() => {
              const el = entry.target as HTMLElement;
              el.style.transition =
                `opacity 0.75s cubic-bezier(0.22,1,0.36,1),
                 transform 0.75s cubic-bezier(0.22,1,0.36,1),
                 filter 0.65s ease`;
              el.style.opacity = "1";
              el.style.transform = "translateY(0) scale(1)";
              el.style.filter = "blur(0)";
              setTimeout(() => { el.style.willChange = "auto"; }, 800);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return containerRef;
}
