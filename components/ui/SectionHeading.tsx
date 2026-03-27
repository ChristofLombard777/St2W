import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  headingClass?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle, align = "left", className, headingClass }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-[700px]", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <span className="mb-3 block text-sm font-semibold tracking-wider text-brand-gold-500 uppercase gold-glow">
          {eyebrow}
        </span>
      )}
      <h2 className={`mb-5 font-display text-3xl font-extrabold tracking-[-0.04em] text-brand-navy-950 md:text-4xl lg:text-5xl xl:text-[3.75rem] leading-[1.04] ${headingClass ?? ""}`} style={{ textWrap: 'balance' } as React.CSSProperties}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-brand-slate-500 md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
