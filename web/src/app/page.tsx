import Link from 'next/link'

const FEATURED_DESIGNERS = [
  'Nike', 'Supreme', 'Jordan', 'Stüssy', 'Carhartt', 'The North Face', 'Vintage', 'Levi\'s'
]

// Listings will be loaded from the database
const listings: { id: number; title: string; price: number; size: string; brand: string; image: string; seller: string }[] = []

export default function Home() {
  return (
    <div className="min-h-screen pt-14">
      {/* Hero Banner */}
      <div className="bg-[var(--muted)] border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            THE MARKETPLACE FOR<br />SECONDHAND FASHION
          </h1>
          <p className="text-[var(--muted-foreground)] mb-6 max-w-xl mx-auto">
            Buy and sell authentic pre-owned clothing from top designers and brands.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/shop" className="btn-primary">
              SHOP NOW
            </Link>
            <Link href="/sell" className="btn-secondary">
              START SELLING
            </Link>
          </div>
        </div>
      </div>

      {/* Designer Pills */}
      <div className="border-b border-[var(--border)]">
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {FEATURED_DESIGNERS.map((designer) => (
              <Link
                key={designer}
                href={`/designers/${designer.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 border border-[var(--border)] text-sm whitespace-nowrap hover:border-[var(--foreground)] transition-colors"
              >
                {designer}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Feed */}
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        {listings.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold">JUST DROPPED</h2>
              <Link href="/shop" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                View all →
              </Link>
            </div>
            
            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {listings.map((item) => (
                <Link key={item.id} href={`/listings/${item.id}`} className="group">
                  <div className="aspect-[4/5] bg-[var(--muted)] mb-3 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-[var(--muted-foreground)]">{item.brand}</p>
                    <h3 className="text-sm font-medium truncate">{item.title}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold">${item.price}</p>
                      <p className="text-xs text-[var(--muted-foreground)]">Size {item.size}</p>
                    </div>
                    <p className="text-xs text-[var(--muted-foreground)]">@{item.seller}</p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-3">No listings yet</h2>
              <p className="text-[var(--muted-foreground)] mb-8">
                Be the first to list something on REUP.
              </p>
              <Link href="/sell" className="btn-primary">
                START SELLING
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] mt-16">
        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">REUP</h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                The marketplace for secondhand fashion.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                <li><Link href="/menswear">Menswear</Link></li>
                <li><Link href="/womenswear">Womenswear</Link></li>
                <li><Link href="/sneakers">Sneakers</Link></li>
                <li><Link href="/designers">Designers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider mb-4">Help</h4>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/shipping">Shipping</Link></li>
                <li><Link href="/returns">Returns</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-[var(--muted-foreground)]">
                <li><Link href="/terms">Terms</Link></li>
                <li><Link href="/privacy">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--border)] mt-8 pt-8 text-sm text-[var(--muted-foreground)]">
            © 2026 REUP. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
