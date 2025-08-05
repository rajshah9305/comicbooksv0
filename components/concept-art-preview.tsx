import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const conceptArt = [
  {
    id: 1,
    title: "Cyberpunk Vision",
    series: "Future Noir",
    type: "Character Concept",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6849.JPG-oqzHTYLByxLbuPImq5YjuKbD5r59ws.jpeg",
    description: "Early concept for our cyberpunk heroine",
  },
  {
    id: 2,
    title: "Divine Inspiration",
    series: "Celestial Warriors",
    type: "Character Design",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-03-02%2010.25.36.PNG-0TQoFtaYw1bxV8y81WRRPa1zyE0rMX.png",
    description: "Exploring divine character archetypes",
  },
  {
    id: 3,
    title: "Egyptian Majesty",
    series: "Ancient Powers",
    type: "Historical Concept",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7149.PNG-pQp9dYBksCRGYtxOnZ2lbfQjZCDVJq.png",
    description: "Bringing ancient mythology to life",
  },
  {
    id: 4,
    title: "Western Frontier",
    series: "Wild Territories",
    type: "Period Piece",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6839.JPG-AnjVjJhCWtt6g1vtLGnQPxFu6go6fQ.jpeg",
    description: "Capturing the spirit of the American West",
  },
]

export function ConceptArtPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Behind the Scenes</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Discover the creative process through our concept art collection, showcasing the evolution from initial
            ideas to final masterpieces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {conceptArt.map((art) => (
            <Link key={art.id} href={`/concept-art/${art.id}`}>
              <Card className="group bg-slate-700 border-slate-600 hover:border-purple-400 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={art.image || "/placeholder.svg"}
                      alt={art.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">{art.title}</h3>
                    <p className="text-sm text-purple-400 mb-1">{art.series}</p>
                    <p className="text-xs text-slate-400 mb-2">{art.description}</p>
                    <span className="inline-block px-2 py-1 text-xs bg-slate-600 text-slate-300 rounded-full">
                      {art.type}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/concept-art"
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
          >
            View All Concept Art
          </Link>
        </div>
      </div>
    </section>
  )
}
