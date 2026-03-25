import Link from 'next/link'
import { Package, Truck, Clock, MapPin } from 'lucide-react'

export default function ShippingPage() {
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
        <h1 className="text-4xl font-bold mb-2">Shipping</h1>
        <p className="text-zinc-400 mb-12">How shipping works on REUP</p>

        {/* Key Info Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
            <Package className="w-8 h-8 mx-auto mb-2 text-zinc-400" />
            <p className="text-sm text-zinc-400">Free shipping labels</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
            <Truck className="w-8 h-8 mx-auto mb-2 text-zinc-400" />
            <p className="text-sm text-zinc-400">USPS & UPS</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
            <Clock className="w-8 h-8 mx-auto mb-2 text-zinc-400" />
            <p className="text-sm text-zinc-400">3-7 day delivery</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-center">
            <MapPin className="w-8 h-8 mx-auto mb-2 text-zinc-400" />
            <p className="text-sm text-zinc-400">US shipping</p>
          </div>
        </div>

        <div className="space-y-8 text-zinc-300">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">For Buyers</h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                Shipping costs are set by individual sellers and displayed on each listing. Some sellers offer free shipping on their items.
              </p>
              <p>
                Once your order ships, you'll receive a tracking number via email. Most orders arrive within 3-7 business days, depending on your location and the seller's shipping method.
              </p>
              <p>
                If your item hasn't arrived within 14 days of the expected delivery date, contact our support team for assistance.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">For Sellers</h2>
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                When your item sells, you'll receive a prepaid shipping label via email. Print the label, pack your item securely, and drop it off at any USPS or UPS location.
              </p>
              <p>
                <strong className="text-white">Shipping deadline:</strong> You have 7 days to ship your item after a sale. Items not shipped within this window may result in order cancellation.
              </p>
              <p>
                <strong className="text-white">Packaging tips:</strong> Use a sturdy box or poly mailer. Include any dust bags, tags, or accessories shown in your listing. Consider adding tissue paper for a nice unboxing experience.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">Shipping Rates</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead className="border-b border-zinc-800">
                  <tr>
                    <th className="text-left p-4 text-zinc-400 font-medium">Item Type</th>
                    <th className="text-left p-4 text-zinc-400 font-medium">Est. Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800">
                    <td className="p-4">Accessories (small)</td>
                    <td className="p-4">$5-8</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="p-4">Clothing (standard)</td>
                    <td className="p-4">$8-12</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="p-4">Sneakers</td>
                    <td className="p-4">$12-15</td>
                  </tr>
                  <tr>
                    <td className="p-4">Outerwear (heavy)</td>
                    <td className="p-4">$15-20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">International Shipping</h2>
            <p className="text-sm leading-relaxed">
              REUP currently only supports shipping within the United States. We're working on expanding to international markets — sign up for our newsletter to be notified when we launch in your country.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-zinc-900 rounded-xl border border-zinc-800 text-center">
          <h3 className="text-lg font-medium mb-2">Need help with shipping?</h3>
          <p className="text-zinc-400 text-sm mb-4">Contact our support team</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-6 py-2 font-medium hover:bg-zinc-200 transition-colors"
          >
            Get Help
          </Link>
        </div>
      </div>
    </main>
  )
}
