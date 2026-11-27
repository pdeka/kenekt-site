// Checks that Pipedrive has what the landing page lead function needs, without creating anything:
// the person labels Agent, Builder, Land Developer and Buyer, and the utm_source and utm_campaign
// person fields.
//
//   PIPEDRIVE_API_TOKEN=... PIPEDRIVE_COMPANY_DOMAIN=kenekt node scripts/check-pipedrive-fields.mjs

import { resolvePipedriveFields } from '../lib/lead.js'

const { PIPEDRIVE_API_TOKEN, PIPEDRIVE_COMPANY_DOMAIN } = process.env
if (!PIPEDRIVE_API_TOKEN || !PIPEDRIVE_COMPANY_DOMAIN) {
  console.error('Set PIPEDRIVE_API_TOKEN and PIPEDRIVE_COMPANY_DOMAIN first.')
  process.exit(1)
}

const res = await fetch(`https://${PIPEDRIVE_COMPANY_DOMAIN}.pipedrive.com/api/v2/personFields?limit=500`, {
  headers: { 'x-api-token': PIPEDRIVE_API_TOKEN },
})
if (!res.ok) {
  console.error(`Pipedrive answered ${res.status}: ${await res.text()}`)
  process.exit(1)
}

const fields = (await res.json()).data || []
const resolved = resolvePipedriveFields(fields)
let missing = 0
for (const [role, id] of Object.entries(resolved.labelIds)) {
  console.log(id == null ? `MISSING  person label "${role}"` : `ok       person label "${role}" → id ${id}`)
  if (id == null) missing++
}
for (const [name, key] of [['utm_source', resolved.utmSourceKey], ['utm_campaign', resolved.utmCampaignKey]]) {
  console.log(key ? `ok       person field "${name}" → ${key}` : `MISSING  person field "${name}"`)
  if (!key) missing++
}

if (missing) {
  const labelField = fields.find((field) => ['label_ids', 'label'].includes(field.field_code ?? field.key))
  console.log('\nPerson labels in Pipedrive:', labelField?.options?.map((option) => option.label).join(', ') || 'none found')
  console.log('Person fields in Pipedrive:', fields.map((field) => field.field_name ?? field.name).join(', '))
  process.exit(1)
}
