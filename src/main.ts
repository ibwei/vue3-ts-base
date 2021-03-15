import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { AppConfig } from '@/config/app'

import { loadAllPlugins } from '@/plugins'
import { registeGlobalComponent } from '@/components/index'

// 语言国际化方案
import '@/i18n/index'
import './styles/antd.less'

/** 将全局静态配置注入到应用中,可以通过 this.a读取,比 provide 和 inject 手动注入更方便  */
const app: ReturnType<typeof createApp> = createApp(App)
app.config.globalProperties = AppConfig

/** 加载所有 Plugins */
loadAllPlugins(app)

/** 自动注册全局组件  */
registeGlobalComponent(app)

app.use(store).use(router).mount('#app')
