import { createRouter, createWebHashHistory } from 'vue-router'
/* import store from "../store/index"; */


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
  },
  {
    path: "/profil/:id",
    name: "UserProfile",
    component: () => import(/* webpackChunkName: "UserProfile" */ '../views/UserProfile.vue')
  },
  {
    path: "/forum/edition/:id",
    name: "Edition",
    component: () => import(/* webpackChunkName: "UserProfile" */ '../views/Edition.vue')
  },
  {
    path: "/admin/users",
    name: "AdminTab",
    component: () => import(/* webpackChunkName: "UserProfile" */ '../views/AdminTab.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/* router.beforeEach((to, from, next) => {
  const loggedIn = sessionStorage.getItem('token');
  const isAuth = to.matched.some((record) => record.meta.requiredAuth);
  const isHide = to.matched.some((record) => record.meta.hideForAuth);

  if (isAuth && !loggedIn) {
    return next({ path: "/login" });
  } else if (isHide && loggedIn) {
    return next({ path: "/" });
  }
  next();
});
 */

export default router
