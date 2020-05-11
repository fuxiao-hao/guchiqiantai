import Vue from 'vue'
import Vuex from 'vuex'
import loginMoudle from '@/store/login.js'

Vue.use(Vuex)


var store=new Vuex.Store({
  
    state:{
        appview:"home", //默认为空
    },
    getters:{
        getAppview(state){
            return state.appview;
        },
       
    
    },
    mutations:{
        update(state,appview){
            state.appview=appview;
        }
    },
    
    actions:{
      
      change(context,appview){
        context.commit("update",appview);
      },

    //   //Promise异步
	// 	login({commit},user) {
    //         let params=user;
    //         let url="user/select";
    //         console.log("hello");
    //         console.log(_this);
    //         _this.$http.post(url,params).then(response=>{
    //             //请求成功
    //               console.log(response.data);
    //             //接收数据
    //             commit("update",response.data);
    //         }).catch(function(error){
                
    //             console.group("异常信息");
    //               console.log(error);
    //         });
	// 	},

    },
    modules:{
        loginMoudle,
    },
});

//导出
export default store;