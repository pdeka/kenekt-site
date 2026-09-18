import { Check } from "@phosphor-icons/react/ssr";
import { RevealOnScroll } from "./RevealOnScroll";

export type PricingCardData = {
  name: string;
  price: string;
  note?: string;
  setup?: string;
  bullets: string[];
  cta: string;
  ctaNote?: string;
  highlighted?: boolean;
};

export function PricingCard({
  data,
  delay = 0,
}: {
  data: PricingCardData;
  delay?: number;
}) {
  const { name, price, note, setup, bullets, cta, ctaNote, highlighted } = data;

  return (
    <RevealOnScroll delay={delay} className="h-full">
      <div
        className={`flex h-full flex-col rounded-2xl p-7 md:p-8 ${
          highlighted
            ? "bg-purple text-cream"
            : "bg-cream-soft border border-line text-ink"
        }`}
      >
        <p
          className={`eyebrow mb-2 ${
            highlighted ? "text-purple-soft" : "text-ink-soft"
          }`}
        >
          {name}
        </p>
        <p className="font-display font-extrabold text-xl md:text-2xl tracking-tight mb-1">
          {price}
        </p>
        {note && (
          <p
            className={`text-xs font-semibold mb-4 ${
              highlighted ? "text-purple-soft" : "text-ink-soft"
            }`}
          >
            {note}
          </p>
        )}
        {setup && (
          <p
            className={`text-sm mb-4 ${
              highlighted ? "text-cream/85" : "text-ink-soft"
            }`}
          >
            {setup}
          </p>
        )}

        <ul className="flex flex-col gap-3 mb-8 flex-1">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2.5">
              <Check
                size={15}
                weight="bold"
                className={`mt-1 shrink-0 ${
                  highlighted ? "text-cream" : "text-purple"
                }`}
              />
              <span
                className={`text-sm leading-relaxed ${
                  highlighted ? "text-cream/90" : "text-ink-soft"
                }`}
              >
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="#signup"
          className={`btn-tap inline-flex items-center justify-center rounded-full text-sm font-semibold px-5 py-3 ${
            highlighted
              ? "bg-cream text-ink hover:bg-cream-soft"
              : "bg-ink text-cream hover:bg-charcoal-soft"
          }`}
        >
          {cta}
        </a>
        {ctaNote && (
          <p
            className={`mt-2.5 text-center eyebrow ${
              highlighted ? "text-purple-soft" : "text-ink-soft"
            }`}
          >
            {ctaNote}
          </p>
        )}
      </div>
    </RevealOnScroll>
  );
}
