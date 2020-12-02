/**  跟应用全局相关的静态配置放在这里  */
import { message } from 'ant-design-vue'

const AppConfig = {
  $message: message
}
const StaticConfig = {
  MaxPageSize: 1000,
  IconfontURL: '//at.alicdn.com/t/font_2092412_rr3rb5vksd8.js'
}
export { AppConfig, StaticConfig }
