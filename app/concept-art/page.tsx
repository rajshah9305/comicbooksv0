import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Palette } from "lucide-react"

const conceptArt = [
  {
    id: 1,
    title: "Cyberpunk Vision",
    series: "Future Noir",
    type: "Character Concept",
    artist: "Alex Chen",
    date: "2024-01-20",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6849.JPG-oqzHTYLByxLbuPImq5YjuKbD5r59ws.jpeg",
    description:
      "Early concept exploration for our cyberpunk heroine, focusing on the integration of technology and humanity.",
    stage: "Initial Concept",
  },
  {
    id: 2,
    title: "Divine Inspiration",
    series: "Celestial Warriors",
    type: "Character Design",
    artist: "Sarah Martinez",
    date: "2024-01-18",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-03-02%2010.25.36.PNG-0TQoFtaYw1bxV8y81WRRPa1zyE0rMX.png",
    description: "Exploring divine character archetypes and the visual representation of celestial power.",
    stage: "Design Development",
  },
  {
    id: 3,
    title: "Egyptian Majesty",
    series: "Ancient Powers",
    type: "Historical Concept",
    artist: "Maria Rodriguez",
    date: "2024-01-15",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7149.PNG-pQp9dYBksCRGYtxOnZ2lbfQjZCDVJq.png",
    description: "Bringing ancient Egyptian mythology to life with authentic historical details and mystical elements.",
    stage: "Final Design",
  },
  {
    id: 4,
    title: "Western Frontier",
    series: "Wild Territories",
    type: "Period Piece",
    artist: "David Kim",
    date: "2024-01-12",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6839.JPG-AnjVjJhCWtt6g1vtLGnQPxFu6go6fQ.jpeg",
    description: "Capturing the spirit of the American West with authentic period details and rugged beauty.",
    stage: "Concept Art",
  },
  {
    id: 5,
    title: "Golden Mysticism",
    series: "Arcane Arts",
    type: "Magical Concept",
    artist: "Elena Martinez",
    date: "2024-01-10",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6847.JPG-Z5A3ITDfOdsLE1zRxUsR2G3skY12lL.jpeg",
    description: "Exploring the visual language of golden magic and mystical transformation.",
    stage: "Style Exploration",
  },
  {
    id: 6,
    title: "Rose Garden Romance",
    series: "Garden of Secrets",
    type: "Atmospheric Study",
    artist: "Lisa Park",
    date: "2024-01-08",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6845.JPG-95aVkBPnn6V0fU30e0K2UQ4dYaN28g.jpeg",
    description: "Creating the perfect romantic atmosphere with natural beauty and emotional depth.",
    stage: "Mood Study",
  },
  {
    id: 7,
    title: "Corporate Power",
    series: "Corporate Shadows",
    type: "Character Study",
    artist: "Michael Johnson",
    date: "2024-01-05",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6848.JPG-M13LZGPjXaNcA4N8hpQeO1SoJVrilT.jpeg",
    description: "Exploring the visual representation of power, authority, and hidden darkness in corporate settings.",
    stage: "Character Development",
  },
  {
    id: 8,
    title: "Cosmic Warrior",
    series: "Cosmic Guardians",
    type: "Hero Design",
    artist: "Rachel Chen",
    date: "2024-01-03",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/raj966-cWM0LNHzbMZGHk9YW8ztVu6CWsV2Q8.png",
    description: "Designing the ultimate cosmic protector with divine armor and celestial powers.",
    stage: "Final Concept",
  },
]

const getStageColor = (stage: string) => {
  switch (stage) {
    case "Initial Concept":
      return "bg-blue-600"
    case "Design Development":
      return "bg-yellow-600"
    case "Final Design":
      return "bg-green-600"
    case "Final Concept":
      return "bg-green-600"
    default:
      return "bg-purple-600"
  }
}

export default function ConceptArtPage() {
  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Concept Art Gallery</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Go behind the scenes and explore the creative process through our concept art collection, showcasing the
            evolution from initial ideas to final masterpieces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {conceptArt.map((art) => (
            <Link key={art.id} href={`/concept-art/${art.id}`}>
              <Card className="group bg-slate-800 border-slate-700 hover:border-purple-400 transition-all duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={art.image || "/placeholder.svg"}
                      alt={art.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className={`${getStageColor(art.stage)} text-white`}>{art.stage}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="bg-purple-600 text-white">
                        {art.type}
                      </Badge>
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {art.title}
                    </h2>
                    <p className="text-sm text-purple-400 mb-1">{art.series}</p>
                    <p className="text-slate-300 text-sm mb-4 line-clamp-2">{art.description}</p>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{art.artist}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Palette className="h-3 w-3" />
                          <span>{art.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(art.date).toLocaleDateString()}</span>
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
