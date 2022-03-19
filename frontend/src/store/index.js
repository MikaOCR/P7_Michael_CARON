import axios from 'axios';
import { createStore } from 'vuex';
import auth from './auth';

export default createStore({
  state: {
    posts: [],
    users: [],
    oneUser: [],
    onePost: [],
  },
  getters: {
    allPosts: (state) => state.posts,
    allUsers: (state) => state.users,
    oneUser: (state) => state.oneUser,
    onePost: (state) => state.onePost
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    },
    SET_USERS(state, users) {
      state.users = users
    },
    SET_ONE_USER(state, oneUser) {
      state.oneUser = oneUser
    },
    SET_ONE_POST(state, onePost) {
      state.onePost = onePost
    }
  },
  actions: {
    getPosts({ commit }) {
      axios.get('/forum').then(response => { commit('SET_POSTS', response.data) }).catch(error => console.log(error));
    },
    getUsers({ commit }) {
      axios.get('/admin/users').then(response => { commit('SET_USERS', response.data) }).catch(error => console.log(error));
    },
    getOneUser({ commit }) {
      axios.get('/admin/users').then(response => { commit('SET_ONE_USER', response.data) }).catch(error => console.log(error));
    },
    getOnePost({ commit }) {
      axios.get('/edition/' + this.$route.params.id).then(response => { commit('SET_ONE_POST', response.data) }).catch(error => console.log(error));
    }
  },
  modules: {
    auth
  },
})