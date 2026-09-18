"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Logo } from "./Logo";

const links = [
  { label: "Insights", href: "#insights" },
  { label: "For Builders", href: "#builders" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-line">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" aria-label="Kenekt home">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#signup"
            className="btn-tap text-sm font-semibold text-ink px-4 py-2 rounded-full hover:bg-cream-soft"
          >
            Log In
          </a>
          <a
            href="#signup"
            className="btn-tap text-sm font-semibold text-cream bg-ink px-4 py-2 rounded-full hover:bg-charcoal-soft"
          >
            Sign Up
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="btn-tap md:hidden relative flex items-center justify-center w-10 h-10 rounded-full border border-line"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <List
            size={18}
            className="transition-[opacity,transform] duration-200 ease-[var(--ease-out-strong)]"
            style={{
              opacity: open ? 0 : 1,
              transform: open ? "rotate(-45deg)" : "rotate(0deg)",
            }}
          />
          <X
            size={18}
            className="absolute transition-[opacity,transform] duration-200 ease-[var(--ease-out-strong)]"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "rotate(0deg)" : "rotate(45deg)",
            }}
          />
        </button>
      </div>

      <div className="expand md:hidden" data-open={open}>
        <div>
          <div className="expand-fade border-t border-line bg-cream px-6 py-5 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#signup"
                onClick={() => setOpen(false)}
                className="btn-tap text-sm font-semibold text-ink px-4 py-2 rounded-full border border-line"
              >
                Log In
              </a>
              <a
                href="#signup"
                onClick={() => setOpen(false)}
                className="btn-tap text-sm font-semibold text-cream bg-ink px-4 py-2 rounded-full"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
