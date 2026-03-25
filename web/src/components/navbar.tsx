'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, Menu, X, User, LogOut, MessageSquare, Heart } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useAuth } from '@/lib/auth-context'

const NAV_LINKS = [
  { name: 'Designers', href: '/designers' },
  { name: 'Menswear', href: '/menswear' },
  { name: 'Womenswear', href: '/womenswear' },
  { name: 'Sneakers', href: '/sneakers' },
]

export function Navbar() {
  const router = useRouter()
  const { user, profile, loading, signOut } = useAuth()
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSignOut = async () => {
    await signOut()
    setUserMenuOpen(false)
    router.push('/')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--nav-bg)] text-[var(--nav-fg)]">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Nav */}
        <div className="flex items-center justify-between h-14 px-4">
          {/* Left - Logo & Links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold tracking-tight">
              REUP
            </Link>
            
            <div className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Center - Search */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white/10 border-0 text-white placeholder:text-white/50 px-4 py-2 text-sm focus:outline-none focus:bg-white/20 transition-colors"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            </div>
          </div>

          {/* Right - Actions */}
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="w-5 h-5" />
            </button>
            
            <Link href="/sell" className="hidden sm:block text-sm font-medium hover:opacity-60 transition-opacity">
              SELL
            </Link>
            
            {loading ? (
              <div className="w-8 h-8 rounded-full bg-white/10 animate-pulse" />
            ) : user ? (
              <div className="relative" ref={userMenuRef}>
                <button 
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <div className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center">
                    {profile?.avatar_url ? (
                      <img 
                        src={profile.avatar_url} 
                        alt={profile.username}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-sm font-medium text-[var(--primary-foreground)]">
                        {profile?.username?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}
                      </span>
                    )}
                  </div>
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-lg py-2">
                    <div className="px-4 py-2 border-b border-[var(--border)]">
                      <p className="font-medium text-sm">{profile?.username || 'User'}</p>
                      <p className="text-xs text-[var(--muted-foreground)] truncate">{user.email}</p>
                    </div>
                    <Link 
                      href="/profile"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-[var(--muted)] transition-colors"
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </Link>
                    <Link 
                      href="/messages"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-[var(--muted)] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Messages
                    </Link>
                    <Link 
                      href="/favorites"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-[var(--muted)] transition-colors"
                    >
                      <Heart className="w-4 h-4" />
                      Favorites
                    </Link>
                    <div className="border-t border-[var(--border)] mt-2 pt-2">
                      <button 
                        onClick={handleSignOut}
                        className="flex items-center gap-3 px-4 py-2 text-sm w-full text-left text-red-500 hover:bg-[var(--muted)] transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="text-sm font-medium hover:opacity-60 transition-opacity">
                  LOG IN
                </Link>
                
                <Link href="/signup" className="hidden sm:block btn-primary py-2">
                  SIGN UP
                </Link>
              </>
            )}

            <button 
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="md:hidden px-4 pb-3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-white/10 border-0 text-white placeholder:text-white/50 px-4 py-2 text-sm focus:outline-none"
              autoFocus
            />
          </div>
        )}

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="block text-sm text-white/70 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/sell" 
                className="block text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                SELL
              </Link>
              {!user && (
                <Link 
                  href="/signup" 
                  className="block text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  SIGN UP
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
