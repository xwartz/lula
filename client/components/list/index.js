import React, { Component, PropTypes } from 'react'

export default class List extends Component {
  render () {
    const {
      items, renderItem, pageCount,
      isFetching, nextPageUrl, loadingLabel
    } = this.props

    const isEmpty = !items.length

    if (isEmpty && isFetching) {
      <h2><i>{loadingLabel}</i></h2>
    }

    const isLastPage = !nextPageUrl

    if (isEmpty && isLastPage) {
      return <h1><i>Nothing here!</i></h1>
    }

    return (
      <div>
        { items.map(renderItem) }
        { pageCount && !isLastPage && this.renderLoadMore() }
      </div>
    )
  }

  renderLoadMore () {
    const { onLoadMoreClick, isFetching } = this.props
    return (
      <button onClick={ onLoadMoreClick }
              disabled={ isFetching }>
        { isFetching ? 'Loading...' : 'Load More' }
      </button>
    )
  }

}

List.PropTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  nextPageUrl: PropTypes.string,
  loadingLabel: PropTypes.string.isRequired,
  onLoadMoreClick: PropTypes.func.isRequired
}

List.defaultProps = {
  loadingLabel: 'Loading...',
  isFetching: true
}
