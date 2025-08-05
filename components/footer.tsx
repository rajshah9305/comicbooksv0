import Link from "next/link"
import { BookOpen, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold text-white">ComicVerse</span>
            </Link>
            <p className="text-slate-300 mb-4 max-w-md">
              Your gateway to the extraordinary world of comic books. Discover amazing stories, incredible art, and
              unforgettable characters that will transport you to new dimensions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/covers" className="text-slate-300 hover:text-white transition-colors">
                  Comic Covers
                </Link>
              </li>
              <li>
                <Link href="/characters" className="text-slate-300 hover:text-white transition-colors">
                  Characters
                </Link>
              </li>
              <li>
                <Link href="/concept-art" className="text-slate-300 hover:text-white transition-colors">
                  Concept Art
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-slate-300">
                <Mail className="h-4 w-4" />
                <span>hello@comicverse.com</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-300">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-300">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">© 2024 ComicVerse. All rights reserved. Unleash your imagination.</p>
        </div>
      </div>
    </footer>
  )
}
