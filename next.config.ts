import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site used to be static HTML files; keep the old URLs working.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/privacy-policy.html", destination: "/privacy-policy", permanent: true },
      { source: "/child-safety.html", destination: "/child-safety", permanent: true },
      { source: "/account-deletion.html", destination: "/account-deletion", permanent: true },
    ];
  },
};

export default nextConfig;
