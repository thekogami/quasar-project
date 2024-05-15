<template>
  <div>
    <h2>{{ disciplina.nome }}</h2>
    <p v-if="disciplina.professor">Professor: {{ disciplina.professor.nome }}</p>
  </div>
</template>

<script>
export default {
  name: 'AppDisciplina',
  props: {
    disciplina: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
</style>