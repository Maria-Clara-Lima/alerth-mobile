import { createRouter, createWebHistory } from 'vue-router';
import Inicial from '../pages/Inicial.vue';

const routes = [
  {
    path: '/',
    name: 'Inicial',
    component: Inicial,
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
