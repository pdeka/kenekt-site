import { metaLeadEvent, pipedrivePerson, resolvePipedriveFields, validateLead } from '../../lib/lead.js'
import { META_PIXEL_ID } from '../../app/site.js'

// POST /.netlify/functions/lead — the landing page form.
// 1. Creates a person in Pipedrive (name, email, phone, role label, utm_source, utm_campaign).
// 2. Sends the Lead event to Meta's Conversions API, paired with the browser Pixel's event.
//
// Netlify environment variables (Site configuration → Environment variables):
//   PIPEDRIVE_API_TOKEN       Pipedrive → Personal preferences → API
//   PIPEDRIVE_COMPANY_DOMAIN  the "kenekt" in kenekt.pipedrive.com
//   META_CAPI_TOKEN           Events Manager → the Pixel → Settings → Conversions API → Generate access token
//   META_TEST_EVENT_CODE      optional: from Events Manager → Test events, while testing
//   META_GRAPH_VERSION        optional: defaults to v25.0 (supported until July 2028)

const json = (status, body) => Response.json(body, { status })

// Field ids rarely change, so look them up once per warm function instance
let fieldsPromise

async function pipedriveFields(base, token) {
  fieldsPromise ??= fetch(`${base}/personFields?limit=500`, { headers: { 'x-api-token': token } })
    .then(async (res) => {
      if (!res.ok) throw new Error(`personFields ${res.status}: ${await res.text()}`)
      return resolvePipedriveFields((await res.json()).data || [])
    })
    .catch((error) => {
      fieldsPromise = undefined
      throw error
    })
  return fieldsPromise
}

export default async function handler(req) {
  if (req.method !== 'POST') return json(405, { error: 'Method not allowed' })

  let body
  try {
    body = await req.json()
  } catch {
    return json(400, { error: 'Invalid request.' })
  }

  // Bots fill the hidden "website" field; real visitors never see it. Pretend it worked.
  if (body.website) return json(200, { ok: true })

  const { lead, error } = validateLead(body)
  if (error) return json(400, { error })

  const { PIPEDRIVE_API_TOKEN, PIPEDRIVE_COMPANY_DOMAIN, META_CAPI_TOKEN, META_TEST_EVENT_CODE } = process.env
  if (!PIPEDRIVE_API_TOKEN || !PIPEDRIVE_COMPANY_DOMAIN) {
    console.error('lead: PIPEDRIVE_API_TOKEN or PIPEDRIVE_COMPANY_DOMAIN is not set')
    return json(500, { error: 'Something went wrong. Please try again or call 1300 536 358.' })
  }

  // 1. Pipedrive: the lead only counts once the person is saved, so a failure here is shown to the visitor
  const base = `https://${PIPEDRIVE_COMPANY_DOMAIN}.pipedrive.com/api/v2`
  try {
    const fields = await pipedriveFields(base, PIPEDRIVE_API_TOKEN)
    for (const [role, id] of Object.entries(fields.labelIds)) {
      if (id == null) console.warn(`lead: no Pipedrive person label named "${role}"`)
    }
    if (!fields.utmSourceKey || !fields.utmCampaignKey) console.warn('lead: Pipedrive person field utm_source or utm_campaign not found')

    const res = await fetch(`${base}/persons`, {
      method: 'POST',
      headers: { 'x-api-token': PIPEDRIVE_API_TOKEN, 'content-type': 'application/json' },
      body: JSON.stringify(pipedrivePerson(lead, fields)),
    })
    if (!res.ok) throw new Error(`persons ${res.status}: ${await res.text()}`)
  } catch (err) {
    console.error('lead: Pipedrive failed', err)
    return json(502, { error: 'Something went wrong. Please try again or call 1300 536 358.' })
  }

  // 2. Meta: attribution only, so a failure is logged and the visitor still sees success
  if (META_CAPI_TOKEN) {
    const version = process.env.META_GRAPH_VERSION || 'v25.0'
    const event = metaLeadEvent(lead, {
      cookieHeader: req.headers.get('cookie'),
      ip: req.headers.get('x-nf-client-connection-ip') || req.headers.get('x-forwarded-for')?.split(',')[0].trim(),
      userAgent: req.headers.get('user-agent'),
    })
    try {
      const res = await fetch(`https://graph.facebook.com/${version}/${process.env.META_PIXEL_ID || META_PIXEL_ID}/events`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          data: [event],
          access_token: META_CAPI_TOKEN,
          ...(META_TEST_EVENT_CODE && { test_event_code: META_TEST_EVENT_CODE }),
        }),
      })
      if (!res.ok) console.error('lead: Meta Conversions API', res.status, await res.text())
    } catch (err) {
      console.error('lead: Meta Conversions API failed', err)
    }
  } else {
    console.warn('lead: META_CAPI_TOKEN is not set, skipping the Conversions API')
  }

  return json(200, { ok: true, eventId: lead.eventId })
}
