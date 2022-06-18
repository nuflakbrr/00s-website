/** @type {import('next').NextConfig} */
const withImages = require('next-images')
const nextConfig = withImages({
  reactStrictMode: true,
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/profile': { page: '/profile' },
      '/projects': { page: '/projects' },
      '/contact': { page: '/contact' },
      '/config': { page: '/config' },
      '/socialfeeds': { page: '/socialfeeds' },
    };
  }
});

module.exports = nextConfig;
