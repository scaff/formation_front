<template>
  <div id="app">
    <span v-if="error" class="error">{{ error }}</span>
    <h2>Task list</h2>
    <ul>
      <task
        v-for="task in tasks"
        :key="task.id"
        :task-object="task"
        @selectTaskToEdit="fillForm"
        @selectTaskToDelete="deleteTask"
      />
    </ul>

    <task-form 
      :task="currentTask"
      :action="formAction"
      @addTask="addTask"
      @editTask="editTask"
    />
    <br>

    Nombre de tâches effectuées : {{ doneTasks.length }}<br>
    Nombre de tâches restantes : {{ todoTasks.length }}<br>
    Nombre de tâches totale : {{ tasks.length }}<br>

    <hr>
    <h2>Date picker</h2>
    <date-input format="DD MMMM YYYY" v-model="selectedDay"></date-input>
  </div>
</template>

<script>
import Task from './components/Task.vue'
import TaskForm from './components/TaskForm.vue'
import DateInput from './components/DateInput.vue'
import TaskFactory from './factory/task'

export default {
 components: {
    Task,
    TaskForm,
    DateInput
  },
  props: [ 'monProp' ],
  data () {
    return {
      tasks: [],
      currentTask: {
        title: '',
        description: ''
      },
      formAction: 'add',
      selectedDay: {},
      error: null
    }
  },
  mounted () {
    TaskFactory.getAll()
    .then((tasksList) => {
      this.tasks = tasksList
    })
  },
  methods: {
    addTask (taskToAdd) {
      TaskFactory.add(taskToAdd)
      .then(({ taskInserted }) => {
        this.tasks.push(taskToAdd)
        this.currentTask = {}
      })
      .catch((err) => {
        console.log(err)
        this.error = err.message
      })
    },
    editTask (taskToEdit) {
      const taskIdToEdit = this.tasks.findIndex((task) => taskToEdit.id === task.id)
      this.tasks[taskIdToEdit] = taskToEdit
      this.currentTask = {}
      this.formAction = 'add'
    },
    deleteTask (taskToDelete) {
      const taskIdToDelete = this.tasks.findIndex((task) => taskToDelete.id === task.id)
      this.tasks.splice(taskIdToDelete, 1)
    },
    fillForm (taskToEdit) {
      this.formAction = 'edit'
      this.currentTask = taskToEdit
    }
  },
  computed: {
    doneTasks () {
      return this.tasks.filter((task) => task.isDone)
    },
    todoTasks () {
      return this.tasks.filter((task) => !task.isDone)
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.error {
  padding: 20px 10px;
  color: red;
  border: 1px solid red;
}
</style>
