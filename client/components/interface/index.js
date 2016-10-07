
import React, { Component, PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'

import './index.scss'

export default class InterfaceItem extends Component {

  constructor (props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleInterfaceCopy = this.handleInterfaceCopy.bind(this)
    this.handleInterfaceMove = this.handleInterfaceMove.bind(this)
    this.handleInterfaceDelete = this.handleInterfaceDelete.bind(this)
    this.openUrl = this.openUrl.bind(this)
  }

  render () {
    let { interfaceModel, link } = this.props
    let { selected, url, description, user } = interfaceModel

    return (
      <tr onClick={ this.handleSelect }>
        <td>
          <label><input type='checkbox' checked={ selected } readOnly={ true }/></label>
        </td>
        <td><Link to={ link }>{ url }</Link></td>
        <td>{ description }</td>
        <td>{ user || '' }</td>
        <td>
          <Button onClick={ this.handleInterfaceCopy }>复制</Button>
          <Button onClick={ this.handleInterfaceMove }>移动</Button>
          <Button onClick={ this.handleInterfaceDelete }>删除</Button>
          <Button onClick={ this.openUrl }>查看</Button>
        </td>
      </tr>
    )
  }

  handleSelect () {
    let { interfaceModel, onChange, index } = this.props
    let { selected } = interfaceModel
    let newInter = Object.assign({}, interfaceModel, {
      selected: !selected
    })

    onChange(newInter, index)
  }

  handleInterfaceCopy (event) {
    let { link } = this.props
    event.stopPropagation()
    browserHistory.push(`${link}$copy`)
  }

  handleInterfaceMove () {

  }

  handleInterfaceDelete () {

  }

  openUrl (event) {
    let { interfaceModel } = this.props
    event.stopPropagation()
    window.open(interfaceModel.url)
  }
}

InterfaceItem.propTypes = {
  interfaceModel: PropTypes.shape({
    selected: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    description: PropTypes.string,
    user: PropTypes.string,
  }).isRequired,
  link: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

