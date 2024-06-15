<template>
  <div>
    <h2 v-if="sala">{{ sala.numSala }}</h2>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="goToHome">Início</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Salas</li>
      </ol>
    </nav>

    <div class="table-container" v-if="salas.length">
      <button class="nova-sala" @click="novaSala">Nova</button>
      <table class="salas-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Número da Sala</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr class="sala-row" v-for="(sala, index) in salas" :key="index">
            <td>{{ sala.id }}</td>
            <td>{{ sala.numSala }}</td>
            <td>
              <button @click="visualizarSala(sala.id)">Visualizar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <h3>Nenhuma sala cadastrada.</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSalas",
  props: {
    sala: {
      type: Object,
    },
  },
  data() {
    return {
      salas: [{ id: 1, numSala: "101" }],
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToSalas() {
      this.$router.push("/salas");
    },
    novaSala() {
      this.$router.push("/nova-sala");
    },
    editarSala(id) {
      this.$router.push(`/editar-sala/${id}`);
    },
    visualizarSala(sala) {
      this.$router.push({
        path: `/visualizar-sala/${sala.id}`,
        params: { sala: sala },
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
.nova-sala {
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

.salas-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.salas-table th,
.salas-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  font-size: 18px;
}

.salas-table th {
  background-color: #f2f2f2;
}

.sala-row {
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
