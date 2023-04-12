import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './views/Home.vue'
import GigIndex from './views/GigIndex.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/explore',
    name: 'GigIndex',
    component: GigIndex
  },
]

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 150,
      }
    }
  },
})