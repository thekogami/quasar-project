<template>
  <div class="container">
    <label for="nome" class="label-nome">Nome </label>
    <input id="nome" v-model="nome" type="text" placeholder="Informe o nome">
    <div class="button-group">
      <button class="cancelar" @click="cancelar">Cancelar</button>
      <button class="salvar" @click="salvar">Salvar</button>
      <button class="excluir" @click="excluir">Excluir</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNovoCurso',
  data() {
    return {
      nome: ''
    }
  },
  methods: {
    cancelar() {
      this.$router.push('/cursos');
    },
    salvar() {
      // Aqui você pode adicionar a lógica para salvar o novo curso
    },
    excluir() {
      // Aqui você pode adicionar a lógica para excluir o curso
    }
  }
}
</script>

<style scoped>
.container {
  font-family: 'San Francisco', sans-serif;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.label-nome {
  font-weight: bold; /* Faz a palavra "Nome" aparecer em negrito */
  font-size: 20px; /* Faz a palavra "Nome" aparecer maior */
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.salvar, .cancelar, .excluir {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 9px;
  border: none;
  color: white;
  cursor: pointer;
}

.salvar {
  background-color: #007AFF;
}

.cancelar {
  background-color: #A3A3A3;
}

.excluir {
  background-color: #FF3B30;
}
</style>