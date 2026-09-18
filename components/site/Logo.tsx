export function Logo({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="15" cy="15" r="15" fill="var(--color-amber)" />
        <path
          d="M11 8v14M11 15l8-7M11 15l8 7"
          stroke="var(--color-charcoal)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className={`font-display font-extrabold text-lg tracking-tight ${
          tone === "light" ? "text-cream" : "text-ink"
        }`}
      >
        Kenekt
      </span>
    </span>
  );
}
