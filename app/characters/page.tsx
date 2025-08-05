import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Shield, Heart, Sword, Star, Sparkles } from "lucide-react"

const characters = [
  {
    id: 1,
    name: "Aurora Prime",
    series: "Cosmic Guardians",
    description:
      "A powerful cosmic warrior with divine energy manipulation abilities and the strength to protect entire galaxies.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/raj966-cWM0LNHzbMZGHk9YW8ztVu6CWsV2Q8.png",
    powers: ["Energy Manipulation", "Flight", "Cosmic Awareness", "Divine Protection"],
    powerLevel: 95,
    alignment: "Hero",
  },
  {
    id: 2,
    name: "Celestial Radiance",
    series: "Divine Chronicles",
    description:
      "Bearer of ancient light magic and protector of sacred realms, wielding the power of pure divine energy.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-03-02%2010.25.36.PNG-0TQoFtaYw1bxV8y81WRRPa1zyE0rMX.png",
    powers: ["Light Magic", "Healing", "Divine Protection", "Purification"],
    powerLevel: 92,
    alignment: "Hero",
  },
  {
    id: 3,
    name: "Queen Nefertari",
    series: "Legends of the Nile",
    description:
      "Ancient Egyptian ruler with mystical powers and eternal wisdom, commanding the forces of the afterlife.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7149.PNG-pQp9dYBksCRGYtxOnZ2lbfQjZCDVJq.png",
    powers: ["Ancient Magic", "Immortality", "Royal Command", "Necromancy"],
    powerLevel: 88,
    alignment: "Neutral",
  },
  {
    id: 4,
    name: "Cyber Sentinel",
    series: "Future Noir",
    description: "Enhanced cybernetic guardian protecting the digital realm from corporate tyranny and cyber threats.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6849.JPG-oqzHTYLByxLbuPImq5YjuKbD5r59ws.jpeg",
    powers: ["Cybernetic Enhancement", "Digital Interface", "Energy Weapons", "Hacking"],
    powerLevel: 85,
    alignment: "Hero",
  },
  {
    id: 5,
    name: "Rose Thorn",
    series: "Garden of Secrets",
    description:
      "Mysterious heroine with the power to control nature and emotions, bringing healing to a broken world.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6845.JPG-95aVkBPnn6V0fU30e0K2UQ4dYaN28g.jpeg",
    powers: ["Plant Control", "Empathy", "Healing Touch", "Nature Communication"],
    powerLevel: 78,
    alignment: "Hero",
  },
  {
    id: 6,
    name: "Frontier Marshal",
    series: "Wild Justice",
    description: "Fearless lawkeeper of the untamed western territories, bringing justice to the lawless frontier.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6841.JPG-JyIEpq6Sqbr9vtzJ2R1zEVaJFIWm2C.jpeg",
    powers: ["Expert Marksmanship", "Horseback Riding", "Leadership", "Survival Skills"],
    powerLevel: 72,
    alignment: "Hero",
  },
  {
    id: 7,
    name: "Desert Rose",
    series: "Wild Territories",
    description: "Adventurous spirit of the American West, fighting for justice in the harsh desert landscape.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6839.JPG-AnjVjJhCWtt6g1vtLGnQPxFu6go6fQ.jpeg",
    powers: ["Desert Survival", "Quick Draw", "Animal Communication", "Tracking"],
    powerLevel: 70,
    alignment: "Hero",
  },
  {
    id: 8,
    name: "Crimson Executive",
    series: "Corporate Shadows",
    description:
      "Powerful corporate leader with supernatural abilities, walking the line between business and darkness.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6848.JPG-M13LZGPjXaNcA4N8hpQeO1SoJVrilT.jpeg",
    powers: ["Mind Control", "Corporate Influence", "Shadow Manipulation", "Strategic Genius"],
    powerLevel: 82,
    alignment: "Anti-Hero",
  },
  {
    id: 9,
    name: "Golden Mystic",
    series: "Arcane Arts",
    description: "Master of golden magic and ancient mystical arts, wielding power beyond mortal comprehension.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6847.JPG-Z5A3ITDfOdsLE1zRxUsR2G3skY12lL.jpeg",
    powers: ["Golden Magic", "Transmutation", "Mystical Arts", "Ancient Knowledge"],
    powerLevel: 90,
    alignment: "Hero",
  },
]

const getPowerIcon = (power: string) => {
  if (power.includes("Energy") || power.includes("Magic")) return Zap
  if (power.includes("Protection") || power.includes("Shield")) return Shield
  if (power.includes("Healing") || power.includes("Empathy")) return Heart
  if (power.includes("Combat") || power.includes("Marksmanship")) return Sword
  if (power.includes("Divine") || power.includes("Cosmic")) return Star
  return Sparkles
}

const getAlignmentColor = (alignment: string) => {
  switch (alignment) {
    case "Hero":
      return "bg-green-600"
    case "Anti-Hero":
      return "bg-yellow-600"
    case "Neutral":
      return "bg-blue-600"
    default:
      return "bg-gray-600"
  }
}

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Character Profiles</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Meet the legendary heroes, villains, and complex characters that populate our comic universe, each with
            their own unique abilities and compelling stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characters.map((character) => (
            <Link key={character.id} href={`/characters/${character.id}`}>
              <Card className="group bg-slate-800 border-slate-700 hover:border-purple-400 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={character.image || "/placeholder.svg"}
                      alt={character.name}
                      width={300}
                      height={350}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className={`${getAlignmentColor(character.alignment)} text-white`}>
                        {character.alignment}
                      </Badge>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {character.name}
                  </h3>
                  <p className="text-purple-400 text-sm mb-2">{character.series}</p>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-2">{character.description}</p>

                  {/* Power Level */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-slate-400 mb-1">
                      <span>Power Level</span>
                      <span>{character.powerLevel}/100</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${character.powerLevel}%` }}
                      />
                    </div>
                  </div>

                  {/* Powers */}
                  <div className="flex flex-wrap gap-1">
                    {character.powers.slice(0, 3).map((power, index) => {
                      const Icon = getPowerIcon(power)
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-1 text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full"
                        >
                          <Icon className="h-3 w-3" />
                          <span>{power}</span>
                        </div>
                      )
                    })}
                    {character.powers.length > 3 && (
                      <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full">
                        +{character.powers.length - 3} more
                      </span>
                    )}
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
