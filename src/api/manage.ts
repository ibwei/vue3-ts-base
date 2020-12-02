/**
 * 点击右上角头像跳转的所有管理页面接口
 */

import { HttpResponse } from '@/@types'
import Axios from './axios'

/**
 * @interface ModifyProfileParams -修改个人信息参数
 * @property {string} userId -用户id
 * @property {string} nickName -昵称
 */
interface ModifyProfileParams {
  userId: number
  nickName?: string
}

/**
 * @interface ChangePasswordParams -修改密码参数
 * @property {string} oldPassword -昵称
 * @property {string} newPassword -密码
 */
interface ChangePasswordParams {
  oldPassword: string
  newPassword: string
}

/**
 * @interface CreateSubAccountParams -创建子账号参数
 * @property {string} username -用户名
 * @property {string} password -密码
 */
interface CreateSubAccountParams {
  username: string
  password: string
}

/**
 * @interface GetSubAccountListParams -获取子账号列表参数
 * @property {number} pageNum -页码
 * @property {number} pageSize -每页数量
 */
interface GetSubAccountListParams {
  pageNum: number
  pageSize: number
}

/**
 * @interface ResetSubAccountPasswordParams -重置子账号密码参数
 * @property {number} userId -用户id
 * @property {string} password -新密码
 */
interface ResetSubAccountPasswordParams {
  id: number
  passWord: string
}

/**
 * @interface FrezeeSubAccountParams -冻结子账号参数
 * @property {string} ids -子账号id
 */
interface FrezeeSubAccountParams {
  ids: string
}

class ManageService {
  // 修改个人信息
  static modifyProfile(params: ModifyProfileParams): Promise<HttpResponse> {
    return Axios('/bus/user', {
      method: 'put',
      responseType: 'json',
      data: params
    })
  }

  // 修改密码
  static changePassword(params: ChangePasswordParams): Promise<HttpResponse> {
    return Axios('/bus/user/password', {
      method: 'put',
      responseType: 'json',
      params
    })
  }

  // 创建子账号
  static createSubAccount(
    params: CreateSubAccountParams
  ): Promise<HttpResponse> {
    return Axios('/bus/subAccount', {
      method: 'post',
      responseType: 'json',
      data: params
    })
  }

  // 获取子账号列表
  static getSubAccountList(
    params: GetSubAccountListParams
  ): Promise<HttpResponse> {
    return Axios('/bus/subAccount/list', {
      method: 'get',
      responseType: 'json',
      params
    })
  }

  // 重置子账号密码
  static resetSubAccountPassword(
    params: ResetSubAccountPasswordParams
  ): Promise<HttpResponse> {
    return Axios('/bus/subAccount/password/reset', {
      method: 'put',
      responseType: 'json',
      data: [params]
    })
  }

  // 冻结子账号
  static frezeeSubAccount(
    params: FrezeeSubAccountParams
  ): Promise<HttpResponse> {
    return Axios('/bus/subAccount/lock', {
      method: 'put',
      responseType: 'json',
      params
    })
  }
}

export default ManageService
