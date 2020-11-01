import { StateType } from '@types'
import { Module } from 'vuex'

const state = {
  language: 'zhCN',
  theme: 'light',
  version: '0.0.1',
  fullLoading: false,
  loadingText: 'Loading...'
}
type AppStateType = typeof state

const app: Module<AppStateType, StateType> = { namespaced: true, ...state }

export { AppStateType, state }
export default app
