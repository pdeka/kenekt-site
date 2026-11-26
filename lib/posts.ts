import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '@/keystatic.config'

const reader = createReader(process.cwd(), keystaticConfig)

// Drafts are previewable under `next dev` but never reach the live build
const showDrafts = process.env.NODE_ENV !== 'production'

export async function getPosts() {
  const posts = await reader.collections.posts.all()
  return posts
    .filter((post) => showDrafts || !post.entry.draft)
    .map(({ slug, entry }) => ({ slug, ...entry }))
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))
}

export async function getPost(slug: string) {
  const entry = await reader.collections.posts.read(slug)
  if (!entry || (entry.draft && !showDrafts)) return null
  return { slug, ...entry }
}

export function formatDate(date: string | null) {
  if (!date) return ''
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}
