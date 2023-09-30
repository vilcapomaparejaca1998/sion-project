import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../components/Index_Page/Home.vue'

const routes = [
  {
    path: '/', component: Home
  }
]

const routerHistory = createWebHashHistory();
const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: routes
});

export default router