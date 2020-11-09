import { createStore, createLogger, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import mutations from './mutations'
import modules from './modules'
import { StateType } from '@types'

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
            paths: [
              'app',
              'console.sidebarFold',
              'console.thirdPanelFold',
              'console.teamGroupType',
              'console.teamDetaiPanel'
            ] // 部分数据只为方便调试,不应在线上环境持久化
          })
        ]
      : [
          createPersistedState({
            paths: [
              'app',
              'console.sidebarFold',
              'console.teamGroupType',
              'console.teamDetaiPanel'
            ]
          })
        ]
})

export default store
