// 入口文件

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Find from '../views/Find.vue'
import Order from '../views/Order.vue'
import My from '../views/My.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/find',
    name: 'Find',
    component: Find
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail
  },
]

const router = new VueRouter({
  linkActiveClass:'active',  //路由默认的样式
  routes
})

export default router
