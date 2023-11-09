import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VBindView from '../views/VBindView.vue'
import VForView from '../views/VForView.vue'
import VIfView from '../views/VIfView.vue'
import VOnView from '../views/VOnView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/v-bind',
      name: 'V-Bind',
      component: VBindView
    },
    {
      path: '/v-for',
      name: 'V-For',
      component: VForView
    },
    {
      path: '/v-if',
      name: 'V-If',
      component: VIfView
    },
    {
      path: '/v-on',
      name: 'V-On',
      component: VOnView
    }
  ]
})

export default router
