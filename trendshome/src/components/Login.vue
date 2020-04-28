<template>
    <div class="">
<el-row>
      <el-col :span="24" class="waibu">
        <el-row>
          <el-col :span="24">
            <h1>登录</h1>
            <br>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-row>
              <el-col :span="6" :offset="6" style="float:left" class="font2">
                <el-row class="font1">
                  <el-col :span="20">用户名</el-col>
                </el-row>
                <el-row class="font1">
                  <el-col :span="20">
                    <el-input v-model="uname" placeholder></el-input>
                  </el-col>
                </el-row>
                <br />
                <el-row class="font1">
                  <el-col :span="20" placeholder="请输入短信验证码">短信验证码</el-col>
                </el-row>
                <el-row class="font1">
                  <el-col :span="12">
                    <el-input></el-input>
                    <!-- @keyup.enter.native="login" v-model="upwd" placeholder show-password -->
                  </el-col>
                  <el-col :span="7" :offset="1">
                    <a href="#">发送验证码</a>
                  </el-col>
                </el-row>
                <br />
                <br />
                <el-row>
                  <el-col :span="20">
                    <el-button class="denglubuts">登录</el-button>
                    <!--@click="login" -->
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="20">
                    <br>
                    <el-link target="_blank">密码登录</el-link>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="6" style="float:left;display:none;" class="font3">
                <el-row class="font1">
                  <el-col :span="20">用户名</el-col>
                </el-row>
                <el-row class="font1">
                  <el-col :span="20">
                    <el-input v-model="uname" placeholder></el-input>
                  </el-col>
                </el-row>
                <br />
                <el-row class="font1">
                  <el-col :span="20" placeholder="请输入密码">密码</el-col>
                </el-row>
                <el-row class="font1">
                  <el-col :span="12">
                    <el-input></el-input>
                    <!-- @keyup.enter.native="login" v-model="upwd" placeholder show-password -->
                  </el-col>
                  <el-col :span="7" :offset="1">
                    <a href="#">发送验证码</a>
                  </el-col>
                </el-row>
                <br />
                <br />
                <el-row>
                  <el-col :span="20">
                    <el-button class="denglubuts">登录</el-button>
                    <!--@click="login" -->
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="20">
                    <br>
                    <el-link target="_blank" click="">密码登录</el-link>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span="1"><hr style="height:300px"/></el-col>
              <el-col :span="6" style="float:left">
                <el-row class="font1">
                  <el-col :span="20">
                    <h3>没有账户？</h3>
                  </el-col>
                </el-row>
                <el-row class="font1">
                  <el-col :span="20">拥有古驰账户您将获得以下权利：</el-col>
                  <el-col :span="20">
                    <ul>
                      <li>保存您的心愿清单</li>
                      <li>个性化您的推荐内容</li>
                      <li>订单寄送追踪及退换货管理</li>
                    </ul>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="20">
                    <el-button class="zhucebuts">创建账号</el-button>
                    <!--@click="login" -->
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            uname: "",
      upwd: "",
        }
    },
    components: {},
    methods: {
        display2(){

},
display3(){

}
    }
}
</script>

<style  scoped>
.font1 {
  line-height: 40px;
  text-align: left;
  padding-right: 10px;
}
.waibu {
  background-color: #e7e7e7;
  height: 1000px;
  align-content: center;
  margin-top: 80px;
}
.denglubuts {
  width: 310px;
  background-color: black;
  color: white;
}
.zhucebuts {
  width: 310px;
  border: 2px solid black;
  color: black;
}

</style>
