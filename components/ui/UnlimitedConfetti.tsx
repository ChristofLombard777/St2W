"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function UnlimitedConfetti() {
  const cooldownRef = useRef(false);

  useEffect(() => {
    function isUnlimitedElement(el: Element | null): boolean {
      if (!el) return false;
      const text = (el as HTMLElement).innerText?.trim() ?? el.textContent?.trim() ?? "";
      return text === "Unlimited" || text === "UNLIMITED";
    }

    function fire(x: number, y: number) {
      if (cooldownRef.current) return;
      cooldownRef.current = true;
      setTimeout(() => { cooldownRef.current = false; }, 1200);

      const origin = {
        x: x / window.innerWidth,
        y: y / window.innerHeight,
      };

      confetti({
        particleCount: 120,
        spread: 80,
        origin,
        colors: ["#38bdf8", "#a78bfa", "#f472b6", "#34d399", "#fbbf24", "#ffffff"],
        scalar: 1.1,
        gravity: 0.9,
        ticks: 220,
      });

      confetti({
        particleCount: 40,
        angle: 60,
        spread: 55,
        origin,
        colors: ["#6ee7f7", "#818cf8", "#fb7185"],
        scalar: 0.8,
      });

      confetti({
        particleCount: 40,
        angle: 120,
        spread: 55,
        origin,
        colors: ["#6ee7f7", "#818cf8", "#fb7185"],
        scalar: 0.8,
      });
    }

    function handleMouseOver(e: MouseEvent) {
      const target = e.target as Element;
      if (isUnlimitedElement(target)) {
        const rect = (target as HTMLElement).getBoundingClientRect();
        fire(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
    }

    document.addEventListener("mouseover", handleMouseOver);
    return () => document.removeEventListener("mouseover", handleMouseOver);
  }, []);

  return null;
}
