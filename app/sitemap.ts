import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/api'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const now = new Date()
  const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/stays', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/drive', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/eat', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/shop', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/security', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/fly', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/yacht', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/membership', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/affiliates', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/partners', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/careers', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/press', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/cookies', priority: 0.3, changeFrequency: 'yearly' },
  ]

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
