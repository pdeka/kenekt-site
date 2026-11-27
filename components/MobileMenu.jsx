'use client'

import { useEffect, useId, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ICON_COLORS = 'primary:#4be1ec,secondary:#cb5eee'

/**
 * The phone and tablet menu (below 961px), beside the adviser/builder switch in every header.
 * On desktop it is hidden and the full header links show instead.
 */
export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const rootRef = useRef(null)
  const buttonRef = useRef(null)
  const panelId = useId()

  // Close when the page changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Close on Escape (handing focus back to the button) or on a tap anywhere outside the menu
  useEffect(() => {
    if (!open) return
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    const onPointer = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointer)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointer)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <div className="mobile-menu" ref={rootRef} data-open={open || undefined}>
      <button
        ref={buttonRef}
        type="button"
        className="mobile-menu-button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      <nav className="mobile-menu-panel" id={panelId} aria-label="Menu" inert={!open}>
        <Link href="/insights" onClick={close} aria-current={pathname.startsWith('/insights') ? 'page' : undefined}>
          Insights
          <lord-icon src="https://cdn.lordicon.com/ibfxqfzr.json" trigger="hover" state="hover-pinch" colors={ICON_COLORS} stroke="bold" style={{ width: 24, height: 24 }}></lord-icon>
        </Link>
        <a href="https://help.kenekt.app/help-guide/01-welcome" onClick={close}>
          Guides
          <lord-icon src="https://cdn.lordicon.com/blfocsew.json" trigger="hover" state="hover-pinch" colors={ICON_COLORS} stroke="bold" style={{ width: 24, height: 24 }}></lord-icon>
        </a>

        <div className="mobile-menu-actions">
          <a className="pill pill-blue" href="https://portal.kenekt.com.au/sign_up" onClick={close}>
            Adviser sign up
            <lord-icon src="https://cdn.lordicon.com/cyvvyiob.json" trigger="hover" state="hover-pinch" colors={ICON_COLORS} stroke="bold" style={{ width: 24, height: 24 }}></lord-icon>
          </a>
          <a className="pill pill-dark" href="https://calendly.com/martin-kenekt/kenekt-agency-demo" onClick={close}>
            Builder: schedule a demo
            <lord-icon src="https://cdn.lordicon.com/jmfpxsax.json" trigger="hover" state="hover-pointing" colors={ICON_COLORS} stroke="bold" style={{ width: 24, height: 24 }}></lord-icon>
          </a>
        </div>
      </nav>
    </div>
  )
}
