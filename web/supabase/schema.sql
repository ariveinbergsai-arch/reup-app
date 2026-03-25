-- REUP Database Schema
-- Run this in Supabase SQL Editor (SQL Editor > New Query > Paste > Run)

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users table (extends Supabase auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique not null,
  avatar_url text,
  bio text,
  rating decimal(2,1) default 0,
  total_sales integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Listings table
create table public.listings (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  title text not null,
  description text,
  price decimal(10,2) not null,
  category text not null,
  size text not null,
  condition text not null,
  images text[] not null,
  tag_image text not null,
  status text default 'active' check (status in ('active', 'sold', 'pending', 'deleted')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Favorites/Likes table
create table public.favorites (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  listing_id uuid references public.listings(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, listing_id)
);

-- Messages table
create table public.messages (
  id uuid default uuid_generate_v4() primary key,
  sender_id uuid references public.profiles(id) on delete cascade not null,
  receiver_id uuid references public.profiles(id) on delete cascade not null,
  listing_id uuid references public.listings(id) on delete set null,
  content text not null,
  read boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Orders table
create table public.orders (
  id uuid default uuid_generate_v4() primary key,
  listing_id uuid references public.listings(id) not null,
  buyer_id uuid references public.profiles(id) on delete cascade not null,
  seller_id uuid references public.profiles(id) on delete cascade not null,
  amount decimal(10,2) not null,
  fee decimal(10,2) not null,
  status text default 'pending' check (status in ('pending', 'paid', 'shipped', 'delivered', 'completed', 'cancelled', 'refunded')),
  stripe_payment_id text,
  shipping_address jsonb,
  tracking_number text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Reviews table
create table public.reviews (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references public.orders(id) on delete cascade not null,
  reviewer_id uuid references public.profiles(id) on delete cascade not null,
  reviewed_id uuid references public.profiles(id) on delete cascade not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  comment text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Followers table
create table public.follows (
  id uuid default uuid_generate_v4() primary key,
  follower_id uuid references public.profiles(id) on delete cascade not null,
  following_id uuid references public.profiles(id) on delete cascade not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(follower_id, following_id)
);

-- Enable Row Level Security
alter table public.profiles enable row level security;
alter table public.listings enable row level security;
alter table public.favorites enable row level security;
alter table public.messages enable row level security;
alter table public.orders enable row level security;
alter table public.reviews enable row level security;
alter table public.follows enable row level security;

-- Profiles policies
create policy "Public profiles are viewable by everyone" on public.profiles
  for select using (true);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

-- Listings policies
create policy "Active listings are viewable by everyone" on public.listings
  for select using (status = 'active' or auth.uid() = user_id);

create policy "Users can insert own listings" on public.listings
  for insert with check (auth.uid() = user_id);

create policy "Users can update own listings" on public.listings
  for update using (auth.uid() = user_id);

-- Favorites policies
create policy "Users can view own favorites" on public.favorites
  for select using (auth.uid() = user_id);

create policy "Users can insert own favorites" on public.favorites
  for insert with check (auth.uid() = user_id);

create policy "Users can delete own favorites" on public.favorites
  for delete using (auth.uid() = user_id);

-- Messages policies
create policy "Users can view own messages" on public.messages
  for select using (auth.uid() = sender_id or auth.uid() = receiver_id);

create policy "Users can send messages" on public.messages
  for insert with check (auth.uid() = sender_id);

-- Orders policies
create policy "Users can view own orders" on public.orders
  for select using (auth.uid() = buyer_id or auth.uid() = seller_id);

create policy "Users can create orders as buyer" on public.orders
  for insert with check (auth.uid() = buyer_id);

-- Reviews policies
create policy "Reviews are viewable by everyone" on public.reviews
  for select using (true);

create policy "Users can create reviews for their orders" on public.reviews
  for insert with check (auth.uid() = reviewer_id);

-- Follows policies
create policy "Follows are viewable by everyone" on public.follows
  for select using (true);

create policy "Users can follow" on public.follows
  for insert with check (auth.uid() = follower_id);

create policy "Users can unfollow" on public.follows
  for delete using (auth.uid() = follower_id);

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1)),
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to create profile on signup
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Create storage bucket for images
insert into storage.buckets (id, name, public) values ('listings', 'listings', true);
insert into storage.buckets (id, name, public) values ('avatars', 'avatars', true);

-- Storage policies
create policy "Anyone can view listing images" on storage.objects
  for select using (bucket_id = 'listings');

create policy "Authenticated users can upload listing images" on storage.objects
  for insert with check (bucket_id = 'listings' and auth.role() = 'authenticated');

create policy "Users can update own listing images" on storage.objects
  for update using (bucket_id = 'listings' and auth.uid()::text = (storage.foldername(name))[1]);

create policy "Anyone can view avatars" on storage.objects
  for select using (bucket_id = 'avatars');

create policy "Authenticated users can upload avatars" on storage.objects
  for insert with check (bucket_id = 'avatars' and auth.role() = 'authenticated');
