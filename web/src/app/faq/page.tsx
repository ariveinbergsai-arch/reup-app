'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    category: 'Buying',
    questions: [
      {
        q: 'How do I know items are authentic?',
        a: 'All items on REUP go through our authentication process. Sellers must provide detailed photos and item information. We work to ensure authenticity, but we also offer buyer protection for peace of mind.'
      },
      {
        q: 'How do I make an offer on an item?',
        a: 'Click the "Make Offer" button on any listing page. Enter your offer price and the seller will have 24 hours to accept, counter, or decline. You can have multiple active offers at once.'
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards, debit cards, and PayPal. Payment is only processed when a seller accepts your offer or you purchase at the listed price.'
      },
      {
        q: 'Is shipping included?',
        a: 'Shipping costs vary by seller and are displayed on each listing. Some sellers offer free shipping. You\'ll see the total cost including shipping before completing your purchase.'
      },
    ]
  },
  {
    category: 'Selling',
    questions: [
      {
        q: 'How do I start selling?',
        a: 'Create an account, click "Sell" in the navigation, and follow the listing process. You\'ll need to add photos, describe your item, set a price, and provide shipping details.'
      },
      {
        q: 'What are the seller fees?',
        a: 'REUP charges a 9% commission on all sales. This covers payment processing, platform maintenance, and seller support. There are no listing fees.'
      },
      {
        q: 'How do I get paid?',
        a: 'Once your buyer receives the item and the transaction is complete, payment is released to your connected bank account or PayPal within 3-5 business days.'
      },
      {
        q: 'What items can I sell?',
        a: 'You can sell pre-owned clothing, footwear, and accessories from any brand. Items must be authentic, in wearable condition, and accurately described.'
      },
    ]
  },
  {
    category: 'Account & Safety',
    questions: [
      {
        q: 'How do I contact another user?',
        a: 'You can message sellers directly through the listing page. Click "Message Seller" to start a conversation about sizing, condition, or any other questions.'
      },
      {
        q: 'What if I have a problem with my order?',
        a: 'Contact our support team within 7 days of receiving your item. We offer buyer protection and will work to resolve any issues with incorrect, damaged, or inauthentic items.'
      },
      {
        q: 'Is my personal information safe?',
        a: 'Yes. We use industry-standard encryption to protect your data. We never share your personal information with third parties without your consent.'
      },
    ]
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="border-b border-zinc-800">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left hover:text-zinc-300 transition-colors"
      >
        <span className="font-medium">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 text-zinc-400 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
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

      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
        <p className="text-zinc-400 mb-12">Everything you need to know about buying and selling on REUP</p>

        <div className="space-y-12">
          {faqs.map(category => (
            <div key={category.category}>
              <h2 className="text-xl font-semibold mb-4 text-zinc-300">{category.category}</h2>
              <div className="bg-zinc-900 rounded-xl border border-zinc-800">
                {category.questions.map((faq, i) => (
                  <FAQItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-zinc-900 rounded-xl border border-zinc-800 text-center">
          <h3 className="text-lg font-medium mb-2">Still have questions?</h3>
          <p className="text-zinc-400 text-sm mb-4">Our support team is here to help</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-6 py-2 font-medium hover:bg-zinc-200 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
