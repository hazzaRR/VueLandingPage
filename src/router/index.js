import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import NotFoundPage from '../views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,
  },
  { 
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFoundPage,
  } 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router