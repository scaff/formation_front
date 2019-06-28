const dbPromise = sqlite.open('./db.sqlite', { Promise })

module.exports = {
  getById,
  getAll,
  addTask,
  updateTask,
  deleteTask
}

function getById (req, res) {
  
}

function getAll (req, res) {
  
}

function addTask (req, res) {
  const { title, description, state } = req.body
  dbPromise
  .then((db) => {
    return db.run(`INSERT INTO tasks (title, description, state) VALUES ("${title}", "${description}", "${state}");`)
  })
  .then((result) => {
    console.log(result)
    res.json(result)
  })
  .catch(console.log)
}

function updateTask (req, res) {
  
}

function deleteTask (req, res) {
  
}