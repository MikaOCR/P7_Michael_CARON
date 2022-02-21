import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/accueil',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "SignIn" */ '../views/SignIn.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
