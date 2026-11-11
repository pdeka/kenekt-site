import type { Metadata } from 'next'
import SiteScripts from '@/components/SiteScripts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kenekt — Every property. One clear connection.',
  description:
    'Kenekt — Australia’s property connection layer. Source verified house & land opportunities from one connected workspace.',
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
        <SiteScripts />
      </body>
    </html>
  )
}
