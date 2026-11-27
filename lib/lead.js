import crypto from 'node:crypto'

// Lead form handling shared by the Netlify function (netlify/functions/lead.mjs) and its tests:
// check the form, create the person in Pipedrive, and send the matching Lead event to Meta.

export const ROLES = ['Agent', 'Builder', 'Land Developer', 'Buyer']

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Australian numbers to E.164 digits: "0412 345 678" and "+61 412 345 678" both give "61412345678". */
export function phoneDigits(phone) {
  let digits = String(phone || '').replace(/\D/g, '')
  if (digits.startsWith('0') && digits.length === 10) digits = `61${digits.slice(1)}`
  return digits
}

/** Checks the submitted form; returns { lead } or { error } with a message fit to show the visitor. */
export function validateLead(body) {
  const name = String(body?.name || '').trim().replace(/\s+/g, ' ')
  const email = String(body?.email || '').trim().toLowerCase()
  const phone = String(body?.phone || '').trim()
  const role = String(body?.role || '')

  if (!name) return { error: 'Please enter your full name.' }
  if (!EMAIL.test(email)) return { error: 'Please enter a valid email address.' }
  if (phoneDigits(phone).length < 9) return { error: 'Please enter a valid phone number.' }
  if (!ROLES.includes(role)) return { error: 'Please choose which best describes you.' }

  const clip = (value) => String(value || '').trim().slice(0, 255)
  return {
    lead: {
      name,
      email,
      phone,
      role,
      utmSource: clip(body.utm_source),
      utmCampaign: clip(body.utm_campaign),
      eventId: clip(body.event_id) || crypto.randomUUID(),
      fbclid: clip(body.fbclid),
      pageUrl: clip(body.page_url),
    },
  }
}

// Pipedrive fields are looked up by name, so label and custom field ids never need hard-coding.
// v2 calls them field_code / field_name, v1 key / name; accept either.
const norm = (text) => String(text || '').toLowerCase().replace(/[^a-z0-9]/g, '')

/**
 * From GET /api/v2/personFields data: the person label ids for each role, and the keys of the
 * utm_source and utm_campaign custom fields. Anything missing comes back null so the person is
 * still created, just without it.
 */
export function resolvePipedriveFields(fields) {
  const code = (field) => field.field_code ?? field.key
  const name = (field) => field.field_name ?? field.name
  const byName = (wanted) => fields.find((field) => norm(name(field)) === norm(wanted))

  const labelField = fields.find((field) => ['label_ids', 'label'].includes(code(field)))
  const labelIds = Object.fromEntries(
    ROLES.map((role) => [role, labelField?.options?.find((option) => norm(option.label) === norm(role))?.id ?? null]),
  )

  return {
    labelIds,
    utmSourceKey: code(byName('utm_source') || {}) ?? null,
    utmCampaignKey: code(byName('utm_campaign') || {}) ?? null,
  }
}

/** The POST /api/v2/persons body. */
export function pipedrivePerson(lead, { labelIds, utmSourceKey, utmCampaignKey }) {
  const customFields = {}
  if (utmSourceKey && lead.utmSource) customFields[utmSourceKey] = lead.utmSource
  if (utmCampaignKey && lead.utmCampaign) customFields[utmCampaignKey] = lead.utmCampaign

  const labelId = labelIds[lead.role]
  return {
    name: lead.name,
    emails: [{ value: lead.email, primary: true, label: 'work' }],
    phones: [{ value: `+${phoneDigits(lead.phone)}`, primary: true, label: 'mobile' }],
    ...(labelId != null && { label_ids: [labelId] }),
    ...(Object.keys(customFields).length && { custom_fields: customFields }),
  }
}

const sha256 = (value) => crypto.createHash('sha256').update(value).digest('hex')

/** Reads one cookie from a Cookie header. */
export function cookie(header, name) {
  const match = String(header || '').match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) : ''
}

/**
 * The Conversions API Lead event. Personal details are normalised then SHA-256 hashed as Meta
 * requires; the click and browser ids, IP and user agent are sent as-is. event_id matches the
 * browser Pixel's Lead event so Meta counts the lead once.
 */
export function metaLeadEvent(lead, { cookieHeader, ip, userAgent, now = Date.now() }) {
  const [first, ...rest] = lead.name.toLowerCase().split(' ')
  // The Pixel sets _fbc after an ad click; build the same value from fbclid if the cookie isn't there yet
  const fbc = cookie(cookieHeader, '_fbc') || (lead.fbclid ? `fb.1.${now}.${lead.fbclid}` : '')
  const fbp = cookie(cookieHeader, '_fbp')

  return {
    event_name: 'Lead',
    event_time: Math.floor(now / 1000),
    event_id: lead.eventId,
    action_source: 'website',
    ...(lead.pageUrl && { event_source_url: lead.pageUrl }),
    user_data: {
      em: [sha256(lead.email)],
      ph: [sha256(phoneDigits(lead.phone))],
      fn: [sha256(first)],
      ...(rest.length && { ln: [sha256(rest.join(' '))] }),
      ...(fbc && { fbc }),
      ...(fbp && { fbp }),
      ...(ip && { client_ip_address: ip }),
      ...(userAgent && { client_user_agent: userAgent }),
    },
    custom_data: {
      lead_type: lead.role,
      ...(lead.utmSource && { utm_source: lead.utmSource }),
      ...(lead.utmCampaign && { utm_campaign: lead.utmCampaign }),
    },
  }
}
