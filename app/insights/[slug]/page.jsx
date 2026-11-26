import Link from 'next/link'
import { notFound } from 'next/navigation'
import InsightsNav from '@/components/InsightsNav'
import Footer from '@/components/Footer'
import EstateMap from '@/components/EstateMap'
import { getPosts, getPost, formatDate } from '@/lib/insights'
import { SHARE_IMAGE } from '../../site'
import '../insights.css'

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
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: 'article',
      siteName: 'Kenekt',
      locale: 'en_AU',
      url: `/insights/${post.slug}`,
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

export default async function InsightsPost({ params }) {
  const post = getPost((await params).slug)
  if (!post) notFound()

  return (
    <main className="concept insights">
      <div className="insights-bg" aria-hidden="true">
        <EstateMap id="insights-road" className="insights-map" fit="xMaxYMin slice" />
      </div>
      <InsightsNav />

      <article className="insights-post shell">
        <Link className="text-link" href="/insights">All posts</Link>
        <header>
          <time dateTime={post.date}>
            {formatDate(post.date)}
            {post.author && ` · ${post.author}`}
            {post.draft && <em> · Draft</em>}
          </time>
          <h1>{post.title}</h1>
          {post.summary && <p>{post.summary}</p>}
        </header>
        {post.image && <img className="insights-post-cover" src={post.image} alt={post.imageAlt} />}
        <div className="insights-body" dangerouslySetInnerHTML={{ __html: post.html }} />
        {post.button && (
          <div className="insights-cta">
            <a
              className="pill pill-dark"
              href={post.button.link}
              {...(/^https?:\/\//.test(post.button.link) && { target: '_blank', rel: 'noopener' })}
            >
              {post.button.label}
              <lord-icon
                src="https://cdn.lordicon.com/zlriqolf.json"
                trigger="hover"
                state="hover-pointing"
                colors="primary:#4be1ec,secondary:#cb5eee"
                stroke="bold"
                style={{ width: 24, height: 24 }}
              ></lord-icon>
            </a>
          </div>
        )}
      </article>

      <Footer />
    </main>
  )
}
