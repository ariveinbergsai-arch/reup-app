'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Camera, X, Upload, DollarSign, Loader2 } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { supabase } from '@/lib/supabase'

const CATEGORIES = ['Tops', 'Bottoms', 'Outerwear', 'Footwear', 'Accessories', 'Other']
const CONDITIONS = ['New with tags', 'Like new', 'Good', 'Fair']
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

export default function SellPage() {
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()
  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [condition, setCondition] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [customSize, setCustomSize] = useState('')
  const [price, setPrice] = useState('')
  const [images, setImages] = useState<string[]>([])
  const [tagImage, setTagImage] = useState('')
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login?redirect=/sell')
    }
  }, [user, authLoading, router])

  const fee = price ? (parseFloat(price) * 0.1).toFixed(2) : '0.00'
  const earnings = price ? (parseFloat(price) * 0.9).toFixed(2) : '0.00'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!user) {
      setError('You must be logged in to create a listing')
      return
    }

    // Validation
    if (!title.trim()) {
      setError('Title is required')
      return
    }
    if (!category) {
      setError('Please select a category')
      return
    }
    if (!condition) {
      setError('Please select a condition')
      return
    }
    if (!selectedSize) {
      setError('Please select a size')
      return
    }
    if (!price || parseFloat(price) <= 0) {
      setError('Please enter a valid price')
      return
    }

    setLoading(true)

    try {
      const finalSize = selectedSize === 'custom' ? customSize : selectedSize
      
      // For now, use placeholder images if none uploaded
      const finalImages = images.length > 0 ? images : ['https://via.placeholder.com/400x400?text=No+Image']
      const finalTagImage = tagImage || 'https://via.placeholder.com/400x400?text=No+Tag'

      const { data, error: insertError } = await supabase
        .from('listings')
        .insert({
          user_id: user.id,
          title: title.trim(),
          description: description.trim() || null,
          price: parseFloat(price),
          category: category.toLowerCase(),
          size: finalSize,
          condition: condition.toLowerCase().replace(/ /g, '-'),
          images: finalImages,
          tag_image: finalTagImage,
          status: 'active',
        })
        .select()
        .single()

      if (insertError) {
        console.error('Insert error:', insertError)
        setError(insertError.message)
        return
      }

      setSuccess(true)
      setTimeout(() => {
        router.push('/')
      }, 2000)
    } catch (err) {
      console.error('Submit error:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  // Show loading while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[var(--muted)] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[var(--primary)]" />
      </div>
    )
  }

  // Don't render form if not logged in (will redirect)
  if (!user) {
    return (
      <div className="min-h-screen bg-[var(--muted)] flex items-center justify-center">
        <p>Redirecting to login...</p>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[var(--muted)] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Listed Successfully!</h1>
          <p className="text-[var(--muted-foreground)] mt-2">Your item is now live. Redirecting...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[var(--muted)]">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">List an Item</h1>
          <p className="text-[var(--muted-foreground)]">Fill in the details to start selling</p>
        </div>

        <div className="card p-6 sm:p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
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
                <span className="text-[var(--muted-foreground)] font-normal">(optional for now)</span>
              </label>
              <div
                className="h-32 rounded-xl border-2 border-dashed border-[var(--border)] flex flex-col items-center justify-center cursor-pointer bg-[var(--muted)] hover:bg-[var(--border)] hover:border-[var(--primary)] transition-colors"
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
                    <Upload className="w-6 h-6 text-[var(--muted-foreground)] mb-2" />
                    <span className="text-sm font-medium text-[var(--muted-foreground)]">Upload tag photo</span>
                    <span className="text-xs text-[var(--muted-foreground)] mt-1">For verification</span>
                  </>
                )}
              </div>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-semibold mb-3">Title <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="e.g. Vintage Nike ACG Windbreaker"
                className="input"
                maxLength={80}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold mb-3">Description</label>
              <textarea
                placeholder="Describe your item — brand, condition, measurements, flaws..."
                className="input min-h-[120px] resize-none"
                maxLength={1000}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Category & Condition Row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-3">Category <span className="text-red-500">*</span></label>
                <select 
                  className="input"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Select category</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">Condition <span className="text-red-500">*</span></label>
                <select 
                  className="input"
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  required
                >
                  <option value="">Select condition</option>
                  {CONDITIONS.map((cond) => (
                    <option key={cond} value={cond}>{cond}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-semibold mb-3">Size <span className="text-red-500">*</span></label>
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
              {selectedSize === 'custom' && (
                <input
                  type="text"
                  placeholder="Enter custom size (e.g. 32x30, US 10)"
                  className="input mt-3"
                  value={customSize}
                  onChange={(e) => setCustomSize(e.target.value)}
                  required
                />
              )}
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-semibold mb-3">Price <span className="text-red-500">*</span></label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
                <input
                  type="number"
                  placeholder="0.00"
                  className="input pl-10 text-lg font-semibold"
                  min={1}
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              
              {/* Price Breakdown */}
              {price && parseFloat(price) > 0 && (
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
            <button 
              type="submit" 
              className="btn-primary w-full py-4 text-base flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating Listing...
                </>
              ) : (
                'List Item'
              )}
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
