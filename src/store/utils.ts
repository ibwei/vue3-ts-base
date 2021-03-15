import store from '@/store'

// 定义 state 下的 module 值
type ModuleNameType = 'app' | 'console' | 'user'

/**
 * @description setStoreState -方法是一个 mutaitions 的操作
 * @type {T} T - 你要更改的模块的类型
 * @param {string}  module - 要操作的state 的 module 名
 * @param {string}  key - 要操作的state 的 module 下的 key 值
 * @param {any} value - 当有 msg 参数时,视为赋值操作,触发 mutation,msg 则为要复制的数据.
 * @example 如果需要更改 app 模块下的 theme为 dark，这样使用：setStoreState('app','theme','dark')
 * @example 目前只支持更改 module 的 state 第一层，不支持单独修改深层嵌套的 key，如需更改，请直接替换第一层的对象
 *  如
 *   ``` const state = {
 *                 name: {
 *                   firstName:'jack',
 *                   lastName:'Ma'
 *                 }
 *               }
 *   ```
 *  想要单独修改 firstName,直接使用 setStoreState<AppStateType>('app','name',{firstName:'modifiedName',lastName:'Ma'})
 */

export function setStoreState<T>(
  module: ModuleNameType,
  key: keyof T,
  value: any
) {
  store.commit({
    type: module + '/__set',
    key: key,
    val: value
  })
}

/**
 * @description 封装 dispatch 方法
 * @type {T} T  你要派发actions的模块的类型
 * @example 使用方法如下  const result = await dispatchActions<UserActionsType>('console','refreshToken',1)
 */
export function dispatchAction<T>(
  module: ModuleNameType,
  key: keyof T,
  value?: any
) {
  store.dispatch(`${module}/${key}`, value)
}

/**
 * @description 封装 dispatch 方法
 * @type {T} T  你要获取 getters的模块的类型
 * @example 使用方法如下  const result =  getStoreGetter<ConsoleGetterType>('console','list')
 */
export function getStoreGetter<T>(module: ModuleNameType, key: keyof T) {
  return store.getters[`${module}/${key}`]
}
