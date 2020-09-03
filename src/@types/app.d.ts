import { createStore } from 'vuex'
declare interface Book {
  author?: string
  pageName: string
}

declare interface StoreInstance extends ReturnType<typeof createStore> {
  save?: (type: string, val: any) => any
  get?: (type: string, val: any) => any
}
