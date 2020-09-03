declare module '*.vue' {
  import { createStore } from 'vuex'
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare module '*.tsx' {
  const component: any
  export default component
}

/* declare module '@vue/runtime-core' {
  interface ComponentInternalInstance {
    $store: string
  }
} */
