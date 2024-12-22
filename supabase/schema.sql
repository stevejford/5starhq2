-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create businesses table
create table if not exists businesses (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  google_place_id text unique,
  address text,
  phone text,
  website text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create review_platforms table
create table if not exists review_platforms (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  platform_key text unique not null,
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create reviews table
create table if not exists reviews (
  id uuid default uuid_generate_v4() primary key,
  business_id uuid references businesses(id) on delete cascade,
  platform_id uuid references review_platforms(id) on delete cascade,
  reviewer_name text,
  rating decimal(2,1) not null,
  review_text text,
  review_date timestamp with time zone not null,
  platform_review_id text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(business_id, platform_id, platform_review_id)
);

-- Create platform_connections table
create table if not exists platform_connections (
  id uuid default uuid_generate_v4() primary key,
  business_id uuid references businesses(id) on delete cascade,
  platform_id uuid references review_platforms(id) on delete cascade,
  platform_business_id text,
  access_token text,
  refresh_token text,
  token_expires_at timestamp with time zone,
  is_connected boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(business_id, platform_id)
);

-- Insert initial review platforms
insert into review_platforms (name, platform_key) values
  ('Google', 'google'),
  ('Facebook', 'facebook'),
  ('Trustpilot', 'trustpilot'),
  ('TripAdvisor', 'tripadvisor'),
  ('Yelp', 'yelp')
on conflict (platform_key) do nothing;

-- Create RLS policies
alter table businesses enable row level security;
alter table reviews enable row level security;
alter table platform_connections enable row level security;

-- Create policies for businesses
create policy "Public businesses are viewable by everyone"
  on businesses for select
  using (true);

-- Create policies for reviews
create policy "Public reviews are viewable by everyone"
  on reviews for select
  using (true);

-- Create policies for platform_connections
create policy "Platform connections are viewable by everyone"
  on platform_connections for select
  using (true);

-- Create updated_at trigger function
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Create triggers for updated_at
create trigger update_businesses_updated_at
  before update on businesses
  for each row
  execute function update_updated_at_column();

create trigger update_reviews_updated_at
  before update on reviews
  for each row
  execute function update_updated_at_column();
