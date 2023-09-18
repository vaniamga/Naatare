import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Bebe',
      name: 'Bebe',
      component: () => import('../views/BebeView.vue')
    },
    {
      path: '/Adultos',
      name: 'Adultos',
      component: () => import('../views/AdultosView.vue')
    },
    {
      path: '/Ninos',
      name: 'Ninos',
      component: () => import('../views/NinosView.vue')
    },
  ]
})

export default router