/*
 * @Author: Chanson Lau 
 * @Date: 2025-02-24 16:40:51
 * @LastEditors: Chanson Lau 
 * @LastEditTime: 2025-03-04 10:59:24
 * @FilePath: /code/moneySystem/src/utils/http.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 导入axios
import axios from 'axios';
// import store from '../store';

// 进行一些全局配置
// 公共路由(网络请求地址)
axios.defaults.baseURL = 'http://localhost:2010/api';
// 请求响应超时时间
// axios.defaults.timeout = 5000;

// 封装自己的get/post方法
export default {
  get: function(path = '', data = {}) {
    return new Promise(function(resolve, reject) {
      axios.get(path, {
        params: data
      })
        .then(function(response) {
          // 按需求来，这里我需要的是response.data，所以返回response.data，一般直接返回response
          resolve(response.data);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  },
  post: function(path = '', data = {}) {
    return new Promise(function(resolve, reject) {
      axios.post(path, data)
        .then(function(response) {
          resolve(response.data);
        })
        .catch(function(error) {
          reject(error);
        });
    });
  }
};