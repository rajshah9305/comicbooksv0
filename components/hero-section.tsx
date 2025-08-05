import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/raj966-cWM0LNHzbMZGHk9YW8ztVu6CWsV2Q8.png')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Unleash Your Imagination
        </h1>
        <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Dive into a universe of captivating stories, breathtaking art, and iconic characters. Explore the boundless
          creativity of comic books.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link href="/gallery">Explore Gallery</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
          >
            <Link href="/blog">Read Our Blog</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
