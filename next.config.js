const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  assetPrefix: isProd ? 'https://subedisubrat.github.io' : '',
}
module.exports = withNextra()