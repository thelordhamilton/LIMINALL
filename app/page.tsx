"use client"

import { useState } from "react"
import { NavigationSidebar } from "@/components/navigation-sidebar"
import { MediaGrid } from "@/components/media-grid"
import { LandingPage } from "@/components/landing-page"

export default function LiminalApp() {
  const [activeSection, setActiveSection] = useState("landing")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (activeSection === "landing" || !isAuthenticated) {
    return (
      <LandingPage
        onAuthenticate={() => {
          setIsAuthenticated(true)
          setActiveSection("home")
        }}
      />
    )
  }

  const getPageTitle = (section: string) => {
    const titles: { [key: string]: string } = {
      home: "Home Dashboard",
      library: "Media Library",
      photos: "Photo Gallery",
      videos: "Video Collection",
      audio: "Audio Library",
    }
    return titles[section] || section.charAt(0).toUpperCase() + section.slice(1)
  }

  return (
    <div className="min-h-screen geometric-bg flex">
      <NavigationSidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      <div className="flex-1 flex flex-col">
        <header className="h-16 border-b border-white/10 backdrop-blur-xl bg-black/30 flex items-center justify-between px-8">
          <div className="flex items-center space-x-4">
            <h1 className="liminal-title text-2xl">{getPageTitle(activeSection)}</h1>
            <div className="text-white/50 text-sm">• {activeSection.toUpperCase()} PAGE</div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="glass-panel px-4 py-2">
              <span className="text-white/70 text-sm">Ready</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-8">
          {/* Current Page: {getPageTitle(activeSection)} */}
          <MediaGrid section={activeSection} />
        </main>
      </div>
    </div>
  )
}
