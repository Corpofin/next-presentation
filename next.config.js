const {resolve} = require('path')

module.exports = {
    webpack: function (config, { dev }) {
      config.resolve.alias = {
        '@components': resolve(__dirname, 'components'),
        '@utils': resolve(__dirname, 'utils')
      }
      return config
    },
    exportPathMap: function(){
        return {
            '/': { page: '/' },
            '/two': { page: '/two' },
            '/start': { page: '/start' },
            '/gift': { page: '/gift' }
        }
    }
  }