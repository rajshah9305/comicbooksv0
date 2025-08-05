import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, Eye } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Art of Character Design: Creating Memorable Heroes",
    excerpt:
      "Exploring how we create memorable characters that resonate with readers through visual storytelling, from initial sketches to final designs.",
    content: "Character design is the heart of comic book storytelling...",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Design Process",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6847.JPG-Z5A3ITDfOdsLE1zRxUsR2G3skY12lL.jpeg",
    views: 2340,
    featured: true,
  },
  {
    id: 2,
    title: "Cyberpunk Aesthetics in Modern Comics",
    excerpt:
      "A deep dive into how cyberpunk influences shape contemporary comic book art and storytelling, blending technology with humanity.",
    content: "The cyberpunk genre has profoundly influenced modern comics...",
    author: "Mike Rodriguez",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Art Style",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6849.JPG-oqzHTYLByxLbuPImq5YjuKbD5r59ws.jpeg",
    views: 1890,
    featured: false,
  },
  {
    id: 3,
    title: "Historical Accuracy in Fantasy Comics",
    excerpt:
      "Balancing historical research with creative freedom when depicting ancient civilizations and mythological elements.",
    content: "Creating historically-inspired fantasy requires careful research...",
    author: "Emma Johnson",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Research",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7149.PNG-pQp9dYBksCRGYtxOnZ2lbfQjZCDVJq.png",
    views: 1560,
    featured: true,
  },
  {
    id: 4,
    title: "Color Psychology in Comic Storytelling",
    excerpt: "Understanding how color choices impact mood, atmosphere, and reader engagement in visual narratives.",
    content: "Color is one of the most powerful tools in visual storytelling...",
    author: "David Kim",
    date: "2023-12-28",
    readTime: "5 min read",
    category: "Color Theory",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6845.JPG-95aVkBPnn6V0fU30e0K2UQ4dYaN28g.jpeg",
    views: 2100,
    featured: false,
  },
  {
    id: 5,
    title: "Building Compelling Backstories",
    excerpt: "The importance of character history and how it influences present-day storytelling in comic narratives.",
    content: "Every great character needs a compelling backstory...",
    author: "Lisa Park",
    date: "2023-12-20",
    readTime: "6 min read",
    category: "Writing",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6848.JPG-M13LZGPjXaNcA4N8hpQeO1SoJVrilT.jpeg",
    views: 1780,
    featured: false,
  },
  {
    id: 6,
    title: "The Evolution of Western Comics",
    excerpt: "Tracing the development of Western-themed comics from classic tales to modern interpretations.",
    content: "Western comics have evolved significantly over the decades...",
    author: "Alex Thompson",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "Genre Study",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6839.JPG-AnjVjJhCWtt6g1vtLGnQPxFu6go6fQ.jpeg",
    views: 1420,
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Creative Insights Blog</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Dive deep into the creative process with articles about storytelling, character development, and the art of
            comic creation from our talented team.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <Card className="group bg-slate-800 border-slate-700 hover:border-purple-400 transition-all duration-300 h-full">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={600}
                          height={300}
                          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-yellow-600 text-white">Featured</Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="bg-purple-600 text-white">
                            {post.category}
                          </Badge>
                        </div>
                        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-slate-300 mb-4 line-clamp-2">{post.excerpt}</p>
                        <div className="flex items-center justify-between text-sm text-slate-400">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{post.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <Card className="group bg-slate-800 border-slate-700 hover:border-purple-400 transition-all duration-300 h-full">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="bg-purple-600 text-white">
                          {post.category}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
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
    </div>
  )
}
