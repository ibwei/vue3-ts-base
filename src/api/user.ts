/**
 * 所有跟用户相关的接口
 */

import { HttpResponse } from '@/@types'
import Axios from './axios'

interface HttpParams {
  coinName: string
  cashName: string
}

/**
 * @interface loginParams -登录参数
 * @property {string} grant_type -授权类型
 * @property {string} email -邮箱
 * @property {string} password -用户密码
 */
interface LoginParams {
  grant_type: string
  username: string
  password: string
}

/**
 * @interface RefreshTokenParams -刷新令牌参数
 * @property {string} refresh_token -refresh_token
 */
interface RefreshTokenParams {
  refresh_token: string
}

/**
 * @interface SendEmailCodeParams -发送邮件验证码参数
 * @property {string} email -邮箱
 */
interface SendEmailCodeParams {
  email: string
}

/**
 * @interface VerifyEmailCodeParams -验证邮件验证码参数
 * @property {string} email -邮箱
 * @property {string} code -验证码
 */
interface VerifyEmailCodeParams {
  email: string
  code: string
}

/**
 * @interface SendPhoneCodeParams -发送手机验证码参数
 * @property {string} phone -手机号
 */
interface SendPhoneCodeParams {
  phone: string
}

/**
 * @interface BindPhoneParams -绑定手机参数
 * @property {string} phone -手机号
 * @property {string} code -手机验证码
 */
interface BindPhoneParams {
  phone: string
  code: string
}

/**
 * @interface registerParams -注册参数
 * @property {string} email -邮箱
 * @property {string} password -用户密码
 * @property {string} code -验证码
 */
interface RegisterParams {
  email: string
  password: string
  code: string
}

export interface UserApi {
  coin2cash(param: HttpParams): Promise<any>
}

/**
 * @example Axios.get(`https://xxx.com}`)
 * @todo Get the exchange rate of the current currency
 */

class UserService {
  // 登录
  static async login(params: LoginParams): Promise<HttpResponse> {
    return Axios('/auth/oauth/token', {
      method: 'post',
      responseType: 'json',
      params: params
    })
  }

  // 刷新令牌
  static async refreshToken(params: RefreshTokenParams): Promise<HttpResponse> {
    return Axios('/auth/oauth/token', {
      method: 'post',
      responseType: 'json',
      params: {
        grant_type: 'refresh_token',
        ...params
      }
    })
  }

  // 获取用户信息
  static getUserDetail(): Promise<HttpResponse> {
    return Axios('/bus/user/userDetail', {
      method: 'get',
      responseType: 'json'
    })
  }

  // 添加登录记录
  static addLoginLog(): Promise<HttpResponse> {
    return Axios('/bus/user/success', {
      method: 'get',
      responseType: 'json'
    })
  }

  // 发送邮箱验证码
  static sendEmailCode(params: SendEmailCodeParams): Promise<HttpResponse> {
    return Axios('/bus/common/sendEmailCode', {
      method: 'get',
      responseType: 'json',
      params
    })
  }

  // 验证邮箱验证码
  static verifyEmailCode(params: VerifyEmailCodeParams): Promise<HttpResponse> {
    return Axios('/bus/common/verifyEmailCode', {
      method: 'post',
      responseType: 'json',
      params
    })
  }

  // 发送手机验证码
  static sendPhoneCode(params: SendPhoneCodeParams): Promise<HttpResponse> {
    return Axios('/bus/common/sendPhoneCode', {
      method: 'get',
      responseType: 'json',
      params
    })
  }

  // 绑定手机
  static bindPhone(params: BindPhoneParams): Promise<HttpResponse> {
    return Axios('/bus/user/bindingPhone', {
      method: 'post',
      responseType: 'json',
      params
    })
  }

  // 注册
  static register(params: RegisterParams): Promise<HttpResponse> {
    return Axios('/bus/user/register', {
      method: 'post',
      responseType: 'json',
      data: params
    })
  }
}

export default UserService
