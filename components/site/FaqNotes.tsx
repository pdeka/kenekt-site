"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { RevealOnScroll } from "./RevealOnScroll";

const notes = [
  {
    q: "What counts as an EOI?",
    a: "A qualifying Expression of Interest (EOI) must include a holding deposit and relate to a genuine client transaction. General enquiries or EOIs without deposits are not included.",
  },
  {
    q: "Non-compliance:",
    a: "If the required EOI activity is not met, you may opt for the paid subscription to retain full access, or access restrictions will apply until the EOI is submitted or payment is activated.",
  },
  {
    q: "Professional property website:",
    a: "Don't currently have a website? Kenekt can create a complete, standalone templated website for your business as part of the Pro Agency Account, with a look and feel similar to Smartfinn Investments. Your website can include Home, About, Projects or Properties, Contact and enquiry sections, with a clean presentation.",
  },
  {
    q: "Kenekt Aggregation under the Pro Account:",
    a: "Kenekt operates as an online property aggregator, and this aggregation model remains the same across all account tiers, including the paid Pro Account.Kenekt operates as an online property aggregator, and this aggregation model remains the same across all account tiers, including the paid Pro Account.",
  },
  {
    q: "Integration Requirement for Pro Agency Account",
    a: "Website integration commences after your first Unconditional Deal. Businesses requiring earlier integration can activate the account for $990 per month (incl.).",
  },
];

export function FaqNotes() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <RevealOnScroll>
          <h2 className="font-display font-black tracking-tighter text-2xl md:text-3xl text-ink mb-8">
            Good to know
          </h2>
        </RevealOnScroll>

        <div className="rounded-2xl border border-line bg-cream-soft overflow-hidden">
          {notes.map((note, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={note.q} className={i > 0 ? "border-t border-line" : ""}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="btn-tap w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-ink">{note.q}</span>
                  <CaretDown
                    size={16}
                    weight="bold"
                    className="shrink-0 text-ink-soft transition-transform duration-200 ease-[var(--ease-out-strong)]"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <div className="expand" data-open={isOpen}>
                  <div>
                    <p className="expand-fade px-6 pb-5 text-ink-soft leading-relaxed max-w-[70ch]">
                      {note.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
