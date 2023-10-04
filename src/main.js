import { createApp } from 'vue'
import App from './App.vue'
import store from "./store"
import router from './router'
import axios from 'axios';

import '@/styles/style.css'
axios.defaults.baseURL = 'http://localhost:3000';

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(store).use(router).mount('#app')