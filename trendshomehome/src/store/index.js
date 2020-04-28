import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import loginMudlie from '@/store/login'

export default new Vuex.Store({
    //第一种方案
    state:{
        app_view:sessionStorage.getItem("app_view")||"Login",
    },
    getters:{
        getAppView(state){
            return state.app_view;
        }
    },
    mutations:{
        setAppView(state,val){
            state.app_view=val;
            //sessionStorage.setItem("app_view",val);
        }
    },
    actions:{
        change({commit},view){
            commit("setAppView",view);
        }
    },
    modules:{
        loginMudlie,
    }
});