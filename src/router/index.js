import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/homePage.vue')
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: 'history',
  })
  
  export default router
