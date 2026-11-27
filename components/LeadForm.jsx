'use client'

import { useEffect, useRef, useState } from 'react'

const ROLES = ['Agent', 'Builder', 'Land Developer', 'Buyer']
const PRIVACY_URL = 'https://portal.kenekt.com.au/policies/privacy'

/**
 * Landing page sign-up form. Posts to the lead function (Pipedrive person + Meta Conversions API)
 * and, once saved, fires the browser Pixel's Lead event with the same event id so Meta counts it once.
 */
export default function LeadForm({ submitLabel = 'Register for the webinar', contentName }) {
  const [role, setRole] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | done
  const [error, setError] = useState('')
  const trackingRef = useRef({})
  const doneRef = useRef(null)

  // utm_source, utm_campaign and the ad click id come from the address the ad sent the visitor to
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    trackingRef.current = {
      utm_source: params.get('utm_source') || '',
      utm_campaign: params.get('utm_campaign') || '',
      fbclid: params.get('fbclid') || '',
    }
  }, [])

  useEffect(() => {
    if (status === 'done') doneRef.current?.focus()
  }, [status])

  async function onSubmit(event) {
    event.preventDefault()
    if (status === 'sending') return
    const form = new FormData(event.currentTarget)
    if (!role) {
      setError('Please choose which best describes you.')
      return
    }

    const eventId = crypto.randomUUID()
    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/.netlify/functions/lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          phone: form.get('phone'),
          role,
          website: form.get('website'),
          event_id: eventId,
          page_url: window.location.href,
          ...trackingRef.current,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.')

      window.fbq?.('track', 'Lead', { content_name: contentName, lead_type: role }, { eventID: eventId })
      setStatus('done')
    } catch (err) {
      setError(err.message)
      setStatus('idle')
    }
  }

  if (status === 'done') {
    return (
      <div className="lead-done" role="status">
        <h3 ref={doneRef} tabIndex={-1}>You’re registered</h3>
        <p>Thanks! We’ll be in touch shortly with the webinar details.</p>
      </div>
    )
  }

  return (
    <form className="lead-form" onSubmit={onSubmit}>
      <label>
        <span>Full name</span>
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        <span>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
      </label>

      <fieldset>
        <legend>I am a…</legend>
        <div className="lead-roles">
          {ROLES.map((option) => (
            <label key={option} className="lead-role">
              <input type="radio" name="role" value={option} checked={role === option} onChange={() => setRole(option)} required />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Hidden from people; bots that fill every field get caught by it */}
      <label className="lead-trap" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <p className="lead-error" role="alert">{error}</p>

      <button className="pill pill-blue" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : submitLabel}
        <lord-icon
          src="https://cdn.lordicon.com/cyvvyiob.json"
          trigger="hover"
          state="hover-pinch"
          colors="primary:#4be1ec,secondary:#cb5eee"
          stroke="bold"
          style={{ width: 24, height: 24 }}
        ></lord-icon>
      </button>

      <p className="lead-privacy">
        By registering you agree to Kenekt contacting you about the webinar and our services. See our{' '}
        <a href={PRIVACY_URL} target="_blank" rel="noopener">privacy policy</a>.
      </p>
    </form>
  )
}
