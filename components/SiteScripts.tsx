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
      switchHandlers.forEach(({ control, handler }) => control.removeEventListener('click', handler))
    }
  }, [pathname])

  return null
}
