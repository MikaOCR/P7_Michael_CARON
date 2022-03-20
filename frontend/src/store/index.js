import axios from 'axios';
import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import {auth} from './auth';

export default createStore({
  strict: true,
  state: {
    posts: [],
    onePost: [],
  },
  getters: {
    allPosts: (state) => state.posts,
    onePost: (state) => state.onePost
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    SET_ONE_POST(state, onePost) {
      state.onePost = onePost
    }
  },
  actions: {
    getPosts({ commit }) {
      axios.get('/forum').then(response => { commit('SET_POSTS', response.data) }).catch(error => console.log(error));
    },
    getOnePost({ commit }) {
      axios.get('/edition/' + this.$route.params.id).then(response => { commit('SET_ONE_POST', response.data) }).catch(error => console.log(error));
    }
  },
  modules: {
    auth,
    plugins: [createPersistedState({
      paths: ['auth']
    })],
  },


})
