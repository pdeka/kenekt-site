import { ArrowRight } from "@phosphor-icons/react/ssr";
import { Eyebrow } from "./Eyebrow";
import { StocklistPreview } from "./StocklistPreview";
import { AccentPin } from "./AccentPin";
import { RevealOnScroll } from "./RevealOnScroll";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <Eyebrow index="01" label="Get started" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-display font-black tracking-tighter leading-[1.02] text-4xl sm:text-5xl md:text-6xl text-ink">
              Source all your{" "}
              <span className="bg-amber px-2 -mx-1 inline-block">
                new property
              </span>{" "}
              with{" "}
              <span className="bg-amber px-2 -mx-1 inline-block">
                Kenekt
              </span>
            </h1>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="#signup"
                className="btn-tap group inline-flex items-center gap-2 rounded-full bg-purple text-cream font-semibold text-sm px-6 py-3.5 hover:bg-purple-deep"
              >
                Get started with Kenekt
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-200 ease-[var(--ease-out-strong)] group-hover:translate-x-0.5"
                />
              </a>
              <p className="eyebrow text-ink-soft">
                Free for property advisers *
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <AccentPin className="hidden lg:block absolute -top-10 -right-6 w-20 h-32 opacity-90" />
            <RevealOnScroll delay={0.1} className="relative">
              <StocklistPreview />
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
