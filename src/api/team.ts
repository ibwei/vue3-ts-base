import Axios from './axios'
import { AddTeamGroupMemberParams } from '@/@types/index'
import { StaticConfig } from '@/config/app'
import {
  HttpResponse,
  HttpListQuery,
  TeamMemberType,
  AddTeamGroupParams
} from '@/@types/index'

/**
 * @description 团队网络请求模块，所有跟团队相关的 api 放在此处
 */

// 新增团队类型
interface CreateParamType {
  name: string
  description: string
}

class TeamService {
  // 添加团队
  static create(params: CreateParamType): Promise<HttpResponse> {
    return Axios.post('/bus/team', params, {
      responseType: 'json'
    })
  }

  // 所有的团队信息
  static update(data: TeamMemberType): Promise<HttpResponse> {
    return Axios.put('/bus/team', {
      ...data
    })
  }

  // 用户当前所在的团队信息
  static list(params: HttpListQuery): Promise<HttpResponse> {
    return Axios.get('/bus/team/list', {
      params
    })
  }

  // 所有的团队信息
  static allList(params: HttpListQuery): Promise<HttpResponse> {
    return Axios.get('/bus/team/listAll', {
      params
    })
  }

  // 所有的团队信息
  static detail(id: number): Promise<HttpResponse> {
    return Axios.get(`/bus/team/${id}`)
  }

  // 删除团队
  static delete(id: number): Promise<HttpResponse> {
    return Axios.delete(`/bus/team/${id}`)
  }

  // 获取团队成员列表
  static memberList(teamId: number): Promise<HttpResponse> {
    return Axios.get(`/bus/teamMember/list/${teamId}`, {
      params: {
        pageSize: StaticConfig.MaxPageSize,
        pageNum: 1
      }
    })
  }

  // 编辑团队成员
  static updateMember(list: TeamMemberType): Promise<HttpResponse> {
    return Axios(`/bus/teamMember/`, {
      method: 'put',
      data: list
    })
  }

  // 批量添加团队成员
  static addMember(list: TeamMemberType[]): Promise<HttpResponse> {
    return Axios(`/bus/teamMember/`, {
      method: 'post',
      data: list
    })
  }

  // 批量删除团队成员
  static deleteMember(list: TeamMemberType[]): Promise<HttpResponse> {
    const path = list.map((item) => item.id).join(',')
    console.log('deletepath', path)
    return Axios(`/bus/teamMember/${path}`, {
      method: 'delete'
    })
  }

  // 添加团队分组
  static addTeamGroup(data: AddTeamGroupParams): Promise<HttpResponse> {
    return Axios(`/bus/userGroup`, {
      method: 'post',
      data
    })
  }

  // 查询团队分组列表
  static getTeamGroupList(): Promise<HttpResponse> {
    return Axios(`/bus/userGroup/list`, {
      method: 'get',
      params: {
        pageSize: StaticConfig.MaxPageSize,
        pageNum: 1
      }
    })
  }

  // 删除团队分组
  static deleteTeamGroup(ids: number[]): Promise<HttpResponse> {
    const path = ids.join(',')
    return Axios(`/bus/userGroup/${path}`, {
      method: 'delete'
    })
  }

  // 删除团队分组成员
  static deleteTeamGroupMember(ids: number[]): Promise<HttpResponse> {
    const path = ids.join(',')
    return Axios(`/bus/userGroup/userGroupMember/${path}`, {
      method: 'delete'
    })
  }
  // 添加团队成员
  static addTeamGroupMember(
    data: AddTeamGroupMemberParams[]
  ): Promise<HttpResponse> {
    return Axios(`/bus/userGroup/userGroupMember`, {
      method: 'post',
      data
    })
  }

  // 获取团队分组里的成员列表
  static getTeamGroupMemberList(id: number): Promise<HttpResponse> {
    return Axios(`/bus/userGroup/userGroupMember/list/${id}`, {
      method: 'get',
      params: {
        pageSize: StaticConfig.MaxPageSize,
        pageNum: 1
      }
    })
  }
}

export default TeamService
