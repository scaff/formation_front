import React from 'react'

export default class TaskForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      id: this.props.value,
      title: this.props.title,
      isDone: false
    }
  }
  
  submitAction = () => {
    console.log(this.props.action)
    let submitName
    switch (this.props.action) {
      case 'add':
        submitName = 'Ajouter'
        break
      case 'edit':
        submitName = 'Editer'
        break
      default:
        submitName = 'Bug'
        break
    }

    return submitName
  }

  handleTaskFormSubmit= (e) => {
    e.preventDefault()
    switch (this.props.action) {
      case 'add':
        this.props.add(this.state)
        break
      case 'edit':
          this.props.edit(this.state)
        break
      default:
        break
    }
    this.setState({
      id: '',
      title: ''
    })
  }

  handleChange = (e) => {
    const itemToChange = e.target.name
    const newState = {
      [itemToChange]: e.target.value
    }
    this.setState({
      ...this.state,
      ...newState
    })
  }

  render () {
    return (
      <form onSubmit={this.handleTaskFormSubmit}>
        <label htmlFor="id">ID :
          <input id="id" type="text" value={this.state.id} name="id" onChange={this.handleChange}/> {this.state.id}
        </label> <br/>
        <label htmlFor="Title">Title :
          <input id="Title" type="text" value={this.state.title} name="title" onChange={this.handleChange}/>
        </label> <br/>
        <input type="submit" value={this.submitAction()}/>
      </form>
    )
  }
}