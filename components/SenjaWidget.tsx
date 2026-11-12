'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    iFrameResize?: (options: Record<string, unknown>, selector: string) => void
  }
}

const SCRIPT_SRC = 'https://widget.senja.io/js/iframeResizer.min.js'

/**
 * Loads Senja's iframe-resizer and wires it up to the "Wall of Love" iframe
 * once the script is ready. Doesn't rely on DOMContentLoaded, since by the
 * time client components mount that event has already fired.
 */
export default function SenjaWidget() {
  useEffect(() => {
    const init = () => {
      window.iFrameResize?.({ log: false, checkOrigin: false }, '#wall-of-love-video-testimonials')
    }

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`)
    if (existing) {
      if (window.iFrameResize) {
        init()
        return
      }
      existing.addEventListener('load', init)
      return () => existing.removeEventListener('load', init)
    }

    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.async = true
    script.addEventListener('load', init)
    document.body.appendChild(script)

    return () => {
      script.removeEventListener('load', init)
    }
  }, [])

  return null
}
