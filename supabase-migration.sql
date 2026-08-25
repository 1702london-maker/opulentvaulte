-- Run this in your Supabase SQL editor

-- Add 'read' column to existing enquiries table
ALTER TABLE opv_enquiries ADD COLUMN IF NOT EXISTS read BOOLEAN DEFAULT false;

-- Properties table
CREATE TABLE IF NOT EXISTS opv_properties (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT NOT NULL,
  city          TEXT NOT NULL,
  area          TEXT,
  type          TEXT NOT NULL DEFAULT 'villa',
  designation   TEXT,
  beds          INTEGER NOT NULL DEFAULT 1,
  guests        INTEGER NOT NULL DEFAULT 2,
  price_from    INTEGER,
  description   TEXT,
  images        TEXT[] DEFAULT '{}',
  chips         TEXT[] DEFAULT '{}',
  verified      BOOLEAN DEFAULT false,
  available     BOOLEAN DEFAULT true,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Memberships table
CREATE TABLE IF NOT EXISTS opv_memberships (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name          TEXT NOT NULL,
  email         TEXT NOT NULL,
  phone         TEXT,
  tier          TEXT NOT NULL DEFAULT 'standard',
  status        TEXT NOT NULL DEFAULT 'pending',
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Disable RLS (admin accesses via service role key, public cannot read these)
ALTER TABLE opv_properties  ENABLE ROW LEVEL SECURITY;
ALTER TABLE opv_memberships ENABLE ROW LEVEL SECURITY;

-- Allow public to read available properties (for the site)
CREATE POLICY "public_read_available_properties" ON opv_properties
  FOR SELECT USING (available = true);

-- Memberships are private — no public access
-- (admin reads via service role key which bypasses RLS)

-- Create Supabase Storage bucket for property images
-- Run this separately or via the Supabase dashboard:
-- Storage > New Bucket > name: "opv-images" > Public: ON
