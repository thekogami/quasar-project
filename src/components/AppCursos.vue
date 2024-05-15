<template>
  <div>
    <h2 v-if="curso">{{ curso.nome }}</h2>
    <button class="novo-curso" @click="novoCurso">Novo</button>
    <button v-if="curso" @click="editarCurso(curso.id)">Editar</button>
    <button v-if="curso" @click="visualizarCurso(curso.id)">Visualizar</button>

    <div v-if="cursos.length">
      <h3>Cursos cadastrados:</h3>
      <ul>
        <li v-for="(curso, index) in cursos" :key="index">
          {{ curso.nome }}
        </li>
      </ul>
    </div>
    <div v-else>
      <h3>Nenhum curso cadastrado.</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCursos',
  props: {
    curso: {
      type: Object,
    }
  },
  data() {
    return {
      cursos: []
    }
  },
  methods: {
    novoCurso() {
      this.$router.push('/novo-curso');
    },
    editarCurso(id) {
      this.$router.push(`/editar-curso/${id}`);
    },
    visualizarCurso(id) { 
      this.$router.push(`/visualizar-curso/${id}`);
    }
  }
}
</script>

<style scoped>
.novo-curso {
  background-color: #6495ED;
  color: white;
  float: right;
  padding: 10px 20px; /* Aumenta o tamanho do botão */
  font-size: 16px; /* Aumenta o tamanho do texto */
  border-radius: 9px; /* Arredonda as pontas do botão */
  margin-right: 60px; /* Move o botão 60 pixels para a esquerda */
}
</style>