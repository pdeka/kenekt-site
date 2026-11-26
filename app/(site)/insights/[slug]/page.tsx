import type { Metadata } from 'next'
import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Markdoc from '@markdoc/markdoc'
import InsightsNav from '@/components/InsightsNav'
import Footer from '@/components/Footer'
import EstateMap from '@/components/EstateMap'
import { getPosts, getPost, formatDate } from '@/lib/posts'
import { SHARE_IMAGE } from '../../../site'
import '../insights.css'

// Static export: only the posts that exist at build time get a page
export const dynamicParams = false

// Next's static export refuses an empty list, so with no published posts we build a single placeholder that 404s
const NO_POSTS = '_none'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.length ? posts.map((post) => ({ slug: post.slug })) : [{ slug: NO_POSTS }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost((await params).slug)
  if (!post) return {}
  const description = post.summary || undefined
  const images = post.image ? [{ url: post.image, alt: post.imageAlt }] : [SHARE_IMAGE]
  return {
    title: `${post.title} | Kenekt`,
    description,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: 'article',
      siteName: 'Kenekt',
      locale: 'en_AU',
      url: `/insights/${post.slug}`,
      title: post.title,
      description,
      publishedTime: post.date ?? undefined,
      authors: post.author ? [post.author] : undefined,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images,
    },
  }
}

export default async function InsightsPost({ params }: Props) {
  const post = await getPost((await params).slug)
  if (!post) notFound()

  const { node } = await post.content()
  const errors = Markdoc.validate(node)
  if (errors.length) throw new Error(`Invalid content in post "${post.slug}": ${errors.map((e) => e.error.message).join('; ')}`)
  const body = Markdoc.renderers.react(Markdoc.transform(node), React)
  const button = post.button.label && post.button.link ? post.button : null

  return (
    <main className="concept insights">
      <div className="insights-bg" aria-hidden="true">
        <EstateMap id="insights-road" className="insights-map" fit="xMaxYMin slice" />
      </div>
      <InsightsNav />

      <article className="insights-post shell">
        <Link className="text-link" href="/insights">All insights</Link>
        <header>
          <p className="insights-meta">
            <time dateTime={post.date ?? undefined}>{formatDate(post.date)}</time>
            {post.author && ` · ${post.author}`}
            {post.draft && <em> · Draft</em>}
          </p>
          <h1>{post.title}</h1>
          {post.summary && <p>{post.summary}</p>}
        </header>
        {post.image && <img className="insights-post-cover" src={post.image} alt={post.imageAlt} />}
        <div className="insights-body">{body}</div>
        {button && (
          <div className="insights-cta">
            <a
              className="pill pill-dark"
              href={button.link!}
              {...(/^https?:\/\//.test(button.link!) && { target: '_blank', rel: 'noopener' })}
            >
              {button.label}
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
