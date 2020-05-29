<template>
  <div>
    <el-row>
      <el-col :span="8"><img
            :src="host+'images/'+pageInfo.image1+'.jpg'"
            width="400"
            height="400"
            class="image"
            onclick="imgcli(this)"
          /></el-col>
      <el-col :span="8"><img
            :src="host+'images/'+pageInfo.image2+'.jpg'"
            width="400"
            height="400"
            class="image"
            onclick="imgcli(this)"
          /></el-col>
      <el-col :span="8">
        <el-row>
          <el-col :span="5"><span>商品编号：</span></el-col>
          <el-col :span="19"><span>{{pageInfo.shoesid}}</span></el-col>
        </el-row>
        <el-row>
          <el-col :span="5"><span>商品名称：</span></el-col>
          <el-col :span="19"><span>{{pageInfo.shoesname}}</span></el-col>
        </el-row>
        <el-row>
          <el-col :span="5"><span>商品款号：</span></el-col>
          <el-col :span="19"><span>{{pageInfo.introduce}}</span></el-col>
        </el-row>
        <el-row>
          <el-col :span="5"><span>商品卖价：</span></el-col>
          <el-col :span="19"><span>{{pageInfo.price}}</span></el-col>
        </el-row>
        <el-row>
          <el-col :span="5"><span>商品成本：</span></el-col>
          <el-col :span="19"><span>{{pageInfo.purchasingprice}}</span></el-col>
        </el-row>
        <el-row>
          <el-col :span="5"><span>商品状态：</span></el-col>
          <el-col :span="19"><span>{{pageInfo.status}}</span></el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><img
            :src="host+'images/'+pageInfo.image3+'.jpg'"
            width="400"
            height="400"
            class="image"
            onclick="imgcli(this)"
          /></el-col>
      <el-col :span="8"><img
            :src="host+'images/'+pageInfo.image4+'.jpg'"
            width="400"
            height="400"
            class="image"
            onclick="imgcli(this)"
          /></el-col>
      <el-col :span="8">
        <el-row>
          <el-col :span="5"><span>商品介绍：</span></el-col>
          <el-col :span="19"><span>{{pageInfo.detail}}</span></el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><img
            :src="host+'images/'+pageInfo.image5+'.jpg'"
            width="400"
            height="400"
            class="image"
            onclick="imgcli(this)"
          /></el-col>
      <el-col :span="8"></el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <el-button @click="handleClick()" type="text" size="small">返回商品页</el-button>
  </div>
</template>

<script>
export default {
  computed:{
        host(){
            return this.$http.defaults.baseURL;
        }
    },
  data() {
    return {
      pageInfo: {},
    };
  },
  created() {
    this.getinfo();
  },
  methods: {
    getinfo() {
     var shoesid=this.$router.history.current.query.id;
     console.log(shoesid);
     var params = new URLSearchParams();
     params.append("shoesid", shoesid);
      this.$http
        .post("/shoes/findid", params)
        .then(response => {
          this.pageInfo = response.data;
          console.log(this.pageInfo);
        })
        .catch(error => {});
    },
    handleClick() {    
      this.$router.push({
        name: "Shoes", //页面名字
        path: "/Shoes", //页面路劲 和上面名字任意一个都可以     
      });
    },
  }
};
</script>