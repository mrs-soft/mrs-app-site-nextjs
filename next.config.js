/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "" : "",
  output: "export",
  distDir: "dist",
};

module.exports = nextConfig;
