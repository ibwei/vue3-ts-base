import { CloudRoleItemType } from '../../../@types/index'
import store from '@/store'

const consoleGetter = {
  // 获取云角色列表
  getTeamClouldList() {
    // 获取用户列表以及云角色列表
    const memberList = store.state.console.selectedTeamMemberList.map(item => {
      let cloudRoleList: number[] = []
      if (item.cloudRole) {
        cloudRoleList = item.cloudRole.split(',').map(id => Number(id))
      }
      return { ...item, cloudRoleList: cloudRoleList }
    })

    const cloudRoleList = [...store.state.console.selectedTeamCloudRoleList]

    // 将当前团队所有对应云角色的用户添加到该云角色的成员中去

    const list: CloudRoleItemType[] = []
    for (let i = 0; i < cloudRoleList.length; i++) {
      list.push({ ...cloudRoleList[i], members: [] })
      for (let j = 0; j < memberList.length; j++) {
        if (memberList[j].cloudRoleList.includes(cloudRoleList[i].cloudRoleId)) {
          list[i].members.push(memberList[j])
        }
      }
    }
    return list
  }
}

type ConsoleGettersType = typeof consoleGetter
export { ConsoleGettersType }
export default consoleGetter
