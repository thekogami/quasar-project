<!-- AppEditarCurso.vue -->
<template>
  <div>
    <label for="nome">Informe o nome:</label>
    <input id="nome" v-model="nome" type="text">
    <button @click="cancelar">Cancelar</button>
    <button @click="salvar">Salvar</button>
  </div>
</template>

<script>
export default {
  name: 'AppEditarCurso',
  data() {
    return {
      nome: '' // O nome do curso será carregado aqui
    }
  },
  methods: {
    cancelar() {
      this.$router.push('/cursos');
    },
    salvar() {
      // Aqui você pode adicionar a lógica para salvar as alterações do curso
    }
  },
  created() {
    // Aqui você pode adicionar a lógica para carregar os dados do curso
    // baseado no ID da rota
    const id = this.$route.params.id;
    // Carregue os dados do curso usando o id
    // Por exemplo, se você estiver usando o Vuex, você pode fazer algo assim:
    // this.$store.dispatch('loadCurso', id);
  }
}
</script>

<style scoped>
</style>