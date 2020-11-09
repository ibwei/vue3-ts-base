import { StateType } from '@types'
import { Module } from 'vuex'

// 均放置跟控制台 UI 状态相关内容

const state = {
  sidebarFold: false, // 侧边栏菜单是否折叠
  thirdPanelFold: true, // 第三级版面是否折叠
  teamDetaiPanel: '0', // 团队详情里 tabbar 当前活跃的 key
  teamGroupType: 'all' // 成员分组当前选择
}
type ConsoleStateType = typeof state

const console: Module<ConsoleStateType, StateType> = {
  namespaced: true,
  ...state
}

export { ConsoleStateType, state }
export default console
