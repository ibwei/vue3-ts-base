import { RouteRecordRaw } from 'vue-router'

/** 关于我们页面的路由配置 */
const AboutRouter: RouteRecordRaw = {
  path: '/about',
  name: 'about',
  component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  children: [
    {
      path: 'me',
      name: 'aboutMe',
      component: () =>
        import(/* webpackChunkName: "about-me" */ '@/views/AboutMe.vue')
    }
  ]
}

export default AboutRouter
