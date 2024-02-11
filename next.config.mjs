/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(glsl)$/,
        type: 'asset/source'
      })
      return config
    }
  }
  
export default nextConfig;