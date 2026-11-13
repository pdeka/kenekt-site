import type { Metadata } from 'next'
import LordIcon from '@/components/LordIcon'
import SiteScripts from '@/components/SiteScripts'
import { SITE_URL } from './site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Kenekt: New Property Marketplace',
  description:
    'Kenekt — Australia’s new property connection layer. Source verified house & land opportunities from one connected workspace.',
  icons: {
    icon: '/assets/logo/kenekt-mark.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <LordIcon />
        <SiteScripts />
      </body>
    </html>
  )
}
