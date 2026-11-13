import type { MetadataRoute } from 'next'
import { SITE_URL } from './site'

// Static export: generate sitemap.xml at build time
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/builders`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
  ]
}
