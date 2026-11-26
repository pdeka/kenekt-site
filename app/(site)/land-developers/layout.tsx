import type { Metadata } from 'next'
import { SHARE_IMAGE } from '../../site'
import '../builders/builders.css'
import './land.css'

// Land developers search/share text, reused for og: and twitter:
const title = 'Kenekt for land developers | Sell lots through wholesale builders'
const description =
  'Sell land off-market through 70+ wholesale builders with ready-to-build capacity and 600+ qualified buyer’s agents. From boutique releases to 100+ lot estates.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/land-developers' },
  // Child segments replace (not merge) openGraph/twitter, so these are restated in full
  openGraph: {
    type: 'website',
    siteName: 'Kenekt',
    locale: 'en_AU',
    url: '/land-developers',
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

export default function LandDevelopersLayout({ children }: { children: React.ReactNode }) {
  return children
}
