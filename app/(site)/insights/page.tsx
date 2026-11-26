import type { Metadata } from 'next'
import Link from 'next/link'
import InsightsNav from '@/components/InsightsNav'
import Footer from '@/components/Footer'
import EstateMap from '@/components/EstateMap'
import { getPosts, formatDate } from '@/lib/posts'
import { SHARE_IMAGE } from '../../site'
import './insights.css'

const title = 'Insights | Kenekt'
const description = 'Market research, suburb insights and how-tos for property advisers, builders and land developers working with Kenekt.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/insights' },
  openGraph: {
    type: 'website',
    siteName: 'Kenekt',
    locale: 'en_AU',
    url: '/insights',
    title,
    description,
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [SHARE_IMAGE],
  },
}

export default async function InsightsIndex() {
  const posts = await getPosts()

  return (
    <main className="concept insights">
      <div className="insights-bg" aria-hidden="true">
        <EstateMap id="insights-road" className="insights-map" fit="xMaxYMin slice" />
      </div>
      <InsightsNav />

      <section className="insights-head shell">
        <span>Market Research & Insights</span>
        <h1>Explore insights covering markets, suburbs and growth</h1>
      </section>

      <section className="insights-list shell">
        {posts.length === 0 && <p className="insights-empty">No articles yet. Check back soon.</p>}
        {posts.map((post) => (
          <article className="insights-card" key={post.slug}>
            <Link href={`/insights/${post.slug}`}>
              {post.image && <img src={post.image} alt={post.imageAlt} loading="lazy" />}
              <time dateTime={post.date ?? undefined}>
                {formatDate(post.date)}
                {post.draft && <em> · Draft</em>}
              </time>
              <h2>{post.title}</h2>
              {post.summary && <p>{post.summary}</p>}
            </Link>
          </article>
        ))}
      </section>

      <Footer />
    </main>
  )
}
