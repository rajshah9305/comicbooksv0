import { HeroSection } from "@/components/hero-section"
import { FeaturedCovers } from "@/components/featured-covers"
import { CharacterShowcase } from "@/components/character-showcase"
import { ConceptArtPreview } from "@/components/concept-art-preview"
import { BlogPreview } from "@/components/blog-preview"
import { NewsletterSection } from "@/components/newsletter-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <HeroSection />
      <FeaturedCovers />
      <CharacterShowcase />
      <ConceptArtPreview />
      <BlogPreview />
      <NewsletterSection />
    </main>
  )
}
