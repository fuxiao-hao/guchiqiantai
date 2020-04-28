<template>
  <div class>
    
    <el-row>
      <el-col :span="8" :offset="8">
        <h1>登录</h1>
      </el-col>
    </el-row>
    <el-row class="font1">
      <el-col :span="2" :offset="4" >用户名</el-col>
      <el-col :span="8">
        <el-input v-model="uname" placeholder></el-input>
      </el-col>
    </el-row>
    <el-row class="font1">
      <el-col :span="2" :offset="4" >密码</el-col>
      <el-col :span="8">
        <el-input @keyup.enter.native="login" v-model="upwd" placeholder show-password></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8" :offset="6">
        <el-button @click="login">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        uname:'',
        upwd:'',
    };
  },
  components: {},
  methods: {
    login() {
        let url="login/loing";
        let params=new URLSearchParams;
        params.append("uname",this.uname);
        params.append("upwd",this.upwd)
        this.$http.post(url,params).then(Response=>{
            console.log(Response)
            this.$store.dispatch("change", "Index");
            this.$store.dispatch("login", Response.data);
        }).catch(ex=>{});
    }
  }
};
</script>

<style  scoped>
.font1{
    line-height:40px;
    text-align: right;
    padding-right: 10px;
}
</style>
