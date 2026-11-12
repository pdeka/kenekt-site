import Link from 'next/link'
import IconSprite from '@/components/IconSprite'
import Footer from '@/components/Footer'

const packages = [
  {
    sceneClass: '',
    tag: 'New release',
    lot: 'Lot 9/168 Heath Road',
    title: 'Oleander House Type 1',
    beds: 4,
    baths: 3,
    cars: 1,
    expTitle: 'Unknown',
    lotId: 'LT-3746343',
    packageId: 'BP-4276413',
    houseSize: '204m²',
    landSize: '225.0m²',
    statusClass: 'st',
    statusText: 'Available',
    price: '$997,000',
    allocated: 'Allocated 22-05',
    switchOn: true,
    lotLabel: 'Lot 9',
  },
  {
    sceneClass: 'scene-b',
    tag: '',
    lot: 'Lot 10/168 Heath Road',
    title: 'Oleander House Type 1',
    beds: 4,
    baths: 3,
    cars: 1,
    expTitle: 'Unknown',
    lotId: 'LT-4147639',
    packageId: 'BP-1861363',
    houseSize: '204m²',
    landSize: '225.2m²',
    statusClass: 'st st-offer',
    statusText: 'Under offer',
    price: '$997,000',
    allocated: 'Allocated 22-05',
    switchOn: true,
    lotLabel: 'Lot 10',
  },
  {
    sceneClass: 'scene-c',
    tag: '',
    lot: 'Lot 11/168 Heath Road',
    title: 'Banksia 28',
    beds: 4,
    baths: 2,
    cars: 2,
    expTitle: 'Q3 2026',
    lotId: 'LT-4012437',
    packageId: 'BP-2176011',
    houseSize: '231m²',
    landSize: '300.4m²',
    statusClass: 'st',
    statusText: 'Available',
    price: '$1,012,500',
    allocated: 'Allocated 24-05',
    switchOn: true,
    lotLabel: 'Lot 11',
  },
  {
    sceneClass: 'scene-d',
    tag: '',
    lot: 'Lot 12/168 Heath Road',
    title: 'Wattle Duo 22',
    beds: 3,
    baths: 2,
    cars: 1,
    expTitle: 'Unknown',
    lotId: 'LT-2444680',
    packageId: 'BP-6524501',
    houseSize: '196m²',
    landSize: '225.2m²',
    statusClass: 'st st-hold',
    statusText: 'On hold',
    price: '$968,000',
    allocated: 'Allocated 28-05',
    switchOn: false,
    lotLabel: 'Lot 12',
  },
]

export default function BuildersPage() {
  return (
    <>
      <IconSprite />

      <main className="concept concept-builders">
        <header className="site-nav shell">
          <Link className="brand" href="/">
            <img src="/assets/logo/kenekt-mark.svg" alt="Kenekt home" width={402} height={108} />
          </Link>
          <nav id="site-menu">
            <Link href="/">For advisers</Link>
            <Link href="/builders" aria-current="page">
              For builders
            </Link>
            <Link href="https://insights.kenekt.app">Insights</Link>
          </nav>
          <div className="nav-actions">
            <a href="https://app.kenekt.com.au">Stock Mgmt Log in
            <lord-icon
              src="https://cdn.lordicon.com/covqnqfn.json"
              trigger="hover"
              state="hover-pinch"
              colors="primary:#4be1ec,secondary:#cb5eee"
              stroke="bold"
              style={{ width: 24, height: 24 }}
            ></lord-icon>
            </a>
            <a className="pill pill-dark" href="#">
              List your stock
              <lord-icon
                  src="https://cdn.lordicon.com/jmfpxsax.json"
                  trigger="hover"
                  state="hover-pointing"
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

        <section className="b-intro shell">
          <div className="b-hero">
            <svg className="b-map" viewBox="0 0 1400 700" preserveAspectRatio="xMaxYMin slice" aria-hidden="true">
              <defs>
                <path id="road-1" d="M640 -20C700 200 880 270 1080 250s300-40 360 40" />
                <path id="road-2" d="M560 720C640 520 840 430 1060 440s320 70 380 30" />
                <path id="road-3" d="M1020 -20c-30 160 40 310 0 470s-60 200-20 270" />
                <path id="road-4" d="M-40 660c240-90 460-40 680-100" />
                <mask id="road-gaps">
                  <rect width="1400" height="700" fill="#fff" />
                  <g fill="none" stroke="#000" strokeWidth="16">
                    <use href="#road-1" />
                    <use href="#road-2" />
                    <use href="#road-3" />
                    <use href="#road-4" />
                  </g>
                </mask>
              </defs>
              <g className="b-map-lots" mask="url(#road-gaps)">
                <use href="#road-1" />
                <use href="#road-2" />
                <use href="#road-3" />
                <use href="#road-4" />
              </g>
              <g className="b-map-edges">
                <use href="#road-1" />
                <use href="#road-2" />
                <use href="#road-3" />
                <use href="#road-4" />
              </g>
              <circle className="b-ping" cx="1104" cy="214" r="5" />
              <circle className="b-ping" cx="930" cy="476" r="5" />
              <circle className="b-ping" cx="1236" cy="472" r="5" />
            </svg>

            <div className="b-hero-grid">
              <div className="b-hero-copy">
                <div className="eyebrow">
                  <span></span> Kenekt for builders
                </div>
                <h1>
                  Accelerate <em>wholesale revenue</em> without adding headcount
                </h1>
                <p>
                Your competitive edge in wholesale house & land.
                </p>
                <div className="hero-actions">
                  <a className="pill pill-lime" href="#">
                    Get free access
                    <lord-icon
                        src="https://cdn.lordicon.com/ntodxrsy.json"
                        trigger="hover"
                        state="hover-pinch"
                        colors="primary:#4be1ec,secondary:#cb5eee"
                        stroke="bold"
                        style={{ width: 24, height: 24 }}
                    ></lord-icon>
                  </a>
                  <a className="text-link" href="#">
                    Book a walkthrough <span>30 min</span>
                  </a>
                </div>
              </div>
              <ul className="b-stats">
                <li>
                  <strong>2,972</strong>
                  <span>Live packages listed</span>
                </li>
                <li>
                  <strong>617+</strong>
                  <span>Connected advisers</span>
                </li>
                <li>
                  <strong>70+ suppliers</strong>
                  <span>Linked to Kenekt</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="b-db">
            <div className="verified-chip">
              <span>✓</span> Synced with 53 of your advisers, plus 617 more across Kenekt · 2 min ago
            </div>
            <div className="db" role="region" aria-label="Example builder workspace showing five house and land packages (placeholder data)">
              <div className="db-top">
                <img className="db-mark" src="/assets/logo/kenekt-mark.svg" alt="" />
                <nav className="db-tabs" aria-label="Workspace">
                  <a href="#">
                    <svg viewBox="0 0 18 18" aria-hidden="true">
                      <use href="#i-projects" />
                    </svg>
                    <span>Projects</span>
                  </a>
                  <a href="#">
                    <svg viewBox="0 0 18 18" aria-hidden="true">
                      <use href="#i-pin" />
                    </svg>
                    <span>Lots</span>
                  </a>
                  <a className="is-active" href="#" aria-current="page">
                    <svg viewBox="0 0 18 18" aria-hidden="true">
                      <use href="#i-home" />
                    </svg>
                    <span>Packages</span>
                  </a>
                  <a href="#">
                    <svg viewBox="0 0 18 18" aria-hidden="true">
                      <use href="#i-sales" />
                    </svg>
                    <span>Sales</span>
                  </a>
                  <a href="#">
                    <svg viewBox="0 0 18 18" aria-hidden="true">
                      <use href="#i-library" />
                    </svg>
                    <span>Library</span>
                  </a>
                </nav>
                <div className="db-tools" aria-hidden="true">
                  <span className="db-icon">
                    <svg viewBox="0 0 18 18">
                      <use href="#i-search" />
                    </svg>
                  </span>
                  <span className="db-icon">
                    <svg viewBox="0 0 18 18">
                      <use href="#i-bell" />
                    </svg>
                    <b>3</b>
                  </span>
                  <span className="db-icon">
                    <svg viewBox="0 0 18 18">
                      <use href="#i-help" />
                    </svg>
                  </span>
                  <span className="db-avatar">PD</span>
                </div>
              </div>

              <div className="db-body">
                <div className="db-head">
                  <div>
                    <span className="mini-label">Builder workspace</span>
                    <h2>Packages</h2>
                  </div>
                  <div className="db-btns">
                    <a className="db-btn" href="#">
                      <svg viewBox="0 0 18 18" aria-hidden="true">
                        <use href="#i-alloc" />
                      </svg>
                      Allocations
                    </a>
                    <a className="db-btn db-btn-primary" href="#">
                      <svg viewBox="0 0 18 18" aria-hidden="true">
                        <use href="#i-export" />
                      </svg>
                      Export
                    </a>
                  </div>
                </div>

                <div className="db-filters">
                  <div className="db-chips">
                    <span className="db-chip">
                      <small>Project</small> Tegel Park <i aria-hidden="true">×</i>
                    </span>
                    <span className="db-chip">
                      <small>BDM</small> J. Whitfield <i aria-hidden="true">×</i>
                    </span>
                  </div>
                  <div className="db-sort">
                    <span className="db-count">5 packages</span>
                    <span className="db-select">
                      Region, Price (low – high){' '}
                      <svg viewBox="0 0 18 18" aria-hidden="true">
                        <use href="#i-chev" />
                      </svg>
                    </span>
                    <span className="db-refine">
                      <svg viewBox="0 0 18 18" aria-hidden="true">
                        <use href="#i-refine" />
                      </svg>
                      Refine
                    </span>
                  </div>
                </div>

                <div className="db-group">
                  <svg viewBox="0 0 18 18" aria-hidden="true">
                    <use href="#i-pin" />
                  </svg>
                  <div>
                    <strong>NSW, Camden Council</strong>
                    <span>Project: Tegel Park</span>
                  </div>
                </div>

                <ul className="pkg-list">
                  {packages.map((pkg) => (
                    <li className="pkg" key={pkg.packageId}>
                      <div className={`pkg-media${pkg.sceneClass ? ` ${pkg.sceneClass}` : ''}`}>
                        <svg className="pkg-scene" viewBox="0 0 320 200" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
                          <use href="#scene" />
                        </svg>
                        {pkg.tag && <span className="pkg-tag">{pkg.tag}</span>}
                      </div>
                      <div className="pkg-title">
                        <span className="pkg-loc">Leppington</span>
                        <h3>{pkg.title}</h3>
                        <p>{pkg.lot}</p>
                        <ul className="pkg-specs">
                          <li>
                            <svg viewBox="0 0 18 18" aria-hidden="true">
                              <use href="#i-bed" />
                            </svg>
                            {pkg.beds}
                            <span className="sr-only"> bedrooms</span>
                          </li>
                          <li>
                            <svg viewBox="0 0 18 18" aria-hidden="true">
                              <use href="#i-bath" />
                            </svg>
                            {pkg.baths}
                            <span className="sr-only"> bathrooms</span>
                          </li>
                          <li>
                            <svg viewBox="0 0 18 18" aria-hidden="true">
                              <use href="#i-car" />
                            </svg>
                            {pkg.cars}
                            <span className="sr-only"> car spaces</span>
                          </li>
                        </ul>
                      </div>
                      <dl className="pkg-meta">
                        <div>
                          <dt>Exp. title</dt>
                          <dd>{pkg.expTitle}</dd>
                        </div>
                        <div>
                          <dt>BDM</dt>
                          <dd>J. Whitfield</dd>
                        </div>
                        <div>
                          <dt>Lot ID</dt>
                          <dd>
                            <span className="pkg-id">{pkg.lotId}</span>
                          </dd>
                        </div>
                        <div>
                          <dt>Package ID</dt>
                          <dd>
                            <span className="pkg-id">{pkg.packageId}</span>
                          </dd>
                        </div>
                      </dl>
                      <dl className="pkg-size">
                        <div>
                          <dt>House size</dt>
                          <dd>{pkg.houseSize}</dd>
                        </div>
                        <div>
                          <dt>Land size</dt>
                          <dd>{pkg.landSize}</dd>
                        </div>
                        <div>
                          <dt>Status</dt>
                          <dd>
                            <em className={pkg.statusClass}>{pkg.statusText}</em>
                          </dd>
                        </div>
                      </dl>
                      <div className="pkg-actions">
                        <a className="db-btn db-btn-primary" href="#">
                          <svg viewBox="0 0 18 18" aria-hidden="true">
                            <use href="#i-eye" />
                          </svg>
                          View features
                        </a>
                        <a className="db-btn" href="#">
                          <svg viewBox="0 0 18 18" aria-hidden="true">
                            <use href="#i-share" />
                          </svg>
                          Share
                        </a>
                      </div>
                      <div className="pkg-price">
                        <strong>{pkg.price}</strong>
                        <span>{pkg.allocated}</span>
                        <button
                          className="switch"
                          type="button"
                          role="switch"
                          aria-checked={pkg.switchOn}
                          aria-label={`Show ${pkg.lotLabel} to advisers`}
                        >
                          <span>{pkg.switchOn ? 'Live' : 'Hidden'}</span>
                          <i></i>
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="signal-proof shell">
          <p>Publish wholesale H&L packages to Australia’s adviser network, control every allocation and opt to see each enquiry.</p>
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
              <h3>List once</h3>
              <p>Upload packages, pricing and inclusions a single time — every adviser’s view stays current automatically.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Allocate with control</h3>
              <p>Choose who sees each lot, switch stock live or hidden, and track every allocation.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Sell with visibility</h3>
              <p>See enquiries, holds and EOIs as they happen, so your sales team always moves first.</p>
            </article>
          </div>
        </section>

        <section className="concept-note shell">
          <div>
            <span>For builders</span>
            <h2>Plug your stock into the network.</h2>
          </div>
          <p>
            A builder-side workspace in the same Signal language: the hero sets the promise, and the live package
            database sits on top of it — every lot, its status and its allocation in one glance.
          </p>
        </section>

        <Footer />
      </main>
    </>
  )
}
