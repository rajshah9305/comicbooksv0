import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { User, Clock } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Art of Character Design",
    excerpt: "Exploring how we create memorable characters that resonate with readers through visual storytelling.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6847.JPG-Z5A3ITDfOdsLE1zRxUsR2G3skY12lL.jpeg",
  },
  {
    id: 2,
    title: "Cyberpunk Aesthetics in Modern Comics",
    excerpt: "A deep dive into how cyberpunk influences shape contemporary comic book art and storytelling.",
    author: "Mike Rodriguez",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6849.JPG-oqzHTYLByxLbuPImq5YjuKbD5r59ws.jpeg",
  },
  {
    id: 3,
    title: "Historical Accuracy in Fantasy Comics",
    excerpt: "Balancing historical research with creative freedom when depicting ancient civilizations.",
    author: "Emma Johnson",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7149.PNG-pQp9dYBksCRGYtxOnZ2lbfQjZCDVJq.png",
  },
]

export function BlogPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Creative Insights</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Dive into our creative process with articles about storytelling, character development, and the art of comic
            creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <Card className="group bg-slate-800 border-slate-700 hover:border-purple-400 transition-all duration-300 h-full">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
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

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
          >
            Read All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
