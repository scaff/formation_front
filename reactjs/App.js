class App extends React.Component {
  render () {
    return <TaskList taskList={props.taskList} />
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)