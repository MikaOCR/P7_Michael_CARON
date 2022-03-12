/* import { jwtDecrypt } from "../../shared/jwtHelper";
import { tokenAlive } from "../../shared/jwtHelper";


const state = () => ({
    authData: {
      token: "",
      refreshToken: "",
      tokenExp: "",
      id: "",
      email: "",

    },
    loginStatus:"",
});

const getters = {
    getLoginStatus(state){
        return state.loginStatus;
    },
    getAuthData(state){
        return state.authData;
    },
    isTokenActive(state) {
        if (!state.authData.tokenExp) {
            return false;
        }
        return tokenAlive(state.authData.tokenExp);
    },
};

const actions = {
    async login({commit},payload) {
            const response = await axios.post('/login', payload)
            
            .catch((err) => {
                console.log(err);
            });
            if (response && response.data) {
                commit("saveTokenData", response.data);
                commit("setLoginStatus", "success");
            }else {
                commit("setLoginStatus", "failed");
            }
    },
};

const mutations = {
    saveTokenData(state, data) {
 
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
     
        const jwtDecodedValue = jwtDecrypt(data.access_token);
        const newTokenData = {
          token: data.access_token,
          refreshToken: data.refresh_token,
          tokenExp: jwtDecodedValue.exp,
          id: jwtDecodedValue.sub,
          email: jwtDecodedValue.email,
        };
        state.authData = newTokenData; 
    },
    setLoginStatus(state, value){
        state.loginStatus = value;
    }
};

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
} */

import axios from 'axios'

export default {
    namespaced: true,

    state: {
        token: null,
        user: null,
    },
    getters: {
        authenticated (state) {
            return state.token && state.user
        },
        user (state){
            return state.user
        },        
    },
    mutations: {
        SET_TOKEN (state, token) {
            state.token = token
        },
        SET_USER (state, user) {
            state.user = user
        },
    },
    actions: {
        async signIn ({ dispatch }, credentials) {
            const response = await axios.post('/login', credentials)

            return dispatch('attempt', response.data)
        },

        async attempt ({ commit, state }, data) {
            if(data.token) {
                commit('SET_TOKEN', data.token)
            }

            if(!state.token){
                return
            }

            try{
                commit('SET_USER', data.userInfo)
            } catch(e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },
    }
}