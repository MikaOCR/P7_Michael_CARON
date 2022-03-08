import axios from 'axios';

const url = 'http://localhost:5000/';

export const postsModule = {
    state: {
        posts: [],
    },
    getters: {
        allPosts: (state) => state.posts
    },
    mutations: {
        SET_Post (state, posts) {
            state.posts = posts
        }
    },
    actions: {
        loadPosts ({ commit }) {
            axios.get(url + 'forum/')
            .then(response => response.data)
            .then(posts => {
                console.log(posts);
            commit('SET_Posts', posts)
            })
        }
    },
};
