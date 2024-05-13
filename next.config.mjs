/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/finance",
        permanent: true
      }
    ]
  }
};

export default nextConfig;
