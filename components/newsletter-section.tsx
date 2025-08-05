"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, CheckCircle } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-r from-purple-900 to-slate-800 border-purple-600">
          <CardContent className="p-8 text-center">
            <Mail className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Stay in the Loop</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Get the latest updates on new releases, character reveals, and behind-the-scenes content delivered
              straight to your inbox.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                  required
                />
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700 whitespace-nowrap">
                  Subscribe Now
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center space-x-2 text-green-400">
                <CheckCircle className="h-5 w-5" />
                <span>Thank you for subscribing!</span>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
