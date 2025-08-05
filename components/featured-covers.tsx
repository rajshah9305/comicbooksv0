import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const featuredCovers = [
  {
    id: 1,
    title: "Golden Goddess",
    artist: "Elena Martinez",
    genre: "Fantasy",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6847.JPG-Z5A3ITDfOdsLE1zRxUsR2G3skY12lL.jpeg",
    description: "A mystical tale of divine power and ancient magic",
  },
  {
    id: 2,
    title: "Cyber Sentinel",
    artist: "Alex Chen",
    genre: "Sci-Fi",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6849.JPG-oqzHTYLByxLbuPImq5YjuKbD5r59ws.jpeg",
    description: "In a neon-lit future, one guardian stands against the darkness",
  },
  {
    id: 3,
    title: "Desert Rose",
    artist: "Maria Rodriguez",
    genre: "Western",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6839.JPG-AnjVjJhCWtt6g1vtLGnQPxFu6go6fQ.jpeg",
    description: "A tale of courage and adventure in the untamed frontier",
  },
  {
    id: 4,
    title: "Crimson Executive",
    artist: "David Kim",
    genre: "Thriller",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6848.JPG-M13LZGPjXaNcA4N8hpQeO1SoJVrilT.jpeg",
    description: "Corporate espionage meets supernatural intrigue",
  },
]

export function FeaturedCovers() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Iconic Comic Book Covers</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore a curated collection of visually striking covers, showcasing diverse artistic styles and genres.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCovers.map((cover) => (
            <Link key={cover.id} href={`/covers/${cover.id}`}>
              <Card className="group bg-slate-700 border-slate-600 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={cover.image || "/placeholder.svg"}
                      alt={cover.title}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">{cover.title}</h3>
                    <p className="text-sm text-slate-400 mb-1">by {cover.artist}</p>
                    <p className="text-xs text-slate-500 mb-2">{cover.description}</p>
                    <span className="inline-block px-2 py-1 text-xs bg-purple-600 text-white rounded-full">
                      {cover.genre}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/covers"
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
          >
            View All Covers
          </Link>
        </div>
      </div>
    </section>
  )
}
