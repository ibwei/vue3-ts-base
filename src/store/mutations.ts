/** 一个封装常规 mutation 操作的常规方法  */
export default {
  __set(state: any, msg: { key: string; val: any }) {
    state[msg.key] = msg.val
  }
}
