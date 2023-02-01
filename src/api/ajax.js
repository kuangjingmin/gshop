/*
ajax 请求函数模块
返回值:promise对象（异步返回的数据是response.data 而不是response）
*/
import axios from 'axios'

// 传入三个参数 url data对象 type请求类型
export default function ajax (url, data = {}, type = 'GET') {
  // 返回一个promise对象
  return new Promise((resolve, reject) => {
    let promise
    // 当请求方式是get时，处理请求参数data
    if (type === 'GET') {
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      // 判断dataStr是否为空，处理url
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    promise.then((respondse) => {
      // 成功调用resolve
      resolve(respondse.data)
    }).catch((error) => {
      // 失败调用reject
      reject(error)
    })
  })
}
