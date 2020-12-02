import Axios from './axios'
import { HttpResponse } from '@/@types/index'

/**
 * @description 公共模块的的网络请求，所有通用 api 放在此处
 */

class CommonService {
  // 添加团队
  static getRoleInfoList(): Promise<HttpResponse> {
    return Axios.get('/bus/common/getRoleInfo', {
      responseType: 'json'
    })
  }
}

export default CommonService
