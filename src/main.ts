import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AppConfig from './config/app'

const app: any = createApp(App)
app.config.globalProperties = AppConfig
console.log('config', app.config)
createApp(App).use(store).use(router).mount('#app')
