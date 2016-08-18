'use strict'

import express from 'express'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import hbs from 'hbs'

// import config from './config/index'
import router from './router/index'
// import middleware from './middleware/index'

let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// 模板引用 app.locals
hbs.localsAsTemplateData(app)
// app.set('protocol', config.protocol)

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// init moddleware
// middleware(app)

// init router
router(app)

export default app
