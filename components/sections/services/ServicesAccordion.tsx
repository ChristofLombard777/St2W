"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { servicesContent } from "@/lib/content";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-mist-50">
      <Container>
        <div className="max-w-4xl mx-auto space-y-4">
          {servicesContent.categories.map((category, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={category.title}
                className={cn(
                  "rounded-xl border bg-brand-white shadow-sm transition-colors",
                  isOpen ? "border-brand-gold-600 shadow-soft" : "border-brand-line hover:border-brand-navy-800/30"
                )}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus-visible:outline-none focus:ring-2 focus:ring-brand-gold-600 rounded-xl"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-xl font-bold text-brand-navy-950 md:text-2xl">
                    {category.title}
                  </h3>
                  <ChevronDown
                    className={cn(
                      "h-6 w-6 text-brand-gold-600 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-in-out px-6 md:px-8",
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-6 md:pb-8" : "grid-rows-[0fr] opacity-0 pb-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <ul className="space-y-4 pt-4 border-t border-brand-line">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex tracking-tight items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-brand-navy-900 shrink-0 mt-0.5" />
                          <span className="text-lg text-brand-slate-500 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
