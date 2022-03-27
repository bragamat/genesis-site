// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  assetPrefix: "./",
  images: {
    loader: 'akamai',
    path: '',
    domains: ['images.unsplash.com', 'tailwindui.com']
  }
})
