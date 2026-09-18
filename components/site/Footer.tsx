import { Logo } from "./Logo";

const productLinks = ["Portal", "Stock Management"];
const legalLinks = ["Marketing Terms", "Privacy", "Terms of Use"];

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-line-dark">
          <div className="md:col-span-5">
            <Logo tone="light" />
            <p className="mt-4 text-cream/60 max-w-[38ch] leading-relaxed">
              Kenekt is Australia&apos;s leading property sourcing platform
              for agents and advisors.
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow text-cream/55 mb-4">Product</p>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-cream/80 hover:text-cream transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-cream/55 mb-4">Legal</p>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-cream/80 hover:text-cream transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="font-display font-black tracking-tighter leading-[0.82] text-[18vw] md:text-[9rem] text-cream py-6 select-none">
          Kenekt
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-6 border-t border-line-dark text-xs text-cream/55">
          <p>Copyright 2026 Kenekt</p>
          <a href="#top" className="hover:text-cream transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
