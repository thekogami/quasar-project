<template>
  <div>
    <h2 v-if="gradeHoraria">
      {{ gradeHoraria.diaSemana }} - {{ gradeHoraria.horario }}
    </h2>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="goToHome">Início</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Grade Horária
        </li>
      </ol>
    </nav>

    <div class="table-container" v-if="gradeHorarias.length">
      <button class="nova-gradeHoraria" @click="novaGradeHoraria">Nova</button>
      <table class="gradeHorarias-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Dia da Semana</th>
            <th>Horário</th>
            <th>Sala</th>
            <th>Curso</th>
            <th>Disciplina</th>
            <th>Professor</th>
            <th>Turma</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="gradeHoraria-row"
            v-for="(gradeHoraria, index) in gradeHorarias"
            :key="index"
          >
            <td>{{ gradeHoraria.id }}</td>
            <td>{{ gradeHoraria.diaSemana }}</td>
            <td>{{ gradeHoraria.horario }}</td>
            <td>{{ gradeHoraria.sala }}</td>
            <td>{{ gradeHoraria.curso.nome }}</td>
            <td>{{ gradeHoraria.disciplina.nome }}</td>
            <td>{{ gradeHoraria.professor.nome }}</td>
            <td>{{ gradeHoraria.turma.nome }}</td>
            <td>
              <button @click="visualizarGradeHoraria(gradeHoraria.id)">
                Visualizar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <h3>Nenhuma grade horária cadastrada.</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppGradeHorarias",
  props: {
    gradeHoraria: {
      type: Object,
    },
  },
  data() {
    return {
      gradeHorarias: [
        {
          id: 1,
          diaSemana: "Segunda-feira",
          horario: "08:00",
          sala: "101",
          curso: { nome: "Engenharia" },
          disciplina: { nome: "Matemática" },
          professor: { nome: "Prof. Silva" },
          turma: { nome: "Turma A" },
        },
      ],
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToGradeHorarias() {
      this.$router.push("/gradeHorarias");
    },
    novaGradeHoraria() {
      this.$router.push("/nova-gradeHoraria");
    },
    editarGradeHoraria(id) {
      this.$router.push(`/editar-gradeHoraria/${id}`);
    },
    visualizarGradeHoraria(gradeHoraria) {
      this.$router.push({
        path: `/visualizar-gradeHoraria/${gradeHoraria.id}`,
        params: { gradeHoraria: gradeHoraria },
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
.nova-gradeHoraria {
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

.gradeHorarias-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.gradeHorarias-table th,
.gradeHorarias-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  font-size: 18px;
}

.gradeHorarias-table th {
  background-color: #f2f2f2;
}

.gradeHoraria-row {
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
