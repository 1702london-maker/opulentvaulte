-- ============================================================
-- OPULENT VAULT — FULL SCHEMA MIGRATION
-- Run this in the SQL Editor of: uktkrqnkrjnddyyolcyx.supabase.co
-- ============================================================

-- properties
CREATE TABLE IF NOT EXISTS properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text,
  slug text UNIQUE,
  property_type text CHECK (property_type IN ('villa','penthouse','serviced_apartment','long_term','corporate')),
  city text,
  country text,
  region text,
  guests int,
  bedrooms int,
  price_from numeric,
  price_unit text DEFAULT 'night',
  badge_label text,
  description text,
  hero_image_path text,
  is_featured boolean DEFAULT false,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view published properties" ON properties;
CREATE POLICY "Public can view published properties" ON properties FOR SELECT USING (published = true);

-- property_images
CREATE TABLE IF NOT EXISTS property_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id uuid REFERENCES properties(id) ON DELETE CASCADE,
  storage_path text,
  media_type text CHECK (media_type IN ('image','video')) DEFAULT 'image',
  alt_text text,
  sort_order int DEFAULT 0,
  is_hero boolean DEFAULT false
);
ALTER TABLE property_images ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view property images" ON property_images;
CREATE POLICY "Public can view property images" ON property_images FOR SELECT USING (true);

-- destinations
CREATE TABLE IF NOT EXISTS destinations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  country text,
  city text,
  slug text UNIQUE,
  region text CHECK (region IN ('UK','Europe')),
  hero_image_path text,
  intro_copy text,
  why_opv_copy text,
  published boolean DEFAULT false
);
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view published destinations" ON destinations;
CREATE POLICY "Public can view published destinations" ON destinations FOR SELECT USING (published = true);

-- vehicles
CREATE TABLE IF NOT EXISTS vehicles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text,
  category text CHECK (category IN ('chauffeur','self_drive','fleet')),
  tier text,
  image_path text,
  description text,
  price_from numeric,
  published boolean DEFAULT false
);
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view published vehicles" ON vehicles;
CREATE POLICY "Public can view published vehicles" ON vehicles FOR SELECT USING (published = true);

-- aviation_services
CREATE TABLE IF NOT EXISTS aviation_services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_type text CHECK (service_type IN ('jet_charter','helicopter','vip_airport')),
  tier text,
  name text,
  description text,
  image_path text,
  published boolean DEFAULT false
);
ALTER TABLE aviation_services ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view published aviation" ON aviation_services;
CREATE POLICY "Public can view published aviation" ON aviation_services FOR SELECT USING (published = true);

-- security_services
CREATE TABLE IF NOT EXISTS security_services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text CHECK (category IN ('executive_protection','travel_security','residential_security','event_security')),
  name text,
  description text,
  image_path text,
  published boolean DEFAULT false
);
ALTER TABLE security_services ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view published security" ON security_services;
CREATE POLICY "Public can view published security" ON security_services FOR SELECT USING (published = true);

-- concierge_services
CREATE TABLE IF NOT EXISTS concierge_services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text,
  name text,
  description text,
  image_path text,
  published boolean DEFAULT false
);
ALTER TABLE concierge_services ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view published concierge" ON concierge_services;
CREATE POLICY "Public can view published concierge" ON concierge_services FOR SELECT USING (published = true);

-- experiences
CREATE TABLE IF NOT EXISTS experiences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text CHECK (category IN ('fine_dining','yacht','tours','spa','cultural','vip_events')),
  title text,
  location text,
  description text,
  image_path text,
  price_from numeric,
  published boolean DEFAULT false
);
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view published experiences" ON experiences;
CREATE POLICY "Public can view published experiences" ON experiences FOR SELECT USING (published = true);

-- partners
CREATE TABLE IF NOT EXISTS partners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text,
  partner_type text CHECK (partner_type IN ('property','vehicle','aviation','security','concierge')),
  contact_email text,
  status text DEFAULT 'pending',
  application_data jsonb,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can apply as partner" ON partners;
CREATE POLICY "Public can apply as partner" ON partners FOR INSERT WITH CHECK (true);

-- affiliates
CREATE TABLE IF NOT EXISTS affiliates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text,
  email text,
  network_description text,
  status text DEFAULT 'pending',
  referral_code text UNIQUE,
  commission_tier text,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE affiliates ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can join affiliates" ON affiliates;
CREATE POLICY "Public can join affiliates" ON affiliates FOR INSERT WITH CHECK (true);

-- testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name text,
  author_title text,
  quote text,
  rating int,
  display_on text[],
  published boolean DEFAULT false
);
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can view published testimonials" ON testimonials;
CREATE POLICY "Public can view published testimonials" ON testimonials FOR SELECT USING (published = true);

-- enquiries
CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type text CHECK (type IN ('concierge_request','booking','contact','business','partner_application','affiliate_join','affiliate_support')),
  name text,
  email text,
  phone text,
  message text,
  payload jsonb,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can submit enquiries" ON enquiries;
CREATE POLICY "Public can submit enquiries" ON enquiries FOR INSERT WITH CHECK (true);

-- newsletter_subscribers
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE,
  source_page text,
  subscribed_at timestamptz DEFAULT now()
);
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public can subscribe to newsletter" ON newsletter_subscribers;
CREATE POLICY "Public can subscribe to newsletter" ON newsletter_subscribers FOR INSERT WITH CHECK (true);

-- ============================================================
-- STORAGE BUCKETS (run in Dashboard > Storage, or via API)
-- Create: branding (public), properties (public),
--         pending-review (private), placeholders (public)
-- ============================================================

-- ============================================================
-- DESTINATIONS SEED DATA
-- ============================================================
INSERT INTO destinations (country, city, slug, region, intro_copy, why_opv_copy, published) VALUES
-- UK
('United Kingdom','London','united-kingdom-london','UK','London is the world''s foremost luxury destination — a city where Mayfair penthouses sit above Michelin-starred restaurants and private members clubs define the social calendar. From the boutiques of Bond Street to the galleries of Chelsea, the capital rewards the discerning traveller at every turn.','Opulent Vault''s London portfolio spans the finest serviced residences, penthouses, and villas across Mayfair, Knightsbridge, Chelsea, and Belgravia. Our concierge team holds relationships with the city''s most exclusive venues, ensuring seamless access from the moment you arrive.',true),
('United Kingdom','Manchester','united-kingdom-manchester','UK','Manchester has emerged as one of the UK''s most compelling luxury destinations — a city of architectural ambition, world-class dining, and vibrant cultural energy. Spinningfields and Ancoats now rival London''s finest neighbourhoods for premium living.','Opulent Vault curates Manchester''s premier serviced apartments and executive residences, paired with chauffeur services and private dining arrangements that reflect the city''s forward-thinking luxury scene.',true),
('United Kingdom','Birmingham','united-kingdom-birmingham','UK','Birmingham''s transformation into a genuine luxury destination is now complete. The Colmore Business District, Edgbaston, and the revitalised Jewellery Quarter offer world-class hospitality, Michelin-recognised restaurants, and beautifully appointed residences.','Opulent Vault''s Birmingham collection brings the city''s finest executive accommodation and concierge services together in a single, curated platform — perfect for business travellers and discerning visitors alike.',true),
('United Kingdom','Liverpool','united-kingdom-liverpool','UK','Liverpool''s waterfront regeneration and rich cultural heritage make it one of the UK''s most dynamic luxury short-stay destinations. From the Georgian Quarter to the Royal Albert Dock, the city offers a compelling blend of history, art, and contemporary luxury.','Opulent Vault provides Liverpool''s most exceptional short-term residences alongside personalised concierge services — from exclusive dining reservations to private event planning across the city''s landmark venues.',true),
('United Kingdom','Edinburgh','united-kingdom-edinburgh','UK','Edinburgh is one of Europe''s most beautiful capitals — a city of castle ramparts, New Town Georgian elegance, and world-class cultural institutions. The Edinburgh Festival alone draws the world''s creative elite, and the city''s luxury hotel and residence scene has risen to match its ambitions.','Opulent Vault''s Edinburgh portfolio spans the city''s finest private residences and serviced apartments, with bespoke concierge arrangements for whisky experiences, private Highland excursions, and exclusive Festival access.',true),
-- Europe (placeholder copy — marked for editorial review)
('France','Paris','france-paris','Europe','Paris remains the global benchmark for luxury living — a city of unrivalled culture, gastronomy, and elegance. [Placeholder copy — editorial review required before publishing.]','Opulent Vault connects guests with Paris''s finest private residences and exclusive service partners. [Placeholder copy — editorial review required.]',true),
('France','Monaco','france-monaco','Europe','Monaco is the world''s most concentrated address for ultra-high-net-worth lifestyle — a principality where Formula 1, superyachts, and private banking define the social fabric. [Placeholder — editorial review required.]','Opulent Vault provides Monaco''s most prestigious short-term residences and access to the principality''s exclusive service network. [Placeholder — editorial review required.]',true),
('France','Nice','france-nice','Europe','Nice anchors the French Riviera with a perfect blend of Belle Époque grandeur, azure coastline, and contemporary cultural energy. [Placeholder — editorial review required.]','Opulent Vault curates the finest residences and concierge experiences along the Côte d''Azur. [Placeholder — editorial review required.]',true),
('France','Cannes','france-cannes','Europe','Cannes is synonymous with glamour — a city of film festivals, superyacht marinas, and the golden sweep of La Croisette. [Placeholder — editorial review required.]','Opulent Vault provides premium Cannes residences and exclusive event access. [Placeholder — editorial review required.]',true),
('Spain','Barcelona','spain-barcelona','Europe','Barcelona combines Gaudí''s architectural masterpieces with a world-class food scene, vibrant beach culture, and a luxury retail quarter that rivals Europe''s finest. [Placeholder — editorial review required.]','Opulent Vault offers Barcelona''s most exceptional private residences and bespoke experiences. [Placeholder — editorial review required.]',true),
('Spain','Madrid','spain-madrid','Europe','Madrid is Spain''s sophisticated capital — a city of extraordinary art museums, late-night dining culture, and some of Europe''s most elegant private residences. [Placeholder — editorial review required.]','Opulent Vault curates Madrid''s finest luxury stays and premium concierge services. [Placeholder — editorial review required.]',true),
('Spain','Marbella','spain-marbella','Europe','Marbella on the Costa del Sol is Europe''s premiere sun-and-luxury destination — renowned for its hillside villas, Puerto Banús marina, and year-round social scene. [Placeholder — editorial review required.]','Opulent Vault provides Marbella''s most exclusive villa rentals and resort-style concierge. [Placeholder — editorial review required.]',true),
('Portugal','Lisbon','portugal-lisbon','Europe','Lisbon is one of Europe''s fastest-rising luxury capitals — a sun-drenched city of hilltop viewpoints, outstanding seafood, natural wine culture, and a rapidly maturing prime property market. [Placeholder — editorial review required.]','Opulent Vault curates Lisbon''s finest private apartments and bespoke city experiences. [Placeholder — editorial review required.]',true),
('Portugal','Porto','portugal-porto','Europe','Porto is Portugal''s soulful second city — a destination of ancient wine cellars, modernist architecture, and an emerging luxury hospitality scene along the Douro riverfront. [Placeholder — editorial review required.]','Opulent Vault offers Porto''s most atmospheric luxury stays and premium concierge services. [Placeholder — editorial review required.]',true),
('Portugal','Algarve','portugal-algarve','Europe','The Algarve is Portugal''s sun-drenched southern coastline — a year-round destination of world-class golf courses, dramatic cliff formations, and increasingly sophisticated villa estates. [Placeholder — editorial review required.]','Opulent Vault provides the Algarve''s finest villa rentals and resort concierge. [Placeholder — editorial review required.]',true),
('Italy','Milan','italy-milan','Europe','Milan is the global capital of fashion and design — a city where luxury retail, contemporary art, and extraordinary fine dining converge in the world''s most stylish urban setting. [Placeholder — editorial review required.]','Opulent Vault curates Milan''s most prestigious residences and exclusive access to the city''s fashion and design calendar. [Placeholder — editorial review required.]',true),
('Italy','Rome','italy-rome','Europe','Rome is a living museum of Western civilisation — a city where baroque fountains, ancient ruins, and outstanding trattorias coexist with some of Europe''s grandest private palaces. [Placeholder — editorial review required.]','Opulent Vault provides Rome''s finest luxury residences and private cultural access. [Placeholder — editorial review required.]',true),
('Italy','Florence','italy-florence','Europe','Florence is the birthplace of the Renaissance and the spiritual home of Italian luxury — a compact, walkable city of extraordinary art, world-class cuisine, and exquisite craftsmanship. [Placeholder — editorial review required.]','Opulent Vault curates Florence''s most beautiful private apartments and bespoke artisan experiences. [Placeholder — editorial review required.]',true),
('Italy','Lake Como','italy-lake-como','Europe','Lake Como is synonymous with discreet, understated European luxury — a glacial lake ringed by villa estates, botanical gardens, and mountain backdrops that have attracted the world''s most celebrated figures for centuries. [Placeholder — editorial review required.]','Opulent Vault provides Lake Como''s most exceptional private villas and on-lake concierge services. [Placeholder — editorial review required.]',true),
('Netherlands','Amsterdam','netherlands-amsterdam','Europe','Amsterdam''s canal-house architecture, world-class museums, and sophisticated dining scene make it one of Northern Europe''s most compelling luxury short-stay destinations. [Placeholder — editorial review required.]','Opulent Vault curates Amsterdam''s finest canal-house residences and premium city experiences. [Placeholder — editorial review required.]',true),
('Switzerland','Geneva','switzerland-geneva','Europe','Geneva is the world''s most international city — home to watchmaking dynasties, private banking institutions, and one of Europe''s most refined luxury hospitality scenes. [Placeholder — editorial review required.]','Opulent Vault provides Geneva''s most exclusive residences and discreet concierge services. [Placeholder — editorial review required.]',true),
('Switzerland','Zurich','switzerland-zurich','Europe','Zurich consistently ranks among the world''s most liveable and most expensive cities — a destination of private banking excellence, outstanding culinary culture, and impeccable Swiss precision. [Placeholder — editorial review required.]','Opulent Vault curates Zurich''s finest luxury residences and premium business concierge. [Placeholder — editorial review required.]',true),
('Greece','Mykonos','greece-mykonos','Europe','Mykonos is the Aegean''s most glamorous island — a destination of whitewashed cycladic architecture, world-class beach clubs, and a social scene that draws global celebrities and ultra-high-net-worth travellers throughout summer. [Placeholder — editorial review required.]','Opulent Vault provides Mykonos''s most exclusive private villas and VIP island experiences. [Placeholder — editorial review required.]',true),
('Greece','Santorini','greece-santorini','Europe','Santorini''s volcanic caldera, sunset views from Oia, and extraordinary volcanic wine terroir make it Greece''s most iconic luxury destination. [Placeholder — editorial review required.]','Opulent Vault curates Santorini''s finest caldera-view villas and bespoke island concierge. [Placeholder — editorial review required.]',true)
ON CONFLICT (slug) DO NOTHING;

-- Draft property record (do NOT publish — needs real details from Martins)
INSERT INTO properties (title, slug, description, published, is_featured)
VALUES (
  'Featured Residence (Awaiting Property Details)',
  'featured-residence-pending-details',
  'A beautifully furnished luxury residence photographed across 50 images. Full property details — name, address, pricing, guest capacity, and bedroom count — are pending confirmation from the Opulent Vault team before this listing can be published.',
  false,
  false
)
ON CONFLICT (slug) DO NOTHING;
