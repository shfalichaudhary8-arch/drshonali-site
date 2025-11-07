// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
module.exports = withMDX({
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
});
