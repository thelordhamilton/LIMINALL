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
    <div className="min-h-screen main-app-container flex flex-col">
      <div className="flex flex-1">
        <NavigationSidebar activeSection={activeSection} onSectionChange={setActiveSection} />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          <header className="h-24 glass-panel-ultra depth-layer-3 flex items-center justify-between px-12 m-6 mb-0 border border-white/10">
            <div className="flex items-center space-x-8">
              <h1 className="liminal-title text-4xl font-display font-bold tracking-[0.2em]">
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
              </h1>
            </div>

            <div className="flex items-center space-x-8">
              <div className="glass-panel-ultra px-8 py-4 border border-white/5">
                <span className="text-white/90 text-sm font-medium tracking-wide">SYSTEM READY</span>
              </div>
              <div className="glass-panel-ultra px-6 py-4 border border-white/5">
                <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.6)]"></div>
              </div>
            </div>
          </header>

          <main className="flex-1 p-6 pt-0">
            <MediaGrid activeSection={activeSection} />
          </main>
        </div>
      </div>

      <footer className="text-center py-8 pb-10">
        <p className="text-white/50 text-sm font-medium tracking-wide">
          LIMINAL is created by Lord Liminal LLC™ - © All Rights Reserved
        </p>
      </footer>
    </div>
  )
}
