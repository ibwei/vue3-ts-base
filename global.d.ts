import { StateType } from '@/@types'
import { Message } from 'ant-design-vue/types/message'
import { Router, RouteLocationNormalizedLoaded } from 'vue-router'
import { Store } from 'vuex'

/** 将第三方变量挂载到每一个 vue 示例中  */
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: Message
    $store: Store<StateType>
    $route: RouteLocationNormalizedLoaded
    $router: Router
  }
}

declare module '*.tsx'

declare global {
  interface X {
    name: string
    age: number
  }

  interface X1 {
    s: string
  }
}
