import Link from 'next/link'
import { ShieldCheck, AlertCircle, RefreshCw, MessageSquare } from 'lucide-react'

export default function ReturnsPage() {
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
        <h1 className="text-4xl font-bold mb-2">Returns & Buyer Protection</h1>
        <p className="text-zinc-400 mb-12">Your purchase is protected</p>

        {/* Protection Badge */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl p-8 mb-12 text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-4 text-green-500" />
          <h2 className="text-2xl font-bold mb-2">REUP Buyer Protection</h2>
          <p className="text-zinc-400">Every purchase is backed by our guarantee</p>
        </div>

        {/* When Returns Apply */}
        <div className="space-y-8 text-zinc-300">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
              <RefreshCw className="w-5 h-5" />
              When You Can Return
            </h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-white">Item not as described</p>
                  <p className="text-sm text-zinc-400">Condition, size, or details differ from the listing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-white">Inauthentic item</p>
                  <p className="text-sm text-zinc-400">Item is counterfeit or not genuine</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-white">Damaged in shipping</p>
                  <p className="text-sm text-zinc-400">Item arrived damaged or defective</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-white">Wrong item received</p>
                  <p className="text-sm text-zinc-400">You received a different item than ordered</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              What's Not Covered
            </h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-zinc-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-white">Change of mind</p>
                  <p className="text-sm text-zinc-400">You simply no longer want the item</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-zinc-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-white">Fit issues</p>
                  <p className="text-sm text-zinc-400">Item doesn't fit but matches listed measurements</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-zinc-600 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-white">Minor wear</p>
                  <p className="text-sm text-zinc-400">Normal signs of use on pre-owned items</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              How to Request a Return
            </h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <div>
                      <p className="font-medium text-white">Contact us within 7 days</p>
                      <p className="text-zinc-400">Reach out within 7 days of receiving your item</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <div>
                      <p className="font-medium text-white">Provide photos & details</p>
                      <p className="text-zinc-400">Show us the issue with clear photos and description</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <div>
                      <p className="font-medium text-white">We review & respond</p>
                      <p className="text-zinc-400">Our team will review and respond within 48 hours</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 bg-white text-black rounded-full flex items-center justify-center text-xs font-bold">4</span>
                    <div>
                      <p className="font-medium text-white">Return & get refunded</p>
                      <p className="text-zinc-400">Ship the item back and receive your full refund</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12 p-6 bg-zinc-900 rounded-xl border border-zinc-800 text-center">
          <h3 className="text-lg font-medium mb-2">Need to start a return?</h3>
          <p className="text-zinc-400 text-sm mb-4">Our team is ready to help</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-6 py-2 font-medium hover:bg-zinc-200 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  )
}
