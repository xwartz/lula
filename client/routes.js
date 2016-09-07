import React from 'react'
import { Route } from 'react-router'
import App from './containers/app'
import UserPage from './containers/userPage'
import RepoPage from './containers/repoPage'

export default (
  <Route path="/" component={ App }>
    <Route path="/:login/:name"
           component={ RepoPage } />
    <Route path="/:login"
           component={ UserPage } />
  </Route>
)
