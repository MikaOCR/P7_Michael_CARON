import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import axios from 'axios';

require('@/store/subscriber')

axios.defaults.baseURL = 'http://localhost:5000/';

store.dispatch('auth/attempt', sessionStorage.getItem('token'))


createApp(App).use(store).use(router).mount('#app')

