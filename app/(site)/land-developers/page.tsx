import Link from 'next/link'
import IconSprite from '@/components/IconSprite'
import Footer from '@/components/Footer'
import EstateMap from '@/components/EstateMap'
import MapBand from '@/components/MapBand'

const ENQUIRY = 'mailto:cameron@kenekt.com.au?subject=Land%20sales%20enquiry'
const PHONE = 'tel:0406588064'

const lots = [
  {
    lot: 'Lot 301',
    area: '375m²',
    frontage: 12.5,
    depth: 30,
    title: 'Q2 2027',
    lotId: 'LT-5118204',
    builders: 6,
    packages: 4,
    statusClass: 'st',
    statusText: 'Available',
    price: '$289,000',
    note: 'Released 14-11',
  },
  {
    lot: 'Lot 302',
    area: '400m²',
    frontage: 14,
    depth: 28.6,
    title: 'Q2 2027',
    lotId: 'LT-5118205',
    builders: 9,
    packages: 7,
    statusClass: 'st st-offer',
    statusText: 'EOI received',
    price: '$305,000',
    note: 'Deposit received',
  },
  {
    lot: 'Lot 303',
    area: '448m²',
    frontage: 14,
    depth: 32,
    title: 'Titled',
    lotId: 'LT-5118206',
    builders: 5,
    packages: 3,
    statusClass: 'st st-hold',
    statusText: 'Under contract',
    price: '$329,000',
    note: 'Finance approved',
  },
]

/** Plan view of a lot on its street, drawn to its frontage and depth */
function LotPlan({ frontage, depth }: { frontage: number; depth: number }) {
  const w = frontage * 6
  const h = depth * 3
  const x = (200 - w) / 2
  const y = 128 - h
  return (
    <svg className="lot-plan" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <rect className="lot-plan-road" x="0" y="132" width="200" height="18" />
      <rect className="lot-plan-nb" x={x - w - 4} y={y} width={w} height={h} />
      <rect className="lot-plan-nb" x={x + w + 4} y={y} width={w} height={h} />
      <rect className="lot-plan-lot" x={x} y={y} width={w} height={h} rx="2" />
      <text className="lot-plan-dim" x="100" y={y + h - 8} textAnchor="middle">{frontage}m</text>
      <text className="lot-plan-dim" x={x + w - 6} y={y + h / 2} textAnchor="end">{depth}m</text>
    </svg>
  )
}

const steps = [
  {
    title: 'Project confirmation',
    text: 'We confirm development details, lot pricing, sales strategy (allocation, put & call options) and commission.',
  },
  {
    title: 'Listing agreement',
    text: 'The state’s agency agreement is signed (Form 6 in QLD, Agency Authority in VIC, Authority to Act in WA), as an exclusive or open listing.',
  },
  {
    title: 'Network promotion',
    text: 'Your lots are positioned to Kenekt’s curated builder network. All communication between parties is managed by Kenekt.',
  },
  {
    title: 'Expression of interest',
    text: 'Once a builder buyer is secured, the EOI, buyer identification and initial deposit go to your nominated contact. AML checks are completed at EOI.',
  },
  {
    title: 'Contract delivery',
    text: 'Your legal team issues contracts to the buyer, with a copy emailed to Kenekt.',
  },
  {
    title: 'Contract execution',
    text: 'Kenekt works with every party to progress contract execution, finance approval and settlement readiness.',
  },
  {
    title: 'Settlement & invoicing',
    text: 'Kenekt invoices before settlement, and only for each lot successfully sold.',
  },
]

const market = [
  {
    stat: '−56,000',
    label: 'Dwellings short in 2023–24',
    title: 'A structural supply gap',
    text: 'About 177,000 new dwellings against underlying demand of 233,000. Completions during the Accord period are tracking around 220,000 below the 1.2 million target.',
  },
  {
    stat: '10,537',
    label: 'House approvals, May 2026',
    title: 'Approvals at a near five-year high',
    text: 'The highest since September 2021 and the fourth month in a row above 10,000. This is exactly the detached product wholesale builders package.',
  },
  {
    stat: '+25.3%',
    label: 'Investor lending, year on year',
    title: 'Investors moving into new builds',
    text: '$41.5bn in the March 2026 quarter, 40.3% of new dwelling loans. From 1 July 2027, negative gearing on new investments is limited mainly to qualifying new builds.',
  },
  {
    stat: '1.3%',
    label: 'National vacancy, June 2026',
    title: 'Rental pressure keeps buyers active',
    text: 'Far below the 3% balanced-market level, with asking rents up 8.1% year on year, driving investor demand for off-the-plan new builds.',
  },
]

const team = [
  { name: 'Cameron Brown', role: 'Business Development', email: 'cameron@kenekt.com.au', initials: 'CB' },
  { name: 'Prabin Deka', role: 'Operations', email: 'prabin@kenekt.com.au', initials: 'PD' },
  { name: 'Martin Ruckert', role: 'Technology', email: 'martin@kenekt.com.au', initials: 'MR' },
]

export default function LandDevelopersPage() {
  return (
    <>
      <IconSprite />

      <main className="concept concept-land">
        <header className="site-nav shell">
          <Link className="brand" href="/">
            <img src="/assets/logo/kenekt-mark.svg" alt="Kenekt home" width={402} height={108} />
          </Link>
          <nav aria-label="Main">
            <div className="audience-switch">
              <Link href="/" data-audience="advisers">For advisers</Link>
              <Link href="/builders" data-audience="builders">For builders</Link>
            </div>
            <Link href="https://insights.kenekt.app">
              Insights
              <lord-icon
                src="https://cdn.lordicon.com/ibfxqfzr.json"
                trigger="hover"
                state="hover-pinch"
                colors="primary:#4be1ec,secondary:#cb5eee"
                stroke="bold"
                style={{ width: 24, height: 24 }}
              ></lord-icon>
            </Link>
            <a href="https://help.kenekt.app/">
              Guides
              <lord-icon
                src="https://cdn.lordicon.com/blfocsew.json"
                trigger="hover"
                state="hover-pinch"
                colors="primary:#4be1ec,secondary:#cb5eee"
                stroke="bold"
                style={{ width: 24, height: 24 }}
              ></lord-icon>
            </a>
          </nav>
          <div className="nav-actions">
            <a href={PHONE}>0406 588 064
            <lord-icon
              src="https://cdn.lordicon.com/mkpuxlnz.json"
              trigger="hover"
              state="hover-pinch"
              colors="primary:#4be1ec,secondary:#cb5eee"
              stroke="bold"
              style={{ width: 24, height: 24 }}
            ></lord-icon>
            </a>
            <a className="pill pill-dark" href={ENQUIRY}>
              List your land
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
        </header>

        <section className="b-intro shell">
          <div className="b-hero">
            <EstateMap id="land-road" className="b-map" fit="xMaxYMin slice" />

            <div className="b-hero-grid">
              <div className="b-hero-copy">
                <div className="eyebrow">
                  <span></span> Kenekt for land developers
                </div>
                <h1>
                  Scale land sales through <em>wholesale distribution</em><span className="hang-stop">.</span>
                </h1>
                <p>
                  Sell lots off-market to builders with ready-to-build capacity, from boutique releases to estates of 100+ lots, often before titles are issued.
                </p>
                <div className="hero-actions">
                  <a className="pill pill-lime" href={ENQUIRY}>
                    Talk to our land team
                    <lord-icon
                        src="https://cdn.lordicon.com/ntodxrsy.json"
                        trigger="hover"
                        state="hover-pinch"
                        colors="primary:#4be1ec,secondary:#cb5eee"
                        stroke="bold"
                        style={{ width: 24, height: 24 }}
                    ></lord-icon>
                  </a>
                  <a className="text-link" href="#land-process">
                    How it works <span>7 steps</span>
                  </a>
                </div>
              </div>
              <ul className="b-stats">
                <li>
                  <strong>70+</strong>
                  <span>Wholesale builders</span>
                </li>
                <li>
                  <strong>600+</strong>
                  <span>Qualified buyer’s agents</span>
                </li>
                <li>
                  <strong>50+ yrs</strong>
                  <span>Combined new property sales</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="b-db">
            <div className="verified-chip">
              <span>✓</span> Released to 70+ wholesale builders · 3 EOIs this week
            </div>
            <div className="db" role="region" aria-label="Example developer workspace showing three lots in a land release (placeholder data)">
              <div className="db-top">
                <img className="db-mark" src="/assets/logo/kenekt-mark.svg" alt="" />
                <nav className="db-tabs" aria-label="Workspace">
                  <a href="#">
                    <svg viewBox="0 0 18 18" aria-hidden="true">
                      <use href="#i-projects" />
                    </svg>
                    <span>Estates</span>
                  </a>
                  <a className="is-active" href="#" aria-current="page">
                    <svg viewBox="0 0 18 18" aria-hidden="true">
                      <use href="#i-pin" />
                    </svg>
                    <span>Lots</span>
                  </a>
                  <a href="#">
                    <svg viewBox="0 0 18 18" aria-hidden="true">
                      <use href="#i-home" />
                    </svg>
                    <span>Builders</span>
                  </a>
                  <a href="#">
                    <svg viewBox="0 0 18 18" aria-hidden="true">
                      <use href="#i-alloc" />
                    </svg>
                    <span>EOIs</span>
                  </a>
                  <a href="#">
                    <svg viewBox="0 0 18 18" aria-hidden="true">
                      <use href="#i-sales" />
                    </svg>
                    <span>Settlements</span>
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
                  <span className="db-avatar">CB</span>
                </div>
              </div>

              <div className="db-body">
                <div className="db-head">
                  <div>
                    <span className="mini-label">Developer workspace</span>
                    <h2>Lot release</h2>
                  </div>
                  <div className="db-btns">
                    <a className="db-btn" href="#">
                      <svg viewBox="0 0 18 18" aria-hidden="true">
                        <use href="#i-library" />
                      </svg>
                      Price list
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
                      <small>Estate</small> Harvest Rise <i aria-hidden="true">×</i>
                    </span>
                    <span className="db-chip">
                      <small>Stage</small> 3 <i aria-hidden="true">×</i>
                    </span>
                  </div>
                  <div className="db-sort">
                    <span className="db-count">3 lots released</span>
                    <span className="db-select">
                      Lot number{' '}
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
                    <strong>QLD, Logan City Council</strong>
                    <span>Estate: Harvest Rise · Stage 3</span>
                  </div>
                </div>

                <ul className="pkg-list">
                  {lots.map((lot) => (
                    <li className="pkg" key={lot.lotId}>
                      <div className="pkg-media lot-media">
                        <LotPlan frontage={lot.frontage} depth={lot.depth} />
                      </div>
                      <div className="pkg-title">
                        <span className="pkg-loc">Logan Reserve</span>
                        <h3>{lot.lot}</h3>
                        <p>Harvest Rise, Stage 3</p>
                        <ul className="pkg-specs">
                          <li>{lot.area}</li>
                          <li>{lot.frontage}m frontage</li>
                        </ul>
                      </div>
                      <dl className="pkg-meta">
                        <div>
                          <dt>Exp. title</dt>
                          <dd>{lot.title}</dd>
                        </div>
                        <div>
                          <dt>Lot ID</dt>
                          <dd>
                            <span className="pkg-id">{lot.lotId}</span>
                          </dd>
                        </div>
                      </dl>
                      <dl className="pkg-size">
                        <div>
                          <dt>Builders</dt>
                          <dd>{lot.builders} interested</dd>
                        </div>
                        <div>
                          <dt>Packages</dt>
                          <dd>{lot.packages} H&amp;L</dd>
                        </div>
                        <div>
                          <dt>Status</dt>
                          <dd>
                            <em className={lot.statusClass}>{lot.statusText}</em>
                          </dd>
                        </div>
                      </dl>
                      <div className="pkg-actions">
                        <a className="db-btn db-btn-primary" href="#">
                          <svg viewBox="0 0 18 18" aria-hidden="true">
                            <use href="#i-eye" />
                          </svg>
                          View interest
                        </a>
                        <a className="db-btn" href="#">
                          <svg viewBox="0 0 18 18" aria-hidden="true">
                            <use href="#i-share" />
                          </svg>
                          Share
                        </a>
                      </div>
                      <div className="pkg-price">
                        <strong>{lot.price}</strong>
                        <span>{lot.note}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="signal-proof shell">
          <p>Off-market lot sales through one of Australia’s largest wholesale builder networks.</p>
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
              <h3>Reach builders with capacity</h3>
              <p>
                Your lots go to 70+ wholesale builders with ready-to-build capacity and buyer pipelines, who package them as house &amp; land.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>We run the channel</h3>
              <p>
                Kenekt manages every conversation with builders and agents, then delivers each EOI with buyer ID, a deposit and AML checks complete.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Sell before titles, pay on sale</h3>
              <p>
                Secure lot sales before titles are issued for more certainty on project completion. Kenekt invoices only for lots that sell.
              </p>
            </article>
          </div>
        </section>

        <section className="concept-note shell">
          <div>
            <span>QLD, NSW, VIC, ACT, TAS, SA &amp; WA</span>
            <h2>Your competitive edge: wholesale builder distribution.</h2>
          </div>
          <p>
            Kenekt is Australia’s house &amp; land marketplace. As of September 2026 we aggregate stock from over 70 wholesale builders,
            and our team brings 50+ years of combined experience in land-only and house &amp; land sales across Australia.
          </p>
        </section>

        <section className="plans shell">
          <div className="plans-head">
            <span>Why use Kenekt</span>
            <h2>A trusted aggregator in a fragmented channel.</h2>
            <p>
              The wholesale house &amp; land channel is large but unregulated, fragmented and has few trusted aggregators.
              Kenekt connects development-ready land with builders who keep buying pipelines and sell through their own agent networks.
            </p>
          </div>

          <ul className="land-builders">
            <li>
              <lord-icon
                src="https://cdn.lordicon.com/oknahgcf.json"
                trigger="hover"
                state="hover-pinch"
                colors="primary:#4be1ec,secondary:#cb5eee"
                stroke="bold"
                style={{ width: 36, height: 36 }}
              ></lord-icon>
              <strong>Immediate sales capacity</strong>
              <span>Builders with live buyer pipelines, ready to package and sell your lots.</span>
            </li>
            <li>
              <lord-icon
                src="https://cdn.lordicon.com/pldgwxrz.json"
                trigger="hover"
                state="hover-pinch"
                colors="primary:#4be1ec,secondary:#cb5eee"
                stroke="bold"
                style={{ width: 36, height: 36 }}
              ></lord-icon>
              <strong>Steady land demand</strong>
              <span>They need reliable land supply to keep their build volumes up.</span>
            </li>
            <li>
              <lord-icon
                src="https://cdn.lordicon.com/zcpmxjfa.json"
                trigger="hover"
                state="hover-angle"
                colors="primary:#4be1ec,secondary:#cb5eee"
                stroke="bold"
                style={{ width: 36, height: 36 }}
              ></lord-icon>
              <strong>National promotion</strong>
              <span>Your estate is marketed to buyers right across the country.</span>
            </li>
            <li>
              <lord-icon
                src="https://cdn.lordicon.com/rzsnbiaw.json"
                trigger="hover"
                state="hover-pinch"
                colors="primary:#4be1ec,secondary:#cb5eee"
                stroke="bold"
                style={{ width: 36, height: 36 }}
              ></lord-icon>
              <strong>Finance-ready investors</strong>
              <span>Investor-focused purchasing with finance pre-approval.</span>
            </li>
          </ul>

          <div className="plans-shared">
            <strong>By positioning your land through Kenekt, you gain</strong>
            <ul className="plan-features">
              <li><i>✓</i> <span><strong>Direct access to builders</strong> with immediate sales capacity.</span></li>
              <li><i>✓</i> <span><strong>Exposure to 600+ qualified buyer’s agents</strong> across Australia.</span></li>
              <li><i>✓</i> <span><strong>Thousands of referral partners</strong> through the builders’ own networks.</span></li>
              <li><i>✓</i> <span><strong>Settlement certainty</strong> through pre-qualified builder buyers.</span></li>
              <li><i>✓</i> <span><strong>No retail marketing complexity</strong>: no campaigns, display homes or open days to run.</span></li>
              <li><i>✓</i> <span><strong>Faster sales cycles</strong> through the wholesale channel.</span></li>
            </ul>
          </div>
        </section>

        <div className="b-map-divider">
          <MapBand id="land-band" />
        </div>

        <section className="plans shell land-process" id="land-process">
          <div className="plans-head">
            <span>How it works</span>
            <h2>The Kenekt land sales process, step by step.</h2>
            <p>
              From the first conversation to settlement, Kenekt manages your lots through the builder network and keeps every party moving.
            </p>
          </div>

          <ol className="land-steps">
            {steps.map((step, i) => (
              <li key={step.title}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
            <li className="land-steps-cta">
              <h3>Ready to release your next stage?</h3>
              <p>Tell us about your development and we’ll put together a sales strategy.</p>
              <a className="pill pill-lime" href={ENQUIRY}>
                Start the conversation
                <lord-icon
                  src="https://cdn.lordicon.com/fimgbbfr.json"
                  trigger="hover"
                  state="hover-pinch"
                  colors="primary:#4be1ec,secondary:#cb5eee"
                  stroke="bold"
                  style={{ width: 24, height: 24 }}
                ></lord-icon>
              </a>
            </li>
          </ol>
        </section>

        <section className="land-market">
          <div className="shell">
            <div className="plans-head">
              <span>The wholesale perspective</span>
              <h2>Why now matters.</h2>
              <p>Builders are actively looking for development-ready land to meet demand. Four signals behind it:</p>
            </div>

            <ul className="land-market-grid">
              {market.map((item) => (
                <li key={item.title}>
                  <strong>{item.stat}</strong>
                  <small>{item.label}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>

            <div className="land-corridors">
              <p>
                The fastest-growing submarkets sit in greenfield and outer growth corridors, where wholesale house &amp; land works best and land is scarcest.
              </p>
              <ul>
                <li><b>+33.6%</b> Perth’s outer ring, Serpentine–Jarrahdale</li>
                <li><b>+22–25%</b> South East Queensland, Logan–Beaudesert</li>
                <li><b>+16.7%</b> Adelaide’s north</li>
              </ul>
            </div>

            <p className="land-sources">
              Figures from Kenekt’s 2026 land solutions brochure, including National Housing Supply and Affordability Council data.
            </p>
          </div>
        </section>

        <section className="plans shell land-team">
          <div className="plans-head">
            <span>Meet the team</span>
            <h2>The people behind your lot sales.</h2>
            <p>
              Our team is always on hand to answer questions, share market insights and keep your partnership with Kenekt running smoothly.
            </p>
          </div>

          <ul className="land-team-grid">
            {team.map((person) => (
              <li key={person.email}>
                <span className="land-avatar" aria-hidden="true">{person.initials}</span>
                <div>
                  <strong>{person.name}</strong>
                  <small>{person.role}</small>
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </div>
              </li>
            ))}
          </ul>

          <div className="plans-notes land-contact">
            <div className="plans-note">
              <h3>Connect with us</h3>
              <p>
                Call <a href={PHONE}>0406 588 064</a> or email <a href={ENQUIRY}>cameron@kenekt.com.au</a>.
                We’re at U 20/1 Maitland Pl, Norwest NSW 2153.
              </p>
            </div>
            <div className="plans-note">
              <a className="pill pill-dark" href={ENQUIRY}>
                List your land
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
            <p className="plans-notes-foot">
              Kenekt staff and agents express opinions only and do not give legal, financial or accounting advice. Market figures are general
              information and not a guarantee of any property’s performance; price indications are not valuations and may exclude GST.
              Please get independent advice before making decisions.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
