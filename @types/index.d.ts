import { RootStateType } from '@/store/state'
import { AppStateType } from '@/store/modules/app/state'
import { createStore } from 'vuex'

export declare interface StoreInstance extends ReturnType<typeof createStore> {
  __s?: (type: string, val: any) => any
  __g?: (type: string, val: any) => any
}

// vuex模块的类型
type ModuleType = { app: AppStateType }

// 所有的SateType
export type StateType = ModuleType & RootStateType & StoreInstance

// request interceptors
export declare interface ApiResponse {
  errCode: number
  errMsg?: string
  data?: any
}
