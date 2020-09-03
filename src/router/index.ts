import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

/** 自动加载其他路由模块 */
const files = require.context('.', true, /\.ts$/)
const modules: Array<RouteRecordRaw> = []
files.keys().forEach((key) => {
  if (key === './index.ts') return
  modules.push(files(key).default)
})

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...modules,
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  }
]

console.log(routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
