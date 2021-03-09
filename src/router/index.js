// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../views/MSite/MSite.vue'
import Order from '../views/Order/Order.vue'
import Profile from '../views/Profile/Profile.vue'
import Search from '../views/Search/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/msite',
    name: 'MSite',
    component: MSite
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/',
    redirect: '/msite'
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
