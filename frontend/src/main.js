import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:5000/';




createApp(App).use(store).use(router).mount('#app')

