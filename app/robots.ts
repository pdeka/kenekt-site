import type { MetadataRoute } from 'next'
import { SITE_URL } from './site'

// Static export: generate robots.txt at build time
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
