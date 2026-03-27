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

export default function PartnerStrip() {
  const marqueeLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="border-y border-brand-line/60 bg-white py-12">
      <Container>
        <div className="shine-card-white relative overflow-hidden rounded-2xl p-4 shadow-[0_12px_36px_rgba(2,34,72,0.07)]">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white via-white/80 to-transparent" />

          <div className="flex w-max gap-3" style={{ animation: "partner-logo-scroll 24s linear infinite" }}>
            {marqueeLogos.map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="flex h-16 w-[150px] shrink-0 items-center justify-center rounded-xl border border-brand-line/50 bg-white px-3"
              >
                <Image
                  src={`/logos/insurers/${logo.file}`}
                  alt={idx < PARTNER_LOGOS.length ? logo.name : ""}
                  width={112}
                  height={36}
                  className="h-9 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
