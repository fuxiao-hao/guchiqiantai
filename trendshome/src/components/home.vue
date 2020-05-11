<template>
  <div id="app">
    <el-container>
      <el-header>
    <el-row >
      <el-col :span="24">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="black"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <a href="#"><h6 class="h6left"><i class="el-icon-map-location"></i>中国大陆地区</h6></a>
          <h6 class="h6left">简体中文</h6>
          <a href="#"><h6 class="h6left">客户服务</h6></a>
          <h6 class="h6left"><i class="el-icon-phone-outline"></i>400.8210.582</h6>
         <h1 style="float:left;margin-left:10px;color:white">GUCCI</h1>
         <el-submenu index="1">
            <template slot="title" class="templates">全新资讯</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
              <el-menu-item index="1-4-2">选项2</el-menu-item>
              <el-menu-item index="1-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title" class="templates">女士</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">男士</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项1</el-menu-item>
              <el-menu-item index="3-4-2">选项2</el-menu-item>
              <el-menu-item index="3-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">童装</template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
            <el-menu-item index="4-3">选项3</el-menu-item>
            <el-submenu index="4-4">
              <template slot="title">选项4</template>
              <el-menu-item index="4-4-1">选项1</el-menu-item>
              <el-menu-item index="4-4-2">选项2</el-menu-item>
              <el-menu-item index="4-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">礼品</template>
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
            <el-menu-item index="5-3">选项3</el-menu-item>
            <el-submenu index="5-4">
              <template slot="title">选项4</template>
              <el-menu-item index="5-4-1">选项1</el-menu-item>
              <el-menu-item index="5-4-2">选项2</el-menu-item>
              <el-menu-item index="5-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">珠宝和腕表</template>
            <el-menu-item index="6-1">选项1</el-menu-item>
            <el-menu-item index="6-2">选项2</el-menu-item>
            <el-menu-item index="6-3">选项3</el-menu-item>
            <el-submenu index="6-4">
              <template slot="title">选项4</template>
              <el-menu-item index="6-4-1">选项1</el-menu-item>
              <el-menu-item index="6-4-2">选项2</el-menu-item>
              <el-menu-item index="6-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
           <el-submenu index=7>
            <template slot="title">美妆</template>
            <el-menu-item index="7-1">选项1</el-menu-item>
            <el-menu-item index="7-2">选项2</el-menu-item>
            <el-menu-item index="7-3">选项3</el-menu-item>
            <el-submenu index="7-4">
              <template slot="title">选项4</template>
              <el-menu-item index="7-4-1">选项1</el-menu-item>
              <el-menu-item index="7-4-2">选项2</el-menu-item>
              <el-menu-item index="7-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
           <el-submenu index="8">
            <template slot="title">家饰</template>
            <el-menu-item index="8-1">选项1</el-menu-item>
            <el-menu-item index="8-2">选项2</el-menu-item>
            <el-menu-item index="8-3">选项3</el-menu-item>
            <el-submenu index="8-4">
              <template slot="title">选项4</template>
              <el-menu-item index="8-4-1">选项1</el-menu-item>
              <el-menu-item index="8-4-2">选项2</el-menu-item>
              <el-menu-item index="8-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
           <el-submenu index="9">
            <template slot="title">古驰故事</template>
            <el-menu-item index="9-1">选项1</el-menu-item>
            <el-menu-item index="9-2">选项2</el-menu-item>
            <el-menu-item index="9-3">选项3</el-menu-item>
            <el-submenu index="9-4">
              <template slot="title">选项4</template>
              <el-menu-item index="9-4-1">选项1</el-menu-item>
              <el-menu-item index="9-4-2">选项2</el-menu-item>
              <el-menu-item index="9-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          
           
          
          <el-menu-item index="11">
            <a href="#"><i class="el-icon-shopping-cart-2"></i></a>
          </el-menu-item>

           <el-menu-item index="12">
            <router-link to="/login">登录</router-link>
          </el-menu-item>
        </el-menu>
        
        
      </el-col>
      
    </el-row>
</el-header>
 

   
 <el-container>
   
    <el-main>
      <router-view></router-view>
    </el-main>
    
</el-container>

 <el-footer>页脚容器</el-footer>
</el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.el-menu-demo {
  background: white;
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 80;
}
.h6left{
  float: left;
  margin-left: 10px;
  color: white;
}
.templates{
  background-color: white;
}


.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    line-height: 50px;
    min-height: 580px;
  }
  
  .el-main {
    width: 500px;
    background-color: #E9EEF3;
    color: #333;
    height: 850px;
    line-height: 10px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
