export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type EnquiryService =
  | 'stays'
  | 'drive'
  | 'eat'
  | 'shop'
  | 'fly'
  | 'yacht'
  | 'security'
  | 'membership'
  | 'affiliates'
  | 'partners'
  | 'careers'
  | 'newsletter'
  | 'general'
  | 'press'

export type EnquiryStatus =
  | 'new'
  | 'read'
  | 'in_progress'
  | 'waiting_client'
  | 'waiting_supplier'
  | 'completed'
  | 'declined'
  | 'spam'

export type MembershipTier = 'access' | 'sapphire' | 'diamond' | 'gold'
export type MembershipStatus = 'enquiry' | 'pending_review' | 'active' | 'paused' | 'cancelled' | 'invited'
export type BookingStatus = 'enquiry' | 'quoted' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'refunded'
export type BookingService = 'stays' | 'drive' | 'eat' | 'shop' | 'fly' | 'yacht' | 'security'
export type PartnerStatus = 'applied' | 'under_review' | 'approved' | 'active' | 'suspended' | 'rejected'
export type PartnerCategory = 'property' | 'vehicle' | 'dining' | 'aviation' | 'yacht' | 'security' | 'retail' | 'other'
export type AffiliateStatus = 'applied' | 'approved' | 'active' | 'suspended' | 'elite'
export type NotificationChannel = 'email' | 'whatsapp' | 'phone'

type TableDef<Row, Insert = Partial<Row>, Update = Partial<Row>> = {
  Row: Row
  Insert: Insert
  Update: Update
  Relationships: []
}

export interface Client {
  id: string
  created_at: string
  updated_at: string
  full_name: string
  email: string
  phone: string | null
  whatsapp: string | null
  company: string | null
  city: string | null
  country: string
  preferred_channel: NotificationChannel
  language: string
  membership_tier: MembershipTier
  membership_status: MembershipStatus
  membership_since: string | null
  guardian_id: string | null
  preferences: Json
  is_corporate: boolean
  is_vip: boolean
  is_blocked: boolean
  nda_signed: boolean
  nda_signed_at: string | null
  newsletter_subscribed: boolean
  newsletter_subscribed_at: string | null
  source: string | null
  referred_by: string | null
  internal_notes: string | null
  tags: string[]
}

export interface Enquiry {
  id: string
  created_at: string
  updated_at: string
  client_id: string | null
  full_name: string
  email: string
  phone: string | null
  service: EnquiryService
  status: EnquiryStatus
  subject: string | null
  message: string | null
  metadata: Json
  assigned_to: string | null
  priority: number
  first_response_at: string | null
  response_time_minutes: number | null
  resolved_at: string | null
  converted_to_booking: boolean
  booking_id: string | null
  page_url: string | null
  referrer: string | null
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  internal_notes: string | null
  tags: string[]
}

export interface NewsletterSubscriber {
  id: string
  created_at: string
  updated_at: string
  email: string
  full_name: string | null
  source: string | null
  status: 'active' | 'unsubscribed' | 'bounced' | 'complained'
  subscribed_at: string
  unsubscribed_at: string | null
  client_id: string | null
}

export interface ActivityLog {
  id: string
  created_at: string
  actor_type: string
  actor_email: string | null
  action: string
  entity_type: string
  entity_id: string | null
  description: string | null
  metadata: Json
  ip_address: string | null
}

export interface Communication {
  id: string
  created_at: string
  client_id: string | null
  enquiry_id: string | null
  direction: 'inbound' | 'outbound'
  channel: NotificationChannel
  from_address: string | null
  to_address: string | null
  subject: string | null
  body: string | null
  template_used: string | null
  status: string | null
  metadata: Json
}

export type Database = {
  public: {
    Tables: {
      clients: TableDef<Client, Partial<Client> & Pick<Client, 'full_name' | 'email'>>
      enquiries: TableDef<Enquiry, Partial<Enquiry> & Pick<Enquiry, 'full_name' | 'email' | 'service'>>
      newsletter_subscribers: TableDef<NewsletterSubscriber, Partial<NewsletterSubscriber> & Pick<NewsletterSubscriber, 'email'>>
      activity_log: TableDef<ActivityLog, Partial<ActivityLog> & Pick<ActivityLog, 'actor_type' | 'action' | 'entity_type'>>
      communications: TableDef<Communication, Partial<Communication> & Pick<Communication, 'direction' | 'channel'>>
      bookings: TableDef<Record<string, Json>>
      properties: TableDef<Record<string, Json>>
      vehicles: TableDef<Record<string, Json>>
      staff: TableDef<Record<string, Json>>
      memberships: TableDef<Record<string, Json>>
      affiliates: TableDef<Record<string, Json>>
      affiliate_referrals: TableDef<Record<string, Json>>
      partners: TableDef<Record<string, Json>>
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: {
      enquiry_service: EnquiryService
      enquiry_status: EnquiryStatus
      membership_tier: MembershipTier
      membership_status: MembershipStatus
      booking_status: BookingStatus
      booking_service: BookingService
      partner_status: PartnerStatus
      partner_category: PartnerCategory
      affiliate_status: AffiliateStatus
      notification_channel: NotificationChannel
    }
    CompositeTypes: Record<string, never>
  }
}
