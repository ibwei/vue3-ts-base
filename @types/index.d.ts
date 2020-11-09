import { AppStateType } from '@/store/modules/app/state'
import { ConsoleStateType } from '@/store/modules/console/state'

// vuex模块的类型
type ModuleType = { app: AppStateType; console: ConsoleStateType }

// 所有的StateType
export type StateType = ModuleType

/** http请求响应格式  */
export declare interface ApiResponse {
  errCode: number
  errMsg?: string
  data?: any
}

// ant-design-button 颜色
export type ButtonColorType =
  | 'primary'
  | 'danger'
  | 'dashed'
  | 'ghost'
  | 'default'
  | 'link'

// icon的类型
export type IconType = 'icon' | 'iconfont'

// 对话框打开类型
export type ModalOpenMode = 'edit' | 'add' | 'other'

export interface BasicUserType {
  name: string
  avatar: unknown
  role: string
  department: string
}
