import Vue from 'vue'
import Router from 'vue-router'
//导入组件
import login from '@/components/Login'
import pwdLogin from '@/components/pwdLogin'
import index from '@/components/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: login,
      title:"登录"
    },
    {
      path: '/pwdLogin',
      component: pwdLogin,
      title:"密码登录"
    },
    {
      path: '/index',
      component: index,
      title:"首页"
    },
  ]
})
