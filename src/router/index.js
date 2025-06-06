import Vue from 'vue'
import Router from 'vue-router'
import Home from '../App.vue'
import { Message } from 'element-ui';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/index',
      component: Home
    },
    {
      path: '*',
      component: Home
    }
  ]
})

export default router;
