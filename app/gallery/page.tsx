"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Golden Goddess",
    type: "cover",
    category: "Fantasy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6847.JPG-Z5A3ITDfOdsLE1zRxUsR2G3skY12lL.jpeg",
    description: "Mystical golden warrior with divine powers",
  },
  {
    id: 2,
    title: "Cyber Sentinel",
    type: "character",
    category: "Sci-Fi",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6849.JPG-oqzHTYLByxLbuPImq5YjuKbD5r59ws.jpeg",
    description: "Futuristic guardian of the digital realm",
  },
  {
    id: 3,
    title: "Aurora Prime",
    type: "character",
    category: "Superhero",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/raj966-cWM0LNHzbMZGHk9YW8ztVu6CWsV2Q8.png",
    description: "Cosmic warrior with energy manipulation",
  },
  {
    id: 4,
    title: "Celestial Radiance",
    type: "concept",
    category: "Divine",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-03-02%2010.25.36.PNG-0TQoFtaYw1bxV8y81WRRPa1zyE0rMX.png",
    description: "Bearer of ancient light magic",
  },
  {
    id: 5,
    title: "Queen Nefertari",
    type: "cover",
    category: "Historical",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7149.PNG-pQp9dYBksCRGYtxOnZ2lbfQjZCDVJq.png",
    description: "Ancient Egyptian ruler with mystical powers",
  },
  {
    id: 6,
    title: "Frontier Marshal",
    type: "character",
    category: "Western",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6841.JPG-JyIEpq6Sqbr9vtzJ2R1zEVaJFIWm2C.jpeg",
    description: "Fearless lawkeeper of the wild west",
  },
  {
    id: 7,
    title: "Desert Rose",
    type: "cover",
    category: "Western",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6839.JPG-AnjVjJhCWtt6g1vtLGnQPxFu6go6fQ.jpeg",
    description: "Adventure in the untamed frontier",
  },
  {
    id: 8,
    title: "Rose Thorn",
    type: "character",
    category: "Romance",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6845.JPG-95aVkBPnn6V0fU30e0K2UQ4dYaN28g.jpeg",
    description: "Mysterious heroine with nature powers",
  },
  {
    id: 9,
    title: "Crimson Executive",
    type: "cover",
    category: "Thriller",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6848.JPG-M13LZGPjXaNcA4N8hpQeO1SoJVrilT.jpeg",
    description: "Corporate espionage meets supernatural",
  },
  {
    id: 10,
    title: "Shadow Elegance",
    type: "concept",
    category: "Mystery",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6846.JPG-sPg8z3nDHi0VHTS66kUx8OVD0G9Orx.jpeg",
    description: "Sophisticated vigilante of high society",
  },
]

const categories = [
  "All",
  "Fantasy",
  "Sci-Fi",
  "Superhero",
  "Historical",
  "Western",
  "Romance",
  "Thriller",
  "Mystery",
  "Divine",
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Interactive Gallery</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore our complete collection of comic book covers, character designs, and concept art across different
            styles and themes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "border-slate-600 text-slate-300 hover:bg-slate-800"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group bg-slate-800 border-slate-700 hover:border-purple-400 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 mb-2">{item.description}</p>
                  <Badge variant="secondary" className="bg-purple-600 text-white">
                    {item.category}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal for selected item */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div className="max-w-4xl max-h-[90vh] bg-slate-800 rounded-lg overflow-hidden">
              <div className="relative">
                <Image
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.title}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white hover:bg-black/50"
                  onClick={() => setSelectedItem(null)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.title}</h3>
                <p className="text-slate-300 mb-4">{selectedItem.description}</p>
                <Badge variant="secondary" className="bg-purple-600 text-white">
                  {selectedItem.category}
                </Badge>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
