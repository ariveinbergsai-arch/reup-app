import Link from 'next/link'

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-zinc-400 mb-12">Last updated: March 2026</p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using REUP ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Description of Service</h2>
            <p>
              REUP is an online marketplace that enables users to buy and sell pre-owned fashion items. We provide the platform and tools for transactions but are not a party to sales between buyers and sellers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. User Accounts</h2>
            <p>
              To use certain features of the Service, you must create an account. You agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Buying on REUP</h2>
            <p>As a buyer, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Pay for items you purchase in a timely manner</li>
              <li>Provide accurate shipping information</li>
              <li>Report any issues within 7 days of receiving an item</li>
              <li>Not engage in fraudulent behavior</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Selling on REUP</h2>
            <p>As a seller, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>List only authentic items that you own and have the right to sell</li>
              <li>Accurately describe item condition, including any flaws</li>
              <li>Ship items within 7 days of a sale</li>
              <li>Package items securely</li>
              <li>Pay applicable fees and commissions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Fees</h2>
            <p>
              Sellers pay a 9% commission on completed sales. There are no listing fees. We reserve the right to modify our fee structure with 30 days notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Prohibited Items</h2>
            <p>The following items may not be listed on REUP:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Counterfeit or replica items</li>
              <li>Stolen property</li>
              <li>Items that violate intellectual property rights</li>
              <li>Hazardous materials</li>
              <li>Items illegal to sell in the United States</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Intellectual Property</h2>
            <p>
              All content on REUP, including logos, designs, and software, is owned by or licensed to us. You may not copy, modify, or distribute our content without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Limitation of Liability</h2>
            <p>
              REUP is not responsible for the quality, safety, or legality of items listed. We provide buyer protection as described in our Returns policy, but our liability is limited to the purchase price of affected transactions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">10. Termination</h2>
            <p>
              We may suspend or terminate your account at any time for violation of these terms or for any other reason at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">11. Changes to Terms</h2>
            <p>
              We may update these terms at any time. Continued use of the Service after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">12. Contact</h2>
            <p>
              For questions about these terms, contact us at <a href="mailto:legal@reup-us.com" className="text-white underline">legal@reup-us.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
