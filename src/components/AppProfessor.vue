<template>
  <div>
    <h2 v-if="professor">{{ professor.nome }}</h2>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="goToHome">Início</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Professores</li>
      </ol>
    </nav>

    <div class="table-container" v-if="professores.length">
      <button class="novo-professor" @click="novoProfessor">Novo</button>
      <table class="professores-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="professor-row"
            v-for="(professor, index) in professores"
            :key="index"
          >
            <td>{{ professor.id }}</td>
            <td>{{ professor.nome }}</td>
            <td>
              <button @click="visualizarProfessor(professor.id)">
                Visualizar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <h3>Nenhum professor cadastrado.</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppProfessores",
  props: {
    professor: {
      type: Object,
    },
  },
  data() {
    return {
      professores: [{ id: 1, nome: "Leandrim" }],
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToProfessores() {
      this.$router.push("/professores");
    },
    novoProfessor() {
      this.$router.push("/novo-professor");
    },
    editarProfessor(id) {
      this.$router.push(`/editar-professor/${id}`);
    },
    visualizarProfessor(professor) {
      this.$router.push({
        path: `/visualizar-professor/${professor.id}`,
        params: { professor: professor },
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
.novo-professor {
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

.professores-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.professores-table th,
.professores-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  font-size: 18px;
}

.professores-table th {
  background-color: #f2f2f2;
}

.professor-row {
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
