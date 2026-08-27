-- ================================================================
-- OPV Supabase Migration — run in Supabase SQL Editor
-- ================================================================

-- 1. Enquiries — add read flag
ALTER TABLE opv_enquiries ADD COLUMN IF NOT EXISTS read BOOLEAN DEFAULT false;

-- ================================================================
-- 2. Properties (Stays)
-- ================================================================
CREATE TABLE IF NOT EXISTS opv_properties (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  city        TEXT NOT NULL,
  area        TEXT,
  type        TEXT NOT NULL DEFAULT 'villa',
  designation TEXT,
  beds        INTEGER NOT NULL DEFAULT 1,
  guests      INTEGER NOT NULL DEFAULT 2,
  price_from  INTEGER,
  description TEXT,
  images      TEXT[] DEFAULT '{}',
  chips       TEXT[] DEFAULT '{}',
  verified    BOOLEAN DEFAULT false,
  available   BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================================
-- 3. Vehicles (Drive)
-- ================================================================
CREATE TABLE IF NOT EXISTS opv_vehicles (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  make        TEXT,
  model       TEXT,
  type        TEXT NOT NULL DEFAULT 'sedan',
  seats       INTEGER DEFAULT 4,
  doors       INTEGER DEFAULT 4,
  colours     TEXT[] DEFAULT '{}',
  description TEXT,
  images      TEXT[] DEFAULT '{}',
  chips       TEXT[] DEFAULT '{}',
  available   BOOLEAN DEFAULT true,
  price_from  INTEGER,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================================
-- 4. Dining (Eat)
-- ================================================================
CREATE TABLE IF NOT EXISTS opv_dining (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  location    TEXT,
  cuisine     TEXT,
  description TEXT,
  images      TEXT[] DEFAULT '{}',
  chips       TEXT[] DEFAULT '{}',
  available   BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================================
-- 5. Aircraft (Fly)
-- ================================================================
CREATE TABLE IF NOT EXISTS opv_aircraft (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  type        TEXT NOT NULL DEFAULT 'jet',
  seats       INTEGER DEFAULT 8,
  range_nm    INTEGER DEFAULT 0,
  description TEXT,
  images      TEXT[] DEFAULT '{}',
  chips       TEXT[] DEFAULT '{}',
  available   BOOLEAN DEFAULT true,
  price_from  INTEGER,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================================
-- 6. Yachts
-- ================================================================
CREATE TABLE IF NOT EXISTS opv_yachts (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT NOT NULL,
  length_ft   INTEGER DEFAULT 80,
  guests      INTEGER DEFAULT 10,
  cabins      INTEGER DEFAULT 4,
  description TEXT,
  images      TEXT[] DEFAULT '{}',
  chips       TEXT[] DEFAULT '{}',
  available   BOOLEAN DEFAULT true,
  price_from  INTEGER,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================================
-- 7. Memberships
-- ================================================================
CREATE TABLE IF NOT EXISTS opv_memberships (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name       TEXT NOT NULL,
  email      TEXT NOT NULL,
  phone      TEXT,
  tier       TEXT NOT NULL DEFAULT 'standard',
  status     TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ================================================================
-- 8. Row Level Security
-- ================================================================
ALTER TABLE opv_properties  ENABLE ROW LEVEL SECURITY;
ALTER TABLE opv_vehicles    ENABLE ROW LEVEL SECURITY;
ALTER TABLE opv_dining      ENABLE ROW LEVEL SECURITY;
ALTER TABLE opv_aircraft    ENABLE ROW LEVEL SECURITY;
ALTER TABLE opv_yachts      ENABLE ROW LEVEL SECURITY;
ALTER TABLE opv_memberships ENABLE ROW LEVEL SECURITY;

-- Public can read available items (for the front-end site)
CREATE POLICY IF NOT EXISTS "public_read_properties" ON opv_properties FOR SELECT USING (available = true);
CREATE POLICY IF NOT EXISTS "public_read_vehicles"   ON opv_vehicles   FOR SELECT USING (available = true);
CREATE POLICY IF NOT EXISTS "public_read_dining"     ON opv_dining     FOR SELECT USING (available = true);
CREATE POLICY IF NOT EXISTS "public_read_aircraft"   ON opv_aircraft   FOR SELECT USING (available = true);
CREATE POLICY IF NOT EXISTS "public_read_yachts"     ON opv_yachts     FOR SELECT USING (available = true);
-- Memberships: no public access — admin reads via service role key only

-- ================================================================
-- 9. Storage bucket
-- After running this SQL, go to:
-- Supabase → Storage → New Bucket
-- Name: opv-images
-- Public: ON
-- ================================================================
