;(() => {
  const clamp = (value) => Math.min(1, Math.max(0, value))
  let frame = 0

  function update() {
    frame = 0
    const viewport = window.innerHeight
    document.querySelectorAll('[data-connect]').forEach((element) => {
      const rect = element.getBoundingClientRect()
      const start = viewport * Number(element.dataset.connectStart || 0.9)
      const end = viewport * Number(element.dataset.connectEnd || 0.45)
      const span = Number(getComputedStyle(element).getPropertyValue('--connect-span')) || 0
      const progress = clamp((start - rect.top) / (start - end + rect.height * span))
      element.style.setProperty('--progress', progress.toFixed(3))
      element.classList.toggle('is-connected', progress >= 0.999)
      element.querySelectorAll('[data-at]').forEach((point) => {
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

  const nav = document.querySelector('.site-nav')
  const toggle = nav && nav.querySelector('.nav-toggle')
  if (toggle) {
    const setOpen = (open) => {
      nav.classList.toggle('is-open', open)
      toggle.setAttribute('aria-expanded', String(open))
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
    }
    toggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')))
    nav.querySelectorAll('nav a').forEach((link) => link.addEventListener('click', () => setOpen(false)))
    window.addEventListener('resize', () => { if (window.innerWidth > 960) setOpen(false) })
  }

  document.querySelectorAll('.switch[role="switch"]').forEach((control) => {
    control.addEventListener('click', () => {
      const on = control.getAttribute('aria-checked') !== 'true'
      control.setAttribute('aria-checked', String(on))
      control.querySelector('span').textContent = on ? 'Live' : 'Hidden'
    })
  })
})()
