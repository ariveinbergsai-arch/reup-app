'use client'

import Link from 'next/link'
import { Mail, MessageSquare, Clock, HelpCircle } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <nav className="border-b border-zinc-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold tracking-tight">REUP</Link>
            <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
              <Link href="/designers" className="hover:text-white transition-colors">Designers</Link>
              <Link href="/menswear" className="hover:text-white transition-colors">Menswear</Link>
              <Link href="/womenswear" className="hover:text-white transition-colors">Womenswear</Link>
              <Link href="/sneakers" className="hover:text-white transition-colors">Sneakers</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/sell" className="text-sm font-medium hover:text-zinc-300 transition-colors">SELL</Link>
            <Link href="/login" className="text-sm font-medium hover:text-zinc-300 transition-colors">LOG IN</Link>
            <Link href="/signup" className="text-sm font-medium bg-white text-black px-4 py-2 hover:bg-zinc-200 transition-colors">SIGN UP</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-zinc-400 mb-12">We're here to help</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            {submitted ? (
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Message Sent!</h2>
                <p className="text-zinc-400 text-sm">We'll get back to you within 24-48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-600">
                    <option>General Question</option>
                    <option>Order Issue</option>
                    <option>Return Request</option>
                    <option>Seller Support</option>
                    <option>Report a Problem</option>
                    <option>Partnership Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Order ID (optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. ORD-123456"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black py-3 font-medium hover:bg-zinc-200 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-zinc-400 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Response Time</h3>
                  <p className="text-sm text-zinc-400">We typically respond within 24-48 hours during business days.</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-zinc-400 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Email Us Directly</h3>
                  <p className="text-sm text-zinc-400">support@reup-us.com</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-zinc-400 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Check the FAQ</h3>
                  <p className="text-sm text-zinc-400 mb-2">Many common questions are answered in our help center.</p>
                  <Link href="/faq" className="text-sm text-white hover:underline">View FAQ →</Link>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="w-6 h-6 text-zinc-400 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Social Media</h3>
                  <p className="text-sm text-zinc-400 mb-2">Follow us for updates and announcements</p>
                  <div className="flex gap-4 text-sm">
                    <a href="#" className="text-white hover:underline">Twitter</a>
                    <a href="#" className="text-white hover:underline">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
