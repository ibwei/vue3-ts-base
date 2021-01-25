import { StateType } from '@/@types'
import { Module } from 'vuex'
import ModuleTeam from './modules/team/state'
interface Token {
  [propertys: string]: any
}

const state = {
  token: {} as Token,
  userDetail: {
    email: '',
    type: -1, // 用户账号本身类型  0：主账号，1：子账号
    userId: -1,
    username: '',
    description: '',
    nickName: '',
    phone: '',
    tenantId: 0,
    roleId: 0
  },
  currentTeamRoleId: 0, // 当前所选择的团队用户所具有的权限
  currentProjectRoleId: 0 // 当前所选择的项目用户所具有的权限
}
type UserStateType = typeof state

const user: Module<UserStateType, StateType> = {
  namespaced: true,
  ...state,
  modules: {
    team: ModuleTeam
  }
}

export { UserStateType, state }
export default user
