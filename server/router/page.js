'use strict'

import { Router } from 'express'

const router = Router()

router.route('/status').all((req, res) => {
  res.send('1')
})

router.route('/login').get((req, res) => {
  if (req.session && req.session.user) {
    return res.redirect('/project')
  }

  res.render('index', {
    user: ''
  })
})

router.route('*').get((req, res) => {
  if (!req.session || !req.session.user) {
    return res.redirect('/login')
  }

  res.render('index', {
    user: JSON.stringify(req.session.user) || ''
  })
})

export default router
