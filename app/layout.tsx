import type { Metadata, Viewport } from 'next'
import LordIcon from '@/components/LordIcon'
import SiteScripts from '@/components/SiteScripts'
import { SHARE_IMAGE, SITE_URL } from './site'
import './globals.css'

// Home page search/share text, reused for og: and twitter:
const title = 'Kenekt | Off-market house & land for property advisers'
const description =
  'Source verified wholesale house & land packages from 75+ builders, create branded client brochures and move deals forward. Free for property advisers.'

// Schema.org Organization + WebSite, so search engines can show the brand name, logo and profiles
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Kenekt',
      legalName: 'Kenekt Co Pty Ltd',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/assets/logo/kenekt-mark-512.png`,
        width: 512,
        height: 512,
      },
      description,
      email: 'info@kenekt.com.au',
      telephone: '+61 1300 536 358',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '20/1 Maitland Place',
        addressLocality: 'Norwest',
        addressRegion: 'NSW',
        postalCode: '2153',
        addressCountry: 'AU',
      },
      areaServed: { '@type': 'Country', name: 'Australia' },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: '+61 1300 536 358',
        email: 'info@kenekt.com.au',
        areaServed: 'AU',
        availableLanguage: 'English',
      },
      sameAs: [
        'https://www.facebook.com/KenektApp/',
        'https://www.instagram.com/kenekt.app/',
        'https://www.linkedin.com/company/kenektgroup/',
        'https://www.youtube.com/@kenekt',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'Kenekt',
      url: SITE_URL,
      inLanguage: 'en-AU',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  icons: {
    icon: '/assets/logo/kenekt-mark.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'Kenekt',
    locale: 'en_AU',
    url: '/',
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

// Tints the mobile browser bar in the brand gold (--orange)
export const viewport: Viewport = {
  themeColor: '#fdc140',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
        <LordIcon />
        <SiteScripts />
      </body>
    </html>
  )
}
