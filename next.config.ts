import type { NextConfig } from 'next'
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'
import path from 'node:path'

export default function nextConfig(phase: string): NextConfig {
  const dev = phase === PHASE_DEVELOPMENT_SERVER

  return {
    // Keystatic's local mode needs its API route (route.keystatic.ts), so that only exists under `next dev`.
    // The live editor uses Keystatic Cloud from the browser, so production stays a static export.
    ...(dev ? {} : { output: 'export' }),
    pageExtensions: dev ? ['tsx', 'ts', 'keystatic.tsx', 'keystatic.ts'] : ['tsx', 'ts'],
    experimental: {
      globalNotFound: true,
    },
    images: {
      unoptimized: true,
    },
    outputFileTracingRoot: path.join(__dirname),
  }
}
