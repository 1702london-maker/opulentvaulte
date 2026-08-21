import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/api'

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl()
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/admin', '/api/webhooks'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  }
}
