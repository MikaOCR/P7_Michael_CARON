import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/'
import axios from 'axios';

/* Vue.config.productionTip = false; */
// set auth header
/* axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.user}`; */


axios.defaults.baseURL = 'http://localhost:5000/';




createApp(App).use(store).use(router).mount('#app')

