import { createRouter, createWebHashHistory } from 'vue-router'
import store from "../store/index";


const routes = [
  {
    path: '/forum',
    name: 'Forum',
    meta: { requiredAuth: false },
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

export const routeConfig = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

routeConfig.beforeEach((to,from, next) => {
  console.log(store.getters["auth/getAuthData"].token);
  if(!store.getters["auth/getAuthData"].token){
      const access_token = localStorage.getItem("access_token");
      const refresh_token = localStorage.getItem("refresh_token");
      if(access_token){
          const data = {
              access_token:access_token,
              refresh_token:refresh_token
          };
          store.commit('auth/saveTokenData',data);
      }
  }
  const auth = store.getters["auth/isTokenActive"];

  if(to.fullPath == "/"){
      return next();
  }
  else if(auth && !to.meta.requiredAuth){
      return next({path:"/profil"});
  }
  else if(!auth && to.meta.requiredAuth){
      return next({path: '/login'});
  }

  return next();
});

export default router
