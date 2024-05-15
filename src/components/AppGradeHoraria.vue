<template>
  <div>
    <h2>{{ gradeHoraria?.diaSemana }} - {{ gradeHoraria?.horario }}</h2>
    <p>Sala: {{ gradeHoraria.sala }}</p>
    <p>Curso: {{ gradeHoraria.curso.nome }}</p>
    <p>Disciplina: {{ gradeHoraria.disciplina.nome }}</p>
    <p>Professor: {{ gradeHoraria.professor.nome }}</p>
    <p>Turma: {{ gradeHoraria.turma.nome }}</p>
  </div>
</template>

<script>
export default {
  name: 'AppGradeHoraria',
  props: {
    gradeHoraria: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>