
'use strict'

import app from './server/index'
import http from 'http'
import https from 'https'
import credentials from './credentials/index'

/**
 * Normalize a port into a number, string, or false.
 */

let normalizePort = val => {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || '8080')
const httpsPort = normalizePort(process.env.HTTPS_PORT || '8443')

app.set('port', port)
app.set('https_port', httpsPort)

const httpServer = http.createServer(app)
const httpsServer = https.createServer(credentials, app)

/**
 * Listen on provided port, on all network interfaces.
 */

httpServer.listen(port, () => {
  console.log('http start port: ' + app.get('port'))
})

httpsServer.listen(httpsPort, () => {
  console.log('https start port: ' + app.get('https_port'))
})
