<!-- AppVisualizarCurso.vue -->
<template>
  <div>
    <h2>{{ curso.nome }}</h2>
    <p>ID: {{ curso.id }}</p>
    <p>Data da Última Atualização: {{ curso.dataUltimaAtualizacao }}</p>
    <button @click="editarCurso(curso.id)">Editar</button>
  </div>
</template>

<script>
export default {
  name: 'AppVisualizarCurso',
  data() {
    return {
      curso: {
        id: '',
        nome: '',
        dataUltimaAtualizacao: ''
      }
    }
  },
  methods: {
    editarCurso(id) {
      this.$router.push(`/editar-curso/${id}`);
    }
  },
  created() {
    const id = this.$route.params.id;
    // Carregue os dados do curso usando o id
    // Por exemplo, se você estiver usando o Vuex, você pode fazer algo assim:
    // this.curso = this.$store.dispatch('loadCurso', id);
  }
}
</script>

<style scoped>
</style>