export default{
    state:{
        user:null, //默认为空
    },
    getters:{
        getUser(state){
            return state.user;
        },
       
    },
    
    mutations:{
        setUser(state,user){
            state.user=user;
        }
    },
    
    actions:{
      
      login(context,user){
          console.log("调用setUser的方法");
          context.commit("setUser",user);
      },
      logout(context){
        context.commit("setUser",null);
      },
    }
}
