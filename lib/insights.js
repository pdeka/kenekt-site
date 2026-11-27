import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { marked } from 'marked'

// Posts are Markdown files written through the CMS at /admin (see public/admin/config.yml)
const POSTS_DIR = path.join(process.cwd(), 'content/insights')

// Drafts show up in `npm run dev` so editors can preview them, but never in the built site
const showDrafts = process.env.NODE_ENV === 'development'

function readPost(file) {
  const slug = file.replace(/\.md$/, '')
  const { data, content } = matter(fs.readFileSync(path.join(POSTS_DIR, file), 'utf8'))
  return {
    slug,
    title: data.title,
    // YAML turns a bare 2026-11-26 into a Date, so normalise to the plain string
    date: new Date(data.date).toISOString().slice(0, 10),
    summary: data.summary || '',
    author: data.author || '',
    image: data.image || '',
    imageAlt: data.imageAlt || '',
    draft: Boolean(data.draft),
    // Optional call to action after the body; shown only when both parts are filled in
    button: data.button?.label && data.button?.link ? { label: data.button.label, link: data.button.link } : null,
    content,
  }
}

export function getPosts() {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.md'))
    .map(readPost)
    .filter((post) => showDrafts || !post.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPost(slug) {
  const post = getPosts().find((candidate) => candidate.slug === slug)
  return post && { ...post, html: marked.parse(post.content) }
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
}
