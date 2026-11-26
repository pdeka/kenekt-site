import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/posts'
import { SITE_URL } from './site'

// Static export: generate sitemap.xml at build time
export const dynamic = 'force-static'

// Fixed dates so lastmod only moves when a page really changes, not on every build.
// Bump a page's date when you change its content.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()
  return [
    { url: `${SITE_URL}/`, lastModified: '2026-11-16', changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/builders`, lastModified: '2026-11-16', changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/land-developers`, lastModified: '2026-11-27', changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/insights`, lastModified: posts[0]?.date ?? '2026-11-27', changeFrequency: 'weekly', priority: 0.7 },
    ...posts.map((post) => ({
      url: `${SITE_URL}/insights/${post.slug}`,
      lastModified: post.date ?? undefined,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
