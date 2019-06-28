import React from 'react'

export default class Task extends React.Component {
  className () {
    const isDoneClass = this.props.task && (this.props.task.isDone ? 'isDone' : '')
    return isDoneClass
  }

  render () {
    return <li className={ this.className() }>
        <input type="checkbox" value={this.props.task.isDone} onChange={this.props.toggleTask }/>
        { this.props.task.title }
      </li>
  }
}