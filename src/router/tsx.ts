import { RouteRecordRaw } from 'vue-router'

/** 关于我们页面的路由配置 */
const AboutRouter: RouteRecordRaw = {
  path: '/tsxtest',
  name: 'tsxtest',
  component: () =>
    import(/* webpackChunkName: "tsxtest" */ '@/views/TsxPage.tsx')
}

export default AboutRouter
