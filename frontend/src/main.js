import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import Axios from 'axios';

/* Vue.config.productionTip = false; */
// set auth header
Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;


createApp(App).use(store).use(router).mount('#app')

