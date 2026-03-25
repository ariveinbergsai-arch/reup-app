'use client'

import { ListingCard } from '@/components/listing-card'
import { Settings, Edit } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

// Mock data
const USER = {
  username: 'vintagekings',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
  bio: 'Curating the finest vintage pieces since 2019. Based in LA.',
  followers: 1234,
  following: 567,
  rating: 4.9,
  sales: 127,
}

const USER_LISTINGS = [
  {
    id: '1',
    title: 'Vintage Nike Windbreaker',
    price: 85,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    seller: 'vintagekings',
    size: 'L',
  },
  {
    id: '3',
    title: 'Carhartt WIP Jacket',
    price: 145,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop',
    seller: 'vintagekings',
    size: 'XL',
  },
  {
    id: '4',
    title: 'Vintage Levis 501',
    price: 65,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    seller: 'vintagekings',
    size: '32',
  },
]

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <Image
          src={USER.avatar}
          alt={USER.username}
          width={120}
          height={120}
          className="rounded-full"
        />
        
        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <h1 className="text-2xl font-bold">@{USER.username}</h1>
            <div className="flex gap-2">
              <Link href="/profile/edit" className="btn-secondary flex items-center gap-2 text-sm">
                <Edit className="w-4 h-4" />
                Edit Profile
              </Link>
              <Link href="/settings" className="p-2 hover:bg-[var(--muted)] rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <p className="text-[var(--muted-foreground)] mt-2 max-w-md">{USER.bio}</p>
          
          <div className="flex justify-center sm:justify-start gap-6 mt-4">
            <div className="text-center">
              <p className="font-bold">{USER.followers.toLocaleString()}</p>
              <p className="text-sm text-[var(--muted-foreground)]">Followers</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{USER.following}</p>
              <p className="text-sm text-[var(--muted-foreground)]">Following</p>
            </div>
            <div className="text-center">
              <p className="font-bold">⭐ {USER.rating}</p>
              <p className="text-sm text-[var(--muted-foreground)]">{USER.sales} sales</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[var(--border)] mt-8">
        <button className="px-6 py-3 border-b-2 border-[var(--primary)] font-medium">
          Listings
        </button>
        <button className="px-6 py-3 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
          Sold
        </button>
        <button className="px-6 py-3 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">
          Reviews
        </button>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {USER_LISTINGS.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  )
}
