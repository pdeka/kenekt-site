import KeystaticApp from './keystatic'

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
