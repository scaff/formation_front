const express = require('express')
const sqlite = require('sqlite')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = 8080

const taskList = [
  {
    id: 1,
    title: 'Ma première tâche',
    description: 'Ma description',
    isDone: true
  }
]

app.use(cors())
app.use(bodyParser.json())
app.use('/tasks', function (req, res, next) {
  dbPromise
  .then((db) => {
    return db.run('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, title VARCHAR(255), description TEXT, state INTEGER);')
  })
  .then((result) => {
    console.log(result)
    console.log('Requête executée')
    return next()
  })
  .catch(console.log)
})

app.get('/', function (req, res) {
  console.log('GET /')
  res.status(200).json({
    message: 'Hello world !'
  })
})

app.get('/task', function (req, res) {
  res.json(taskList)
})

app.post('/tasks', function (req, res) {
  console.log('POST /task', req.body)

  const { id, title, description } = req.body

  taskList.push({ id, title, description })
  res.json({ inserted: 1, taskInserted: { id, title, description } })
})

app.listen(port, initServer)

function initServer () {
  console.log(`Ecoute sur le port ${port}`)
}