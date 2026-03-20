"use client";

import Container from "@/components/ui/Container";
import Image from "next/image";

const PARTNER_LOGOS = [
  { name: "Santam", file: "santam.svg" },
  { name: "Old Mutual Insure", file: "old-mutual.svg" },
  { name: "Hollard", file: "hollard.svg" },
  { name: "Momentum Group", file: "momentum.svg" },
  { name: "Discovery", file: "discovery.svg" },
  { name: "Sanlam", file: "sanlam.svg" },
];

function LogoCarousel({ large = false }: { large?: boolean }) {
  return (
    <div className={large ? "partner-carousel partner-carousel-large" : "partner-carousel"}>
      <div className={large ? "partner-logos partner-logos-large" : "partner-logos"}>
        <div className="partner-logos-set">
          {PARTNER_LOGOS.map((logo) => (
            <div key={logo.name} className="partner-logo-item">
              <Image
                src={`/logos/insurers/${logo.file}`}
                alt={logo.name}
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 124px, 152px"
              />
            </div>
          ))}
        </div>

        <div className="partner-logos-set" aria-hidden="true">
          {PARTNER_LOGOS.map((logo) => (
            <div key={`${logo.name}-clone`} className="partner-logo-item">
              <Image
                src={`/logos/insurers/${logo.file}`}
                alt=""
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 124px, 152px"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="partner-mask" />
    </div>
  );
}

export default function PartnerStrip() {
  return (
    <section className="py-12 bg-brand-navy-950 border-y border-white/10">
      <Container>
        <LogoCarousel />
      </Container>
    </section>
  );
}
