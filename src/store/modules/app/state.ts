import { GlobalState } from '@/store'
import { Module } from 'vuex'

const state = {
  language: '',
  theme: 'light',
  version: '0.0.1',
  fullLoading: false,
  loadingText: 'Loading...'
}
type AppStateType = typeof state

const app: Module<AppStateType, GlobalState> = { namespaced: true, state }

export { AppStateType, state }
export default app
