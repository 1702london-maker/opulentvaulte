-- OPV database schema for Opulent Vault Limited
-- Run once in the Supabase SQL editor for project xersmsnjpeywpwoqzurp.

create extension if not exists "uuid-ossp";
create extension if not exists "pgcrypto";

do $$ begin
  create type enquiry_service as enum ('stays','drive','eat','shop','fly','yacht','security','membership','affiliates','partners','careers','newsletter','general','press');
exception when duplicate_object then null; end $$;

do $$ begin
  create type enquiry_status as enum ('new','read','in_progress','waiting_client','waiting_supplier','completed','declined','spam');
exception when duplicate_object then null; end $$;

do $$ begin
  create type membership_tier as enum ('access','sapphire','diamond','gold');
exception when duplicate_object then null; end $$;

do $$ begin
  create type membership_status as enum ('enquiry','pending_review','active','paused','cancelled','invited');
exception when duplicate_object then null; end $$;

do $$ begin
  create type booking_status as enum ('enquiry','quoted','confirmed','in_progress','completed','cancelled','refunded');
exception when duplicate_object then null; end $$;

do $$ begin
  create type booking_service as enum ('stays','drive','eat','shop','fly','yacht','security');
exception when duplicate_object then null; end $$;

do $$ begin
  create type partner_status as enum ('applied','under_review','approved','active','suspended','rejected');
exception when duplicate_object then null; end $$;

do $$ begin
  create type partner_category as enum ('property','vehicle','dining','aviation','yacht','security','retail','other');
exception when duplicate_object then null; end $$;

do $$ begin
  create type affiliate_status as enum ('applied','approved','active','suspended','elite');
exception when duplicate_object then null; end $$;

do $$ begin
  create type notification_channel as enum ('email','whatsapp','phone');
exception when duplicate_object then null; end $$;

create table if not exists staff (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text unique not null,
  phone text,
  role text not null,
  title text,
  supabase_user_id uuid,
  is_active boolean default true,
  is_guardian boolean default false,
  max_clients integer default 20,
  current_clients integer default 0,
  bio text,
  photo_url text,
  languages text[] default '{en}',
  internal_notes text
);

create table if not exists clients (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  full_name text not null,
  email text unique not null,
  phone text,
  whatsapp text,
  company text,
  city text,
  country text default 'United Kingdom',
  preferred_channel notification_channel default 'email',
  language text default 'en',
  membership_tier membership_tier default 'access',
  membership_status membership_status default 'enquiry',
  membership_since timestamptz,
  guardian_id uuid references staff(id),
  preferences jsonb default '{}'::jsonb,
  is_corporate boolean default false,
  is_vip boolean default false,
  is_blocked boolean default false,
  nda_signed boolean default false,
  nda_signed_at timestamptz,
  newsletter_subscribed boolean default false,
  newsletter_subscribed_at timestamptz,
  source text,
  referred_by uuid references clients(id),
  internal_notes text,
  tags text[] default '{}',
  constraint valid_email check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

create table if not exists enquiries (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  client_id uuid references clients(id),
  full_name text not null,
  email text not null,
  phone text,
  service enquiry_service not null,
  status enquiry_status not null default 'new',
  subject text,
  message text,
  metadata jsonb default '{}'::jsonb,
  assigned_to uuid references staff(id),
  priority smallint default 3 check (priority between 1 and 5),
  first_response_at timestamptz,
  response_time_minutes integer,
  resolved_at timestamptz,
  converted_to_booking boolean default false,
  booking_id uuid,
  page_url text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  internal_notes text,
  tags text[] default '{}'
);

create sequence if not exists booking_seq start 1;

create table if not exists bookings (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  booking_ref text unique,
  enquiry_id uuid references enquiries(id),
  client_id uuid not null references clients(id),
  service booking_service not null,
  status booking_status not null default 'enquiry',
  start_date date,
  end_date date,
  duration_nights integer,
  duration_hours numeric,
  currency text default 'GBP',
  quoted_amount numeric(12,2),
  deposit_amount numeric(12,2),
  deposit_paid boolean default false,
  deposit_paid_at timestamptz,
  total_amount numeric(12,2),
  amount_paid numeric(12,2) default 0,
  balance_due numeric(12,2),
  invoice_ref text,
  payment_due_date date,
  service_detail jsonb default '{}'::jsonb,
  supplier_name text,
  supplier_contact text,
  supplier_ref text,
  supplier_confirmed boolean default false,
  supplier_confirmed_at timestamptz,
  guardian_id uuid references staff(id),
  assigned_to uuid references staff(id),
  cancelled_at timestamptz,
  cancellation_reason text,
  cancellation_fee numeric(12,2),
  refund_amount numeric(12,2),
  documents jsonb default '[]'::jsonb,
  internal_notes text,
  tags text[] default '{}'
);

create or replace function generate_booking_ref()
returns trigger as $$
begin
  if new.booking_ref is null then
    new.booking_ref := 'OPV-' || to_char(now(), 'YYYYMMDD') || '-' || lpad(nextval('booking_seq')::text, 4, '0');
  end if;
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_booking_ref on bookings;
create trigger set_booking_ref before insert on bookings for each row execute function generate_booking_ref();

create table if not exists properties (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  name text not null,
  slug text unique not null,
  designation text check (designation in ('ovp-managed','partner-hosted')),
  verified boolean default false,
  verified_at timestamptz,
  active boolean default true,
  address_line_1 text,
  address_line_2 text,
  city text not null,
  area text,
  county text,
  postcode text,
  country text default 'United Kingdom',
  lat numeric(10,7),
  lng numeric(10,7),
  property_type text,
  bedrooms integer,
  bathrooms integer,
  max_guests integer,
  size_sqft integer,
  floor text,
  price_from_gbp numeric(10,2),
  price_currency text default 'GBP',
  price_unit text default 'night',
  minimum_stay integer default 1,
  pricing_notes text,
  amenities text[] default '{}',
  chips text[] default '{}',
  description text,
  description_long text,
  images jsonb default '[]'::jsonb,
  video_url text,
  owner_name text,
  owner_verified boolean default false,
  owner_contact text,
  management_company text,
  available boolean default true,
  available_from date,
  available_to date,
  blocked_dates jsonb default '[]'::jsonb,
  meta_title text,
  meta_description text,
  internal_notes text,
  tags text[] default '{}'
);

create table if not exists vehicles (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  make text not null,
  model text not null,
  variant text,
  year integer,
  registration text,
  colour text,
  vin text,
  category text check (category in ('saloon','suv','sports','armoured','van','helicopter')),
  sub_category text,
  passengers integer,
  luggage_large integer,
  luggage_small integer,
  fuel_type text,
  transmission text,
  is_armoured boolean default false,
  armour_rating text,
  chauffeur_available boolean default true,
  self_drive_available boolean default false,
  price_per_day_gbp numeric(10,2),
  price_per_transfer_gbp numeric(10,2),
  price_on_application boolean default false,
  available boolean default true,
  based_at text,
  images jsonb default '[]'::jsonb,
  description text,
  chips text[] default '{}',
  last_service_date date,
  mot_expiry date,
  insurance_expiry date,
  internal_notes text,
  active boolean default true
);

create table if not exists memberships (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  client_id uuid not null references clients(id),
  guardian_id uuid references staff(id),
  tier membership_tier not null,
  status membership_status not null default 'enquiry',
  enquiry_date timestamptz default now(),
  approved_date timestamptz,
  start_date date,
  end_date date,
  next_review_date date,
  billing_cycle text check (billing_cycle in ('monthly','annual')),
  monthly_fee_gbp numeric(10,2),
  annual_fee_gbp numeric(10,2),
  bespoke_terms text,
  payment_method text,
  next_payment_date date,
  previous_tier membership_tier,
  tier_changed_at timestamptz,
  tier_change_reason text,
  is_invited boolean default false,
  invitation_sent_at timestamptz,
  invitation_accepted_at timestamptz,
  cancellation_notice_at timestamptz,
  cancellation_date date,
  cancellation_reason text,
  internal_notes text
);

create table if not exists affiliates (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  full_name text not null,
  email text unique not null,
  phone text,
  company text,
  city text,
  country text default 'United Kingdom',
  status affiliate_status default 'applied',
  referral_code text unique,
  commission_rate numeric(5,2),
  total_referrals integer default 0,
  total_commission_gbp numeric(12,2) default 0,
  paid_commission_gbp numeric(12,2) default 0,
  source text,
  audience text,
  notes text,
  internal_notes text,
  tags text[] default '{}'
);

create table if not exists affiliate_referrals (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  affiliate_id uuid references affiliates(id),
  client_id uuid references clients(id),
  enquiry_id uuid references enquiries(id),
  booking_id uuid references bookings(id),
  referred_email text,
  service enquiry_service,
  status text default 'new',
  commission_gbp numeric(12,2) default 0,
  commission_paid boolean default false,
  commission_paid_at timestamptz,
  notes text
);

create table if not exists partners (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  company_name text not null,
  contact_name text not null,
  email text not null,
  phone text,
  website text,
  category partner_category not null,
  status partner_status default 'applied',
  city text,
  country text default 'United Kingdom',
  service_area text[] default '{}',
  description text,
  verification_notes text,
  contract_signed boolean default false,
  contract_signed_at timestamptz,
  rating smallint check (rating between 1 and 5),
  internal_notes text,
  tags text[] default '{}'
);

create table if not exists newsletter_subscribers (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  email text unique not null,
  full_name text,
  source text,
  status text default 'active' check (status in ('active','unsubscribed','bounced','complained')),
  subscribed_at timestamptz default now(),
  unsubscribed_at timestamptz,
  client_id uuid references clients(id)
);

create table if not exists activity_log (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  actor_type text not null,
  actor_email text,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  description text,
  metadata jsonb default '{}'::jsonb,
  ip_address inet
);

create table if not exists communications (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  client_id uuid references clients(id),
  enquiry_id uuid references enquiries(id),
  direction text not null check (direction in ('inbound','outbound')),
  channel notification_channel not null default 'email',
  from_address text,
  to_address text,
  subject text,
  body text,
  template_used text,
  status text,
  metadata jsonb default '{}'::jsonb
);

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'enquiries_booking_id_fkey'
  ) then
    alter table enquiries add constraint enquiries_booking_id_fkey foreign key (booking_id) references bookings(id);
  end if;
end $$;

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

do $$ declare table_name text;
begin
  foreach table_name in array array['clients','enquiries','bookings','properties','vehicles','memberships','affiliates','partners','newsletter_subscribers']
  loop
    execute format('drop trigger if exists set_updated_at on %I', table_name);
    execute format('create trigger set_updated_at before update on %I for each row execute function set_updated_at()', table_name);
  end loop;
end $$;

create index if not exists idx_clients_email on clients(email);
create index if not exists idx_enquiries_service on enquiries(service);
create index if not exists idx_enquiries_status on enquiries(status);
create index if not exists idx_enquiries_created on enquiries(created_at desc);
create index if not exists idx_properties_city on properties(city);
create index if not exists idx_vehicles_category on vehicles(category);
create index if not exists idx_newsletter_email on newsletter_subscribers(email);
create index if not exists idx_activity_entity on activity_log(entity_type, entity_id);
create index if not exists idx_communications_client on communications(client_id);

alter table clients enable row level security;
alter table enquiries enable row level security;
alter table bookings enable row level security;
alter table properties enable row level security;
alter table vehicles enable row level security;
alter table staff enable row level security;
alter table memberships enable row level security;
alter table affiliates enable row level security;
alter table affiliate_referrals enable row level security;
alter table partners enable row level security;
alter table newsletter_subscribers enable row level security;
alter table activity_log enable row level security;
alter table communications enable row level security;

grant usage on schema public to authenticated;
grant select, insert, update, delete on all tables in schema public to authenticated;
grant usage, select on all sequences in schema public to authenticated;

do $$ declare table_name text;
begin
  foreach table_name in array array['clients','enquiries','bookings','properties','vehicles','staff','memberships','affiliates','affiliate_referrals','partners','newsletter_subscribers','activity_log','communications']
  loop
    execute format('drop policy if exists %I on %I', 'Staff can read ' || table_name, table_name);
    execute format('create policy %I on %I for select to authenticated using (true)', 'Staff can read ' || table_name, table_name);
    execute format('drop policy if exists %I on %I', 'Staff can write ' || table_name, table_name);
    execute format('create policy %I on %I for all to authenticated using (true) with check (true)', 'Staff can write ' || table_name, table_name);
  end loop;
end $$;
