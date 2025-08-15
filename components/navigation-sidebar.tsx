"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

// Simple SVG icon components to replace lucide-react
const HomeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12l4.586-4.586A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
)

const LibraryIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
)

const ImageIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
)

const VideoIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
)

const MusicIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
    />
  </svg>
)

const FolderIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
    />
  </svg>
)

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31 2.37 2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
)

interface NavItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  count?: number
}

const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "library", label: "Library", icon: LibraryIcon },
  { id: "photos", label: "Photos", icon: ImageIcon, count: 1247 },
  { id: "videos", label: "Videos", icon: VideoIcon, count: 89 },
  { id: "audio", label: "Audio", icon: MusicIcon, count: 2156 },
  { id: "folders", label: "Folders", icon: FolderIcon },
  { id: "settings", label: "Settings", icon: SettingsIcon },
]

interface NavigationSidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function NavigationSidebar({ activeSection, onSectionChange }: NavigationSidebarProps) {
  return (
    <div className="w-72 h-full p-3 flex flex-col gap-4">
      <div className="glass-panel-realistic text-center py-6 depth-layer-2 backdrop-blur-md">
        <div className="flex items-center justify-center gap-4 mb-3">
          <div className="relative w-12 h-12">
            <Image
              src="/liminal-logo.png"
              alt="Liminal Logo"
              width={48}
              height={48}
              className="object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
            />
          </div>
          <h1 className="liminal-title text-3xl font-display font-bold tracking-[0.1em]">LIMINAL</h1>
        </div>
        <p className="text-xs text-white/70 font-medium tracking-[0.15em] uppercase">Advanced Media Player</p>
      </div>

      <div className="glass-panel-realistic p-4 depth-layer-1 backdrop-blur-md">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
          <input
            type="text"
            placeholder="Search media..."
            className="w-full glass-panel-realistic pl-10 pr-3 py-2.5 text-sm text-white placeholder-white/50 font-medium tracking-wide backdrop-blur-md"
          />
        </div>
      </div>

      <div className="glass-panel-realistic p-4 depth-layer-1 backdrop-blur-md">
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                  isActive
                    ? "glass-panel-realistic text-white font-semibold backdrop-blur-md"
                    : "glass-panel-realistic text-white/80 hover:text-white backdrop-blur-md",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="flex-1 text-left text-sm font-medium tracking-wide">{item.label}</span>
                {item.count && (
                  <span className="text-xs glass-panel-realistic px-2.5 py-1 rounded-full font-mono text-white/90 backdrop-blur-md">
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
