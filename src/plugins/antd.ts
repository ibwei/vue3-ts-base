import { Button, Card, Row, Col } from 'ant-design-vue'
import { createApp } from 'vue'

/**
 * @description 手动注册 antd-vue 组件,达到按需加载目的
 * @param {ReturnType<typeof createApp>} app  整个应用的实例
 * @returns void
 */
export function loadAtdComponent(app: ReturnType<typeof createApp>) {
  app.use(Button)
  app.use(Card)
  app.use(Row)
  app.use(Col)
}

/* Automatically register components under Button, such as Button.Group */
