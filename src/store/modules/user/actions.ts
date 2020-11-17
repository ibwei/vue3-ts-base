import UserService from '@/api/user'
import { setStoreState } from '../../utils'
import Store from '@/store'
/**
 * @description 所有跟用户相关的内容
 * @return status 返回状态  err_code：1，逻辑正确，err_code：0，发生错误。
 */

export default {
  // 刷新令牌
  refreshToken() {
    return UserService.refreshToken({
      // eslint-disable-next-line @typescript-eslint/camelcase
      refresh_token: Store.state.user.token.refresh_token
    }).then(res => {
      setStoreState('user', 'token', res.data)
    })
  },
  // 获取用户信息
  getUserDetail() {
    return UserService.getUserDetail().then(res => {
      setStoreState('user', 'userDetail', res.data.data)
    })
  }
}
