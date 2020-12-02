import Axios from './axios'
import { CloudRoleItem, HttpResponse } from '@/@types/index'
import { AddCloudRoleItem } from '../@types/index'

// 云角色相关的网络请求模块

export class CloudRoleService {
  /**
   * @description 查询所在团队的的云角色列表
   * @param  {number} teamId  - 所要查询的团队ID
   * @return {HttpResponse} result
   */
  static list(teamId: number): Promise<HttpResponse> {
    return Axios(`/bus/cloudRoleTeam/list`, {
      method: 'get',
      params: {
        teamId
      }
    })
  }
  /**
   * @description 给团队添加成员
   * @param {AddCloudRoleItem} teamId - 团队 id 和云角色 id
   * @return {HttpResponse} result
   */
  static add(data: AddCloudRoleItem): Promise<HttpResponse> {
    return Axios(`/bus/cloudRoleTeam`, {
      method: 'post',
      data
    })
  }

  /**
   * @description 删除团队的云角色
   * @param {CloudRoleItem} ids - 云角色 id
   * @return {HttpResponse} result
   */
  static update(teamCloudRole: CloudRoleItem): Promise<HttpResponse> {
    return Axios(`/bus/cloudRoleTeam/`, {
      method: 'put',
      data: {
        teamCloudRole
      }
    })
  }

  /**
   * @description 删除团队的云角色
   * @param {string} ids - 云角色 id
   * @return {HttpResponse} result
   */
  static delete(ids: string): Promise<HttpResponse> {
    return Axios(`/bus/cloudRoleTeam/${ids}`, {
      method: 'delete'
    })
  }
}
