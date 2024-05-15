<template>
  <div>
    <h2>{{ professor.nome }}</h2>
  </div>
</template>

<script>
export default {
  name: 'AppProfessor',
  props: {
    professor: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>