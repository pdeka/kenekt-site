import Link from 'next/link'
import { notFound } from 'next/navigation'
import BlogNav from '@/components/BlogNav'
import Footer from '@/components/Footer'
import { getPosts, getPost, formatDate } from '@/lib/blog'
import { SHARE_IMAGE } from '../../site'
import '../blog.css'

// Static export: only the posts that exist at build time get a page
export const dynamicParams = false

// Next's static export refuses an empty list, so with no published posts yet we
// build a single placeholder that 404s
const NO_POSTS = '_none'

export function generateStaticParams() {
  const posts = getPosts()
  return posts.length ? posts.map((post) => ({ slug: post.slug })) : [{ slug: NO_POSTS }]
}

export async function generateMetadata({ params }) {
  const post = getPost((await params).slug)
  if (!post) return {}
  const images = post.image ? [{ url: post.image, alt: post.imageAlt }] : [SHARE_IMAGE]
  return {
    title: `${post.title} | Kenekt`,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      siteName: 'Kenekt',
      locale: 'en_AU',
      url: `/blog/${post.slug}`,
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images,
    },
  }
}

export default async function BlogPost({ params }) {
  const post = getPost((await params).slug)
  if (!post) notFound()

  return (
    <main className="concept blog">
      <BlogNav />

      <article className="blog-post shell">
        <Link className="text-link" href="/blog">All posts</Link>
        <header>
          <time dateTime={post.date}>
            {formatDate(post.date)}
            {post.author && ` · ${post.author}`}
            {post.draft && <em> · Draft</em>}
          </time>
          <h1>{post.title}</h1>
          {post.summary && <p>{post.summary}</p>}
        </header>
        {post.image && <img className="blog-post-cover" src={post.image} alt={post.imageAlt} />}
        <div className="blog-body" dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <Footer />
    </main>
  )
}
