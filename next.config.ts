import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Content-Security-Policy.
 *
 * We use the static (non-nonce) approach documented by Next.js for sites that
 * don't handle sensitive data: it keeps all routes statically generated and
 * CDN-cacheable. Nonce-based CSP (via proxy.ts) would force dynamic rendering
 * of every page, which trades away the site's main performance win for no
 * real benefit here (no user-generated content, no auth, no sensitive data).
 *
 * `'unsafe-inline'` for script-src/style-src is required by Next.js' own
 * inline hydration scripts and framer-motion inline styles. The remaining
 * directives still neutralize clickjacking (frame-ancestors 'none'),
 * cross-origin resource loading (default-src 'self'), mixed content
 * (upgrade-insecure-requests) and object/plugin injection (object-src 'none').
 */
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob:;
  font-src 'self' data:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  connect-src 'self'${isDev ? " ws:" : ""};
  upgrade-insecure-requests;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: cspHeader.replace(/\s{2,}/g, " ").trim(),
  },
  // Prevent MIME-sniffing attacks (e.g. serving HTML as an image).
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Block the page from being embedded in a <frame>/<iframe> (clickjacking).
  // Redundant with frame-ancestors 'none' above, kept as defense in depth.
  { key: "X-Frame-Options", value: "DENY" },
  // Only send the origin (not the full URL) when navigating cross-origin.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable browser features this site never uses (camera, mic, geolocation,
  // FLoC/topics tracking) — reduces the attack surface for permissions abuse.
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()",
  },
  // Enforce HTTPS for one year (incl. subdomains). Only meaningful on Vercel
  // where the site is served over HTTPS.
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  // Remove the "X-Powered-By: Next.js" header — minor info disclosure
  // that makes the framework trivially identifiable to attackers.
  poweredByHeader: false,
  async headers() {
    return [
      // Hashed build assets are immutable — safe to cache for a year.
      // (Next sets this by default too; kept explicit for clarity.)
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Favicon changes rarely.
      {
        source: "/favicon.ico",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
      // All routes are statically prerendered, so the HTML is identical until
      // the next deploy. Serve from the CDN (s-maxage) with background
      // revalidation so updates propagate without full cache misses.
      {
        source: "/((?!_next/static|_next/image|favicon.ico).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      // Security headers on every response.
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
