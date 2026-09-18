import { RevealOnScroll } from "./RevealOnScroll";

export function DarkStatement() {
  return (
    <section className="bg-charcoal text-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-amber mb-4">03 / Compliance</p>

        <RevealOnScroll>
          <h2 className="font-display font-black tracking-tighter leading-[1.02] text-4xl md:text-6xl">
            AML, handled.
          </h2>
          <p className="eyebrow text-amber mt-5">
            We carry the compliance. You carry the sale.
          </p>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <RevealOnScroll delay={0.1} className="lg:col-span-6">
            <p className="text-lg leading-relaxed text-cream/85">
              Kenekt performs the customer due diligence on every
              transaction and shares the completed result with you, so your
              team never has to build a program, run software, or chase a
              check again.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.18} className="lg:col-span-6">
            <p className="font-display font-bold text-xl text-cream mb-3">
              Tranche 2 is here. You don&apos;t have to lift a finger.
            </p>
            <p className="text-cream/70 leading-relaxed">
              From July 2026, property sales fall under Australia&apos;s
              AML/CTF regime, regulated by AUSTRAC. Businesses that provide
              the sale now carry customer-due-diligence obligations
              (identity, screening, risk and record-keeping) on every buyer.
              Kenekt performs that due diligence for the deal, and shares
              the result with you.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
