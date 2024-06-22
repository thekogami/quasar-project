<template>
  <div>
    <h2 v-if="turma">{{ turma.turmaNome }}</h2>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="goToHome">Início</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Turmas</li>
      </ol>
    </nav>

    <div class="table-container">
      <button class="nova-turma" @click="novaTurma">Nova</button>
      <table class="turmas-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome da Turma</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="turma">
            <td>{{ turma.id }}</td>
            <td>{{ turma.turmaNome }}</td>
            <td>
              <button @click="visualizarTurma(turma.id)">Visualizar</button>
            </td>
          </tr>
          <tr v-else>
            <td colspan="3">Nenhuma turma selecionada.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTurma",
  props: {
    turma: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    novaTurma() {
      this.$router.push("/nova-turma");
    },
    visualizarTurma(id) {
      this.$router.push(`/visualizar-turma/${id}`);
    },
  },
};
</script>

<style scoped>
.nova-turma {
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

.turmas-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.turmas-table th,
.turmas-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  font-size: 18px;
}

.turmas-table th {
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
