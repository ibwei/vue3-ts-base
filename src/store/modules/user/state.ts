import { StateType } from '@/@types'
import { Module } from 'vuex'

interface Token {
  [propertys: string]: any
}

const state = {
  token: {} as Token,
  userDetail: {
    email: '',
    userId: 0,
    type: 0,
    username: '',
    description: '',
    nickName: '',
    phone: '',
    tenantId: 0
  }
}
type UserStateType = typeof state

const user: Module<UserStateType, StateType> = {
  namespaced: true,
  ...state
}

export { UserStateType, state }
export default user
