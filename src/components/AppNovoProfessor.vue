<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="goToHome">Início</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#" @click.prevent="goToProfessores">Professores</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          Novo Professor
        </li>
      </ol>
    </nav>
    <label for="nome" class="label-nome">Nome do professor: </label>
    <input id="nome" v-model="nome" type="text" placeholder="Informe o nome" />
    <label for="sobrenome" class="label-sobrenome"
      >Sobrenome do professor:
    </label>
    <input
      id="sobrenome"
      v-model="sobrenome"
      type="text"
      placeholder="Informe o sobrenome"
    />
    <label for="email" class="label-email">Email do professor: </label>
    <input
      id="email"
      v-model="email"
      type="text"
      placeholder="Informe o email"
    />
    <div class="button-group">
      <button class="cancelar" @click="cancelar">Cancelar</button>
      <button class="salvar" @click="salvar">Salvar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AppNovoProfessor",
  data() {
    return {
      nome: "",
      sobrenome: "",
      email: "",
    };
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    goToProfessores() {
      this.$router.push("/professores");
    },
    cancelar() {
      this.$router.push("/professores");
    },
    salvar() {
      axios
        .post("http://localhost:8080/inicio/professores/novo-professor", {
          nome: this.nome,
          sobrenome: this.sobrenome,
          email: this.email,
        })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/professores"); // Alterado para redirecionar para a lista de professores
        })
        .catch((error) => {
          console.error(error);
        });
    },
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

.label-nome,
.label-sobrenome,
.label-email {
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
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
  margin-top: 10px;
}

.button-group > * {
  margin-right: 1cm;
}

.button-group > *:last-child {
  margin-right: 0;
}

.salvar,
.cancelar {
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
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
