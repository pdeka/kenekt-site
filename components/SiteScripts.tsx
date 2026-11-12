'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Client-side behaviour ported from the original main.js:
 * - scroll-driven "connect" progress for the plug/socket proof sections
 * - mobile nav toggle
 * - builder package live/hidden switch toggles
 */
export default function SiteScripts() {
  const pathname = usePathname()

  useEffect(() => {
    const clamp = (value: number) => Math.min(1, Math.max(0, value))
    let frame = 0

    function update() {
      frame = 0
      const viewport = window.innerHeight
      document.querySelectorAll<HTMLElement>('[data-connect]').forEach((element) => {
        const rect = element.getBoundingClientRect()
        const start = viewport * Number(element.dataset.connectStart || 0.9)
        const end = viewport * Number(element.dataset.connectEnd || 0.45)
        const span = Number(getComputedStyle(element).getPropertyValue('--connect-span')) || 0
        const progress = clamp((start - rect.top) / (start - end + rect.height * span))
        element.style.setProperty('--progress', progress.toFixed(3))
        element.classList.toggle('is-connected', progress >= 0.999)
        element.querySelectorAll<HTMLElement>('[data-at]').forEach((point) => {
          point.classList.toggle('is-on', progress >= Number(point.dataset.at) - 0.001)
        })
      })
    }

    function requestUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    document.documentElement.classList.add('connect-ready')
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    window.addEventListener('load', requestUpdate)
    update()

    const nav = document.querySelector<HTMLElement>('.site-nav')
    const toggle = nav?.querySelector<HTMLButtonElement>('.nav-toggle')
    const setOpen = (open: boolean) => {
      if (!nav || !toggle) return
      nav.classList.toggle('is-open', open)
      toggle.setAttribute('aria-expanded', String(open))
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
    }
    const onToggleClick = () => nav && setOpen(!nav.classList.contains('is-open'))
    const onResize = () => {
      if (window.innerWidth > 960) setOpen(false)
    }
    const navLinks = nav ? Array.from(nav.querySelectorAll<HTMLAnchorElement>('nav a')) : []
    const onLinkClick = () => setOpen(false)

    toggle?.addEventListener('click', onToggleClick)
    navLinks.forEach((link) => link.addEventListener('click', onLinkClick))
    window.addEventListener('resize', onResize)

    const switches = Array.from(document.querySelectorAll<HTMLButtonElement>('.switch[role="switch"]'))
    const onSwitchClick = (control: HTMLButtonElement) => () => {
      const on = control.getAttribute('aria-checked') !== 'true'
      control.setAttribute('aria-checked', String(on))
      const label = control.querySelector('span')
      if (label) label.textContent = on ? 'Live' : 'Hidden'
    }
    const switchHandlers = switches.map((control) => {
      const handler = onSwitchClick(control)
      control.addEventListener('click', handler)
      return { control, handler }
    })

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      window.removeEventListener('load', requestUpdate)
      window.removeEventListener('resize', onResize)
      toggle?.removeEventListener('click', onToggleClick)
      navLinks.forEach((link) => link.removeEventListener('click', onLinkClick))
      switchHandlers.forEach(({ control, handler }) => control.removeEventListener('click', handler))
    }
  }, [pathname])

  return null
}
