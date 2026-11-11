const SPRITE_MARKUP = `
  <symbol id="i-projects" viewBox="0 0 18 18"><rect x="2.5" y="2.5" width="13" height="13" rx="2" /><path d="M2.5 7h13M7 7v8.5" /></symbol>
  <symbol id="i-pin" viewBox="0 0 18 18"><path d="M9 16s5-4.6 5-8.5a5 5 0 0 0-10 0C4 11.4 9 16 9 16z" /><circle cx="9" cy="7.5" r="1.8" /></symbol>
  <symbol id="i-home" viewBox="0 0 18 18"><path d="M2.5 8 9 2.8 15.5 8M4.5 6.5V15h9V6.5M7.5 15v-4h3v4" /></symbol>
  <symbol id="i-sales" viewBox="0 0 18 18"><path d="M9 2.5v13M12 5.5c-.6-1-1.7-1.5-3-1.5-1.7 0-3 .9-3 2.3 0 3.3 6 1.9 6 5.2 0 1.4-1.3 2.4-3 2.4-1.4 0-2.6-.6-3.2-1.7" /></symbol>
  <symbol id="i-library" viewBox="0 0 18 18"><path d="M3 3.5h4.5A1.5 1.5 0 0 1 9 5v10a1.5 1.5 0 0 0-1.5-1.5H3zM15 3.5h-4.5A1.5 1.5 0 0 0 9 5v10a1.5 1.5 0 0 1 1.5-1.5H15z" /></symbol>
  <symbol id="i-search" viewBox="0 0 18 18"><circle cx="8" cy="8" r="5" /><path d="m12 12 3.5 3.5" /></symbol>
  <symbol id="i-bell" viewBox="0 0 18 18"><path d="M5 12.5V8a4 4 0 0 1 8 0v4.5l1.5 1.5h-11zM7.5 15.5a1.6 1.6 0 0 0 3 0" /></symbol>
  <symbol id="i-help" viewBox="0 0 18 18"><circle cx="9" cy="9" r="6.5" /><path d="M7 7.2a2 2 0 1 1 2.6 1.9c-.4.2-.6.5-.6.9v.6M9 12.6v.1" /></symbol>
  <symbol id="i-bed" viewBox="0 0 18 18"><path d="M2.5 14V5M2.5 11h13v3M15.5 11V9.5a2 2 0 0 0-2-2H8V11" /><circle cx="5.2" cy="8.8" r="1.4" /></symbol>
  <symbol id="i-bath" viewBox="0 0 18 18"><path d="M2 9.5h14V11a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4zM4 9.5v-5a2 2 0 0 1 3.8-.8M5.5 15l-.8 1.5M12.5 15l.8 1.5" /></symbol>
  <symbol id="i-car" viewBox="0 0 18 18"><path d="M3 12.5v-3l1.8-4h8.4l1.8 4v3zM3 12.5V14M15 12.5V14M3 9.5h12M5.5 11h1M11.5 11h1" /></symbol>
  <symbol id="i-share" viewBox="0 0 18 18"><path d="M9 11V2.5M6 5.5l3-3 3 3M4 8.5v6h10v-6" /></symbol>
  <symbol id="i-export" viewBox="0 0 18 18"><path d="M9 2.5v8M6 7.5l3 3 3-3M3.5 12v3h11v-3" /></symbol>
  <symbol id="i-alloc" viewBox="0 0 18 18"><rect x="2.5" y="3.5" width="13" height="11" rx="2" /><path d="M2.5 7.5h13M6 11h3" /></symbol>
  <symbol id="i-refine" viewBox="0 0 18 18"><path d="M3 5h12M5.5 9h7M8 13h2" /></symbol>
  <symbol id="i-chev" viewBox="0 0 18 18"><path d="m5 7 4 4 4-4" /></symbol>
  <symbol id="i-eye" viewBox="0 0 18 18"><path d="M1.8 9S4.5 4 9 4s7.2 5 7.2 5-2.7 5-7.2 5-7.2-5-7.2-5z" /><circle cx="9" cy="9" r="2" /></symbol>
  <symbol id="scene" viewBox="0 0 320 200">
    <rect width="320" height="200" style="fill: var(--sky, #ece6f8)" />
    <circle cx="258" cy="50" r="20" style="fill: var(--sun, #ffd27a)" />
    <path d="M0 142c60-12 120-10 180-4s100 4 140-2v64H0z" style="fill: var(--hill, #dcd3ef)" />
    <rect x="38" y="116" width="4" height="48" style="fill: var(--trunk, #6d5b4a)" />
    <circle cx="40" cy="106" r="24" style="fill: var(--leaf, #8fbf9a)" />
    <circle cx="58" cy="124" r="16" style="fill: var(--leaf-2, #79ad87)" />
    <rect x="112" y="70" width="104" height="44" style="fill: var(--wall, #fbfaf6)" />
    <rect x="106" y="64" width="116" height="8" rx="1" style="fill: var(--trim, #2c2a35)" />
    <rect x="124" y="80" width="36" height="24" style="fill: var(--glass, #a9bbdc)" />
    <rect x="168" y="80" width="36" height="24" style="fill: var(--glass, #a9bbdc)" />
    <rect x="74" y="112" width="180" height="52" style="fill: var(--wall, #fbfaf6)" />
    <rect x="68" y="108" width="192" height="7" rx="1" style="fill: var(--trim, #2c2a35)" />
    <rect x="216" y="115" width="38" height="49" style="fill: var(--accent, #c89463)" />
    <path d="M223 115v49M230 115v49M237 115v49M244 115v49" style="stroke: rgba(0, 0, 0, .12); stroke-width: 1.5" />
    <rect x="84" y="124" width="58" height="40" style="fill: var(--door, #dcd9d2)" />
    <path d="M84 132h58M84 140h58M84 148h58M84 156h58" style="stroke: rgba(0, 0, 0, .1); stroke-width: 1.5" />
    <rect x="152" y="124" width="40" height="26" style="fill: var(--glass, #a9bbdc)" />
    <rect x="198" y="128" width="12" height="36" style="fill: var(--trim, #2c2a35)" />
    <path d="M130 100l14-18M174 100l12-16M158 146l14-18" style="stroke: rgba(255, 255, 255, .5); stroke-width: 2" />
    <rect y="164" width="320" height="36" style="fill: var(--lawn, #a9d2b0)" />
    <path d="M84 164h58l16 36H66z" style="fill: var(--drive, #e6e2da)" />
    <path d="M199 164h10l5 36h-18z" style="fill: var(--drive, #e6e2da)" />
    <rect x="282" y="118" width="4" height="48" style="fill: var(--trunk, #6d5b4a)" />
    <circle cx="284" cy="106" r="28" style="fill: var(--leaf, #8fbf9a)" />
    <circle cx="266" cy="132" r="14" style="fill: var(--leaf-2, #79ad87)" />
    <circle cx="162" cy="166" r="7" style="fill: var(--leaf-2, #79ad87)" />
    <circle cx="177" cy="167" r="6" style="fill: var(--leaf, #8fbf9a)" />
  </symbol>
`

/** Static sprite of icon/scene <symbol> defs referenced via <use href="#..."> across the builders page. */
export default function IconSprite() {
  return <svg className="sprite" aria-hidden="true" dangerouslySetInnerHTML={{ __html: SPRITE_MARKUP }} />
}
