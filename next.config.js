/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
    emotion: true,
  },
  output: 'standalone',
  experimental: {
    typedRoutes: true,
  },
}
 
module.exports = nextConfig