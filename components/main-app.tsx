"use client"

import { useState } from "react"
import { NavigationSidebar } from "./navigation-sidebar"
import { MediaGrid } from "./media-grid"
import LibraryPage from "./library-page"

export function MainApp() {
  const [activeSection, setActiveSection] = useState("home")

  if (activeSection === "library") {
    return <LibraryPage onBack={() => setActiveSection("home")} />
  }

  return (
    <div className="min-h-screen main-app-container">
      <div className="fixed left-0 top-0 h-screen z-10">
        <NavigationSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      </div>

      <div className="ml-72 flex flex-col min-h-screen">
        <header className="h-16 glass-panel-realistic depth-layer-2 flex items-center justify-between px-6 m-3 mb-0 backdrop-blur-md">
          <div className="flex items-center space-x-4">
            <h1 className="liminal-title text-2xl font-display font-bold tracking-[0.1em]">
              {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="glass-panel-realistic px-4 py-2 backdrop-blur-md">
              <span className="text-white/90 text-xs font-medium tracking-wide">SYSTEM READY</span>
            </div>
            <div className="glass-panel-realistic px-3 py-2 backdrop-blur-md">
              <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-3 pt-0">
          <MediaGrid activeSection={activeSection} />
        </main>

        <footer className="text-center py-4">
          <p className="text-white/50 text-xs font-medium tracking-wide">
            LIMINAL is created by Lord Liminal LLC™ - © All Rights Reserved
          </p>
        </footer>
      </div>
    </div>
  )
}
