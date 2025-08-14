"use client"
import { Play, Volume2, MoreHorizontal } from "lucide-react"
import { useState } from "react"

interface MediaItem {
  id: string
  name: string
  type: "photo" | "video" | "audio"
  thumbnail: string
  duration?: string
  size: string
  modified: string
}

const sampleMedia: MediaItem[] = [
  {
    id: "1",
    name: "Sunset_Beach.jpg",
    type: "photo",
    thumbnail: "/beautiful-sunset-beach.png",
    size: "2.4 MB",
    modified: "2 hours ago",
  },
  {
    id: "2",
    name: "Mountain_Hike.mp4",
    type: "video",
    thumbnail: "/mountain-hiking-trail.png",
    duration: "4:32",
    size: "156 MB",
    modified: "1 day ago",
  },
  {
    id: "3",
    name: "Ambient_Waves.mp3",
    type: "audio",
    thumbnail: "/ocean-waves-sound-visualization.png",
    duration: "8:45",
    size: "12.3 MB",
    modified: "3 days ago",
  },
  {
    id: "4",
    name: "City_Lights.jpg",
    type: "photo",
    thumbnail: "/city-lights-night.png",
    size: "3.1 MB",
    modified: "1 week ago",
  },
  {
    id: "5",
    name: "Jazz_Session.mp3",
    type: "audio",
    thumbnail: "/jazz-visualization.png",
    duration: "6:12",
    size: "8.7 MB",
    modified: "2 weeks ago",
  },
  {
    id: "6",
    name: "Nature_Documentary.mp4",
    type: "video",
    thumbnail: "/forest-path-sunlight.png",
    duration: "12:18",
    size: "287 MB",
    modified: "1 month ago",
  },
]

interface MediaGridProps {
  activeSection: string
}

export function MediaGrid({ activeSection }: MediaGridProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const filteredMedia =
    activeSection === "home"
      ? sampleMedia
      : sampleMedia.filter((item) =>
          activeSection === "photos"
            ? item.type === "photo"
            : activeSection === "videos"
              ? item.type === "video"
              : activeSection === "audio"
                ? item.type === "audio"
                : true,
        )

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Play className="w-4 h-4" />
      case "audio":
        return <Volume2 className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <div className="flex-1 p-6">
      <div className="glass-panel-ultra h-full depth-layer-2 p-8 border border-white/10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="liminal-title text-3xl font-display font-bold capitalize tracking-[0.1em]">
              {activeSection === "home" ? "Recent Media" : activeSection}
            </h2>
            <p className="text-white/60 mt-2 text-sm font-medium tracking-wide">
              {filteredMedia.length} items available
            </p>
          </div>

          <div className="flex gap-4">
            <button className="glass-button-ultra px-6 py-3 rounded-xl text-sm font-medium tracking-wide border border-white/10">
              Sort by Date
            </button>
            <button className="glass-button-ultra px-6 py-3 rounded-xl text-sm font-medium tracking-wide border border-white/10">
              View Options
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 overflow-y-auto max-h-[calc(100vh-280px)]">
          {filteredMedia.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
            >
              <div
                className={`glass-panel-ultra p-4 rounded-xl border transition-all duration-300 ${
                  selectedItem === item.id
                    ? "border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                <div className="relative mb-4">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-36 object-cover rounded-lg"
                  />

                  {item.type !== "photo" && (
                    <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="glass-button-ultra p-3 rounded-full border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        {getTypeIcon(item.type)}
                      </div>
                    </div>
                  )}

                  {item.duration && (
                    <div className="absolute bottom-3 right-3 glass-panel-ultra text-white text-xs px-3 py-1.5 rounded-md font-mono border border-white/20">
                      {item.duration}
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-white truncate text-sm tracking-wide" title={item.name}>
                    {item.name}
                  </h3>
                  <div className="flex justify-between text-xs text-white/60 font-medium">
                    <span>{item.size}</span>
                    <span>{item.modified}</span>
                  </div>
                </div>

                <button className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glass-button-ultra p-2 rounded-lg border border-white/20">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
