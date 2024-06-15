<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="goToHome">Início</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="goToCursos">Cursos</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Editar Curso</li>
      </ol>
    </nav>
    <label for="nome" class="label-nome">Nome do curso: </label>
    <input id="nome" v-model="nome" type="text" placeholder="Informe o nome" />
    <div class="button-group">
      <button class="cancelar" @click="cancelar">Cancelar</button>
      <button class="salvar" @click="salvar">Salvar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppEditarCurso",
  data() {
    return {
      nome: "",
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToCursos() {
      this.$router.push("/cursos");
    },
    cancelar() {
      this.$router.push("/cursos");
    },
    salvar() {
      // Aqui você pode adicionar a lógica para salvar as alterações do curso
    },
  },
  created() {
    // Aqui você pode adicionar a lógica para carregar os dados do curso
    // baseado no ID da rota
    const id = this.$route.params.id;
    // Carregue os dados do curso usando o id
    // Por exemplo, se você estiver usando o Vuex, você pode fazer algo assim:
    // this.$store.dispatch('loadCurso', id);
  },
};
</script>

<style scoped>
.container {
  font-family: "San Francisco", sans-serif;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
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

.label-nome {
  font-weight: bold;
  font-size: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
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

.salvar,
.cancelar {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 9px;
  border: none;
  color: white;
  cursor: pointer;
}

.salvar {
  background-color: #007aff;
}

.cancelar {
  background-color: #a3a3a3;
}
</style>
