import API from './axios'
import ApiList from './apiList'

const { user } = ApiList

interface HttpParams {
  coinName: string
  cashName: string
}

export interface UserApi {
  coin2cash(param: HttpParams): Promise<any>
}

/**
 * @example Axios.get(`https://api.abckey.com/market/${this.c_switchCashName}/${this.cash.toLowerCase()}&t=${new Date().getTime()}`)
 * @todo Get the exchange rate of the current currency
 */
class User {
  async register(): Promise<any> {
    return await API({
      method: user.register.method,
      url: user.register.url,
      responseType: user.register.resType
    })
  }
}

export default User
