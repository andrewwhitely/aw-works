const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/rss.xml',
        destination: '/feed/rss.xml',
      },
      {
        source: '/atom.xml',
        destination: '/feed/atom.xml',
      },
      {
        source: '/feed.json',
        destination: '/feed/feed.json',
      },
      {
        source: '/rss',
        destination: '/feed/rss.xml',
      },
      {
        source: '/feed',
        destination: '/feed/rss.xml',
      },
      {
        source: '/atom',
        destination: '/feed/atom.xml',
      },
      {
        source: '/json',
        destination: '/feed/feed.json',
      },
    ];
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

module.exports = withMDX(nextConfig);
