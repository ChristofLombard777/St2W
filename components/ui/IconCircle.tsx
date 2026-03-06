import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export default function IconCircle({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy-900 text-brand-gold-600",
        className
      )}
      aria-hidden="true"
    >
      {children}
    </div>
  )
}
