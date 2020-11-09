import store from '@/store'
import { AppStateType } from './modules/app/state'
import { ConsoleStateType } from './modules/console/state'

// 定义 state 下的 module 值
type ModuleNameType = 'app' | 'console'

// 定义 module 下的 key 值
type CommitNameType = AppStateType & ConsoleStateType

/**
 * @description setStoreState -方法是一个 mutaitions 的操作
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
 *  想要单独修改 firstName,直接使用 setStoreState('app','name',{firstName:'modifiedName',lastName:'Ma'})
 */

export const setStoreState = (
  module: ModuleNameType,
  key: keyof CommitNameType,
  value: any
) => {
  store.commit({
    type: module + '/__set',
    key: key,
    val: value
  })
}
