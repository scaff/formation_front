<template>
  <form  @submit.prevent="submitHandler">
    <label for="id"> ID :
      <input type="text" id="id" v-model="task.id">
    </label> <br>
    <label for="title"> Titre :
      <input type="text" id="title" v-model="task.title">
    </label> <br>
    <label for="description"> Descrition :
      <input type="text" id="description" v-model="task.description">
    </label> <br>
    <input type="submit" :value="submitLabel">
  </form>
</template>

<script>
export default {
  props: {
    task: Object,
    action: String
  },
  methods: {
    submitHandler () {
      // emettra l'event addTask ou editTask
      this.$emit(`${this.action}Task`, { ...this.task })
    }
  },
  computed: {
    submitLabel () {
      switch(this.action) {
        case 'add':
          return 'Ajouter la tâche'
          break;
        case 'edit':
          return 'Editer la tâche'
          break;
      }
    }
  }
}
</script>

