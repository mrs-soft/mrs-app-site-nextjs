/**
 * @type {import('next').NextConfig}
 */


const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  basePath: isProd ? 'mrs-app-site-nextjs' : '',
  output: 'export',
  distDir: 'dist',
  env: {
    plasmicProjectId: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID,
    plasmicProjectToken: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_TOKEN
  }
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
