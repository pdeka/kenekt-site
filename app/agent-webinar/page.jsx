import Link from 'next/link'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'
import { SHARE_IMAGE } from '../site'
import './landing.css'

const title = 'Webinar: scale your property deals with wholesale & off-market H&L | Kenekt'
const description =
  'See how to source verified wholesale and off-market house and land, create branded brochures and move deals forward from one workspace.'

// A paid-ads landing page: kept out of search results and the sitemap so it doesn't compete with the main pages
/** @type {import('next').Metadata} */
export const metadata = {
  title,
  description,
  alternates: { canonical: '/agent-webinar' },
  robots: { index: false, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'Kenekt',
    locale: 'en_AU',
    url: '/agent-webinar',
    title,
    description,
    images: [SHARE_IMAGE],
  },
  twitter: { card: 'summary_large_image', title, description, images: [SHARE_IMAGE] },
}

const covers = [
  { title: 'End-to-end support', body: 'We work alongside you from day one through to handover.' },
  { title: '70+ verified suppliers', body: 'Access stock from 70+ verified suppliers (and growing), with regularly updated listings and dedicated support.' },
  { title: 'Off-market stock', body: 'Off-market house & land, dual keys, duplexes, co-living and rooming houses. Apartments and townhouses as well.' },
  { title: 'High-yield strategies', body: 'Rooming (up to 12 beds), duals and co-living options, and a discussion on those asset types.' },
  { title: 'White-labelled packs', body: 'White-labelled property information packs for every package.' },
  { title: 'Admin & BDM support', body: 'Dedicated admin and BDM support through to settlement.' },
]

export default function AgentWebinarPage() {
  return (
    <main className="concept lp">
      {/* Stripped-down header: the page has one job, so no menu to wander off through */}
      <header className="lp-nav shell">
        <Link className="brand" href="/">
          <img src="/assets/logo/kenekt-mark.svg" alt="Kenekt home" width={48} height={48} />
        </Link>
        <a className="pill pill-dark" href="tel:1300536358">
          1 300 KENEKT
          <lord-icon
            src="https://cdn.lordicon.com/mkpuxlnz.json"
            trigger="hover"
            state="hover-pinch"
            colors="primary:#4be1ec,secondary:#cb5eee"
            stroke="bold"
            style={{ width: 24, height: 24 }}
          ></lord-icon>
        </a>
      </header>

      <section className="lp-hero">
        <div className="lp-hero-inner shell">
          <div className="lp-hero-copy">
            <p className="lp-tagline">Research with clarity. Transact with confidence.</p>
            <p className="lp-eyebrow">Webinar for property advisers, mortgage brokers, buyers agents &amp; project sales partners</p>
            <h1>Scale your property deals with wholesale &amp; off-market H&amp;L stock</h1>
            <p className="lp-lead">
              See how to source verified wholesale and off-market house and land, create branded brochures and move deals forward from one workspace.
            </p>
            <ul className="lp-proof">
              <li><strong>70+</strong> verified suppliers</li>
              <li><strong>White-labelled</strong> packs for every package</li>
              <li><strong>Support</strong> through to settlement</li>
            </ul>
          </div>

          <div className="lp-form-card" id="register">
            <h2>Save your seat</h2>
            <p>Tell us a little about you and we’ll send you the webinar details.</p>
            <LeadForm contentName="Agent webinar" />
          </div>
        </div>
      </section>

      <section className="lp-covers shell" aria-labelledby="covers-heading">
        <h2 id="covers-heading">A quick preview of what Kenekt offers and the webinar will cover</h2>
        <ol>
          {covers.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="lp-close shell">
        <h2>Get clarity on whether Kenekt is the missing piece to grow your business</h2>
        <a className="pill pill-blue" href="#register">
          Register for the webinar
          <lord-icon
            src="https://cdn.lordicon.com/cyvvyiob.json"
            trigger="hover"
            state="hover-pinch"
            colors="primary:#4be1ec,secondary:#cb5eee"
            stroke="bold"
            style={{ width: 24, height: 24 }}
          ></lord-icon>
        </a>
      </section>

      <Footer />
    </main>
  )
}
