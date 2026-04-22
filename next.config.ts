import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Redirects — consolidate deprecated service pages into Business Brain (the umbrella AI offering)
  async redirects() {
    return [
      {
        source: "/servicios/chatbots-ia",
        destination: "/servicios/business-brain",
        permanent: true,
      },
      {
        source: "/servicios/automatizacion-ia",
        destination: "/servicios/business-brain",
        permanent: true,
      },
    ];
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/video/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    qualities: [75, 90],
  },

  // Compression
  compress: true,

  // Strict mode for React
  reactStrictMode: true,

  // Powered by header removal (security)
  poweredByHeader: false,
};

export default nextConfig;
