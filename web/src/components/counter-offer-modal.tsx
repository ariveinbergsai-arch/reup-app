'use client'

import { useState } from 'react'
import { X, DollarSign, Check, RotateCcw } from 'lucide-react'

type CounterOfferModalProps = {
  isOpen: boolean
  onClose: () => void
  listingTitle: string
  listingPrice: number
  listingImage: string
  originalOffer: number
  buyerUsername: string
}

export function CounterOfferModal({ 
  isOpen, 
  onClose, 
  listingTitle, 
  listingPrice, 
  listingImage,
  originalOffer,
  buyerUsername
}: CounterOfferModalProps) {
  const [counterAmount, setCounterAmount] = useState('')
  const [message, setMessage] = useState('')

  if (!isOpen) return null

  const suggestedCounters = [
    Math.floor((originalOffer + listingPrice) / 2), // Midpoint
    Math.floor(listingPrice * 0.9), // 10% off
    Math.floor(listingPrice * 0.95), // 5% off
  ].sort((a, b) => a - b)

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
          <h2 className="font-bold text-lg">Respond to Offer</h2>
          <button onClick={onClose} className="p-1 hover:opacity-60">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Offer Details */}
        <div className="p-4 border-b border-[var(--border)] bg-[var(--muted)]">
          <div className="flex gap-4">
            <img 
              src={listingImage} 
              alt={listingTitle}
              className="w-16 h-20 object-cover"
            />
            <div className="flex-1">
              <p className="font-medium text-sm">{listingTitle}</p>
              <p className="text-xs text-[var(--muted-foreground)] mt-1">@{buyerUsername} offered:</p>
              <p className="text-xl font-bold">${originalOffer}</p>
              <p className="text-xs text-[var(--muted-foreground)]">
                Listed at ${listingPrice} ({Math.round((1 - originalOffer / listingPrice) * 100)}% off)
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="p-4 space-y-4">
          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button className="btn-primary flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700">
              <Check className="w-4 h-4" />
              ACCEPT ${originalOffer}
            </button>
            <button className="btn-secondary flex items-center justify-center gap-2">
              <X className="w-4 h-4" />
              DECLINE
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--border)]"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-[var(--background)] text-xs text-[var(--muted-foreground)] uppercase">
                Or counter offer
              </span>
            </div>
          </div>

          {/* Counter Amount */}
          <div>
            <label className="block text-sm font-medium mb-2">Your Counter</label>
            <div className="relative">
              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
              <input
                type="number"
                value={counterAmount}
                onChange={(e) => setCounterAmount(e.target.value)}
                placeholder={suggestedCounters[1].toString()}
                className="input pl-10 text-xl font-bold"
              />
            </div>
          </div>

          {/* Suggested Counters */}
          <div>
            <p className="text-xs text-[var(--muted-foreground)] mb-2">Suggested counters:</p>
            <div className="flex gap-2">
              {suggestedCounters.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setCounterAmount(amount.toString())}
                  className={`flex-1 py-2 text-sm font-medium border transition-colors ${
                    counterAmount === amount.toString()
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
              placeholder="Add a message..."
              className="input min-h-[60px] resize-none text-sm"
              maxLength={500}
            />
          </div>

          {/* Submit Counter */}
          <button 
            className="btn-secondary w-full flex items-center justify-center gap-2"
            disabled={!counterAmount || parseInt(counterAmount) <= originalOffer}
          >
            <RotateCcw className="w-4 h-4" />
            SEND COUNTER OFFER
          </button>

          <p className="text-xs text-center text-[var(--muted-foreground)]">
            Counter offers expire in 24 hours.
          </p>
        </div>
      </div>
    </div>
  )
}
