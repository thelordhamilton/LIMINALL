import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface GlassPanelProps {
  children: ReactNode
  className?: string
  selected?: boolean
}

export function GlassPanel({ children, className, selected = false }: GlassPanelProps) {
  return <div className={cn("glass-panel rounded-2xl p-6", selected && "selected", className)}>{children}</div>
}
