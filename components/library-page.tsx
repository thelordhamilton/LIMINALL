"use client"

import { useState } from "react"
import { Upload, FolderPlus, Grid, List } from "lucide-react"

interface LibraryPageProps {
  onBack: () => void
}

export default function LibraryPage({ onBack }: LibraryPageProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const mediaItems = [
    {
      id: 1,
      name: "Summer Vacation 2024",
      type: "folder",
      items: 156,
      thumbnail: "/diverse-family-beach-vacation.png",
    },
    { id: 2, name: "Concert Recording", type: "video", duration: "2:34:12", thumbnail: "/concert-stage.png" },
    { id: 3, name: "Morning Playlist", type: "audio", tracks: 24, thumbnail: "/placeholder-kds45.png" },
    { id: 4, name: "Portrait Session", type: "photo", items: 89, thumbnail: "/portrait-photography.png" },
    { id: 5, name: "Documentary Film", type: "video", duration: "1:45:30", thumbnail: "/documentary-film.png" },
    { id: 6, name: "Nature Sounds", type: "audio", tracks: 12, thumbnail: "/lush-forest.png" },
  ]

  return (
    <div className="min-h-screen main-app-container text-white">
      {/* Header */}
      <div className="glass-panel-ultra border-b border-white/10 p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="glass-button-prismatic px-4 py-2 text-sm">
              ← Back
            </button>
            <h1 className="liminal-title text-2xl">LIBRARY</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="glass-button-prismatic p-2"
            >
              {viewMode === "grid" ? <List size={18} /> : <Grid size={18} />}
            </button>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="glass-input-enhanced px-3 py-2 text-sm"
            >
              <option value="all">All Media</option>
              <option value="photos">Photos</option>
              <option value="videos">Videos</option>
              <option value="audio">Audio</option>
              <option value="folders">Folders</option>
            </select>
          </div>
        </div>
      </div>

      {/* Upload Panel */}
      <div className="glass-panel-ultra m-6 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white/90">Upload Media</h2>
          <button className="glass-button-prismatic px-4 py-2 text-sm">
            <FolderPlus size={16} className="mr-2" />
            New Folder
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Upload Photos */}
          <div className="glass-panel border-2 border-dashed border-white/20 hover:border-white/40 transition-all duration-300 p-6 text-center cursor-pointer group">
            <Upload size={32} className="mx-auto mb-3 text-white/60 group-hover:text-white/80" />
            <h3 className="font-medium mb-1">Upload Photos</h3>
            <p className="text-sm text-white/60">Drag & drop or click to browse</p>
          </div>

          {/* Upload Videos */}
          <div className="glass-panel border-2 border-dashed border-white/20 hover:border-white/40 transition-all duration-300 p-6 text-center cursor-pointer group">
            <Upload size={32} className="mx-auto mb-3 text-white/60 group-hover:text-white/80" />
            <h3 className="font-medium mb-1">Upload Videos</h3>
            <p className="text-sm text-white/60">Drag & drop or click to browse</p>
          </div>

          {/* Upload Audio */}
          <div className="glass-panel border-2 border-dashed border-white/20 hover:border-white/40 transition-all duration-300 p-6 text-center cursor-pointer group">
            <Upload size={32} className="mx-auto mb-3 text-white/60 group-hover:text-white/80" />
            <h3 className="font-medium mb-1">Upload Audio</h3>
            <p className="text-sm text-white/60">Drag & drop or click to browse</p>
          </div>
        </div>
      </div>

      {/* Media Library Grid */}
      <div className="px-6 pb-6">
        <div className="glass-panel-ultra p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                className="glass-panel hover:glass-panel-ultra transition-all duration-300 p-4 cursor-pointer group"
              >
                <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-black/20">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium mb-2 text-white/90 group-hover:text-white">{item.name}</h3>
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span className="capitalize">{item.type}</span>
                  <span>
                    {item.type === "folder" && `${item.items} items`}
                    {item.type === "video" && item.duration}
                    {item.type === "audio" && `${item.tracks} tracks`}
                    {item.type === "photo" && `${item.items} photos`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 text-xs text-white/40">
        LIMINAL is created by Lord Liminal LLC™ - © All Rights Reserved
      </div>
    </div>
  )
}
