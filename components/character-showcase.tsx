import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const characters = [
  {
    id: 1,
    name: "Aurora Prime",
    series: "Cosmic Guardians",
    description: "A powerful cosmic warrior with divine energy manipulation abilities",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/raj966-cWM0LNHzbMZGHk9YW8ztVu6CWsV2Q8.png",
    powers: ["Energy Manipulation", "Flight", "Cosmic Awareness"],
  },
  {
    id: 2,
    name: "Celestial Radiance",
    series: "Divine Chronicles",
    description: "Bearer of ancient light magic and protector of sacred realms",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-03-02%2010.25.36.PNG-0TQoFtaYw1bxV8y81WRRPa1zyE0rMX.png",
    powers: ["Light Magic", "Healing", "Divine Protection"],
  },
  {
    id: 3,
    name: "Queen Nefertari",
    series: "Legends of the Nile",
    description: "Ancient Egyptian ruler with mystical powers and eternal wisdom",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7149.PNG-pQp9dYBksCRGYtxOnZ2lbfQjZCDVJq.png",
    powers: ["Ancient Magic", "Immortality", "Royal Command"],
  },
  {
    id: 4,
    name: "Rose Thorn",
    series: "Garden of Secrets",
    description: "Mysterious heroine with the power to control nature and emotions",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6845.JPG-95aVkBPnn6V0fU30e0K2UQ4dYaN28g.jpeg",
    powers: ["Plant Control", "Empathy", "Healing Touch"],
  },
  {
    id: 5,
    name: "Frontier Marshal",
    series: "Wild Justice",
    description: "Fearless lawkeeper of the untamed western territories",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6841.JPG-JyIEpq6Sqbr9vtzJ2R1zEVaJFIWm2C.jpeg",
    powers: ["Expert Marksmanship", "Horseback Riding", "Leadership"],
  },
  {
    id: 6,
    name: "Shadow Elegance",
    series: "Midnight Society",
    description: "Sophisticated vigilante operating in the world of high society",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6846.JPG-sPg8z3nDHi0VHTS66kUx8OVD0G9Orx.jpeg",
    powers: ["Stealth", "Social Manipulation", "Combat Skills"],
  },
]

export function CharacterShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Legendary Characters</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Meet the iconic heroes and villains that bring our stories to life with their unique designs and compelling
            backstories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character) => (
            <Link key={character.id} href={`/characters/${character.id}`}>
              <Card className="group bg-slate-800 border-slate-700 hover:border-purple-400 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={character.image || "/placeholder.svg"}
                      alt={character.name}
                      width={250}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{character.name}</h3>
                  <p className="text-purple-400 text-sm mb-2">{character.series}</p>
                  <p className="text-slate-300 text-sm mb-3">{character.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {character.powers.slice(0, 2).map((power, index) => (
                      <span key={index} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full">
                        {power}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/characters"
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
          >
            Explore All Characters
          </Link>
        </div>
      </div>
    </section>
  )
}
