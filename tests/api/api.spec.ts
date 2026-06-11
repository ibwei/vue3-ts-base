import { assert } from 'chai'
import validator from '@/utils/validator'

describe('基础规则配置', () => {
  it('手机号校验规则应匹配中国大陆手机号格式', () => {
    assert.isTrue(validator.phone.pattern.test('13800138000'))
    assert.isFalse(validator.phone.pattern.test('10000000000'))
  })
})
