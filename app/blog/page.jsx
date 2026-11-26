import Link from 'next/link'
import BlogNav from '@/components/BlogNav'
import Footer from '@/components/Footer'
import { getPosts, formatDate } from '@/lib/blog'
import './blog.css'

const title = 'Blog | Kenekt'
const description = 'News, market insights and how-tos for property advisers and builders working with Kenekt.'

/** @type {import('next').Metadata} */
export const metadata = {
  title,
  description,
  alternates: { canonical: '/blog' },
}

export default function BlogIndex() {
  const posts = getPosts()

  return (
    <main className="concept blog">
      <BlogNav />

      <section className="blog-head shell">
        <span>Kenekt blog</span>
        <h1>News and insights for property advisers &amp; builders.</h1>
      </section>

      <section className="blog-list shell">
        {posts.length === 0 && <p className="blog-empty">No posts yet. Check back soon.</p>}
        {posts.map((post) => (
          <article className="blog-card" key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
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
