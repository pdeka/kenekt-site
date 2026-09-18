import { ArrowRight, Buildings } from "@phosphor-icons/react/ssr";
import { RevealOnScroll } from "./RevealOnScroll";

export function BuildersIntro() {
  return (
    <section id="builders" className="bg-amber-soft py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <RevealOnScroll>
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-ink text-amber mb-6">
            <Buildings size={22} weight="bold" />
          </div>
          <p className="eyebrow text-ink-soft mb-3">Kenekt : For Builders</p>
          <h2 className="font-display font-black tracking-tighter leading-[1.02] text-4xl md:text-6xl text-ink max-w-4xl">
            Built for wholesale H&amp;L
          </h2>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-[52ch]">
            Distribute your wholesale house &amp; land stock through one of
            Australia&apos;s most extensive channel partner networks.
          </p>
          <a
            href="#signup-builders"
            className="btn-tap group mt-8 inline-flex items-center gap-2 rounded-full bg-ink text-cream font-semibold text-sm px-6 py-3.5 hover:bg-charcoal-soft"
          >
            Get Kenekt stock mgmt
            <ArrowRight
              size={16}
              weight="bold"
              className="transition-transform duration-200 ease-[var(--ease-out-strong)] group-hover:translate-x-0.5"
            />
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
