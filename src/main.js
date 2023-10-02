import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import store from "./store"
import router from './router'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')

import '@/styles/style.css'

//createApp(App).use(store).use(router).mount('#app')