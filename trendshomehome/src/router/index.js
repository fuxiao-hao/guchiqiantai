 import Vue from 'vue'
import Router from 'vue-router'
// import MyLayuto from '@/components/MyLayuto'
import Shoes from '@/components/Shoes'
import Orders from '@/components/Orders'
import Shippinginfo from '@/components/Shippinginfo'
import ShoesEdit from '@/components/ShoesEdit'
Vue.use(Router)

export default new Router({
  routes: [
     // 下面都是固定的写法
    {
      path: '/Shoes',
      name: 'Shoes',
      component: Shoes,
      title:'商品信息'
      
    },
    {
      path: '/Orders',
      name: 'Orders',
      component: Orders,
      title:'订单'
    },
    {
      path: '/Shippinginfo',
      name: 'Shippinginfo',
      component: Shippinginfo,
      title:'物流公司'
    },
    {
      path: '/ShoesEdit',
      name: 'ShoesEdit',
      component: ShoesEdit,
      title:'商品详情'
    },
  ]
})