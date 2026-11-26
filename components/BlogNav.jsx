import Link from 'next/link'

/** The home page header, pointed back at the main site, for the blog pages. */
export default function BlogNav() {
  return (
    <header className="site-nav shell">
      <Link className="brand" href="/">
        <img src="/assets/logo/kenekt-mark.svg" alt="Kenekt home" width={48} height={48} />
      </Link>
      <nav aria-label="Main">
        <div className="audience-switch">
          <Link href="/" data-audience="advisers">For advisers</Link>
          <Link href="/builders" data-audience="builders">For builders</Link>
        </div>
        <Link href="/blog" aria-current="page">Blog</Link>
        <a href="https://help.kenekt.app/">Guides</a>
      </nav>
      <div className="nav-actions">
        <a href="https://portal.kenekt.com.au">Log in</a>
        <a className="pill pill-dark" href="https://portal.kenekt.com.au/sign_up">Start sourcing</a>
      </div>
    </header>
  )
}
