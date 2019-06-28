class Task extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <li> <input type="checkbox" /> { props.task.title }</li>
  }
}