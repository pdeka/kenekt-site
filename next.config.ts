import type { NextConfig } from 'next'
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'
import path from 'node:path'

export default function nextConfig(phase: string): NextConfig {
  const dev = phase === PHASE_DEVELOPMENT_SERVER

  return {
    // The Keystatic editor needs a server, so it only exists under `next dev`; production stays a static export
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
