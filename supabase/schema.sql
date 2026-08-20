create extension if not exists pgcrypto;

create type user_role as enum ('client', 'partner', 'affiliate', 'admin');
create type account_status as enum ('active', 'suspended', 'pending_verification', 'rejected');
create type approval_status as enum ('pending', 'documents_requested', 'under_review', 'approved', 'rejected', 'suspended');
create type listing_status as enum ('draft', 'pending_review', 'amendments_requested', 'approved', 'live', 'suspended', 'rejected');
create type booking_status as enum ('submitted', 'under_review', 'pending_partner_confirmation', 'confirmed', 'cancelled_by_client', 'cancelled_by_opv', 'completed');
create type booking_type as enum ('booking_request', 'enquiry_only');

create table public.users (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text unique not null,
  phone text,
  role user_role not null default 'client',
  status account_status not null default 'active',
  privacy_mode boolean not null default false,
  profile_photo_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  last_login_at timestamptz,
  email_verified boolean not null default false
);

create table public.clients (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  communication_preferences jsonb not null default '{}',
  membership_tier text not null default 'none',
  membership_status text not null default 'pending',
  membership_applied_at timestamptz,
  membership_approved_at timestamptz,
  notes text
);

create table public.partners (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  business_name text not null,
  trading_name text,
  business_description text,
  website_url text,
  social_links jsonb not null default '{}',
  service_category text not null,
  verification_status approval_status not null default 'pending',
  verification_approved_at timestamptz,
  verification_approved_by uuid references public.users(id),
  rejection_reason text,
  address text,
  city text,
  postcode text,
  country text default 'United Kingdom',
  internal_quality_score numeric(3,2),
  notes text
);

create table public.partner_documents (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  document_type text not null,
  file_url text not null,
  file_name text not null,
  status approval_status not null default 'pending',
  rejection_reason text,
  uploaded_at timestamptz not null default now(),
  reviewed_at timestamptz,
  reviewed_by uuid references public.users(id)
);

create table public.listings (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid references public.partners(id) on delete set null,
  title text not null,
  slug text unique not null,
  category text not null,
  sub_category text,
  short_description text,
  full_description text,
  status listing_status not null default 'draft',
  amendment_notes text,
  rejection_reason text,
  is_opv_managed boolean not null default false,
  is_featured_homepage boolean not null default false,
  is_featured_category boolean not null default false,
  price_from numeric(12,2),
  price_to numeric(12,2),
  price_unit text,
  service_fee_percentage numeric(5,2),
  location_city text,
  location_region text,
  location_country text default 'United Kingdom',
  location_display text,
  location_full text,
  capacity_min integer,
  capacity_max integer,
  booking_type booking_type not null default 'booking_request',
  response_time_hours integer,
  available_from date,
  available_to date,
  is_active boolean not null default false,
  submitted_at timestamptz,
  approved_at timestamptz,
  approved_by uuid references public.users(id),
  internal_quality_rating numeric(3,2),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.listing_images (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.listings(id) on delete cascade,
  image_url text not null,
  display_order integer not null default 0,
  is_primary boolean not null default false,
  caption text,
  uploaded_at timestamptz not null default now()
);

create table public.listing_amenities (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.listings(id) on delete cascade,
  amenity_name text not null
);

create table public.listing_availability (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.listings(id) on delete cascade,
  date date not null,
  is_available boolean not null default true,
  price_override numeric(12,2),
  notes text,
  unique (listing_id, date)
);

create table public.listing_category_details (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.listings(id) on delete cascade,
  category_data jsonb not null default '{}'
);

create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  booking_reference text unique not null,
  client_id uuid references public.clients(id) on delete set null,
  listing_id uuid references public.listings(id) on delete set null,
  category text not null,
  booking_type booking_type not null,
  status booking_status not null default 'submitted',
  start_date date,
  end_date date,
  guest_count integer,
  special_requirements text,
  total_price numeric(12,2),
  service_fee numeric(12,2),
  invoice_reference text,
  payment_status text not null default 'unpaid',
  client_message text,
  admin_notes text,
  is_sensitive boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  confirmed_at timestamptz,
  completed_at timestamptz
);

create table public.booking_messages (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id) on delete cascade,
  sender_id uuid references public.users(id) on delete set null,
  sender_role user_role not null,
  message_body text not null,
  sent_at timestamptz not null default now(),
  is_read boolean not null default false,
  read_at timestamptz
);

create table public.concierge_requests (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references public.clients(id) on delete set null,
  full_name text,
  email text,
  phone text,
  request_type text not null,
  description text not null,
  preferred_dates text,
  budget_range text,
  status text not null default 'submitted',
  admin_notes text,
  response_body text,
  submitted_at timestamptz not null default now(),
  responded_at timestamptz,
  responded_by uuid references public.users(id)
);

create table public.security_enquiries (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references public.clients(id) on delete set null,
  full_name text,
  email text,
  phone text,
  protection_type text not null,
  preferred_dates text,
  locations text,
  number_of_individuals integer,
  risk_considerations text,
  status text not null default 'submitted',
  admin_notes text,
  assigned_partner_id uuid references public.partners(id),
  proposal_body text,
  submitted_at timestamptz not null default now(),
  proposal_sent_at timestamptz,
  responded_by uuid references public.users(id)
);

create table public.saved_listings (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  listing_id uuid not null references public.listings(id) on delete cascade,
  saved_at timestamptz not null default now(),
  unique (client_id, listing_id)
);

create table public.affiliates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  organisation_name text,
  promotion_plan text,
  audience_description text,
  motivation text,
  referral_code text unique not null,
  referral_link text,
  status approval_status not null default 'pending',
  approved_at timestamptz,
  approved_by uuid references public.users(id),
  total_referrals integer not null default 0,
  total_commission_earned numeric(12,2) not null default 0,
  total_commission_paid numeric(12,2) not null default 0
);

create table public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  notification_type text not null,
  title text not null,
  body text not null,
  related_entity_type text,
  related_entity_id uuid,
  is_read boolean not null default false,
  created_at timestamptz not null default now(),
  read_at timestamptz
);

create table public.blog_articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  author_id uuid references public.users(id),
  category text not null,
  hero_image_url text,
  excerpt text,
  body text,
  status text not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.users enable row level security;
alter table public.clients enable row level security;
alter table public.partners enable row level security;
alter table public.partner_documents enable row level security;
alter table public.listings enable row level security;
alter table public.bookings enable row level security;
alter table public.booking_messages enable row level security;
alter table public.concierge_requests enable row level security;
alter table public.security_enquiries enable row level security;
alter table public.saved_listings enable row level security;
alter table public.affiliates enable row level security;
alter table public.notifications enable row level security;
alter table public.blog_articles enable row level security;
