import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { loadRepo, loadStargazers } from 'actions'
import Repo from 'components/repo'
import List from 'components/list'
import User from 'components/user'

function loadData (props) {
  const { fullName } = props
  props.loadRepo(fullName, [ 'description' ])
  props.loadStargazers(fullName)
}

class RepoPage extends Component {
  constructor (props) {
    super(props)
    this.renderUser = this.renderUser.bind(this)
    this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this)
  }

  componentWillMount () {
    loadData(this.props)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.fullName !== this.props.fullName) {
      loadData(nextProps)
    }
  }

  render () {
    const { repo, owner, stargazers, name, stargazersPagination } = this.props
    return (
      <div>
        <Repo repo={ repo }
              owner= { owner } />
        <List renderItem={ this.renderUser }
              items={ stargazers }
              onLoadMoreClick={ this.handleLoadMoreClick }
              loadingLabel={ `Loading stargazers of ${name}...` }
              { ...stargazersPagination } />
      </div>
    )
  }

  renderUser (user) {
    return (
      <User user={ user }
            key={ user.login } />
    )
  }

  handleLoadMoreClick () {
    const { loadStargazers, fullName } = this.props
    loadStargazers(fullName, true)
  }
}

RepoPage.PropTypes = {
  repo: PropTypes.object,
  owner: PropTypes.object,
  stargazers: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  loadStargazers: PropTypes.func.isRequired,
  stargazersPagination: PropTypes.object,
  loadRepo: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  // We need to lower case the login/name due to the way GitHub's API behaves.
  // Have a look at ../middleware/api.js for more details.
  const login = ownProps.params.login.toLowerCase()
  const name = ownProps.params.name.toLowerCase()

  const {
    pagination: { stargazersByRepo },
    entities: { users, repos }
  } = state

  const fullName = `${login}/${name}`
  const stargazersPagination = stargazersByRepo[fullName] || { ids: [] }
  const stargazers = stargazersPagination.ids.map(id => users[id])

  return {
    fullName,
    name,
    stargazers,
    stargazersPagination,
    repo: repos[fullName],
    owner: users[login]
  }
}

const mapDispatchToProps = {
  loadRepo,
  loadStargazers
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoPage)
