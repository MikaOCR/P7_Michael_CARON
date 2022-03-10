import { createRouter, createWebHashHistory } from 'vue-router'
/* import store from "../store/index"; */


const routes = [
  {
    path: '/forum',
    name: 'Forum',
    meta: { requiredAuth: true },
    component: () => import(/* webpackChunkName: "Home" */ '../views/Forum.vue')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { requiredAuth: false },
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { requiredAuth: false },
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: "/profil",
    name: "UserProfile",
    meta: { requiredAuth: true },
    component: () => import(/* webpackChunkName: "UserProfile" */ '../views/UserProfile.vue')
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = sessionStorage.getItem('userAuth');
  const isAuth = to.matched.some((record) => record.meta.requiredAuth);
  const isHide = to.matched.some((record) => record.meta.hideForAuth);

  if (isAuth && !loggedIn) {
    return next({ path: "/login" });
  } else if (isHide && loggedIn) {
    return next({ path: "/" });
  }
  next();
});

export default router
