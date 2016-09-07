const router = require('koa-router')()

require('./user')(router)
require('./starred')(router)

module.exports = router
