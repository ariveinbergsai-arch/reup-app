import Link from 'next/link'

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-zinc-400 mb-12">Last updated: March 2026</p>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8 text-zinc-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>
            <p>
              At REUP, we take your privacy seriously. This policy explains what information we collect, how we use it, and your rights regarding your data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
            
            <h3 className="text-lg font-medium text-white mt-6 mb-2">Information you provide:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Account information (name, email, password)</li>
              <li>Profile information (username, profile picture)</li>
              <li>Payment information (processed securely by our payment providers)</li>
              <li>Shipping addresses</li>
              <li>Communications with other users and support</li>
              <li>Listing information and photos</li>
            </ul>

            <h3 className="text-lg font-medium text-white mt-6 mb-2">Information collected automatically:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Device information (browser type, operating system)</li>
              <li>IP address and location data</li>
              <li>Usage data (pages visited, features used)</li>
              <li>Cookies and similar technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and improve our services</li>
              <li>To process transactions</li>
              <li>To communicate with you about orders and updates</li>
              <li>To personalize your experience</li>
              <li>To prevent fraud and ensure security</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Information Sharing</h2>
            <p>We share your information only in these circumstances:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong className="text-white">With other users:</strong> Username, profile info, and listing details are visible. Shipping addresses are shared with sellers to fulfill orders.</li>
              <li><strong className="text-white">With service providers:</strong> Payment processors, shipping carriers, and cloud hosting services that help us operate.</li>
              <li><strong className="text-white">For legal reasons:</strong> When required by law or to protect our rights and safety.</li>
              <li><strong className="text-white">Business transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Data Security</h2>
            <p>
              We use industry-standard encryption and security measures to protect your data. However, no system is completely secure. We encourage you to use a strong password and protect your account credentials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Delete your account and data</li>
              <li>Opt out of marketing communications</li>
              <li>Export your data</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at <a href="mailto:privacy@reup-us.com" className="text-white underline">privacy@reup-us.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Cookies</h2>
            <p>
              We use cookies and similar technologies to remember your preferences, understand how you use our service, and improve your experience. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Children's Privacy</h2>
            <p>
              REUP is not intended for users under 18. We do not knowingly collect information from children under 18.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">California Privacy Rights</h2>
            <p>
              California residents have additional rights under the CCPA, including the right to know what data we collect and the right to request deletion. Contact us to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. We'll notify you of significant changes via email or through the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
            <p>
              For questions about this privacy policy, contact us at <a href="mailto:privacy@reup-us.com" className="text-white underline">privacy@reup-us.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
