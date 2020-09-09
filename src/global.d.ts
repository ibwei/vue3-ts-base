import { Message } from 'ant-design-vue/types/message'
import { createStore } from 'vuex'
import { Router, RouteLocationNormalizedLoaded } from 'vue-router'

/** 将第三方变量挂载到每一个 vue 示例中  */
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: Message
    $store: ReturnType<typeof createStore>
    $route: RouteLocationNormalizedLoaded
    $router: Router
  }
}
declare interface x {
  name: string
  age: number
}
