import { Phone } from "@phosphor-icons/react/ssr";
import { RevealOnScroll } from "./RevealOnScroll";

export function ClosingCta() {
  return (
    <section className="bg-purple text-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-purple-soft mb-4">05 / Get in touch</p>

        <RevealOnScroll>
          <a
            href="tel:1300536358"
            className="inline-flex items-center gap-3 font-display font-black tracking-tighter text-4xl md:text-6xl hover:text-amber transition-[color,opacity] duration-150 ease-out active:opacity-70"
          >
            <Phone size={40} weight="bold" className="shrink-0" />
            1 300 KENEKT
          </a>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <RevealOnScroll delay={0.1} className="lg:col-span-7">
            <p className="text-cream/80 leading-relaxed">
              Kenekt is Australia&apos;s leading property sourcing platform
              for agents and advisors. Access verified house and land
              packages, filter by location or price, and instantly create
              buyer-ready shortlists. Generate branded marketing materials
              and manage deals with ease — all in one place. With one
              referral agreement, secure commissions across a wide network
              of trusted builders and land suppliers.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.18} className="lg:col-span-5 flex items-center">
            <p className="font-display font-bold text-xl md:text-2xl tracking-tight">
              Save time, scale faster, and simplify sourcing with Kenekt.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
