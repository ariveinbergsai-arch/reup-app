'use client'

import { useState } from 'react'
import { Camera, X, Upload, Info, DollarSign } from 'lucide-react'

const CATEGORIES = ['Tops', 'Bottoms', 'Outerwear', 'Footwear', 'Accessories', 'Other']
const CONDITIONS = ['New with tags', 'Like new', 'Good', 'Fair']
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

export default function SellPage() {
  const [images, setImages] = useState<string[]>([])
  const [tagImage, setTagImage] = useState<string>('')
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [price, setPrice] = useState<string>('')

  const fee = price ? (parseFloat(price) * 0.1).toFixed(2) : '0.00'
  const earnings = price ? (parseFloat(price) * 0.9).toFixed(2) : '0.00'

  return (
    <div className="min-h-screen bg-[var(--muted)]">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">List an Item</h1>
          <p className="text-[var(--muted-foreground)]">Fill in the details to start selling</p>
        </div>

        <div className="card p-6 sm:p-8">
          <form className="space-y-8">
            {/* Photos Section */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                <Camera className="w-4 h-4" />
                Photos
                <span className="text-[var(--muted-foreground)] font-normal">(up to 5)</span>
              </label>
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`aspect-square rounded-xl border-2 border-dashed flex items-center justify-center cursor-pointer transition-all duration-200 ${
                      i === 0 && images.length === 0
                        ? 'border-[var(--primary)] bg-[var(--muted)] hover:bg-[var(--border)]'
                        : 'border-[var(--border)] bg-[var(--muted)] hover:border-[var(--primary)]'
                    }`}
                  >
                    {images[i] ? (
                      <div className="relative w-full h-full">
                        <img src={images[i]} alt="" className="w-full h-full object-cover rounded-xl" />
                        <button
                          type="button"
                          className="absolute -top-1 -right-1 p-1 bg-red-500 rounded-full shadow-lg"
                          onClick={() => setImages(images.filter((_, idx) => idx !== i))}
                        >
                          <X className="w-3 h-3 text-white" />
                        </button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Camera className={`w-5 h-5 mx-auto ${i === 0 ? 'text-[var(--primary)]' : 'text-[var(--muted-foreground)]'}`} />
                        {i === 0 && <span className="text-xs text-[var(--primary)] font-medium mt-1 block">Add</span>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--muted-foreground)] mt-2">First photo is the cover. Drag to reorder.</p>
            </div>

            {/* Tag Photo */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                <Upload className="w-4 h-4" />
                Tag Photo
                <span className="tag-accent text-xs ml-1">Required</span>
              </label>
              <div
                className="h-32 rounded-xl border-2 border-dashed border-[var(--primary)] flex flex-col items-center justify-center cursor-pointer bg-[var(--muted)] hover:bg-[var(--border)] transition-colors"
              >
                {tagImage ? (
                  <div className="relative w-full h-full">
                    <img src={tagImage} alt="" className="w-full h-full object-contain rounded-xl p-2" />
                    <button
                      type="button"
                      className="absolute top-2 right-2 p-1 bg-red-500 rounded-full shadow-lg"
                      onClick={() => setTagImage('')}
                    >
                      <X className="w-3 h-3 text-white" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-6 h-6 text-[var(--primary)] mb-2" />
                    <span className="text-sm font-medium text-[var(--primary)]">Upload tag photo</span>
                    <span className="text-xs text-[var(--muted-foreground)] mt-1">For verification</span>
                  </>
                )}
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-semibold mb-3">Title</label>
              <input
                type="text"
                placeholder="e.g. Vintage Nike ACG Windbreaker"
                className="input"
                maxLength={80}
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold mb-3">Description</label>
              <textarea
                placeholder="Describe your item — brand, condition, measurements, flaws..."
                className="input min-h-[120px] resize-none"
                maxLength={1000}
              />
            </div>

            {/* Category & Condition Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-3">Category</label>
                <select className="input">
                  <option value="">Select category</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">Condition</label>
                <select className="input">
                  <option value="">Select condition</option>
                  {CONDITIONS.map((cond) => (
                    <option key={cond} value={cond.toLowerCase().replace(/ /g, '-')}>{cond}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-semibold mb-3">Size</label>
              <div className="flex flex-wrap gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      selectedSize === size
                        ? 'bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm'
                        : 'bg-[var(--muted)] border border-[var(--border)] hover:border-[var(--primary)]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setSelectedSize('custom')}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    selectedSize === 'custom'
                      ? 'bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm'
                      : 'bg-[var(--muted)] border border-[var(--border)] hover:border-[var(--primary)]'
                  }`}
                >
                  Custom
                </button>
              </div>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-semibold mb-3">Price</label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
                <input
                  type="number"
                  placeholder="0.00"
                  className="input pl-10 text-lg font-semibold"
                  min={1}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              
              {/* Price Breakdown */}
              {price && (
                <div className="mt-4 p-4 rounded-xl bg-[var(--muted)] space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--muted-foreground)]">Item price</span>
                    <span>${parseFloat(price).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--muted-foreground)]">REUP fee (10%)</span>
                    <span>-${fee}</span>
                  </div>
                  <div className="flex justify-between font-semibold pt-2 border-t border-[var(--border)]">
                    <span>You'll earn</span>
                    <span className="text-green-600">${earnings}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Submit */}
            <button type="submit" className="btn-primary w-full py-4 text-base">
              List Item
            </button>

            <p className="text-xs text-center text-[var(--muted-foreground)]">
              By listing, you agree to our Terms of Service and Seller Guidelines.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
