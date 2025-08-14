"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { ImageIcon, Video, Music, Folder, Settings, Search, Home, Library } from "lucide-react"
import Image from "next/image"

interface NavItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  count?: number
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "library", label: "Library", icon: Library },
  { id: "photos", label: "Photos", icon: ImageIcon, count: 1247 },
  { id: "videos", label: "Videos", icon: Video, count: 89 },
  { id: "audio", label: "Audio", icon: Music, count: 2156 },
  { id: "folders", label: "Folders", icon: Folder },
  { id: "settings", label: "Settings", icon: Settings },
]

interface NavigationSidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function NavigationSidebar({ activeSection, onSectionChange }: NavigationSidebarProps) {
  return (
    <div className="w-96 h-full p-6 flex flex-col gap-8">
      <div className="glass-panel-ultra text-center py-12 depth-layer-3 border border-white/10">
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className="relative w-16 h-16">
            <Image
              src="/liminal-logo.png"
              alt="Liminal Logo"
              width={64}
              height={64}
              className="object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            />
          </div>
          <h1 className="liminal-title text-5xl font-display font-bold tracking-[0.15em]">LIMINAL</h1>
        </div>
        <p className="text-sm text-white/70 font-medium tracking-[0.2em] uppercase">Advanced Media Player</p>
      </div>

      <div className="glass-panel-ultra p-6 depth-layer-2 border border-white/10">
        <div className="relative">
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
          <input
            type="text"
            placeholder="Search media..."
            className="w-full glass-input-premium pl-14 pr-5 py-4 text-white placeholder-white/50 font-medium tracking-wide border border-white/5"
          />
        </div>
      </div>

      <div className="glass-panel-ultra flex-1 p-6 depth-layer-2 border border-white/10">
        <nav className="space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-5 px-6 py-5 rounded-xl transition-all duration-300 border",
                  isActive
                    ? "glass-button-ultra-active text-white font-semibold border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    : "glass-button-ultra text-white/80 hover:text-white border-white/5 hover:border-white/10",
                )}
              >
                <Icon className="w-6 h-6" />
                <span className="flex-1 text-left font-medium tracking-wide">{item.label}</span>
                {item.count && (
                  <span className="text-xs glass-panel-ultra px-4 py-2 rounded-full font-mono text-white/90 border border-white/10">
                    {item.count.toLocaleString()}
                  </span>
                )}
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
