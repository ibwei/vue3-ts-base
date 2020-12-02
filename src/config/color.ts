/* 所有的颜色静态配置，与 styles/antd.less 一致 */
const Color = {
  antd: {
    primary: '#00a971', // 全局主色
    link: '#00a971', // 链接色
    success: '#52c41a', // 成功色
    warning: '#faad14', // 警告色
    error: '#f5222d', // 错误色
    fontSizeBase: '14px', // 主字号
    headingColor: 'rgba(0, 0, 0, 0.85)', // 标题色
    textColor: 'rgba(0, 0, 0, 0.65)', // 主文本色
    textColorSecondary: 'rgba(0, 0, 0, 0.45)', // 次文本色
    disabledColor: 'rgba(0, 0, 0, 0.25)', // 失效色
    borderRadiusBase: '2px', // 组件/浮层圆角
    borderColorBase: '#d9d9d9', // 边框色
    boxShadowBase: '0 2px 8px rgba(0, 0, 0, 0.15);' //
  }
}

type ColorType = typeof Color

export { Color, ColorType }
