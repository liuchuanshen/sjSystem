/*
 * @Author: Chanson Lau 
 * @Date: 2025-02-24 16:40:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-04-11 14:24:27
 * @FilePath: /code/moneySystem/src/utils/http.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 导入axios
import axios from 'axios';
// import store from '../store';
import { Message } from 'element-ui';

// 进行一些全局配置
// 公共路由(网络请求地址)
axios.defaults.baseURL = 'http://localhost:2010/api';
// 请求响应超时时间
// axios.defaults.timeout = 5000;

// 添加请求拦截器，检查登录状态
axios.interceptors.request.use(
  function(config) {
    const authStr = localStorage.getItem('auth');
    if (authStr) {
      try {
        const authData = JSON.parse(authStr);
        const now = Date.now();
        
        // 如果过期时间小于当前时间，跳转到登录页面
        if (now > authData.expireTime) {
          Message.error('登录已过期，请重新登录！'); 
          // 清除 auth 数据并跳转到登录页
          localStorage.removeItem('auth');
          window.location.href = '/login'; 
          return Promise.reject('登录过期');
        }
      } catch (e) {
        // 如果 JSON 解析出错，也跳转到登录页面
        localStorage.removeItem('auth');
        window.location.href = '/login';
        return Promise.reject('解析失败，跳转到登录');
      }
    }

    // 如果没有过期，继续请求
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 封装自己的get/post方法
export default {
  get: function(path = '', data = {}) {
    return new Promise(function(resolve, reject) {
      axios.get(path, {
        params: data
      })
        .then(function(response) {
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