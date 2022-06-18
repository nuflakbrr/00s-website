/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

module.exports = nextConfig
