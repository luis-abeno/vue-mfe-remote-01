import { createRouter, createWebHistory } from 'vue-router'
import Remote01HomeView from '../views/Remote01HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'remote-01-home',
      component: Remote01HomeView,
      children: [
        {
          path: 'subroute01',
          name: 'subroute01',
          component: () => import('../views/Remote01SubrouteView.vue')
        }
      ]
    }
  ]
})

export default router
