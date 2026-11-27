import Link from 'next/link'
import InsightsNav from '@/components/InsightsNav'
import Footer from '@/components/Footer'
import EstateMap from '@/components/EstateMap'
import { getPosts, formatDate } from '@/lib/insights'
import { SHARE_IMAGE } from '../site'
import './insights.css'

const title = 'Insights | Kenekt'
const description = 'News, market insights and how-tos for property advisers and builders working with Kenekt.'

// Its own share tags, or links to /insights would preview as the home page
/** @type {import('next').Metadata} */
export const metadata = {
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

export default function InsightsIndex() {
  const posts = getPosts()

  return (
    <main className="concept insights">
      <div className="insights-bg" aria-hidden="true">
        <EstateMap id="insights-road" className="insights-map" fit="xMaxYMin slice" />
      </div>
      <InsightsNav />

      <section className="insights-head shell">
        <span>Market Research & Insights</span>
        <h1>Explore insights covering markets, suburbs and growth</h1>
        <p>
          Create your Kenekt account to access all our suburb, region and industry reports and share them with buyers under your own brand.
        </p>
        <div className="hero-actions">
          <a className="pill pill-blue" href="https://portal.kenekt.com.au/sign_up">
            Create your free account
            <lord-icon
              src="https://cdn.lordicon.com/cyvvyiob.json"
              trigger="hover"
              state="hover-pinch"
              colors="primary:#4be1ec,secondary:#cb5eee"
              stroke="bold"
              style={{ width: 24, height: 24 }}
            ></lord-icon>
          </a>
        </div>
      </section>

      <section className="insights-list shell">
        {posts.length === 0 && <p className="insights-empty">No articles yet. Check back soon.</p>}
        {posts.map((post) => (
          <article className="insights-card" key={post.slug}>
            <Link href={`/insights/${post.slug}`}>
              {post.image && <img src={post.image} alt={post.imageAlt} loading="lazy" />}
              <time dateTime={post.date}>
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
