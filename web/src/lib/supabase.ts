import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Listing = {
  id: string
  created_at: string
  user_id: string
  title: string
  description: string
  price: number
  category: string
  size: string
  condition: string
  images: string[]
  tag_image: string
  status: 'active' | 'sold' | 'pending'
  user?: {
    username: string
    avatar_url: string
  }
}

export type User = {
  id: string
  email: string
  username: string
  avatar_url: string
  bio: string
  created_at: string
}
