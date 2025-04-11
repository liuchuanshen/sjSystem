import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/home',
      name: '首页',
      component: Home
    }
  ]
})
