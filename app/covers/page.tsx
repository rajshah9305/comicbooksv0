import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Eye, Heart } from "lucide-react"

const covers = [
  {
    id: 1,
    title: "Golden Goddess #1",
    artist: "Elena Martinez",
    genre: "Fantasy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6847.JPG-Z5A3ITDfOdsLE1zRxUsR2G3skY12lL.jpeg",
    description: "A mystical tale of divine power and ancient magic in a world where gods walk among mortals.",
    rating: 4.8,
    views: 12500,
    likes: 890,
  },
  {
    id: 2,
    title: "Cyber Sentinel #1",
    artist: "Alex Chen",
    genre: "Sci-Fi",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6849.JPG-oqzHTYLByxLbuPImq5YjuKbD5r59ws.jpeg",
    description: "In a neon-lit future, one guardian stands against the darkness of corporate tyranny.",
    rating: 4.9,
    views: 15200,
    likes: 1120,
  },
  {
    id: 3,
    title: "Desert Rose #1",
    artist: "Maria Rodriguez",
    genre: "Western",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6839.JPG-AnjVjJhCWtt6g1vtLGnQPxFu6go6fQ.jpeg",
    description: "A tale of courage and adventure in the untamed frontier of the American West.",
    rating: 4.7,
    views: 9800,
    likes: 750,
  },
  {
    id: 4,
    title: "Crimson Executive #1",
    artist: "David Kim",
    genre: "Thriller",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6848.JPG-M13LZGPjXaNcA4N8hpQeO1SoJVrilT.jpeg",
    description: "Corporate espionage meets supernatural intrigue in this modern thriller.",
    rating: 4.6,
    views: 11300,
    likes: 680,
  },
  {
    id: 5,
    title: "Legends of the Nile #1",
    artist: "Sarah Johnson",
    genre: "Historical",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7149.PNG-pQp9dYBksCRGYtxOnZ2lbfQjZCDVJq.png",
    description: "Ancient Egyptian mysteries unfold as Queen Nefertari discovers her true destiny.",
    rating: 4.9,
    views: 18700,
    likes: 1340,
  },
  {
    id: 6,
    title: "Garden of Secrets #1",
    artist: "Lisa Park",
    genre: "Romance",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6845.JPG-95aVkBPnn6V0fU30e0K2UQ4dYaN28g.jpeg",
    description: "A romantic tale of love, loss, and the power of nature's healing touch.",
    rating: 4.5,
    views: 8900,
    likes: 620,
  },
]

export default function CoversPage() {
  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Comic Book Covers</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Discover our complete collection of stunning comic book covers, each telling a unique story through
            breathtaking artwork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {covers.map((cover) => (
            <Link key={cover.id} href={`/covers/${cover.id}`}>
              <Card className="group bg-slate-800 border-slate-700 hover:border-purple-400 transition-all duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={cover.image || "/placeholder.svg"}
                      alt={cover.title}
                      width={400}
                      height={500}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-purple-600 text-white">
                        {cover.genre}
                      </Badge>
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm text-slate-300">{cover.rating}</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {cover.title}
                    </h2>
                    <p className="text-sm text-purple-400 mb-2">by {cover.artist}</p>
                    <p className="text-slate-300 text-sm mb-4 line-clamp-2">{cover.description}</p>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{cover.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span>{cover.likes}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
