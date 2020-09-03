/** 所有的网络请求地址列表,方便集中维护 */

import { Method, ResponseType } from 'axios'

interface ApiListItem {
  [key: string]: Array<{ url: string; method?: Method; resType?: ResponseType }>
}
const ApiList: ApiListItem = {
  user: [
    {
      url: '/login',
      method: 'post',
      resType: 'json'
    },
    {
      url: '/login',
      method: 'get',
      resType: 'json'
    }
  ],
  other: [
    {
      url: 'fd'
    }
  ]
}

export default ApiList
