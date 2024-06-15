<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="goToHome">Início</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="goToCursos">Cursos</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ curso.nome }}
        </li>
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
    <div class="button-group">
      <button class="editar" @click="editarCurso(curso.id)">Editar</button>
      <button class="excluir" @click="excluirCurso(curso.id)">Excluir</button>
      <button class="voltar" @click="goToCursos">Voltar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppVisualizarCurso",
  data() {
    return {
      curso: this.$route.params.curso || {},
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToCursos() {
      this.$router.push("/cursos");
    },
    editarCurso(id) {
      this.$router.push(`/editar-curso/${id}`);
    },
    excluirCurso(id) {
      // Aqui você pode adicionar a lógica para excluir o curso
    },
  },
  created() {
    const id = this.$route.params.id;
    this.$store
      .dispatch("loadCurso", id)
      .then((curso) => {
        this.curso = curso;
      })
      .catch((error) => {
        console.error("Failed to load course:", error);
      });
  },
};
</script>

<style scoped>
.excluir {
  background-color: #ff3b30;
}

.button-group {
  display: flex;
  justify-content: flex-start;
  margin-top: 5px;
}

.button-group > * {
  margin-right: 1cm; /* Adiciona uma margem à direita de 2cm a cada botão */
}

.button-group > *:last-child {
  margin-right: 0; /* Remove a margem à direita do último botão */
}

.excluir,
.editar,
.voltar {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 9px;
  border: none;
  color: white;
  cursor: pointer;
}

.editar {
  background-color: #007aff;
}

.excluir {
  background-color: #ff3b30;
}

.voltar {
  background-color: #a3a3a3;
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

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table th,
table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  font-size: 18px;
}

table th {
  background-color: #f2f2f2;
}
</style>
