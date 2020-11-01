import UserService from '@/api/user'
import { assert } from 'chai'

describe('测试 User 模块 Api', () => {
  it('测试登录接口', async () => {
    const res = await UserService.login({
      userName: 'nihao',
      password: 'hahah'
    })
    console.log(res)
    assert.equal(res.data.code, 1, '业务接受不正常')
  })
})
