export function Eyebrow({ index, label }: { index: string; label: string }) {
  return (
    <p className="eyebrow text-ink-soft mb-4">
      {index} / {label}
    </p>
  );
}
