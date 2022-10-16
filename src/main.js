import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

// TODO:
// 1. Make normal UI
// 2. Lists pages with tasks (use Vue Router)