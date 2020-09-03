import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import mutations from './mutations'
import modules from './modules'
export default createStore({
  strict: true,
  state: {
    test: 'in'
  },
  mutations,
  actions: {},
  ...modules,
  plugins: [
    createPersistedState({
      paths: ['app']
    })
  ]
})
