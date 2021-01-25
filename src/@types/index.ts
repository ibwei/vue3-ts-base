import { AppStateType } from '@/store/modules/app/state'
import { ConsoleStateType } from '@/store/modules/console/state'
import { UserStateType } from '@/store/modules/user/state'
import { TeamStateType } from '@/store/modules/user/modules/team/state'

// vuex state 的模块的类型
type ModuleType = {
  app: AppStateType
  console: ConsoleStateType
  user: UserStateType & { team: TeamStateType }
}

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
  id: number
  name?: string
  avatar?: string
  role?: string
  department?: string
  code?: string
  createTime?: string
  description?: string
  email?: string
  lastLoginTime?: string
  modifyTime?: string
  modifyUser?: number
  nickName?: string
  phone?: string
  roleId?: number
  roleName?: string
  status?: number
  tenantId?: number
  type?: string
  userId?: number
  username?: string
  cloudRole?: string
}

export interface ListParamType {
  id: number
  pageSize: number
  pageNum: number
}

// 接口响应通过格式
export interface HttpResponse {
  status: number
  statusText: string
  data: {
    code: number
    desc: string
    [key: string]: any
  }
}

// 接口请求列表通用参数配置
export interface HttpListQuery {
  pageNum?: number
  pageSize?: number
  orderNum?: number
  [key: string]: any
}

// 团队列表类型
export interface TeamListType {
  createTime?: string
  description?: string
  id?: number
  memberNum?: number
  name?: string
  orderNum?: number
  projectNum?: number
  tenantId?: number
  roleId?: number // 用户在当前所在团队的权限
}

// 批量添加团队成员列表
export interface TeamMemberType {
  id?: number
  roleId?: number
  status?: number
  teamId?: number
  tenantId?: number
  toolRole?: string
  userId?: number
  userTenantId?: number
  cloudRole?: string
}

export enum RoleType {
  '超级管理员' = 1,
  '子账号',
  '团队超级管理员',
  '团队管理员',
  '团队成员',
  '团队访客',
  '项目管理员',
  '项目成员',
  '项目访客'
}

// 权限列表类型
export interface RoleItemType {
  createTime: string
  id: number
  roleId: number
  modifyTime: string
  parentId: number
  remark: string
  roleName: keyof typeof RoleType
  type: number
  menuIds: string
}

export interface AddTeamGroupParams {
  description?: string
  id?: number
  teamId?: number
  name: string
  tenantId?: number
}

export interface AddTeamGroupMemberParams {
  groupId: number
  id?: number
  userId: number
}

export interface AddCloudRoleItem {
  cloudRoleId: number
  teamId: number
  tenantId: number
}
// 云角色成员列表类型
export interface CloudRoleItem extends AddCloudRoleItem {
  allocatedNum: number
  cloudRoleNum: number
  endTime: string
  id: number
  name: string
  unallocatedNum: number
  cloudRoleName: string
  toolId: number
}

// 更改成员云角色需要的传参
export interface UpdateMemberRoleParams {
  cloudRole: string
  id: number
  teamId: number
  tenantId: number
  userId: number
}

// 云角色列表项类型
export type CloudRoleItemType = CloudRoleItem & { members: BasicUserType[] }

// 云角色成员编辑的列表项类型

export type EditCloudRoleItemType = {
  members: BasicUserType[]
  isCheck: boolean
  cloudRole: string
  teamId: number
  tenantId: number
  userId: number
  allocatedNum: number
  cloudRoleNum: number
  endTime: string
  id: number
  name: string
  unallocatedNum: number
  cloudRoleName: string
  toolId: number
  cloudRoleId: number
}
