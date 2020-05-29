import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//登录状态模块
import loginModule from '@/store/login'

export default new Vuex.Store({

    //第一种方案,修改state时，同时修改sessionStorage的中的数据
    state:{
       // app_view:"Login",//存储显示的组件（Login,Index)
       app_view:sessionStorage.getItem("app_view")||'Login',
    },
    mutations:{
        setAppView(state,val){
            state.app_view=val;
             //第2中方式，注释语句,第二种方案间App.vue
           // sessionStorage.setItem("app_view",val);
        }
    }  ,
    getters:{
        getAppView(state){
            return state.app_view;
        }
    },
    actions:{
        change({commit},view){
            commit("setAppView",view);
        }
    },
    modules:{
        loginModule,
    }
});