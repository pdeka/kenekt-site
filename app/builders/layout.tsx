import type { Metadata } from 'next'
import './builders.css'

export const metadata: Metadata = {
  title: 'Kenekt for builders — List once. Sell everywhere.',
  description: 'Kenekt for builders — list house & land packages once, control every allocation and see each enquiry live.',
  alternates: { canonical: '/builders' },
}

export default function BuildersLayout({ children }: { children: React.ReactNode }) {
  return children
}
