import { AppStateType } from '@/store/modules/app/state'

// vuex模块的类型
type ModuleType = { app: AppStateType }

// 所有的StateType
export type StateType = ModuleType

/** http请求响应格式  */
export declare interface ApiResponse {
  errCode: number
  errMsg?: string
  data?: any
}
