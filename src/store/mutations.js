/* 直接更新state的多个方法的对象 */
import { RECEVICE_ADDRESS, RECEVICE_FOODTYPES, RECEVICE_SHOPS } from './mutation-types'

export default {
  // 常量变量函数名的用法 [RECEVICE_ADDRESS] 对应于recevice_address，即常量的值
  [RECEVICE_ADDRESS] (state, { address }) {
    state.address = address
  },
  [RECEVICE_FOODTYPES] (state, { foodTypes }) {
    state.foodTypes = foodTypes
  },
  [RECEVICE_SHOPS] (state, { shops }) {
    state.shops = shops
  }
}
