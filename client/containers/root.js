if (process.env.NODE_ENV === 'production') {
  module.exports = require('./root.pro')
} else {
  module.exports = require('./root.dev')
}
