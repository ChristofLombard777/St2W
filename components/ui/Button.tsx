import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center overflow-hidden rounded-xl2 font-semibold transition-all duration-300 px-6 py-3 text-sm md:text-base focus-visible:ring-2 focus-visible:ring-brand-gold-500 focus-visible:outline-none select-none";

  const variants = {
    primary:
      "bg-brand-navy-900 text-brand-white hover:bg-brand-navy-800 hover:shadow-soft",
    secondary:
      "btn-gold text-brand-navy-950",
    outline:
      "border-2 border-brand-navy-900 text-brand-navy-900 hover:bg-brand-navy-900 hover:text-brand-white",
  };

  const classes = cn(base, variants[variant], className);
  const inner = <><span className="relative z-10">{children}</span></>;

  if (href) {
    return <Link href={href} className={classes}>{inner}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}
