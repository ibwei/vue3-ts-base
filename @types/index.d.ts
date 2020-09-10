import { createStore } from 'vuex'

export declare interface StoreInstance extends ReturnType<typeof createStore> {
  __s?: (type: string, val: any) => any
  __g?: (type: string, val: any) => any
}

export declare interface Book {
  author?: string
  pageName: string
}

// request interceptors
export declare interface ApiResponse {
  errCode: number
  errMsg?: string
  data?: any
}
