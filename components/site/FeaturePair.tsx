import type { Icon } from "@phosphor-icons/react";
import { RevealOnScroll } from "./RevealOnScroll";

type Feature = {
  label: string;
  heading: string;
  body: string;
  Icon: Icon;
  tone: "amber" | "purple";
};

export function FeaturePair({ features }: { features: Feature[] }) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <RevealOnScroll key={feature.label} delay={i * 0.08}>
              <div
                className={`h-full rounded-2xl border border-line p-8 md:p-10 ${
                  feature.tone === "amber" ? "bg-amber-soft" : "bg-purple-soft"
                }`}
              >
                <div
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-full mb-6 ${
                    feature.tone === "amber"
                      ? "bg-amber text-charcoal"
                      : "bg-purple text-cream"
                  }`}
                >
                  <feature.Icon size={20} weight="bold" />
                </div>
                <p className="eyebrow text-ink-soft mb-2">{feature.label}</p>
                <h3 className="font-display font-bold text-2xl md:text-[1.75rem] tracking-tight text-ink mb-3">
                  {feature.heading}
                </h3>
                <p className="text-ink-soft leading-relaxed max-w-[48ch]">
                  {feature.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
