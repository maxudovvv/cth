/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Provisional: only local images are used in the prototype.
    // Remote patterns are intentionally empty — no external image hosts,
    // and specifically NO Facebook fetching. Add approved hosts later.
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
  eslint: {
    // Lint is run explicitly via `npm run lint`; do not fail the build on it here
    // so the prototype build stays predictable during discovery.
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
