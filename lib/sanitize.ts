import DOMPurify from 'isomorphic-dompurify'

export function sanitizeText(value: unknown, maxLength = 4000) {
  const text = String(value ?? '').trim()
  if (!text) return null

  return DOMPurify.sanitize(text, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] })
    .replace(/\s+/g, ' ')
    .slice(0, maxLength)
    .trim() || null
}

export function sanitizeObject(input: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => [
      key,
      typeof value === 'string' ? sanitizeText(value, 1000) : value,
    ])
  )
}
