<template>
  <div id>
    <el-container>
      <el-header>Element-UI组件
          <span class="font1">
              {{$store.getters.getUserName}}
          <el-link type=danger @click="logout">注销</el-link>
          </span>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <ul v-for="route in this.$router.options.routes" :key="route">
            <li>
              <router-link :to="route.path">{{route.name}}</router-link>
            </li>
          </ul>
          <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <el-menu-item v-for="route in this.$router.options.routes" 
      :key="route.path"
      :index="route.path">
        <i class="el-icon-setting"></i>
        <span slot="title" :to="route.path">{{route.name}}</span>
      </el-menu-item></el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
    name: "",
    data() {
        return {}
    },
    components: {},
    methods: {
        logout(){
            this.$store.dispatch("change","Login")
        }
    },
    // mounted(){
    //   let url="login/findSesUser";
    //   this.$http.get(url).then(Response=>{
    //     console.log(Response.data)
    //   }).
    // }
}
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  min-height: 590px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.font1 {
    float:right;
}
.el-menu{
  min-height: 590px;
  text-align: left;
}
</style>

