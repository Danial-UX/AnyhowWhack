/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ ESLint config removed (no longer supported in Next 15+)

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  // ✅ Explicit empty Turbopack config to silence warning
  turbopack: {},

  webpack: (config, { isServer }) => {
    // Handle PDF.js worker and canvas issues (client-side only)
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        fs: false,
      }
    }

    // Prevent pdfjs-dist from being bundled server-side
    if (isServer) {
      config.externals = [
        ...(config.externals || []),
        'pdfjs-dist',
      ]
    }

    return config
  },
}

export default nextConfig
