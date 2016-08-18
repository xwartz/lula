'use strict'

import page from './page'

// 禁用证书验证，不然自签名的证书无法建立连接
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export default function (app) {
  app.use('/', page)
}
