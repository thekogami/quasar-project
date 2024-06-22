// routes.js
import AppCursos from 'components/AppCursos.vue';
import AppProfessores from 'components/AppProfessor.vue';
import AppDisciplina from 'components/AppDisciplina.vue';
import AppSalas from 'components/AppSala.vue';
import AppHorario from 'components/AppGradeHoraria.vue';
import AppEditarCurso from 'components/AppEditarCurso.vue';
import AppVisualizarCurso from 'components/AppVisualizarCurso.vue';
import AppNovoCurso from 'src/components/AppNovoCurso.vue';
import AppTurma from 'components/AppTurma.vue';
import AppNovoProfessor from 'components/AppNovoProfessor.vue';
import AppNovaSala from 'src/components/AppNovaSala.vue';


const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/cursos', component: AppCursos },
      { path: '/professores', component: AppProfessores },
      { path: '/disciplina', component: AppDisciplina },
      { path: '/salas', component: AppSalas },
      { path: '/horario', component: AppHorario },
      { path: '/editar-curso/:id', component: AppEditarCurso },
      { path: '/visualizar-curso/:id', component: AppVisualizarCurso },
      { path: '/novo-curso', component: AppNovoCurso },
      { path: '/editar-curso', component: AppEditarCurso },
      { path: '/editar-professor', component: AppProfessores },
      { path: '/editar-disciplina', component: AppDisciplina },
      { path: '/editar-sala', component: AppSalas },
      { path: '/editar-horario', component: AppHorario },
      { path: '/turma', component: AppTurma },
      { path: '/novo-professor', component: AppNovoProfessor },
      { path: '/nova-sala', component: AppNovaSala },
    ]
  },
 
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes