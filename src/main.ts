import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AppConfig from './config/app'

/** 将全局静态配置注入到应用中,可以通过 this.a读取,比 provide 和 inject 手动注入更方便  */
const app: any = createApp(App)
app.config.globalProperties = AppConfig

createApp(App).use(store).use(router).mount('#app')
