import Link from 'next/link'

export default function AboutPage() {
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

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">We're building the future of secondhand fashion</h1>
          <p className="text-xl text-zinc-400">
            A marketplace where style meets sustainability.
          </p>
        </div>

        {/* Mission */}
        <div className="space-y-12 text-zinc-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              REUP exists to make buying and selling pre-owned fashion as easy as buying new. We believe that the most sustainable clothing is what already exists — and that everyone deserves access to quality pieces at fair prices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Why REUP?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="font-semibold text-white mb-2">Buyer Protection</h3>
                <p className="text-sm text-zinc-400">Every purchase is backed by our guarantee. If something's wrong, we make it right.</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="text-3xl mb-4">💸</div>
                <h3 className="font-semibold text-white mb-2">Low Fees</h3>
                <p className="text-sm text-zinc-400">Just 9% commission. No listing fees. Keep more of what you earn.</p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <div className="text-3xl mb-4">✨</div>
                <h3 className="font-semibold text-white mb-2">Curated Quality</h3>
                <p className="text-sm text-zinc-400">We focus on authentic pieces from respected brands and designers.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">The Problem We're Solving</h2>
            <p className="text-lg leading-relaxed mb-4">
              The fashion industry is one of the world's largest polluters. Meanwhile, closets overflow with unworn clothes, and quality pieces end up in landfills.
            </p>
            <p className="text-lg leading-relaxed">
              Existing resale platforms are cluttered, complicated, or charge excessive fees. We're building something better — a clean, simple marketplace that makes secondhand the first choice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Join Us</h2>
            <p className="text-lg leading-relaxed mb-6">
              We're just getting started. Be part of the movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="inline-block bg-white text-black px-6 py-3 font-medium text-center hover:bg-zinc-200 transition-colors"
              >
                CREATE AN ACCOUNT
              </Link>
              <Link
                href="/sell"
                className="inline-block border border-zinc-700 px-6 py-3 font-medium text-center hover:border-white transition-colors"
              >
                START SELLING
              </Link>
            </div>
          </section>
        </div>

        {/* Social Links */}
        <div className="mt-16 pt-8 border-t border-zinc-800 text-center">
          <p className="text-zinc-500 mb-4">Follow us for updates</p>
          <div className="flex justify-center gap-6">
            <a href="https://twitter.com/reloopus" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="https://instagram.com/reup.us" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              Instagram
            </a>
            <a href="https://tiktok.com/@reup.us" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
