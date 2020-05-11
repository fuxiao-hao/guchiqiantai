// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//导入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//导入vuex
import Vuex from 'vuex'
import axios from 'axios'
//使用ElementUI
Vue.use(ElementUI)
//使用vuex
Vue.use(Vuex)

axios.defaults.withCredentials=true;
Vue.config.productionTip = false
Vue.prototype.$http=axios
Vue.prototype.$http.defaults.baseURL = 'http://localhost:8080/'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
