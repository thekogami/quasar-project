<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-white"> Inicio </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-light-green"
    >
      <q-list>
        <q-item>
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section> Felipe </q-item-section>
        </q-item>

        <q-separator />

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />

        <q-space />

        <EssentialLink
          title="Sair"
          icon="exit_to_app"
          link="/logout"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Cursos",
    icon: "school",
    link: "/cursos", 
  },
  {
    title: "Professores",
    icon: "people", 
    link: '/professores', 
  },
  {
    title: "Disciplina",
    icon: "book",
    link: "/disciplina", 
  },
  {
    title: "Salas",
    icon: "location_on",
    link: "/salas",
  },
  {
    title: "Horario",
    icon: "schedule",
    link: "/horario",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
