'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useState } from 'react'

type ListingCardProps = {
  id: string
  title: string
  price: number
  image: string
  seller: string
  size: string
  brand?: string
  originalPrice?: number
}

export function ListingCard({ id, title, price, image, seller, size, brand, originalPrice }: ListingCardProps) {
  const [liked, setLiked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Link href={`/listing/${id}`} className="group block">
      {/* Image */}
      <div className="relative aspect-[3/4] bg-[var(--muted)] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover transition-transform duration-300 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Like Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            setLiked(!liked)
          }}
          className="absolute top-3 right-3 p-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className={`w-5 h-5 ${liked ? 'fill-red-500 text-red-500' : 'text-white drop-shadow-lg'}`} />
        </button>
      </div>

      {/* Info */}
      <div className="py-3 space-y-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-medium">${price}</span>
          {originalPrice && (
            <span className="text-sm text-[var(--muted-foreground)] line-through">${originalPrice}</span>
          )}
        </div>
        
        {brand && (
          <p className="text-sm font-medium truncate">{brand}</p>
        )}
        
        <p className="text-sm text-[var(--muted-foreground)] truncate">{title}</p>
        
        <div className="flex items-center justify-between text-xs text-[var(--muted-foreground)]">
          <span>{size}</span>
          <span>@{seller}</span>
        </div>
      </div>
    </Link>
  )
}
