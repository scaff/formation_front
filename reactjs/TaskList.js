class TaskList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      taskList: []
    }
  }

  render () {
    const taskElemList = this.state.taskList.map((task) => <Task task={task}/>)
    return (
      <ul>{taskElemList}</ul>
    )
  }
}