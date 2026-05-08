import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable strict mode for better React patterns
  reactStrictMode: true,

  // Optimize for production
  poweredByHeader: false,

  // Compress responses
  compress: true,

  // Generate build ID based on content hash (better caching)
  generateBuildId: () => `sygate-${Date.now()}`,

  // Configure headers for Cloudflare CDN and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security Headers
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Cloudflare-specific headers
          {
            key: "X-CF-Cache-Status",
            value: "HIT",
          },
        ],
      },
      {
        // Cache static assets longer
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache images
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },

  // Image optimization configuration
  images: {
    // Allow images from external sources if needed
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
    // Optimize for performance
    formats: ["image/avif", "image/webp"],
  },

  // Experimental features for better performance
  experimental: {
    // Optimize package imports
    optimizePackageImports: ["lucide-react"],
  },

  // Logging configuration for production
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // Ensure proper trailing slash handling
  trailingSlash: false,

  // Clean URL handling
  cleanDistDir: true,
};

export default nextConfig;