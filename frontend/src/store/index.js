import { createStore } from 'vuex';
import authModule from './modules/auth';
/* import axios from 'axios'; */

/* const getDefaultState = () => {
  return {
    token:'',
    user: {}
  };
};

export default createStore({
  strict: true,
  state: getDefaultState(),

  getters: {
    isLoggedIn: state => {
      return state.token;
    },
    getUser: state => {
      return state.user;
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    RESET: state => {
      Object.assign(state, getDefaultState());
    }
  },
  actions: {
    login: ({ commit }, { token, user }) => {
      commit('SET_TOKEN', token);
      commit('SET_USER', user);

      // set auth header
      Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    logout: ({ commit }) => {
      commit('RESET', '');
    },
    forceRerender(){
      this.listComponent +=1;
    }
  },
  modules: {

  }
}) */

export default createStore({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    auth:authModule
  }
})