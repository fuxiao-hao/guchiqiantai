<template>
  <div id="app">   
     <component :is="$store.getters.getAppView"></component>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Index from '@/components/Index'

export default {
  name: 'App',  
  components:{
    Login,
    Index
  },
  created(){
    //第二种方案
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("app_view") ) {
         this.$store.dispatch("change",sessionStorage.getItem("app_view"));
    } 

      if (sessionStorage.getItem("session_user") ) {
         this.$store.commit("setUser",JSON.parse(sessionStorage.getItem("session_user")));
      } 

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("app_view",this.$store.getters.getAppView);   
        sessionStorage.setItem("session_user",JSON.stringify(this.$store.getters.getSessionUser))
    });
    }
}
</script>

<style>

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .font1{
   line-height: 40px;
   text-align: right;
   padding-right: 10px;
}
</style>
