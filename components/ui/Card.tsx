import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export default function Card({ children, className, ...props }: { children: ReactNode, className?: string }) {
  return (
    <div
      className={cn(
        "bg-brand-white rounded-xl2 border border-brand-line p-6 shadow-sm",
        "transition-all duration-300 hover:shadow-soft hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
