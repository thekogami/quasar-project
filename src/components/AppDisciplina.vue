<template>
  <div>
    <h2 v-if="disciplina">{{ disciplina.nome }}</h2>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="goToHome">Início</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Disciplinas</li>
      </ol>
    </nav>

    <div class="table-container" v-if="disciplinas.length">
      <button class="nova-disciplina" @click="novaDisciplina">Nova</button>
      <table class="disciplinas-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="disciplina-row"
            v-for="(disciplina, index) in disciplinas"
            :key="index"
          >
            <td>{{ disciplina.id }}</td>
            <td>{{ disciplina.nome }}</td>
            <td>
              <button @click="visualizarDisciplina(disciplina.id)">
                Visualizar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <h3>Nenhuma disciplina cadastrada.</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppDisciplinas",
  props: {
    disciplina: {
      type: Object,
    },
  },
  data() {
    return {
      disciplinas: [{ id: 1, nome: "Matemática" }],
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToDisciplinas() {
      this.$router.push("/disciplinas");
    },
    novaDisciplina() {
      this.$router.push("/nova-disciplina");
    },
    editarDisciplina(id) {
      this.$router.push(`/editar-disciplina/${id}`);
    },
    visualizarDisciplina(disciplina) {
      this.$router.push({
        path: `/visualizar-disciplina/${disciplina.id}`,
        params: { disciplina: disciplina },
      });
    },
    async fetchData() {
      console.log("Recarregando dados...");
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
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
};
</script>

<style scoped>
.nova-disciplina {
  background-color: #6495ed;
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

.disciplinas-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.disciplinas-table th,
.disciplinas-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  font-size: 18px;
}

.disciplinas-table th {
  background-color: #f2f2f2;
}

.disciplina-row {
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
