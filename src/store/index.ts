import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import mutations from './mutations'
import modules from './modules'
import { StoreInstance } from '@/global'

const store: StoreInstance = createStore({
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

/**
 * @description save -方法是一个读取 state 和触发 mutaitions 的操作集合
 * @param {string}  type - 要操作的state 的 key 值,如果是根 state,直接写key 值,如果是读取app 模块下 theme 的值,则使用 app.theme
 * @param {any} msg - 当有 msg 参数时,视为赋值操作,触发 mutation,msg 则为要复制的数据.
 * @example 以操作 raceConfigType为例,读取操作: this.$store.__s('raceConfigType'),赋值操作:this.$store.__s('raceConfigType','add'), 更改app 下模块 theme,读取操作: this.$store.__s('app.theme'),赋值操作:this.$store.__s('app.theme','light')
 */
store.save = (type: string, msg: any) => {
  let _state: any = store.state
  if (!type) return store.state
  if (type.indexOf('.') === -1) {
    if (msg !== undefined) {
      store.commit({
        type: '__set',
        key: type,
        val: msg,
        root: true
      })
      return _state
    } else {
      return _state[type]
    }
  }
  const _path = type.split('.')
  for (let i = 0; i < _path.length; i++) {
    if (_state[_path[i]] !== undefined) {
      _state = _state[_path[i]]
    } else {
      _state = undefined
    }
  }
  if (msg !== undefined && _path.length === 2) {
    store.commit({
      type: _path[0] + '/__set',
      key: _path[1],
      val: msg
    })
  }
  return _state
}

/** 读取getter 的操作  */
store.get = (type: string): any => {
  if (!type) return store.getters
  return store.getters[type]
}

export default store
