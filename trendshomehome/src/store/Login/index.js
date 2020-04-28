import { parse } from "semver";

export default{
    state:{
        user:JSON.parse(sessionStorage.getItem("session_user"))||null,
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
    }
    },
    mutations:{
        setUser(state,user){
            state.user=user;
            //sessionStorage.setItem("session_user",JSON.stringify(user))
        }
    },
    actions:{
        login({commit},user){
            commit("setUser",user);
        },
        logout(){
commit("setUser",null)
        }
    }
}