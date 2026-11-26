import type { Metadata } from 'next'
import KeystaticApp from './keystatic'

export const metadata: Metadata = {
  title: 'Kenekt editor',
  robots: { index: false, follow: false },
}

// Its own root layout, so the editor gets none of the site's styles, tracking scripts or icons
export default function KeystaticLayout() {
  return (
    <html lang="en-AU">
      <body>
        <KeystaticApp />
      </body>
    </html>
  )
}
