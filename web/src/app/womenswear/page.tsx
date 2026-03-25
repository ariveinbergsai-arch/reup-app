'use client'

import Link from 'next/link'
import { Search, SlidersHorizontal, Grid3X3, LayoutList } from 'lucide-react'
import { useState } from 'react'

const subcategories = [
  'All Womenswear',
  'Tops',
  'Dresses',
  'Bottoms',
  'Outerwear',
  'Footwear',
  'Accessories',
  'Activewear',
]

export default function WomenswearPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

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
              <Link href="/womenswear" className="text-white">Womenswear</Link>
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
          <span className="text-white">Womenswear</span>
        </div>

        {/* Hero */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 mb-8">
          <h1 className="text-4xl font-bold mb-2">Womenswear</h1>
          <p className="text-zinc-400">Shop pre-owned women's clothing from top designers</p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <span className="text-zinc-500 text-sm">0 items</span>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                placeholder="Search womenswear..."
                className="bg-zinc-900 border border-zinc-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-zinc-600 w-64"
              />
            </div>
            
            <button className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-sm hover:border-zinc-600 transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
            
            <div className="flex items-center border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-zinc-800' : 'hover:bg-zinc-900'}`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-zinc-800' : 'hover:bg-zinc-900'}`}
              >
                <LayoutList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Subcategory Pills */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {subcategories.map(cat => (
            <button
              key={cat}
              className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm whitespace-nowrap hover:border-zinc-600 transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-24 h-24 bg-zinc-900 rounded-full flex items-center justify-center mb-6">
            <Search className="w-10 h-10 text-zinc-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2">No womenswear listed yet</h2>
          <p className="text-zinc-500 mb-6 max-w-md">
            Be the first to list women's clothing on REUP. Start selling your pre-owned fashion today.
          </p>
          <Link
            href="/sell"
            className="bg-white text-black px-6 py-3 font-medium hover:bg-zinc-200 transition-colors"
          >
            LIST YOUR FIRST ITEM
          </Link>
        </div>
      </div>
    </main>
  )
}
