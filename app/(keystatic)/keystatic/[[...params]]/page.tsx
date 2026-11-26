// The live build exports only /keystatic; Netlify serves it for every /keystatic/* URL and the editor routes client-side
export function generateStaticParams() {
  return [{ params: [] }]
}

export default function KeystaticPage() {
  return null
}
