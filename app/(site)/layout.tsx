import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import LordIcon from '@/components/LordIcon'
import SiteScripts from '@/components/SiteScripts'
import { SHARE_IMAGE, SITE_URL } from '../site'
import './globals.css'

// Google Analytics 4 measurement ID
const GA_ID = 'G-Z1PXYWX18Y'

// LinkedIn Insight Tag partner ID
const LINKEDIN_PARTNER_ID = '3455692'

// Meta (Facebook) Pixel ID
const META_PIXEL_ID = '1841460535946656'

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
  // Meta Business domain verification
  verification: {
    other: { 'facebook-domain-verification': 't1qgdwurre4ptux4zume94vs95sv3l' },
  },
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
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`window._linkedin_partner_id = '${LINKEDIN_PARTNER_ID}';
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(window._linkedin_partner_id);
if (!window.lintrk) { window.lintrk = function(a, b) { window.lintrk.q.push([a, b]) }; window.lintrk.q = [] }`}
        </Script>
        <Script src="https://snap.licdn.com/li.lms-analytics/insight.min.js" strategy="afterInteractive" />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} alt="" src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_PARTNER_ID}&fmt=gif`} />
        </noscript>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} alt="" src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} />
        </noscript>
      </body>
    </html>
  )
}
