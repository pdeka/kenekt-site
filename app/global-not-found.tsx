import type { Metadata } from 'next'
import Link from 'next/link'
import SiteLayout from './(site)/layout'

// The site and the Keystatic editor each have their own root layout, so unmatched URLs need their own page
export const metadata: Metadata = {
  title: 'Page not found | Kenekt',
}

export default function GlobalNotFound() {
  return (
    <SiteLayout>
      <main className="concept not-found shell">
        <Link className="brand" href="/">
          <img src="/assets/logo/kenekt-mark.svg" alt="Kenekt home" width={48} height={48} />
        </Link>
        <div>
          <span>404</span>
          <h1>This page could not be found.</h1>
          <Link className="pill pill-dark" href="/">Back to Kenekt</Link>
        </div>
      </main>
    </SiteLayout>
  )
}
