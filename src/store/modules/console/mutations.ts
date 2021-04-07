import store from '@/store'
import router from '@/router'
import { setStoreState } from '@/store/utils'

export default {
  __set(state: any, msg: { key: string; val: any }) {
    state[msg.key] = msg.val
  },
  updateBackPathList() {
    const backPathList = store.state.console.backPathList
    const currentPath = router.currentRoute.value.fullPath
    const newBackPathList = [...backPathList]

    if (backPathList.length < 0 || backPathList[backPathList.length - 1] !== currentPath) {
      newBackPathList.push(currentPath)
    }

    setStoreState('console', 'backPathList', newBackPathList)
  }
}
