import { ArrowUpRight } from "@phosphor-icons/react/ssr";

const rows = [
  {
    location: "Thornhill Park, VIC",
    type: "House",
    price: "$531,200",
    status: "Available",
    yield: "3.5%",
  },
  {
    location: "Deanside, VIC",
    type: "House",
    price: "$541,900",
    status: "Available",
    yield: "4.1%",
  },
  {
    location: "Ripley, QLD",
    type: "Land",
    price: "$290,750",
    status: "Under Offer",
    yield: "4.6%",
  },
  {
    location: "Austral Estate, NSW",
    type: "House",
    price: "$566,500",
    status: "Available",
    yield: "3.9%",
  },
];

export function StocklistPreview() {
  return (
    <div className="relative w-full max-w-md rounded-2xl border border-line bg-cream-soft shadow-[0_1px_0_rgba(28,26,22,0.04)]">
      <div className="flex items-center justify-between px-5 py-4 border-b border-line">
        <div>
          <p className="text-sm font-semibold text-ink">Kenekt stocklist</p>
          <p className="text-xs text-ink-soft">2,172 results nationwide</p>
        </div>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple">
          Export
          <ArrowUpRight size={14} weight="bold" />
        </span>
      </div>

      <div className="divide-y divide-line">
        {rows.map((row) => (
          <div
            key={row.location}
            className="flex items-center justify-between gap-3 px-5 py-3.5"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-ink truncate">
                {row.location}
              </p>
              <p className="text-xs text-ink-soft">
                {row.type} · {row.price}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="num text-xs text-ink-soft">
                {row.yield}
              </span>
              <span
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                  row.status === "Available"
                    ? "bg-[#DCEFDD] text-[#256B33]"
                    : "bg-cream text-ink-soft border border-line"
                }`}
              >
                {row.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
