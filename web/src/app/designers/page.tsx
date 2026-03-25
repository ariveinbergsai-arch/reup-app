'use client'

import Link from 'next/link'
import { Search } from 'lucide-react'
import { useState } from 'react'

const designers = [
  { name: 'Nike', slug: 'nike', count: 0 },
  { name: 'Supreme', slug: 'supreme', count: 0 },
  { name: 'Jordan', slug: 'jordan', count: 0 },
  { name: 'Stüssy', slug: 'stussy', count: 0 },
  { name: 'Carhartt', slug: 'carhartt', count: 0 },
  { name: 'The North Face', slug: 'the-north-face', count: 0 },
  { name: 'Vintage', slug: 'vintage', count: 0 },
  { name: "Levi's", slug: 'levis', count: 0 },
  { name: 'Adidas', slug: 'adidas', count: 0 },
  { name: 'New Balance', slug: 'new-balance', count: 0 },
  { name: 'Yeezy', slug: 'yeezy', count: 0 },
  { name: 'Off-White', slug: 'off-white', count: 0 },
  { name: 'Balenciaga', slug: 'balenciaga', count: 0 },
  { name: 'Gucci', slug: 'gucci', count: 0 },
  { name: 'Prada', slug: 'prada', count: 0 },
  { name: 'Acne Studios', slug: 'acne-studios', count: 0 },
  { name: 'Rick Owens', slug: 'rick-owens', count: 0 },
  { name: 'Raf Simons', slug: 'raf-simons', count: 0 },
  { name: 'Comme des Garçons', slug: 'comme-des-garcons', count: 0 },
  { name: 'Maison Margiela', slug: 'maison-margiela', count: 0 },
  { name: 'Stone Island', slug: 'stone-island', count: 0 },
  { name: 'Palm Angels', slug: 'palm-angels', count: 0 },
  { name: 'Fear of God', slug: 'fear-of-god', count: 0 },
  { name: 'Kapital', slug: 'kapital', count: 0 },
]

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function DesignersPage() {
  const [search, setSearch] = useState('')
  
  const filteredDesigners = designers.filter(d => 
    d.name.toLowerCase().includes(search.toLowerCase())
  )

  const groupedDesigners = alphabet.reduce((acc, letter) => {
    const matches = filteredDesigners.filter(d => 
      d.name.toUpperCase().startsWith(letter)
    )
    if (matches.length > 0) {
      acc[letter] = matches
    }
    return acc
  }, {} as Record<string, typeof designers>)

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <nav className="border-b border-zinc-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold tracking-tight">REUP</Link>
            <div className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
              <Link href="/designers" className="text-white">Designers</Link>
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

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-zinc-500 mb-6">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Designers</span>
        </div>

        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Designers</h1>
          <p className="text-zinc-400 mb-6">Browse all brands and designers on REUP</p>
          
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search designers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-zinc-600"
            />
          </div>
        </div>

        {/* Alphabet Nav */}
        <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-zinc-800">
          {alphabet.map(letter => (
            <a
              key={letter}
              href={`#${letter}`}
              className={`w-8 h-8 flex items-center justify-center rounded text-sm ${
                groupedDesigners[letter] 
                  ? 'bg-zinc-900 hover:bg-zinc-800 text-white' 
                  : 'text-zinc-700 cursor-default'
              }`}
            >
              {letter}
            </a>
          ))}
        </div>

        {/* Designer List */}
        <div className="space-y-8">
          {Object.entries(groupedDesigners).map(([letter, brands]) => (
            <div key={letter} id={letter}>
              <h2 className="text-2xl font-bold mb-4 text-zinc-500">{letter}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {brands.map(brand => (
                  <Link
                    key={brand.slug}
                    href={`/designers/${brand.slug}`}
                    className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-zinc-600 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium group-hover:text-white transition-colors">{brand.name}</span>
                      <span className="text-xs text-zinc-600">{brand.count} items</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredDesigners.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-500">No designers found matching "{search}"</p>
          </div>
        )}
      </div>
    </main>
  )
}
