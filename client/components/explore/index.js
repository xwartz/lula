import React, { Component, PropTypes } from 'react'

export default class Explore extends Component {

  constructor (props) {
    super(props)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleGoClick = this.handleGoClick.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setInputValue(nextProps.value)
    }
  }

  render () {
    const { value } = this.props
    return (
      <div>
        <p>Type a username or repo full name and hit 'Go':</p>
        <input size='45'
               ref={ (ref) => { this.input = ref } }
               defaultValue={ value }
               onKeyUp={ this.handleKeyUp } />
        <button onClick={ this.handleGoClick }>Go!</button>
      </div>
    )
  }

  handleKeyUp (e) {
    if (e.keyCode === 13) {
      this.handleGoClick()
    }
  }

  handleGoClick () {
    const { onChange } = this.props
    onChange(this.getInputValue())
  }

  getInputValue () {
    return this.input.value
  }

  setInputValue (val) {
    this.input.value = val
  }
}

Explore.PropTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
