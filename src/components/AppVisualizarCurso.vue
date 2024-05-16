<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#" @click.prevent="goToHome">Início</a></li>
        <li class="breadcrumb-item"><a href="#" @click.prevent="goToCursos">Cursos</a></li>
        <li class="breadcrumb-item active" aria-current="page">{{ curso.nome }}</li>
      </ol>
    </nav>
    <h2>{{ curso.nome }}</h2>
    <table>
      <tr>
        <th>ID do Curso:</th>
        <td>{{ curso.id }}</td>
      </tr>
      <tr>
        <th>Nome do Curso:</th>
        <td>{{ curso.nome }}</td>
      </tr>
      <tr>
        <th>Última Atualização:</th>
        <td>{{ curso.dataUltimaAtualizacao }}</td>
      </tr>
    </table>
    <button @click="editarCurso(curso.id)">Editar</button>
    <button @click="goToCursos">Voltar</button>
  </div>
</template>

<script>
export default {
  name: 'AppVisualizarCurso',
  data() {
    return {
      curso: this.$route.params.curso || {},
    };
  },
  methods: {
    goToHome() {
      this.$router.push('/');
    },
    goToCursos() {
      this.$router.push('/cursos');
    },
    editarCurso(id) {
      this.$router.push(`/editar-curso/${id}`);
    },
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

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table th, table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  font-size: 18px;
}

table th {
  background-color: #f2f2f2;
}
</style>