// 路由器对象模块
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/Login.vue'
// import MSite from '../views/MSite/MSite.vue'
// import Order from '../views/Order/Order.vue'
// import Profile from '../views/Profile/Profile.vue'
// import Search from '../views/Search/Search.vue'

const MSite = () => import('../views/MSite/MSite.vue')
const Order = () => import('../views/Order/Order.vue')
const Profile = () => import('../views/Profile/Profile.vue')
const Search = () => import('../views/Search/Search.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/msite',
    name: 'MSite',
    // 返回路由组件的函数，只有执行此函数才会加载路由组件
    // 这个函数在请求对应的路由路径时才会执行
    component: MSite,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/',
    redirect: '/msite'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
