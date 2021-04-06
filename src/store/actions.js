/* 通过mutations间接更新state的多个方法的对象 */
import { RECEVICE_ADDRESS, RECEVICE_FOODTYPES, RECEVICE_SHOPS } from './mutation-types'

import { reqAdress, reqFoodTypes, reqShops } from '../api/index'
export default {
  // { commit, state } 实际上是跟store对象具有相同的属性和方法的context对象, ES6解构赋值
  // recevice_address (context){...}
  // 这是一种action返回值是个promise
  // 一种处理promise的写法
  // recevice_address ({ commit, state }) {
  //   // 提交对mutation的请求
  //   const geohash = state.latitude + ',' + state.longitude
  //   reqAdress(geohash).then((res) => {
  //     if (res.code === 0) {
  //       const address = res.data
  //       commit(RECEVICE_ADDRESS, address)
  //     }
  //   })
  // },
  // 第二种写法
  async recevice_address ({ commit, state }) {
    // 提交对mutation的请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAdress(geohash)
    if (result.code === 0) {
      const address = result.data
      commit(RECEVICE_ADDRESS, { address })
    }
  },
  // 异步获取食物列表
  recevice_foodtypes ({ commit }) {
    // 提交对异步请求
    reqFoodTypes().then((res) => {
      if (res.code === 0) {
        const foodTypes = res.data
        commit(RECEVICE_FOODTYPES, { foodTypes })
      }
    })
  },
  // 异步获取商家列表
  recevice_shops ({ commit, state }) {
    // 提交对异步请求
    // const longitude = state.longitude
    // const latitude = state.latitude
    const { longitude, latitude } = state
    reqShops(longitude, latitude).then((res) => {
      if (res.code === 0) {
        const shops = res.data
        commit(RECEVICE_SHOPS, { shops })
      }
    })
  }
}
