import axios from 'axios'

export default {
  getAll () {
    return axios
      .get('http://localhost:8080/task')
      .then(({ data }) => data)
  },
  add (task) {
    return axios
      .post('http://localhost:8080/task', task)
      .then(({ data }) => data)
  }
}