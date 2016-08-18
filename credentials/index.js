'use strict'

import fs from 'fs'
import path from 'path'

// https证书
module.exports = {
  key: fs.readFileSync(path.join(__dirname, '/privatekey.pem')),
  cert: fs.readFileSync(path.join(__dirname, '/certificate.pem'))
}
