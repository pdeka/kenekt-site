/** Road map of a house & land estate with pinging lots; drawn behind the builders and land developer heroes and the Insights pages. */
export default function EstateMap({ id, className, fit }: { id: string; className: string; fit: string }) {
  const roads = [1, 2, 3, 4].map((n) => `${id}-${n}`)
  return (
    <svg className={className} viewBox="0 0 1400 700" preserveAspectRatio={fit} aria-hidden="true">
      <defs>
        <path id={roads[0]} d="M640 -20C700 200 880 270 1080 250s300-40 360 40" />
        <path id={roads[1]} d="M560 720C640 520 840 430 1060 440s320 70 380 30" />
        <path id={roads[2]} d="M1020 -20c-30 160 40 310 0 470s-60 200-20 270" />
        <path id={roads[3]} d="M-40 660c240-90 460-40 680-100" />
        <mask id={`${id}-gaps`}>
          <rect width="1400" height="700" fill="#fff" />
          <g fill="none" stroke="#000" strokeWidth="16">
            {roads.map((r) => <use key={r} href={`#${r}`} />)}
          </g>
        </mask>
      </defs>
      <g className="b-map-lots" mask={`url(#${id}-gaps)`}>
        {roads.map((r) => <use key={r} href={`#${r}`} />)}
      </g>
      <g className="b-map-edges">
        {roads.map((r) => <use key={r} href={`#${r}`} />)}
      </g>
      <circle className="b-ping" cx="1104" cy="214" r="5" />
      <circle className="b-ping" cx="930" cy="476" r="5" />
      <circle className="b-ping" cx="1236" cy="472" r="5" />
    </svg>
  )
}
