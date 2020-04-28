import Vue from 'vue'
import Router from 'vue-router'
import MyLayuto from '@/components/MyLayuto'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/MyLayuto',
      name: 'MyLayuto',
      component: MyLayuto,
      title:'Layout布局'
    },
  ]
})