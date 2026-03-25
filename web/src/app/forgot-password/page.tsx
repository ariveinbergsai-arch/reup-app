'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Mail, ArrowLeft, Loader2 } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    if (!email) {
      setError('Email is required')
      setLoading(false)
      return
    }

    try {
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      })

      if (resetError) {
        setError(resetError.message)
        setLoading(false)
        return
      }

      setSuccess(true)
    } catch (err) {
      setError('Something went wrong. Please try again.')
      console.error('Password reset error:', err)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold">Check your email</h1>
          <p className="text-[var(--muted-foreground)] mt-2">
            We&apos;ve sent a password reset link to <strong>{email}</strong>
          </p>
          <Link href="/login" className="btn-primary inline-flex items-center gap-2 mt-6">
            <ArrowLeft className="w-4 h-4" />
            Back to login
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[var(--primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-[var(--primary-foreground)] font-bold text-2xl">R</span>
          </div>
          <h1 className="text-2xl font-bold">Forgot password?</h1>
          <p className="text-[var(--muted-foreground)] mt-1">
            Enter your email and we&apos;ll send you a reset link
          </p>
        </div>

        {/* Form Card */}
        <div className="card p-6 sm:p-8">
          {error && (
            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input pl-11"
                  placeholder="you@example.com"
                  disabled={loading}
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="btn-primary w-full py-3 flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                'Send Reset Link'
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-[var(--muted-foreground)] mt-6">
          <Link href="/login" className="text-[var(--primary)] font-medium hover:underline inline-flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            Back to login
          </Link>
        </p>
      </div>
    </div>
  )
}
