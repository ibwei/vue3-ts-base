import { StateType, TeamListType, RoleItemType, BasicUserType } from '@/@types'
import { Module } from 'vuex'
import { CloudRoleItem } from '@/@types/index'

// 均放置跟控制台 UI 状态相关内容

const state = {
  expired: true,
  sidebarFold: false, // 侧边栏菜单是否折叠
  thirdPanelFold: true, // 第三级版面是否折叠
  teamDetaiPanel: '0', // 团队详情里 tabbar 当前活跃的 key
  teamGroupType: 'all', // 成员分组当前选择
  myTeamList: [], // 我所在的团队
  selectedTeam: {} as TeamListType, // 当前选择的团队
  thirdPanelLoading: false, // 团队详情是否正在加载
  roleList: [] as RoleItemType[], // 权限列表
  subAccountList: [] as BasicUserType[], // 所有的子账号列表
  selectedTeamMemberList: [] as BasicUserType[],
  backPathList: [] as string[], // 返回路径列表
  selectedTeamCloudRoleList: [] as CloudRoleItem[], // 当前选择团队的云角色列表
  projectList: [] // 项目列表
}

type ConsoleStateType = typeof state

const console: Module<ConsoleStateType, StateType> = {
  namespaced: true,
  ...state
}

export { ConsoleStateType, state }
export default console
