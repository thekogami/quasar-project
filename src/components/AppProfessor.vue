<template>
  <div>
    <h2 v-if="professor">{{ professor.nome }}</h2>
    <button class="novo-professor" @click="novoProfessor">Novo</button>
    <button v-if="professor" @click="editarProfessor(professor.id)">Editar</button>
    <button v-if="professor" @click="visualizarProfessor(professor.id)">Visualizar</button>

    <div v-if="professores.length">
      <h3>Professores cadastrados:</h3>
      <ul>
        <li v-for="(professor, index) in professores" :key="index">
          {{ professor.nome }}
        </li>
      </ul>
    </div>
    <div v-else>
      <h3>Nenhum professor cadastrado.</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppProfessor',
  props: {
    professor: {
      type: Object,
    }
  },
  data() {
    return {
      professores: []
    }
  },
  methods: {
    novoProfessor() {
      this.$router.push('/novo-professor');
    },
    editarProfessor(id) {
      this.$router.push(`/editar-professor/${id}`);
    },
    visualizarProfessor(id) { 
      this.$router.push(`/visualizar-professor/${id}`);
    },
    async fetchData() {
      // Implemente a lógica para recarregar os dados aqui
      console.log("Recarregando dados...");
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // Recarregar os dados aqui
      vm.fetchData();
    });
  },
  beforeRouteUpdate(to, from, next) {
    // Recarregar os dados aqui
    this.fetchData();
    next();
  },
  created() {
    this.fetchData();
  },
}
</script>

<style scoped>
.novo-professor {
  background-color: #6495ED;
  color: white;
  float: right;
  padding: 10px 20px; /* Aumenta o tamanho do botão */
  font-size: 16px; /* Aumenta o tamanho do texto */
  border-radius: 9px; /* Arredonda as pontas do botão */
  margin-right: 60px; /* Move o botão 60 pixels para a esquerda */
}
</style>