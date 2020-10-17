import { createStore, createLogger, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import mutations from './mutations'
import modules from './modules'
import { AppStateType } from '@/store/modules/app/state'
import { StateType } from '@types'

export type GlobalState = { app: AppStateType }

const store: Store<StateType> = createStore({
  strict: true,
  mutations,
  actions: {},
  modules: { ...modules },
  plugins:
    process.env.NODE_ENV !== 'production'
      ? [
          createLogger(),
          createPersistedState({
            paths: ['app']
          })
        ]
      : [
          createPersistedState({
            paths: ['app']
          })
        ]
})

store.state.app?.language

export default store
