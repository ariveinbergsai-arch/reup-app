'use client'

import { useState } from 'react'
import { X, DollarSign, Send } from 'lucide-react'

type OfferModalProps = {
  isOpen: boolean
  onClose: () => void
  listingTitle: string
  listingPrice: number
  listingImage: string
}

export function OfferModal({ isOpen, onClose, listingTitle, listingPrice, listingImage }: OfferModalProps) {
  const [offerAmount, setOfferAmount] = useState('')
  const [message, setMessage] = useState('')

  if (!isOpen) return null

  const suggestedOffers = [
    Math.floor(listingPrice * 0.8),
    Math.floor(listingPrice * 0.85),
    Math.floor(listingPrice * 0.9),
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[var(--background)] w-full sm:max-w-md sm:rounded-lg border border-[var(--border)] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
          <h2 className="font-bold text-lg">Make an Offer</h2>
          <button onClick={onClose} className="p-1 hover:opacity-60">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Item Preview */}
        <div className="flex gap-4 p-4 border-b border-[var(--border)]">
          <img 
            src={listingImage} 
            alt={listingTitle}
            className="w-20 h-24 object-cover bg-[var(--muted)]"
          />
          <div>
            <p className="font-medium">{listingTitle}</p>
            <p className="text-lg font-bold mt-1">${listingPrice}</p>
            <p className="text-xs text-[var(--muted-foreground)] mt-1">Listed price</p>
          </div>
        </div>

        {/* Offer Form */}
        <div className="p-4 space-y-4">
          {/* Offer Amount */}
          <div>
            <label className="block text-sm font-medium mb-2">Your Offer</label>
            <div className="relative">
              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
              <input
                type="number"
                value={offerAmount}
                onChange={(e) => setOfferAmount(e.target.value)}
                placeholder="0"
                className="input pl-10 text-xl font-bold"
              />
            </div>
          </div>

          {/* Suggested Offers */}
          <div>
            <p className="text-xs text-[var(--muted-foreground)] mb-2">Suggested offers:</p>
            <div className="flex gap-2">
              {suggestedOffers.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setOfferAmount(amount.toString())}
                  className={`flex-1 py-2 text-sm font-medium border transition-colors ${
                    offerAmount === amount.toString()
                      ? 'border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]'
                      : 'border-[var(--border)] hover:border-[var(--foreground)]'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-2">Message (optional)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Add a message to the seller..."
              className="input min-h-[80px] resize-none text-sm"
              maxLength={500}
            />
          </div>

          {/* Summary */}
          {offerAmount && (
            <div className="bg-[var(--muted)] p-3 space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-[var(--muted-foreground)]">Your offer</span>
                <span className="font-medium">${offerAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--muted-foreground)]">Savings</span>
                <span className="font-medium text-green-600">
                  ${listingPrice - parseInt(offerAmount)} ({Math.round((1 - parseInt(offerAmount) / listingPrice) * 100)}% off)
                </span>
              </div>
            </div>
          )}

          {/* Submit */}
          <button 
            className="btn-primary w-full flex items-center justify-center gap-2"
            disabled={!offerAmount || parseInt(offerAmount) <= 0}
          >
            <Send className="w-4 h-4" />
            SEND OFFER
          </button>

          <p className="text-xs text-center text-[var(--muted-foreground)]">
            Offers expire in 24 hours. Seller can accept, decline, or counter.
          </p>
        </div>
      </div>
    </div>
  )
}
