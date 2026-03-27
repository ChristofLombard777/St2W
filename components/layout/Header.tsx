"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { X, Menu, MessageCircle } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = pathname === "/";

  return (
    <>
      {/* ── Floating pill bar ── */}
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 pointer-events-none">
        <div
          className={cn(
            "relative pointer-events-auto w-full max-w-5xl rounded-2xl border transition-all duration-500 ease-out",
            scrolled
              ? "bg-brand-navy-900/90 backdrop-blur-2xl border-white/10 shadow-[0_10px_30px_rgba(2,18,43,0.5)] py-2.5 px-5"
              : onHero
                ? "bg-brand-navy-900/80 backdrop-blur-xl border-white/10 shadow-[0_10px_28px_rgba(2,18,43,0.4)] py-3 px-5"
                : "bg-brand-navy-900/90 backdrop-blur-xl border-white/10 shadow-[0_10px_28px_rgba(2,18,43,0.5)] py-3 px-5"
          )}
        >
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group shrink-0"
              aria-label={`${BRAND.name} Home`}
            >
              <Image
                src="/logos/St2W Logo Cropped.png"
                alt="St2W"
                width={112}
                height={42}
                className="h-10 w-auto rounded-lg border border-brand-gold-500/30 bg-brand-navy-950/90 p-1.5 object-contain shadow-[0_0_14px_rgba(212,169,60,0.25)]"
              />
            </Link>

            {/* Desktop nav — centered */}
            <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : false;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative rounded-lg px-4 py-2 text-base font-semibold tracking-[0.01em] transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-600",
                      isActive
                        ? "bg-brand-gold-500/20 text-brand-gold-400"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-gold-600" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: WhatsApp CTA + mobile toggle */}
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href={BRAND.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 overflow-hidden relative",
                  "btn-gold text-brand-navy-950"
                )}
              >
                <MessageCircle className="h-3.5 w-3.5" />
                {BRAND.whatsappNumber}
              </Link>

              <button
                className={cn(
                  "md:hidden flex items-center justify-center h-8 w-8 rounded-lg transition-colors",
                  "text-white/80 hover:text-white hover:bg-white/10"
                )}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((v) => !v)}
              >
                {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>

          </div>

          {/* Mobile drawer — inside the pill */}
          <div
            className={cn(
              "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
              menuOpen ? "max-h-80 mt-3 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <div className={cn(
              "border-t pt-3 pb-1",
              "border-white/10"
            )}>
              <nav className="flex flex-col gap-0.5">
                {NAV_LINKS.map((link) => {
                  const isActive = link.href === "/" ? pathname === "/" : false;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "px-3.5 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between",
                        isActive
                          ? "text-brand-gold-400 font-semibold bg-brand-gold-500/15"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      )}
                    >
                      {link.label}
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-brand-gold-600" />}
                    </Link>
                  );
                })}
                <Link
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-1 px-3.5 py-3 rounded-lg text-base font-semibold flex items-center gap-2 transition-colors",
                    "text-brand-gold-500 border border-brand-gold-600/30 hover:bg-brand-gold-600/10"
                  )}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp {BRAND.whatsappNumber}
                </Link>
              </nav>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}
