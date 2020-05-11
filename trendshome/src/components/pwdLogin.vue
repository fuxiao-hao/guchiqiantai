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
                  <el-col :span="20">手机号码</el-col>
                </el-row>
                <el-row class="font1">
                  <el-col :span="15">
                    <el-input v-model="phone" placeholder="请输入11位手机号码"></el-input>
                     <span style="color: red;">{{msg}}</span>
                  </el-col>
                </el-row>
                <br />

                <el-row class="font1">
                  <el-col :span="15">密码
                  <el-input  placeholder="请输入密码" v-model="code" :span="4" show-password></el-input>
                  </el-col>
                </el-row>

                <el-row class="font1">
                  <el-col :span="12">
                    <!-- @keyup.enter.native="login" v-model="upwd" placeholder show-password -->
                  </el-col>

                  <el-col :span="7" :offset="1">
                    <el-checkbox v-model="checked">记住我</el-checkbox>
                  </el-col>

                  <el-col :span="7" :offset="1">
                    <a href="#">忘记密码?</a>
                  </el-col>
                </el-row>

                <br />
                <br />
                <el-row>
                  <el-col :span="10">
                    <el-button class="denglubuts">登录</el-button>
                    <!--@click="login" -->
                  </el-col>
                </el-row>

                <el-row>
                  <el-col :span="15">
                    <br>
                    <router-link to="/login">验证码登录</router-link>
                  </el-col>
                </el-row>
              </el-col>
              

              <el-col :span="1"><hr style="height:300px"/></el-col>
              <el-col :span="6" style="float:left">
                <el-row class="font1">
                  <el-col :span="15" :offset="1">
                    <h3>没有账户？</h3>
                  </el-col>
                </el-row>
                <el-row class="font1">
                  <el-col :span="15" :offset="1">拥有古驰账户您将获得以下权利：</el-col>
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
                    <el-button class="zhucebuts" @click="addBatch">创建账号</el-button>
                    <!--@click="login" -->
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

     <!--创建账户对话框-->
                <el-dialog
                    title="创建您的账户"
                    :visible.sync="adddTag"
                    width="35%"
                    top="15vh"
                    :close-on-click-modal="false"
                    center="true"
                   >
                   <hr>
                   <el-row>
                     <el-col :span="15" offset="4">手机号码</el-col>
                     <br><br>
                     <el-col :span="12" offset="4"><el-input v-model="account.phone" placeholder="" @blur="findphone"></el-input></el-col>
                     <br><br>
                     <span style="color: red;">{{msg1}}</span>
                   </el-row>
                   <br><br>

                   <el-row>
                     <el-form inline>
                       <el-col :span="12" offset="4">
                        <el-form-item label="输入验证码" prop="code">
                          <el-input v-model="account.code" placeholder="请输入验证码" />
                        </el-form-item>
                        </el-col>
                        <el-form-item>
                          <el-button @click="send" type="success" :disabled="!show">
                            获取验证码
                            <span v-show="!show" class="count">({{count}}s)</span>
                          </el-button>
                          
                        </el-form-item>
                      </el-form>
                      
                   </el-row>
                  
                  <el-row>
                    <el-col :span="12" offset="4"><span style="color: red;">{{msg2}}</span></el-col>
                  </el-row>
                  <br><br>
                  <el-row>
                     <el-col :span="5" offset="4">设置密码（非必填）</el-col>
                     <br><br>
                     <el-col :span="15" offset="4">
                       <el-input v-model="account.passward" placeholder="至少6个字符包含数字大小写字母" show-password></el-input>
                     </el-col>
                     <br><br>
                   </el-row>  

                   <br><br>
                  <el-row>
                     <el-col :span="5" offset="4">电子邮箱</el-col>
                     <br><br>
                     <el-col :span="15" offset="4">
                       <el-input v-model="account.email" placeholder="请输入电子邮箱地址"></el-input>
                     </el-col>
                     <br><br>
                   </el-row>   

                  <br><br>
                  <el-row>
                     <el-col :span="15" offset="4">
                         <el-checkbox v-model="checked1">我愿意接收Gucci邮件获取新款推荐及更多内容</el-checkbox>
                         <br>
                         <el-checkbox v-model="checked2">创建账户代表您已接受Gucci的隐私政策和销售条款</el-checkbox>
                     </el-col>
                      <el-col :span="12" offset="4"><span style="color: red;">{{msg3}}</span></el-col>
                   </el-row> 

                    <span slot="footer" class="dialog-footer">
                        <el-button @click="addCancel">取消</el-button>
                        <el-button type="primary" @click="add">创建账户</el-button>
                    </span>
                </el-dialog>
    </div>
</template>

<script>
const TIME_COUNT = 60; //更改倒计时时间

export default {
    name: "",

    data() {
        return {
          show: true, // 初始启用按钮
          count: '', // 初始化次数
          timer: null,
          checked1:false,
          checked2:false,
          phone:"", 
          code: "",
          name:"",
          pwd:"",
          msg:"",
          msg1:"",
          msg2:"",
          msg3:"",
          account:{},
          servercode:"",
          //添加账户对话框
          adddTag:false,
        }
    },

    components: {},

    methods: {
      findphone(){
          alert("s");
      },
      send() {
        //判断手机号码是否为空
            if(this.account.phone==""||this.account.phone==undefined||this.account.phone.length<11){
              this.msg1="请输入11位手机号码";
              return false;
            }else{
              this.msg1="";
              //获取手机号码发送验证码(跨域访问 异步处理)
             let url="account/codeLogin?phone="+this.account.phone;

             this.$http.post(url).then(response=>{
                 console.log(response.data);
                 //拿到服务端发送的验证码
                 this.servercode=response.data;

             }).catch(function(error){

             });

            }
          if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
              } else {
                this.show = true;
                clearInterval(this.timer); // 清除定时器
                this.timer = null;
              }
            }, 1000)
          }
      },
      //点击获取验证码调用的方法
      codeDemo(){
         //判断手机号码是否为空
            if(this.phone==""||this.phone.length<11){
              this.msg="请输入11位手机号码";
            }else{
              this.msg="";
            }
      },
      //手机号码框离开焦点判断手机号码是否已注册

       codedemo2(){
          
       },
       
      //添加操作 弹出对话框
        addBatch(){
          this.adddTag=true;
          this.row={};
        },

        //添加取消操作
        addCancel(){
            //关闭对话框
           this.adddTag = false;
        },

        //添加账户 异步处理
        add(){
          //1.非空判断
           if(this.account.phone==""||this.account.phone==undefined||this.account.phone.length<11){
              this.msg1="请输入11位手机号码";
              return false;
            }

            
           //2.检查验证码是否发送正确
           if(this.servercode!=this.account.code){
             this.msg2="验证码输入错误";
           }
          
           //3.检查客户是否同意隐私政策
           if(this.checked1==false||this.checked2==false){
             this.msg3="请同意销售条款";
            }else{
              this.msg3="";
            }

           //4.获取用户填写信息添加用户
             //获取手机号码发送验证码(跨域访问 异步处理)
             let url="account/save";

             this.$http.post(url,this.account).then(response=>{
                 console.log(response.data.message);
                 this.$router.push({ path:'/index'});

             }).catch(function(error){

             });
        },
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
