import { Message } from 'ant-design-vue/types/message'
import { createStore } from 'vuex'

/** 将第三方变量挂载到每一个 vue 示例中  */
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: Message
    $store: ReturnType<typeof createStore>
    $route: RouteLocationNormalizedLoaded
    $router: Router
  }
}

interface Book {
  author?: string
  pageName: string
}
interface StoreInstance extends ReturnType<typeof createStore> {
  save?: (type: string, val: any) => any
  get?: (type: string, val: any) => any
}
