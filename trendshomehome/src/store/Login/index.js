export default{

    //第一种方案,修改state时，同时修改sessionStorage的中的数据
    //sessionStorage的中的数据是字符串,JSON.stringify将js对象转换为json格式的字符串
    // JSON.parse 将json格式的字符串转换为js对象
    state:{
        user:JSON.parse(sessionStorage.getItem("session_user"))||null,
    },
    mutations:{
        setUser(state,user){
            state.user=user;
            //第2中方式，注释语句，第二种方案间App.vue
           // sessionStorage.setItem("session_user",JSON.stringify(user));
        }
    },
    getters:{
        getSessionUser(state){
            return state.user;
        },
        getUserName(state){
            if(state.user!=null){
                return state.user.uname;
            }else{
                return null;
            }
        },
    },
   
    actions:{
        login({commit},user){
            console.log("login");
            commit("setUser",user);
        },
        logout({commit}){
            commit("setUser",null);
        },
    }
}