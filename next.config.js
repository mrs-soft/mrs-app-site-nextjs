/**
 * @type {import('next').NextConfig}
 */


const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  basePath: isProd ? 'mrs-app-site-nextjs' : '',
  output: 'export',
  distDir: 'dist',
  // env: {
  //   plasmicProjectId: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID,
  //   plasmicProjectToken: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_TOKEN
  // }
}

module.exports = nextConfig
