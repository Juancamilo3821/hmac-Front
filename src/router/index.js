import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '../views/homePage.vue')
    },
    {
      path: '/Leydetransparencia',
      name: 'Leydetransparencia',
      component: () => import(/* webpackChunkName: "about" */ '../views/leyDeTransparencia.vue')
    },
    {
        path: '/Leydetransparencia',
        name: 'Leydetransparencia',
        component: () => import(/* webpackChunkName: "about" */ '../views/leyDeTransparencia.vue')
      },
      {
        path: '/QuienesSomos',
        name: 'QuienesSomos',
        component: () => import(/* webpackChunkName: "about" */ '../views/quienesSomos.vue')
      },
      {
        path: '/Afiliados',
        name: 'Afiliados',
        component: () => import(/* webpackChunkName: "about" */ '../views/afiliadosPage.vue')
      },
      {
        path: '/IniciarSesion',
        name: 'IniciarSesion',
        component: () => import(/* webpackChunkName: "about" */ '../views/iniciarSesion.vue')
      },
      {
        path: '/Registrarse',
        name: 'Registrarse',
        component: () => import(/* webpackChunkName: "about" */ '../views/registrarsePage.vue')
      },
      {
        path: '/CatalogodeServicios',
        name: 'CatalogodeServicios',
        component: () => import(/* webpackChunkName: "about" */ '../views/catalogoDeServicios.vue')
      },
      {
        path: '/Precios',
        name: 'Precios',
        component: () => import(/* webpackChunkName: "about" */ '../views/preciosPage.vue')
      },
      {
        path: '/TiendaNaturista',
        name: 'TiendaNaturista',
        component: () => import(/* webpackChunkName: "about" */ '../views/tiendaNaturista.vue')
      },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: 'history',
  })
  
  export default router
