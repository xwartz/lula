const env = process.env.NODE_ENV || 'development'
const isDev = env === 'development'

module.exports = {
  client: {
    port: isDev ? 3000 : 4000
  },
  server: {
    port: isDev ? 4000 : 4000
  }
}
