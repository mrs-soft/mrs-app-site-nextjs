/**
 * @type {import('next').NextConfig}
 */


const isProd = process.env.NODE_ENV === "production"

const nextConfig = {
  basePath: isProd ? 'mrs-app-site-nextjs' : '',
  output: 'export',
  distDir: 'dist',
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
