import axios from 'axios'

export const auth = {
    namespaced: true,
    strict: true,

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
                const userInfo = sessionStorage.setItem('user', JSON.stringify(data.userInfo));
                console.log(userInfo);
            } catch(e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },
    }
}