<template>
  <div>
    <h2>{{ turma.turmaNome }}</h2>
  </div>
</template>

<script>
export default {
  name: 'AppTurma',
  props: {
    turma: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>