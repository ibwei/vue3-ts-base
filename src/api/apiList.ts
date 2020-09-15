/** 所有的网络请求地址列表,方便集中维护 */
import { Method, ResponseType } from 'axios'

interface ApiListItemType {
  url: string
  method: Method
  resType: ResponseType
}

/** API 模块名  */
type ApiModuleKey = 'user' | 'article'

/** API 模块>用户模块> 属性名  */
type UserModuleKey = 'login' | 'register' | 'logout'

/** API 模块>文章模块> 属性名  */
type ArticleModuleKey = 'list'

/** API 列表  */
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
