import Link from "next/link";
import Container from "@/components/ui/Container";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-navy-950 pt-16 pb-8 text-brand-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-3 lg:gap-8 border-b border-brand-navy-800 pb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center justify-center rounded-xl btn-gold text-brand-navy-950 font-black text-sm px-3 py-1.5">
                St2W
              </div>
              <span className="font-semibold tracking-wide text-lg text-brand-white">
                SHORT-TERM <span className="font-light">TO WEALTH</span>
              </span>
            </div>
            <p className="max-w-[300px] text-sm text-brand-mist-100/70 leading-relaxed">
              An easy pathway to accelerate financial increase and wealth generation. Powered by Worldwide Wealth.
            </p>
          </div>

          {/* Nav Col */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold-600">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-mist-100/80 transition-colors hover:text-brand-gold-600 focus-visible:text-brand-gold-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold-600">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-mist-100/80 transition-colors hover:text-brand-gold-600 focus-visible:text-brand-gold-600"
                >
                  WhatsApp: {BRAND.whatsappNumber}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.websiteFullUrl}
                  className="text-sm text-brand-mist-100/80 transition-colors hover:text-brand-gold-600 focus-visible:text-brand-gold-600"
                >
                  {BRAND.websiteUrl}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom / Compliance row */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-brand-mist-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-right">
            <span>{BRAND.fsp}</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-brand-gold-600/50"></span>
            <span>{BRAND.fspNumber}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
