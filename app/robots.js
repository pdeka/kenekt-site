import { SITE_URL } from './site'

// Static export: generate robots.txt at build time
export const dynamic = 'force-static'

/** @returns {import('next').MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
