import TeamService from '../../../api/team'
import { HttpListQuery, StateType, HttpResponse } from '@/@types/index'
import { setStoreState } from '../../utils'
import { Store } from 'vuex'
import CommonService from '@/api/common'
import ManageService from '@/api/manage'
import { StaticConfig } from '@/config/app'
import { RoleType } from '../../../@types/index'
import { CloudRoleService } from '../../../api/cloudrole'

/**
 * @description 所有跟控制台相关的内容
 * @return status 返回状态  err_code：1，逻辑正确，err_code：0，发生错误。
 */

const consoleActions = {
  // 获取用户角色列表
  async getRoleList(): Promise<HttpResponse | number> {
    const res = await CommonService.getRoleInfoList()
    if (res.status === 200) {
      const data = res.data.data
      setStoreState('console', 'roleList', data ? data : [])
      return res
    }
    return 0
  },

  // 获取团队列表
  async getTeamList(context: Store<StateType>, params: HttpListQuery): Promise<HttpResponse | number> {
    const res = await TeamService.list({ ...params })
    if (res.status === 200) {
      const data = res.data.data
      setStoreState('console', 'myTeamList', data.rows ? data.rows : [])
      return res
    }
    return 0
  },

  // 获取某个团队的所有成员信息
  async getTeamMemberList(context: Store<StateType>, id: number): Promise<HttpResponse | number> {
    const res = await TeamService.memberList(id as number)
    if (res.status === 200) {
      const memberList = res.data.data.rows.filter((item: any) => [RoleType['团队超级管理员'], RoleType['团队成员'], RoleType['团队访客'], RoleType['团队管理员']].includes(item.roleId))
      setStoreState('console', 'selectedTeamMemberList', memberList)
    }
    return 0
  },

  // 获取某个团队的详细信息
  async getTeamDetail(context: Store<StateType>, id: number): Promise<HttpResponse | number> {
    console.log('chufa')
    const res = await TeamService.detail(id)
    if (res.status === 200) {
      const data = res.data.data
      setStoreState('console', 'selectedTeam', data)
      return data
    }
    return 0
  },

  // 获取某个主账号下的所有的
  async getSubAccountList(): Promise<HttpResponse | number> {
    const res = await ManageService.getSubAccountList({
      pageSize: StaticConfig.MaxPageSize,
      pageNum: 1
    })
    if (res.status === 200) {
      const data = res.data.data.rows
      setStoreState('console', 'subAccountList', data)
      return data
    }
    return 0
  },

  // 获取当前选择团队下所有的云角色列表
  async getTeamCloudRoleList(context: Store<StateType>, teamId: number): Promise<HttpResponse | number> {
    console.log(`id=${teamId}`)
    const res = await CloudRoleService.list(teamId)
    if (res.status === 200) {
      const data = res.data.data
      console.log(data)
      setStoreState('console', 'selectedTeamCloudRoleList', data)
      return res
    }
    return 0
  }
}

type ConsoleActionsType = keyof typeof consoleActions

export { ConsoleActionsType }
export default consoleActions
