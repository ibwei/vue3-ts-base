/** 所有的网络请求地址列表,方便集中维护 */

import { Method, ResponseType } from 'axios'

interface ApiListItemType {
  url: string
  method: Method
  resType: ResponseType
}

/** API 模块名  */
type ApiModuleKey = 'user' | 'article'

/** 模块名下的属性名  */
type UserModuleKey = 'login' | 'register' | 'logout'
type ArticleModuleKey = 'list'

type ApiListItem = {
  user: { [key in UserModuleKey]: ApiListItemType }
  article: { [key in ArticleModuleKey]: ApiListItemType }
}

/** 以对象的方式,对智能提示更好  */
const ApiList: ApiListItem = {
  user: {
    login: {
      url: '/login',
      method: 'post',
      resType: 'json'
    },
    register: {
      url: '/register',
      method: 'post',
      resType: 'json'
    },
    logout: {
      url: '/register',
      method: 'post',
      resType: 'json'
    }
  },
  article: {
    list: {
      url: '/list',
      method: 'get',
      resType: 'json'
    }
  }
}

export default ApiList
