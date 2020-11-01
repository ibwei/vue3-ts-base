/**
 * 正则验证规则
 */
export default {
  // 手机
  phone: {
    pattern: /^0?(1[3-9])[0-9]{9}$/,
    message: '请输入正确的手机号码',
    trigger: 'blur'
  }
}
