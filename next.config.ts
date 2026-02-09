import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },
  // Compress output
  compress: true,
  // Generate ETags
  generateEtags: true,
  // Trailing slashes for better SEO
  trailingSlash: false,
};

export default nextConfig;
