/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fixes the "generate is not a function" regression in Next.js 16.1.6
  generateBuildId: async () => {
    return null;
  },
  images: {
    formats: ["image/webp"],
  },
};

export default nextConfig;
