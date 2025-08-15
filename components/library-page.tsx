"use client"

import { useState } from "react"

// Custom SVG components
const UploadIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
  </svg>
)

const FolderPlusIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    <line x1="12" y1="11" x2="12" y2="17" />
    <line x1="9" y1="14" x2="15" y2="14" />
  </svg>
)

const GridIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
)

const ListIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <line x1="8" y1="6" x2="21" y2="6" />
    <line x1="8" y1="12" x2="21" y2="12" />
    <line x1="8" y1="18" x2="21" y2="18" />
    <line x1="3" y1="6" x2="3.01" y2="6" />
    <line x1="3" y1="12" x2="3.01" y2="12" />
    <line x1="3" y1="18" x2="3.01" y2="18" />
  </svg>
)

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
      <div className="glass-panel-realistic border-b border-white/10 p-6 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="glass-panel-realistic px-4 py-2 text-sm backdrop-blur-md">
              ← Back
            </button>
            <h1 className="liminal-title text-2xl">LIBRARY</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="glass-panel-realistic p-2 backdrop-blur-md"
            >
              {viewMode === "grid" ? <ListIcon /> : <GridIcon />}
            </button>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="glass-panel-realistic px-3 py-2 text-sm backdrop-blur-md"
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
      <div className="glass-panel-realistic m-6 p-6 backdrop-blur-md">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-white/90">Upload Media</h2>
          <button className="glass-panel-realistic px-4 py-2 text-sm backdrop-blur-md">
            <FolderPlusIcon size={16} className="mr-2" />
            New Folder
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Upload Photos */}
          <div className="glass-panel-realistic border-2 border-dashed border-white/20 hover:border-white/40 transition-all duration-300 p-6 text-center cursor-pointer group backdrop-blur-md">
            <UploadIcon size={32} className="mx-auto mb-3 text-white/60 group-hover:text-white/80" />
            <h3 className="font-medium mb-1">Upload Photos</h3>
            <p className="text-sm text-white/60">Drag & drop or click to browse</p>
          </div>

          {/* Upload Videos */}
          <div className="glass-panel-realistic border-2 border-dashed border-white/20 hover:border-white/40 transition-all duration-300 p-6 text-center cursor-pointer group backdrop-blur-md">
            <UploadIcon size={32} className="mx-auto mb-3 text-white/60 group-hover:text-white/80" />
            <h3 className="font-medium mb-1">Upload Videos</h3>
            <p className="text-sm text-white/60">Drag & drop or click to browse</p>
          </div>

          {/* Upload Audio */}
          <div className="glass-panel-realistic border-2 border-dashed border-white/20 hover:border-white/40 transition-all duration-300 p-6 text-center cursor-pointer group backdrop-blur-md">
            <UploadIcon size={32} className="mx-auto mb-3 text-white/60 group-hover:text-white/80" />
            <h3 className="font-medium mb-1">Upload Audio</h3>
            <p className="text-sm text-white/60">Drag & drop or click to browse</p>
          </div>
        </div>
      </div>

      {/* Media Library Grid */}
      <div className="px-6 pb-6">
        <div className="glass-panel-realistic p-6 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems.map((item) => (
              <div
                key={item.id}
                className="glass-panel-realistic hover:glass-panel-realistic transition-all duration-300 p-4 cursor-pointer group backdrop-blur-md"
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
