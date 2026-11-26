const bandRoads = [
  'M-40 70C300 10 520 140 820 95C1120 50 1300 40 1640 115',
  'M-40 205C260 235 560 150 900 178C1240 206 1380 235 1640 165',
  'M1170 -20C1140 70 1230 150 1195 260',
  'M330 -20C360 80 300 160 340 260',
]

// Each ping sits on a single lot, between the lot lines of its road
const bandPings = [
  [657.5, 127.2],
  [1455.6, 57],
  [521.2, 159.7],
  [1019.2, 165.3],
  [165.8, 187.3],
]

/** Wide estate road-map band used as a section divider. `id` must be unique on the page. */
export default function MapBand({ id = 'band-road' }: { id?: string }) {
  const roads = bandRoads.map((_, i) => `${id}-${i}`)
  return (
    <svg className="b-map" viewBox="0 0 1600 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        {bandRoads.map((d, i) => <path key={i} id={roads[i]} d={d} />)}
        <mask id={`${id}-gaps`}>
          <rect width="1600" height="240" fill="#fff" />
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
      {bandPings.map(([cx, cy]) => <circle key={cx} className="b-ping" cx={cx} cy={cy} r="5" />)}
    </svg>
  )
}
