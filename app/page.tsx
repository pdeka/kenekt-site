import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="concept concept-signal">
      <header className="site-nav shell">
        <a className="brand" href="#">
          <img src="/assets/logo/kenekt-logo.svg" alt="Kenekt home" width={402} height={108} />
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
            <span></span> Australia’s new property connection layer
          </div>
          <h1>
            <em>Research</em> with Clarity. <em>Transact</em> with Confidence.
          </h1>
          <p>
            Source verified wholesale house &amp; land opportunities, build buyer-ready marketing material and move deals forward, from one
            connected workspace.
          </p>
          <div className="hero-actions">
            <a className="pill pill-blue" href="#">
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
            <a className="text-link" href="https://www.youtube.com/watch?v=_jUESOJnt58" target="_blank">
              Watch the overview <span>01:14</span>
            </a>
          </div>
          <div className="pronunciation">
            <b>kenekt</b>
            <span>/kəˈnɛkt/</span>
            <small>verb: to bring people and possibility together.</small>
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
            <p>Live house and land opportunities from trusted builders and developers.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Compare with clarity</h3>
            <p>Research, shortlist and present every option in your own brand.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Close with confidence</h3>
            <p>Move from enquiry to EOI with the detail — and the compliance — handled.</p>
          </article>
        </div>
      </section>

      <section className="concept-note shell">
        <div>
          <span>Signal</span>
          <h2>Kenekt as connective infrastructure.</h2>
        </div>
        <p>
          An editorial, brand-led direction that turns the product name into a memorable visual system. A single cable
          plugs the platform in, then threads through each step — while the product itself stays front and centre.
        </p>
      </section>
    </main>
  )
}
