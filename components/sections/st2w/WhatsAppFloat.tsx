"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 360) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link
      href={BRAND.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-brand-gold-600 px-5 py-3 text-brand-navy-950 shadow-soft transition-all duration-300 hover:scale-105 hover:bg-brand-gold-700 hover:shadow-glow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-navy-900 focus-visible:ring-offset-2",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      )}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="font-bold hidden sm:block tracking-wide">
        WhatsApp {BRAND.whatsappNumber}
      </span>
    </Link>
  );
}
