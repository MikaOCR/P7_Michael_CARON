import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/forum',
    name: 'Forum',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Forum.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
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
