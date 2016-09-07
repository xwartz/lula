import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import './index.scss'

export default class User extends Component {
  render () {
    const { login, avatarUrl, name } = this.props.user

    return (
      <div className="User">
        <Link to={`/${login}`}>
          <img src={ avatarUrl } />
          <span>{ login } { name && <span>({ name })</span> }</span>
        </Link>
      </div>
    )
  }
}

User.PropTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string
  }).isRequired
}
