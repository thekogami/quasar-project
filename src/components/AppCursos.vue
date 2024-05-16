<template>
  <div>
    <h2 v-if="curso">{{ curso.nome }}</h2>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#" @click.prevent="goToHome">Início</a></li>
        <li class="breadcrumb-item active" aria-current="page">Cursos</li>
      </ol>
    </nav>

    <div class="table-container" v-if="cursos.length">
      <button class="novo-curso" @click="novoCurso">Novo</button>
      <table class="cursos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr class="curso-row" v-for="(curso, index) in cursos" :key="index">
            <td>{{ curso.id }}</td>
            <td>{{ curso.nome }}</td>
            <td>
              <button @click="visualizarCurso(curso.id)">Visualizar</button>
            </td>
          </tr>
        </tbody>
      </table>
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
      cursos: [
        { id: 1, nome: 'Bacharelado em Engenharia de Software' },
        { id: 2, nome: 'Bacharelado em Sistemas de Informação' }
      ]
    }
  },
  methods: {
    goToHome() {
      this.$router.push('/');
    },
    goToCursos() {
      this.$router.push('/cursos');
    },
    novoCurso() {
      this.$router.push('/novo-curso');
    },
    editarCurso(id) {
      this.$router.push(`/editar-curso/${id}`);
    },
    visualizarCurso(curso) { 
      this.$router.push({ path: `/visualizar-curso/${curso.id}`, params: { curso: curso } });
    },
    async fetchData() {
      console.log("Recarregando dados...");
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fetchData();
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData();
    next();
  },
  created() {
    this.fetchData();
  },
}
</script>

<style scoped>
.novo-curso {
  background-color: #6495ED;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 9px;
  margin-bottom: 10px;
}

.table-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.cursos-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.cursos-table th, .cursos-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  font-size: 18px;
}

.cursos-table th {
  background-color: #f2f2f2;
}

.curso-row {
  background-color: #f2f2f2;
}

.breadcrumb {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  font-size: 13px;
  color: #8e8e93;
}

.breadcrumb-item {
  margin-right: 5px;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
  padding: 0 5px;
  color: #8e8e93;
}

.breadcrumb-item a {
  color: #8e8e93;
  text-decoration: none;
}

.breadcrumb-item a:hover {
  text-decoration: underline;
}
</style>