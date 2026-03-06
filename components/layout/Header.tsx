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
              ? "bg-white/10 backdrop-blur-2xl border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.18)] py-2.5 px-5"
              : onHero
                ? "bg-white/5 backdrop-blur-xl border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.12)] py-3 px-5"
                : "bg-white/70 backdrop-blur-xl border-white/40 shadow-[0_4px_24px_rgba(0,0,0,0.08)] py-3 px-5"
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
                width={44}
                height={44}
                className="object-contain drop-shadow-[0_0_8px_rgba(212,169,60,0.35)]"
              />
              <div className="flex items-center justify-center rounded-xl text-brand-navy-950 font-black text-sm tracking-tight btn-gold px-3 py-1.5">
                St2W
              </div>
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
                      "relative px-3.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold-600",
                      isActive
                        ? "text-brand-gold-500 bg-brand-gold-500/10"
                        : scrolled
                          ? "text-brand-gold-400 hover:text-brand-gold-300 hover:bg-brand-gold-500/10"
                          : onHero
                            ? "text-white/75 hover:text-white hover:bg-white/10"
                            : "text-brand-slate-500 hover:text-brand-navy-950 hover:bg-brand-navy-950/5"
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
                  "hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 overflow-hidden relative",
                  onHero || scrolled
                    ? "btn-gold text-brand-navy-950"
                    : "border border-brand-navy-950/20 text-brand-navy-950 hover:bg-brand-navy-950 hover:text-white"
                )}
              >
                <MessageCircle className="h-3.5 w-3.5" />
                {BRAND.whatsappNumber}
              </Link>

              <button
                className={cn(
                  "md:hidden flex items-center justify-center h-8 w-8 rounded-lg transition-colors",
                  onHero || scrolled
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-brand-navy-950 hover:bg-brand-navy-950/5"
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
              onHero || scrolled ? "border-white/10" : "border-brand-navy-950/10"
            )}>
              <nav className="flex flex-col gap-0.5">
                {NAV_LINKS.map((link) => {
                  const isActive = link.href === "/" ? pathname === "/" : false;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between",
                        isActive
                          ? "text-brand-gold-500 font-semibold bg-brand-gold-500/10"
                          : scrolled
                            ? "text-brand-gold-400 hover:text-brand-gold-300 hover:bg-brand-gold-500/10"
                            : onHero
                              ? "text-white/75 hover:text-white hover:bg-white/10"
                              : "text-brand-slate-500 hover:text-brand-navy-950 hover:bg-brand-navy-950/5"
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
                    "mt-1 px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors",
                    "text-brand-gold-600 border",
                    onHero || scrolled
                      ? "border-brand-gold-600/30 hover:bg-brand-gold-600/10"
                      : "border-brand-gold-600/40 hover:bg-brand-gold-600/10"
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
