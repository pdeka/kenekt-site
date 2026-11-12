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
            <a className="pill pill-dark" href="https://calendly.com/martin-kenekt/kenekt-agency-demo">
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
                  <a className="pill pill-lime" href="https://calendly.com/martin-kenekt/kenekt-agency-demo">
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
                  <a className="text-link" href="https://calendly.com/martin-kenekt/kenekt-agency-demo">
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
          <p>Sell wholesale H&L through your own branded portal, with Kenekt’s team behind it.</p>
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
              <h3>We keep your stock current</h3>
              <p>Send us land availability and price changes. We update every package, and every agent on your portal sees it straight away.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Choose how much we run</h3>
              <p>Control which agents see each lot. Let Kenekt onboard agents and qualify enquiries through to EOI, or run it with your own team.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Sell with visibility</h3>
              <p>Every enquiry is emailed to you. Track holds, EOIs and deals as they happen, and step in when it’s time to issue the contract.</p>
            </article>
          </div>
        </section>

        <section className="concept-note shell">
          <div>
            <span>For builders</span>
            <h2>Wholesale growth, minus the overhead.</h2>
          </div>
          <p>
            From marketplace listing to a full wholesale sales desk. Choose how much Kenekt does, and grow volume without adding headcount.
          </p>
        </section>

        <section className="plans shell">
          <div className="plans-head">
            <span>Pricing for builders</span>
            <h2>Three ways to work with Kenekt.</h2>
            <p>
              Every builder works differently. Some have their own stock systems. Others want a platform,
              or a full wholesale partner. All builders can get the Kenekt Stock Management system, a custom branded agent portal and a Kenekt team that
              keeps your stock current. You choose how much of the wholesale sales process you want us to run.
            </p>
            <a className="text-link" href="https://kenekt-stock-management--qtra44m.gamma.site/">
              Full product brochure
            </a>
          </div>

          <div className="plans-grid">
            <div className="plan">
              <span className="plan-tier">
              Option A: Marketplace Channel
              <lord-icon
                  src="https://cdn.lordicon.com/pldgwxrz.json"
                  trigger="hover"
                  state="hover-pinch"
                  colors="primary:#4be1ec,secondary:#cb5eee"
                  stroke="bold"
                  style={{ width: 28, height: 28 }}
              ></lord-icon>
              </span>
              <strong className="plan-price">Kenekt as a channel partner</strong>
              <span className="plan-note">No setup cost and no software fees. Most builders start here.</span>
              <p className="plan-lede">
                Keep your systems. Kenekt connects to what you already use, brings your stock into the Kenekt Marketplace
                and presents it to our qualified adviser network, as another channel partner for your business.
              </p>
              <ul className="plan-features">
                <li><i>✓</i> <span><strong>Instant access</strong> to a curated, onboarded network of buyers’ agents, mortgage brokers and wealth advisors.</span></li>
                <li><i>✓</i> <span><strong>No change</strong> to your internal systems or processes.</span></li>
                <li><i>✓</i> <span><strong>Kenekt’s team supporting each sale</strong> from enquiry to EOI.</span></li>
                <li><i>✓</i> <span><strong>Your stock presented accurately</strong>, alongside Australia’s leading wholesale builders.</span></li>
                <li><i>✓</i> <span><strong>Flexible connection</strong>: portal access, API integration (Salesforce and other enterprise systems) or file-based supply.</span></li>
              </ul>
              <p className="plan-fit">Best for builders with their own stock systems who want more wholesale distribution with no change to how they work.</p>
              <a className="pill pill-blue plan-cta" href="https://calendly.com/martin-kenekt/kenekt-agency-demo">
                Book a 30 minute session
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
                Option B: Wholesale Partner
                <lord-icon
                    src="https://cdn.lordicon.com/oknahgcf.json"
                    trigger="hover"
                    state="hover-pinch"
                    colors="primary:#4be1ec,secondary:#cb5eee"
                    stroke="bold"
                    style={{ width: 28, height: 28 }}
                ></lord-icon>
              </span>
              <strong className="plan-price">Paid from commission</strong>
              <span className="plan-note">No setup cost. No monthly fee.</span>
              <p className="plan-lede">
                Outsource your wholesale channel. On your own branded portal, Kenekt recruits and qualifies agents, handles
                every enquiry and delivers signed EOIs with a holding deposit. Your team joins at contract.
              </p>
              <ul className="plan-features">
                <li><i>✓</i> <span><strong>A wholesale BDM and admin team</strong> without the salaries, recruitment or management overhead.</span></li>
                <li><i>✓</i> <span><strong>Only qualified, committed buyers</strong> reach your sales team.</span></li>
                <li><i>✓</i> <span><strong>Full visibility</strong>: every enquiry is emailed to you, plus reporting on every agent, enquiry and deal.</span></li>
                <li><i>✓</i> <span><strong>Your agent relationships protected</strong>: our agreement includes a non-recruitment clause.</span></li>
                <li><i>✓</i> <span><strong>Custom branded portal</strong> to onboard and manage your own agents.</span></li>
                <li><i>✓</i> <span><strong>Kenekt Stock Management</strong> with all features.</span></li>
                <li><i>✓</i> <span><strong>Stock admin handled by Kenekt</strong>.</span></li>
                <li><i>✓</i> <span><strong>Deal tracking</strong> through My Deals.</span></li>
              </ul>
              <p className="plan-fit">Best for builders who want to scale wholesale volume without growing an internal BDM team. Available once Kenekt has completed due diligence confirming your stock suits the wholesale channel.</p>
              <a className="pill pill-dark plan-cta" href="https://calendly.com/martin-kenekt/kenekt-agency-demo">
                Book a 30 minute session
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
              Option C: Platform + Admin
              <lord-icon
                  src="https://cdn.lordicon.com/zcpmxjfa.json"
                  trigger="hover"
                  state="hover-angle"
                  colors="primary:#4be1ec,secondary:#cb5eee"
                  stroke="bold"
                  style={{ width: 28, height: 28 }}
              ></lord-icon>
              </span>
              <strong className="plan-price">$999 per sale</strong>
              <span className="plan-note">$1,500 one-time setup · all prices include GST</span>
              <p className="plan-lede">
                Your team runs sales on your own branded portal and keeps control of agent onboarding, qualification and
                enquiries. Kenekt keeps your stock accurate and current.
              </p>
              <dl className="plan-pricing">
                <div><dt>One-time setup</dt><dd>$1,500</dd></div>
                <div><dt>Per sale from a portal enquiry</dt><dd>$999</dd></div>
                <div><dt>Monthly minimum</dt><dd>$999</dd></div>
                <div><dt>Monthly cap</dt><dd>$3,000</dd></div>
              </dl>
              <ul className="plan-features">
                <li><i>✓</i> <span><strong>Custom branded portal</strong> to onboard and manage your own agents.</span></li>
                <li><i>✓</i> <span><strong>Kenekt Stock Management</strong> with all features.</span></li>
                <li><i>✓</i> <span><strong>Stock admin handled by Kenekt</strong>.</span></li>
                <li><i>✓</i> <span><strong>Your commission structure untouched</strong>.</span></li>
                <li><i>✓</i> <span><strong>Deal tracking</strong> through My Deals.</span></li>
              </ul>
              <p className="plan-fit">Best for builders with an established sales team who want accurate stock and a professional agent portal with the admin support.
              You pay only when your portal delivers. The monthly minimum counts towards your per-sale fees, and your total never exceeds $3K a month.
              </p>
              <a className="pill pill-dark plan-cta" href="https://calendly.com/martin-kenekt/kenekt-agency-demo">
                Book a 30 minute session
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

          <div className="plans-shared">
            <strong>Included with Options B and C</strong>
            <ul className="plan-features">
              <li><i>✓</i> <span><strong>Custom branded agent portal</strong>: your brand, your stock, your agents, in a controlled, agent-only environment.</span></li>
              <li><i>✓</i> <span><strong>Kenekt Stock Management</strong>: manage packages, pricing and availability in real time, with standardised inclusions, disclaimers and documentation.</span></li>
              <li><i>✓</i> <span><strong>Stock admin handled by Kenekt</strong>: send us land availability and price changes in our set format and we keep every package up to date.</span></li>
              <li><i>✓</i> <span><strong>Push updates instantly</strong>: every authorised agent sees the latest stock the moment it changes.</span></li>
              <li><i>✓</i> <span><strong>Full reporting</strong>: track enquiries, EOIs and deals, with deal progress in My Deals.</span></li>
              <li><i>✓</i> <span><strong>Marketing tools</strong>: branded brochures, stocklists and email templates generated from your live stock.</span></li>
              <li><i>✓</i> <span><strong>Publish to the Kenekt Marketplace</strong>: share the same stock with our wider adviser network in one click.</span></li>
            </ul>
          </div>

        </section>

        <Footer />
      </main>
    </>
  )
}
