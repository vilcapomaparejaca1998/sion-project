import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './components/Index_Page/Products.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/products',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router