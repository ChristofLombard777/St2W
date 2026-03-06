import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({ eyebrow, title, subtitle, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-[700px]", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <span className="mb-3 block text-sm font-semibold tracking-wider text-brand-gold-500 uppercase gold-glow">
          {eyebrow}
        </span>
      )}
      <h2 className="mb-5 text-3xl font-bold tracking-[-0.02em] text-brand-navy-950 md:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.1]">
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
