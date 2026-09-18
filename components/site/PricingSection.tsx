import { Eyebrow } from "./Eyebrow";
import { PricingCard, type PricingCardData } from "./PricingCard";
import { RevealOnScroll } from "./RevealOnScroll";

export function PricingSection({
  id,
  eyebrow,
  heading,
  intro,
  plans,
}: {
  id?: string;
  eyebrow?: { index: string; label: string };
  heading: string;
  intro: string;
  plans: PricingCardData[];
}) {
  return (
    <section id={id} className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {eyebrow && <Eyebrow index={eyebrow.index} label={eyebrow.label} />}
        <RevealOnScroll>
          <h2 className="font-display font-black tracking-tighter leading-[1.05] text-3xl md:text-5xl text-ink max-w-3xl">
            {heading}
          </h2>
          <p className="mt-4 text-ink-soft text-lg max-w-2xl">{intro}</p>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} data={plan} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
