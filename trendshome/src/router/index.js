import Vue from 'vue'
import Router from 'vue-router'
import Loign from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'Login',
      name: '登录',
      component:Loign,
    }
  ]
})
