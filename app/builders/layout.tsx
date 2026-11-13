import type { Metadata } from 'next'
import { SHARE_IMAGE } from '../site'
import './builders.css'

// Builders search/share text, reused for og: and twitter:
const title = 'Kenekt for builders — Grow wholesale, not headcount'
const description =
  'Put your house & land stock in front of 617+ property advisers. List free on the Kenekt Marketplace, outsource your wholesale channel or run a branded portal.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/builders' },
  // Child segments replace (not merge) openGraph/twitter, so these are restated in full
  openGraph: {
    type: 'website',
    siteName: 'Kenekt',
    locale: 'en_AU',
    url: '/builders',
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

export default function BuildersLayout({ children }: { children: React.ReactNode }) {
  return children
}
