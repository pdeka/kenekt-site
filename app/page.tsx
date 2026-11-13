import Link from 'next/link'
import SenjaWidget from '@/components/SenjaWidget'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="concept concept-signal">
      <header className="site-nav shell">
        <a className="brand" href="#">
          <img src="/assets/logo/kenekt-mark.svg" alt="Kenekt home" width={48} height={48} />
        </a>
        <nav id="site-menu">
          <a href="#signal-story" aria-current="page">For advisers</a>
          <Link href="/builders">For builders</Link>
          <a href="https://insights.kenekt.app/">Insights</a>
        </nav>
        <div className="nav-actions">
          <a href="https://portal.kenekt.com.au">Log in
          <lord-icon
            src="https://cdn.lordicon.com/covqnqfn.json"
            trigger="hover"
            state="hover-pinch"
            colors="primary:#4be1ec,secondary:#cb5eee"
            stroke="bold"
            style={{ width: 24, height: 24 }}
          ></lord-icon>
          </a>
          <a className="pill pill-dark" href="https://portal.kenekt.com.au/sign_up">
            Start sourcing
            <lord-icon
              src="https://cdn.lordicon.com/qkcnmrzg.json"
              trigger="hover"
              state="hover-pinch"
              colors="primary:#4be1ec,secondary:#cb5eee"
              stroke="bold"
              style={{ width: 24, height: 24 }}
            ></lord-icon>
          </a>
        </div>
        <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="site-menu" aria-label="Open menu">
          <span></span>
          <span></span>
        </button>
      </header>

      <section className="signal-hero shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span></span>
            Get Australia’s new property connection layer
          </div>
          <h1>
            <em>Research</em> with clarity. <em>Transact</em> with confidence<span className="hang-stop">.</span>
          </h1>
          <p>
            Source verified wholesale off-market house & land opportunities, create custom branded marketing brochures and move deals forward, all from one connected workspace.
          </p>
          <div className="hero-actions">
            <a className="pill pill-blue" href="https://portal.kenekt.com.au/sign_up">
              Get free access
              <lord-icon
                src="https://cdn.lordicon.com/cyvvyiob.json"
                trigger="hover"
                state="hover-pinch"
                colors="primary:#4be1ec,secondary:#cb5eee"
                stroke="bold"
                style={{ width: 24, height: 24 }}
              ></lord-icon>
            </a>
            <a className="text-link" href="https://www.youtube.com/watch?v=_jUESOJnt58">
              <span className="text-link-full">Watch the overview</span>
              <span className="text-link-short">Overview</span>
              <span className="text-link-time">01:14</span>
            </a>
          </div>
          <div className="pronunciation">
            <b>kenekt</b>
            <span>/kəˈnɛkt/</span>
            <small>verb: to bring people and possibilities together.</small>
          </div>
        </div>

        <div className="signal-visual">
          <div className="tablet-wrap">
            <div className="hero-plugset" aria-hidden="true">
              <svg className="hero-wire">
                <path d="M -110 250 C -110 110 -150 0 -73 0" pathLength={1} />
              </svg>
              <span className="node wire-origin"></span>
              <span className="plug hero-plug">
                <svg viewBox="0 0 56 32">
                  <path className="plug-prongs" d="M38 11h14M38 21h14" />
                  <rect className="plug-collar" x="0" y="10" width="11" height="12" rx="3" />
                  <rect className="plug-body" x="8" y="3" width="32" height="26" rx="8" />
                  <path className="plug-grip" d="M21 10v12M28 10v12" />
                </svg>
              </span>
              <span className="socket hero-socket">
                <svg viewBox="0 0 40 44">
                  <rect className="socket-body" x="1" y="1" width="38" height="42" rx="11" />
                  <path className="socket-slots" d="M1 17h8M1 27h8" />
                  <circle className="socket-light" cx="28" cy="13" r="3.5" />
                </svg>
              </span>
            </div>

            <div
              className="tablet"
              role="img"
              aria-label="Kenekt platform on a tablet: a filterable table of 2,972 house and land packages with status, price, type and estimated yield"
            >
              <div className="tablet-screen" aria-hidden="true">
                <aside className="ts-side">
                  <img className="ts-logo" src="/assets/logo/kenekt-mark.svg" alt="" />
                  <div className="ts-title">Filters</div>
                  <div className="ts-search">
                    <svg viewBox="0 0 12 12">
                      <circle cx="5" cy="5" r="3.6" />
                      <path d="m8 8 2.6 2.6" />
                    </svg>
                    Quick Search....
                  </div>
                  <div className="ts-group">State</div>
                  <ul className="ts-list">
                    <li>VIC (514)</li>
                    <li>QLD (228)</li>
                    <li>SA (151)</li>
                    <li>NSW (191)</li>
                    <li>WA (7)</li>
                  </ul>
                  <div className="ts-group">Region</div>
                  <div className="ts-group">Property type</div>
                  <ul className="ts-list">
                    <li>Apartment (12)</li>
                    <li>Co Living (117)</li>
                    <li>Rooming House (18)</li>
                    <li>Duplex (11)</li>
                    <li>Dual Occupancy (7)</li>
                    <li>House (864)</li>
                    <li>House &amp; Granny Flat (7)</li>
                    <li>NDIS (9)</li>
                    <li>Town House (3)</li>
                  </ul>
                  <div className="ts-group">Category</div>
                  <div className="ts-group">Contract type</div>
                  <div className="ts-group">Bedrooms</div>
                  <div className="ts-group">Status</div>
                  <div className="ts-group">Settings</div>
                  <div className="ts-setting">Search nearby suburbs</div>
                  <div className="ts-switch"></div>
                </aside>
                <div className="ts-main">
                  <div className="ts-bar">
                    <span>2972 Results</span>
                    <b>Export</b>
                  </div>
                  <table className="ts-table">
                    <thead>
                      <tr>
                        <th>
                          <i></i>
                        </th>
                        <th>Lot / Location / Project</th>
                        <th>Status</th>
                        <th>Package price</th>
                        <th>Type</th>
                        <th>Build m²</th>
                        <th>Land m²</th>
                        <th>Land price</th>
                        <th>Reg.est</th>
                        <th>Contract type</th>
                        <th>Weekly rent</th>
                        <th>Yield est.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['VIC,THORNHILL PARK', '10, Thornhill Gardens', 'st st-offer', 'Under Offer', '$531,200', '95.09', '150', '$220,000', 'Q2 2026', '$359', '3.51%'],
                        ['VIC,THORNHILL PARK', '11, Thornhill Gardens', 'st', 'Available', '$531,850', '95.09', '150', '$220,000', 'Q2 2026', '$359', '3.51%'],
                        ['VIC,THORNHILL PARK', '20, Thornhill Gardens', 'st', 'Available', '$548,450', '118.32', '162', '$234,900', 'Q2 2026', '$449', '4.26%'],
                        ['VIC,THORNHILL PARK', '7, Thornhill Gardens', 'st', 'Available', '$549,950', '118.32', '162', '$234,900', 'Q2 2026', '$449', '4.25%'],
                        ['VIC,THORNHILL PARK', '6, Thornhill Gardens', 'st', 'Available', '$549,950', '118.32', '162', '$234,900', 'Q2 2026', '$449', '4.25%'],
                        ['VIC,THORNHILL PARK', '4, Thornhill Gardens', 'st', 'Available', '$549,950', '151.28', '630', '$155,000', 'Titled', '$399', '3.75%'],
                        ['VIC, Ararat – 303', 'Greenhill Lake Estate', 'st', 'Available', '$552,800', '151.28', '532', '$155,000', 'Titled', '$399', '3.75%'],
                        ['VIC, Ararat – 307', 'Greenhill Lake Estate', 'st', 'Available', '$552,800', '116.88', '221', '$260,000', 'Q3 2025', '$451', '4.24%'],
                        ['VIC, Beveridge', 'Ooranya Estate', 'st', 'Available', '$552,850', '128.59', '221', '$260,000', 'Q3 2025', '$451', '4.17%'],
                        ['VIC, Beveridge', 'Ooranya Estate', 'st', 'Available', '$561,750', '118.32', '162', '$234,900', 'Q2 2026', '$449', '4.13%'],
                        ['VIC, Thornhill Park', '11 Thornhill Gardens', 'st', 'Available', '$564,750', '130.32', '221', '$245,000', 'Aug-25', '$537', '4.93%'],
                        ['VIC, Lara', 'Austin Estate', 'st', 'Available', '$566,500', '159.16', '630', '$155,000', 'Titled', 'On Request', 'On Request'],
                        ['VIC, Ararat', 'Greenhill Lake Estate', 'st', 'Available', '$566,500', '98.06', '150', '$255,000', 'Q3 2025', '$482', '4.39%'],
                      ].map((row, i) => (
                        <tr key={i}>
                          <td>
                            <i></i>
                          </td>
                          <td>
                            {row[0]}
                            <span>{row[1]}</span>
                          </td>
                          <td>
                            <em className={row[2]}>{row[3]}</em>
                          </td>
                          <td>{row[4]}</td>
                          <td>
                            <em className="tp">House</em>
                          </td>
                          <td>{row[5]}</td>
                          <td>{row[6]}</td>
                          <td>{row[7]}</td>
                          <td>{row[8]}</td>
                          <td>2-part Contract</td>
                          <td>{row[9]}</td>
                          <td>{row[10]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="result-card">
            <span className="mini-label">Matching your brief</span>
            <strong>36 verified packages</strong>
            <div className="result-line">
              <i></i>
              <span></span>
              <b></b>
            </div>
          </div>
          <div className="verified-chip">
            <span>✓</span> Stock verified today
          </div>
        </div>
      </section>

      <section className="signal-proof shell" id="signal-story">
        <p>One source of truth, from search to sale.</p>
        <div className="proof-grid" data-connect="">
          <div className="proof-thread" aria-hidden="true">
            <span></span>
            <i data-at="0"></i>
            <i data-at=".333"></i>
            <i data-at=".667"></i>
            <span className="plug proof-plug">
              <svg viewBox="0 0 56 32">
                <path className="plug-prongs" d="M38 11h14M38 21h14" />
                <rect className="plug-collar" x="0" y="10" width="11" height="12" rx="3" />
                <rect className="plug-body" x="8" y="3" width="32" height="26" rx="8" />
                <path className="plug-grip" d="M21 10v12M28 10v12" />
              </svg>
            </span>
            <span className="socket proof-socket" data-at="1">
              <svg viewBox="0 0 40 44">
                <rect className="socket-body" x="1" y="1" width="38" height="42" rx="11" />
                <path className="socket-slots" d="M1 17h8M1 27h8" />
                <circle className="socket-light" cx="28" cy="13" r="3.5" />
              </svg>
            </span>
          </div>
          <article>
            <span>01</span>
            <h3>Search nationwide</h3>
            <p>Explore our latest stocklist with 2,000+ opportunities from verified builders. We do the homework and due diligence so you can focus on buyers and their needs.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Compare and present with clarity</h3>
            <p>
            Research, shortlist and present property opportunities with marketing brochures under your own brand.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Close with confidence</h3>
            <p>
            Move from enquiry to settlement with expert support at every step, so you can focus on your buyer.
            </p>
          </article>
        </div>
      </section>

      <section className="concept-note shell">
        <div>
          <span>Off-market Full-turnkey H&L, Duals, Duplexes, Rooming, Townhouses & apartments</span>
          <h2>Your competitive edge in the new property market.</h2>
        </div>
        <p>
        As of Nov 26, Kenekt aggregates 75+ suppliers, providing a broad national
        footprint with approximately 2,621+ off-market new property packages in VIC, QLD, NSW,
        ACT, SA, TAS and WA. We aim to continue expanding our supplier network as we scale nationally throughout FY27.
        </p>
      </section>

      <section className="plans shell">
        <div className="plans-head">
          <span>For agencies &amp; property advisers</span>
          <h2>Kenekt for agencies &amp; property advisers.</h2>
          <p>Kenekt is free for agencies, property advisers, mortgage brokers &amp; accountants.</p>
          <a className="text-link"
            href="https://adviser-brochure-5fufpe3.gamma.site/"
          >
            Full product brochure
          </a>
        </div>

        <div className="plans-grid">
          <div className="plan">
            <span className="plan-tier">
            Single Agent Account
            <lord-icon
              src="https://cdn.lordicon.com/rzsnbiaw.json"
              trigger="hover"
              state="hover-pinch"
              colors="primary:#4be1ec,secondary:#cb5eee"
              stroke="bold"
              style={{ width: 28, height: 28 }}
            ></lord-icon>
            </span>
            <strong className="plan-price">
              Free when you work with Kenekt
            </strong>
            <ul className="plan-features">
              <li><i>✓</i> Access nationwide stock and compare house &amp; land opportunities.</li>
              <li><i>✓</i> Utilise property research tools to present options to clients effectively.</li>
              <li><i>✓</i> Apply your branding to generate brochures and client materials.</li>
              <li><i>✓</i> Access continuously updated pricing and availability data.</li>
              <li><i>✓</i> Work with Kenekt&apos;s validated network of builders and suppliers.</li>
              <li><i>✓</i> Streamlined access to multiple suppliers via a single Kenekt referral agreement.</li>
              <li><i>✓</i> Export stocklists for in-depth research or distribution.</li>
            </ul>
            <a className="pill pill-blue plan-cta" href="https://portal.kenekt.com.au/sign_up">
              Sign up free for property advisers
              <lord-icon
                src="https://cdn.lordicon.com/cyvvyiob.json"
                trigger="hover"
                state="hover-pinch"
                colors="primary:#4be1ec,secondary:#cb5eee"
                stroke="bold"
                style={{ width: 28, height: 28 }}
              ></lord-icon>
            </a>
          </div>

          <div className="plan">
            <span className="plan-tier">
              Agency Account
              <lord-icon
                src="https://cdn.lordicon.com/kbsnckkc.json"
                trigger="hover"
                state="hover-pinch"
                colors="primary:#4be1ec,secondary:#cb5eee"
                stroke="bold"
                style={{ width: 28, height: 28 }}
              ></lord-icon>
            </span>
            <strong className="plan-price">Free when you work with Kenekt*</strong>
            <ul className="plan-features">
              <li><i>✓</i> Includes all features of the Single Agent Account.</li>
              <li><i>✓</i> Your own white-labelled portal, offering Kenekt&apos;s tools under your brand.</li>
              <li><i>✓</i> Custom portal address, e.g. port
              al.mydomain.com.au.</li>
              <li><i>✓</i> All enquiries from your portal are directed exclusively to your agency.</li>
              <li><i>✓</i> Create accounts for clients and referral partners within your branded environment.</li>
              <li><i>✓</i> White-labelled URLs for a seamless client experience.</li>
              <li><i>✓</i> Apply your agency&apos;s logo, colours and contact details across the portal and documents.</li>
              <li><i>✓</i> Unlimited access for your agency staff, property advisers and approved referrers.</li>
            </ul>
            <a className="pill pill-dark plan-cta" href="https://app.usemotion.com/meet/prabin-deka/agency-setup">
              Book a demo
              <lord-icon
                src="https://cdn.lordicon.com/fimgbbfr.json"
                trigger="hover"
                state="hover-pinch"
                colors="primary:#4be1ec,secondary:#cb5eee"
                stroke="bold"
                style={{ width: 28, height: 28 }}
              ></lord-icon>
            </a>
          </div>

          <div className="plan">
            <span className="plan-tier">
              Pro Agency Account
              <lord-icon
                  src="https://cdn.lordicon.com/hcbxnuro.json"
                  trigger="hover"
                  state="hover-pinch"
                  colors="primary:#4be1ec,secondary:#cb5eee"
                  stroke="regular"
                  style={{ width: 28, height: 28 }}
              ></lord-icon>
            </span>
            <strong className="plan-price">Free when you work with Kenekt*</strong>
            <ul className="plan-features">
              <li><i>✓</i> Includes all features of the Agency Account.</li>
              <li><i>✓</i> Seamless integration to display selected Kenekt packages on your existing website.</li>
              <li><i>✓</i> Option for a professional, templated website by Kenekt if you don&apos;t have one.</li>
              <li><i>✓</i> Publish integrated Kenekt stock directly to your website with live updates.</li>
              <li><i>✓</i> Offer branded property search functionality directly on your site.</li>
              <li><i>✓</i> Capture leads directly through your website for immediate follow-up.</li>
              <li><i>✓</i> Managed implementation and ongoing data synchronisation by Kenekt.</li>
            </ul>
            <a className="pill pill-dark plan-cta" href="https://app.usemotion.com/meet/prabin-deka/agency-setup">
              Book a demo
              <lord-icon
                src="https://cdn.lordicon.com/fimgbbfr.json"
                trigger="hover"
                state="hover-pinch"
                colors="primary:#4be1ec,secondary:#cb5eee"
                stroke="bold"
                style={{ width: 28, height: 28 }}
              ></lord-icon>
            </a>
          </div>
        </div>

        <div className="plans-notes">
          <div className="plans-note">
            <h3><span aria-hidden="true">*</span> How soon can I set up an Agency Account?</h3>
            <p>
              Single Agent and Agency accounts are free. To set up an Agency account, we ask that you first submit one
              qualifying Expression of Interest (EOI) through Kenekt to demonstrate your commitment.
            </p>
            <ul>
              <li>A qualifying EOI must be for a genuine client transaction, including a holding deposit.</li>
              <li>General enquiries and EOIs without a deposit may not qualify.</li>
              <li>
                To retain full access, you need to commit to working with Kenekt and doing transactions through Kenekt.
                Otherwise, access restrictions apply until you submit a qualifying EOI.
              </li>
            </ul>
          </div>

          <div className="plans-note">
            <h3>Don’t have a website?</h3>
            <p>
              Kenekt can build a complete website for your business using one of our templates as part of the Pro Agency
              Account. Website integration begins after your first unconditional deal.
            </p>
          </div>

          <p className="plans-notes-foot">Kenekt operates as an online property aggregator across all account tiers.</p>
        </div>
      </section>

      <figure className="photo-divider" style={{ '--photo-y': '68%' } as React.CSSProperties}>
        <img
          src="/assets/photos/estate-aerial-1280.webp"
          srcSet="/assets/photos/estate-aerial-1280.webp 1280w, /assets/photos/estate-aerial-2400.webp 2400w"
          sizes="100vw"
          alt="Aerial view of a growing house and land community"
          width={2400}
          height={1350}
          loading="lazy"
          decoding="async"
        />
      </figure>

      <section className="testimonials shell">
        <div className="testimonials-head">
          <span>Testimonials</span>
          <h2>Wall of love.</h2>
        </div>
        <SenjaWidget />
        <div className="testimonials-frame">
          <iframe
            id="wall-of-love-video-testimonials"
            src="https://senja.io/p/kenekt/video-testimonials?hideNavigation=true&embed=true"
            title="Wall of Love"
            frameBorder="0"
            scrolling="no"
            width="100%"
          ></iframe>
        </div>
      </section>

      <Footer />
    </main>
  )
}
