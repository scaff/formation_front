<template>
  <li 
    :id="`task_${taskObject.id}`"
    class="task"
    :class="{ isDone: taskObject.isDone }">

      <input 
        type="checkbox" 
        v-model="taskObject.isDone"
      />

      {{ taskObject.title }}

      <input type="button" value="Editer" @click="selectTaskToEdit">
      <input type="button" value="Supprimer"  @click="selectTaskToDelete">
    </li>
</template>

<script>
export default {
  name: 'task',
  props: [ 'taskObject' ],
  watch: {
    taskObject: {
      handler: function (oldValue, newValue) {
      },
      deep: true,
    } 
  },
  methods: {
    selectTaskToEdit () {
      this.$emit('selectTaskToEdit', { ...this.taskObject })
    },
    selectTaskToDelete () {
      this.$emit('selectTaskToDelete', { ...this.taskObject })
    }
  }
}
</script>

<style scoped>
  .isDone {
    text-decoration: line-through;
    color: grey;
  }
</style>
