export default {
  __set(state: any, msg: { key: string; val: any }) {
    state[msg.key] = msg.val
  }
}
