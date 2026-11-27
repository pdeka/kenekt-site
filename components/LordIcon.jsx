'use client'

import { defineElement } from '@lordicon/element'

// Registers the <lord-icon> custom element. Safe to call more than once, and a
// no-op without a DOM (SSR), so running it at module scope here is fine.
defineElement()

/** Mount once (in the root layout) so <lord-icon> works anywhere on the site. */
export default function LordIcon() {
  return null
}

