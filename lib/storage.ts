import { getSupabaseAdmin } from './supabase'

const imageBuckets = ['property-images', 'vehicle-images', 'press-images'] as const
type ImageBucket = (typeof imageBuckets)[number]

function extensionFromName(name: string) {
  return name.split('.').pop()?.toLowerCase() || 'bin'
}

function safeName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export async function uploadPublicImage(file: File, bucket: ImageBucket, folder = 'uploads') {
  const db = getSupabaseAdmin()
  const filename = `${folder}/${Date.now()}-${safeName(file.name)}`
  const { error } = await db.storage.from(bucket).upload(filename, file, {
    cacheControl: '31536000',
    contentType: file.type,
    upsert: false,
  })
  if (error) throw error

  const { data } = db.storage.from(bucket).getPublicUrl(filename)
  return data.publicUrl as string
}

export async function uploadDocument(file: File, bookingId: string, docType = 'document') {
  const db = getSupabaseAdmin()
  const ext = extensionFromName(file.name)
  const filename = `${bookingId}/${safeName(docType)}-${Date.now()}.${ext}`
  const { error } = await db.storage.from('booking-documents').upload(filename, file, {
    contentType: file.type,
    upsert: false,
  })
  if (error) throw error
  return filename
}

export async function getSignedDocumentUrl(path: string, expiresIn = 3600) {
  const db = getSupabaseAdmin()
  const { data, error } = await db.storage.from('booking-documents').createSignedUrl(path, expiresIn)
  if (error) throw error
  return data.signedUrl as string
}

export async function deleteStorageObject(bucket: string, path: string) {
  const db = getSupabaseAdmin()
  const { error } = await db.storage.from(bucket).remove([path])
  if (error) throw error
  return true
}
