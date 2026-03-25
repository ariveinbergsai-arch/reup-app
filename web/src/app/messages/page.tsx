'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Send, DollarSign, Check, X } from 'lucide-react'

const CONVERSATIONS = [
  {
    id: '1',
    user: {
      username: 'sneakerplug',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    },
    listing: {
      title: 'Air Jordan 1 Chicago',
      image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=100&h=100&fit=crop',
      price: 420,
    },
    lastMessage: 'Would you take $380?',
    unread: true,
    time: '2m',
    hasOffer: true,
    offerAmount: 380,
  },
  {
    id: '2',
    user: {
      username: 'vintagekings',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
    },
    listing: {
      title: 'Nike ACG Windbreaker',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=100&h=100&fit=crop',
      price: 85,
    },
    lastMessage: 'Shipped! Tracking: 1Z999AA...',
    unread: false,
    time: '1h',
    hasOffer: false,
  },
  {
    id: '3',
    user: {
      username: 'streetstyle',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    listing: {
      title: 'Stüssy Logo Tee',
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=100&h=100&fit=crop',
      price: 45,
    },
    lastMessage: 'Is this still available?',
    unread: true,
    time: '3h',
    hasOffer: false,
  },
]

const MESSAGES = [
  { id: '1', sender: 'them', text: 'Hey, is this still available?', time: '2:30 PM' },
  { id: '2', sender: 'me', text: 'Yes it is!', time: '2:31 PM' },
  { id: '3', sender: 'them', text: 'Would you take $380?', time: '2:32 PM', isOffer: true, amount: 380 },
]

export default function MessagesPage() {
  const [selectedConvo, setSelectedConvo] = useState(CONVERSATIONS[0])
  const [newMessage, setNewMessage] = useState('')

  return (
    <div className="min-h-screen pt-14">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[350px,1fr] h-[calc(100vh-3.5rem)]">
          {/* Conversation List */}
          <div className="border-r border-[var(--border)] overflow-y-auto">
            <div className="p-4 border-b border-[var(--border)]">
              <h1 className="font-bold text-lg">Messages</h1>
            </div>
            
            {CONVERSATIONS.map((convo) => (
              <button
                key={convo.id}
                onClick={() => setSelectedConvo(convo)}
                className={`w-full p-4 flex gap-3 border-b border-[var(--border)] text-left transition-colors ${
                  selectedConvo.id === convo.id ? 'bg-[var(--muted)]' : 'hover:bg-[var(--muted)]'
                }`}
              >
                <Image
                  src={convo.user.avatar}
                  alt={convo.user.username}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${convo.unread ? '' : 'text-[var(--muted-foreground)]'}`}>
                      @{convo.user.username}
                    </span>
                    <span className="text-xs text-[var(--muted-foreground)]">{convo.time}</span>
                  </div>
                  <p className={`text-sm truncate mt-0.5 ${convo.unread ? 'font-medium' : 'text-[var(--muted-foreground)]'}`}>
                    {convo.hasOffer && <span className="text-green-600">[Offer] </span>}
                    {convo.lastMessage}
                  </p>
                  <p className="text-xs text-[var(--muted-foreground)] truncate mt-1">
                    Re: {convo.listing.title}
                  </p>
                </div>
                {convo.unread && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full self-center" />
                )}
              </button>
            ))}
          </div>

          {/* Chat Area */}
          <div className="flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-[var(--border)] flex items-center gap-3">
              <Image
                src={selectedConvo.listing.image}
                alt={selectedConvo.listing.title}
                width={48}
                height={60}
                className="object-cover"
              />
              <div className="flex-1">
                <p className="font-medium">@{selectedConvo.user.username}</p>
                <p className="text-sm text-[var(--muted-foreground)]">
                  {selectedConvo.listing.title} · ${selectedConvo.listing.price}
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {MESSAGES.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.isOffer ? (
                    <div className="bg-[var(--muted)] border border-[var(--border)] p-4 max-w-[300px]">
                      <p className="text-xs text-[var(--muted-foreground)] uppercase mb-2">Offer Received</p>
                      <p className="text-2xl font-bold">${msg.amount}</p>
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        <button className="btn-primary py-2 text-xs flex items-center justify-center gap-1">
                          <Check className="w-3 h-3" /> ACCEPT
                        </button>
                        <button className="btn-secondary py-2 text-xs flex items-center justify-center gap-1">
                          <X className="w-3 h-3" /> DECLINE
                        </button>
                      </div>
                      <button className="w-full mt-2 text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                        Counter Offer
                      </button>
                    </div>
                  ) : (
                    <div
                      className={`px-4 py-2 max-w-[70%] ${
                        msg.sender === 'me'
                          ? 'bg-[var(--foreground)] text-[var(--background)]'
                          : 'bg-[var(--muted)]'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className={`text-xs mt-1 ${
                        msg.sender === 'me' ? 'text-white/60' : 'text-[var(--muted-foreground)]'
                      }`}>
                        {msg.time}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[var(--border)]">
              <div className="flex gap-2">
                <button className="p-3 border border-[var(--border)] hover:border-[var(--foreground)] transition-colors">
                  <DollarSign className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="input flex-1"
                />
                <button className="btn-primary px-4">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
