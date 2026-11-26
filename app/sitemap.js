import { SITE_URL } from './site'

// Static export: generate sitemap.xml at build time
export const dynamic = 'force-static'

// Fixed dates so lastmod only moves when a page really changes, not on every build.
// Bump a page's date when you change its content.
/** @returns {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  return [
    { url: `${SITE_URL}/`, lastModified: '2026-11-16', changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/builders`, lastModified: '2026-11-16', changeFrequency: 'weekly', priority: 0.8 },
  ]
}
