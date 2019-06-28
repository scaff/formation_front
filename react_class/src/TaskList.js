import React from 'react'
import Task from './Task'
import TaskForm from './TaskForm'
import './TaskList.css'

export default class TaskList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      taskList: [
        { id: '1', title: 'test' },
        { id: '2', title: 'autre' }
      ],
      currentTask: {
        id: '',
        title: '',
        isDone: false
      },
      currentAction: 'add'
    }
  }

  handleChange = (e) => {
    this.setState({
      isDone: e.target.checked
    })
  }

  toggleTaskStatus = (taskToToggle) => () => {
    const newTaskList = this.state.taskList.map((task) => {
      let isDone
      if (taskToToggle.id === task.id) {
        isDone = !task.isDone
      } else {
        isDone = task.isDone
      }
      return {
        ...task,
        isDone
      }
    })

    this.setState({
      taskList: newTaskList
    })
  }

  addTask = (taskToAdd) => {
    const newTaskList = [ ...this.state.taskList, taskToAdd ]
    this.setState({
      taskList: newTaskList,
    })
  }

  editTask = (taskToEdit) => {
    const newTaskList = this.state.taskList.map((task) => {
      let id, title
      if (taskToEdit.id === task.id) {
        id = taskToEdit.id
        title = taskToEdit.title
      } else {
        id = task.id
        title = task.title
      }
      return {
        ...task,
        id,
        title
      }
    })
    this.setState({
      taskList: newTaskList
    })
  }

  render () {
    const taskElemList = this.state.taskList.map((task, id) => {
      return <Task task={task} key={id} toggleTaskStatus={this.toggleTaskStatus(task)}/>
    })
    return (
      <div>
        <ul>{taskElemList}</ul>
        <TaskForm
          task={this.state.currentTask}
          action={this.state.currentAction}
          add={this.addTask}
          edit={this.editTask}/>
      </div>
    )
  }
}
