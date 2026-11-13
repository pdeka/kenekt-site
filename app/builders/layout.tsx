import type { Metadata } from 'next'
import { SHARE_IMAGE } from '../site'
import './builders.css'

export const metadata: Metadata = {
  title: 'Kenekt for builders — List once. Sell everywhere.',
  description: 'Kenekt for builders — list house & land packages once, control every allocation and see each enquiry live.',
  alternates: { canonical: '/builders' },
  // Child segments replace (not merge) openGraph/twitter, so these are restated in full
  openGraph: {
    type: 'website',
    siteName: 'Kenekt',
    locale: 'en_AU',
    url: '/builders',
    title: 'Kenekt for builders — List once. Sell everywhere.',
    description: 'Kenekt for builders — list house & land packages once, control every allocation and see each enquiry live.',
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kenekt for builders — List once. Sell everywhere.',
    description: 'Kenekt for builders — list house & land packages once, control every allocation and see each enquiry live.',
    images: [SHARE_IMAGE],
  },
}

export default function BuildersLayout({ children }: { children: React.ReactNode }) {
  return children
}
