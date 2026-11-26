import path from 'node:path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(import.meta.dirname),
}

export default nextConfig
