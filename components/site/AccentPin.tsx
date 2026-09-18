export function AccentPin({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 220"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="70"
        cy="35"
        r="32"
        stroke="var(--color-purple)"
        strokeWidth="10"
      />
      <path
        d="M70 67 V200"
        stroke="var(--color-purple)"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
