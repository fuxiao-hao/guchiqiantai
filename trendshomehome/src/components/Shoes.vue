<template>
  <div class>
    <el-row>
      <el-col :span="6">
        <el-button @click="insertdvb()">添加商品信息</el-button>
      </el-col>
      <el-col :span="6">
        <el-input v-model="key" placeholder="商品名称"></el-input>
      </el-col>
      <el-col :span="3">
        <el-button type="primary" @click="pagecheck()">查询</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table :data="pageInfo.list" style="width: 100%" max-height="550">
          <el-table-column fixed prop="shoesid" label="编号" width="150"></el-table-column>
          <el-table-column fixed prop="shoesname" label="名称" width="150"></el-table-column>
          <el-table-column fixed prop="introduce" label="款号" width="150"></el-table-column>
          <el-table-column fixed prop="price" label="卖价" width="150"></el-table-column>
          <el-table-column fixed prop="purchasingprice" label="成本" width="150"></el-table-column>
          <el-table-column fixed prop="status" label="状态" width="150"></el-table-column>
          <el-table-column label="图片" width="100">
            <template slot-scope="scope">
              <img
                :src="host+'images/'+scope.row.image1+'.jpg'"
                width="80"
                height="80"
                class="image"
                onclick="imgcli(this)"
              />
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" @click="findid(scope.row)" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          :current-page.sync="pageInfo.pageNum"
          :page-size="pageInfo.pageSize"
          :page-sizes="[3, 5, 8, 10]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageInfo.total"
          @current-change="handleChangePage"
          @size-change="handleChangeSize"
        ></el-pagination>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-dialog
          title="添加商品信息"
          :visible.sync="dialogVisiblei"
          width="50%"
          :before-close="handleClose"
        >
          <el-form
            :model="pageInfoi"
            :rules="rules"
            ref="pageInfoi"
            label-width="140px"
            class="demo-ruleForm"
          >
            <el-row>
              <el-col :span="11">
                <el-form-item label="商品名称" prop="shoesname">
                  <el-input v-model="pageInfoi.shoesname"></el-input>
                </el-form-item>
                <el-form-item label="商品款号" prop="introduce">
                  <el-input v-model="pageInfoi.introduce"></el-input>
                </el-form-item>
                <el-form-item label="商品卖价" prop="price">
                  <el-input v-model="pageInfoi.price"></el-input>
                </el-form-item>
                <el-form-item label="商品成本" prop="purchasingprice">
                  <el-input v-model="pageInfoi.purchasingprice"></el-input>
                </el-form-item>
                <el-form-item label="商品状态" prop="status">
                  <el-input v-model="pageInfoi.status"></el-input>
                </el-form-item>
                <el-form-item label="商品介绍" prop="detail">
                  <el-input type="textarea" v-model="pageInfoi.detail" size="20"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="11" :offset="2">
                <!-- <el-upload
                class="avatar-uploader"
                :action="host+'shoes/saveupload'"   
                :show-file-list="false"
                name="img"
                :on-success="handleSuccess" >
                <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload> -->
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" :offset="6">
                <el-form-item>
                  <el-button type="primary" @click="insertspi('pageInfoi')">立即创建</el-button>
                  <el-button @click="resetForm('pageInfoi')">重置</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>

          <span slot="footer" class="dialog-footer"></span>
        </el-dialog>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-dialog
          title="修改商品信息"
          :visible.sync="dialogVisible"
          width="70%"
          :before-close="handleClose"
        >
          <el-form
            :model="pageInfos"
            :rules="rules"
            ref="pageInfos"
            label-width="140px"
            class="demo-ruleForm"
          >
            <el-row>
              <el-col :span="11">
                <el-form-item label="商品编号" prop="shoesid">
                  <el-input v-model="pageInfos.shoesid"></el-input>
                </el-form-item>
                <el-form-item label="商品名称" prop="shoesname">
                  <el-input v-model="pageInfos.shoesname"></el-input>
                </el-form-item>
                <el-form-item label="商品款号" prop="introduce">
                  <el-input v-model="pageInfos.introduce"></el-input>
                </el-form-item>
                <el-form-item label="商品卖价" prop="price">
                  <el-input v-model="pageInfos.price"></el-input>
                </el-form-item>
                <el-form-item label="商品成本" prop="purchasingprice">
                  <el-input v-model="pageInfos.purchasingprice"></el-input>
                </el-form-item>
                <el-form-item label="商品状态" prop="status">
                  <el-input v-model="pageInfos.status"></el-input>
                </el-form-item>
                <el-form-item label="商品介绍" prop="detail">
                  <el-input type="textarea" v-model="pageInfos.detail"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6" :offset="2">
                <!-- <el-upload
                  class="avatar-uploader"
                  :action="host+'shoes/saveupload'"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="pageInfos.image1" :src="host+'images/'+pageInfos.image1+'.jpg'" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload> -->
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12" :offset="6">
                <el-form-item>
                  <el-button type="primary" @click="updatespi('pageInfos')">立即创建</el-button>
                  <el-button @click="resetForm('pageInfos')">重置</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <span slot="footer" class="dialog-footer"></span>
        </el-dialog>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  computed: {
    host() {
      return this.$http.defaults.baseURL;
    }
  },
  data() {
    return {
      pageInfo: {},
      key: "",
      dialogVisible: false,
      dialogVisiblei: false,
      fileList: [],
      imageUrl1:'',
      imageUrls1:"",
      pageInfos: {
        shoesid: "",
        shoesname: "",
        introduce: "",
        price: "",
        purchasingprice: "",
        status: "",
        detail: "",
        image1:"",
      image2:"",
      image3:"",
      image4:"",
      image5:"",
      //   image1:"host+'images/'+pageInfos.image1+'.jpg'",
      // image2:"host+'images/'+pageInfos.image2+'.jpg'",
      // image3:"host+'images/'+pageInfos.image3+'.jpg'",
      // image4:"host+'images/'+pageInfos.image4+'.jpg'",
      // image5:"host+'images/'+pageInfos.image5+'.jpg'",
      },
      pageInfoi: {
        shoesid: "",
        shoesname: "",
        introduce: "",
        price: "",
        purchasingprice: "",
        status: "",
        detail: "",
        image1:"",
      image2:"",
      image3:"",
      image4:"",
      image5:"",
      },
      rules: {
        shoesid: [
          { required: true, message: "请输入物流公司名称", trigger: "blur" }
        ],
        shoesname: [
          { required: true, message: "请输入物流公司联系人", trigger: "blur" }
        ],
        introduce: [
          { required: true, message: "请输入物流公司联系电话", trigger: "blur" }
        ],
        price: [{ required: true, message: "请输入配送价格", trigger: "blur" }],
        purchasingprice: [
          { required: true, message: "请输入物流公司名称", trigger: "blur" }
        ],
        status: [
          { required: true, message: "请输入物流公司联系人", trigger: "blur" }
        ],
        detail: [
          { required: true, message: "请输入物流公司联系电话", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleClick(row) {
      this.$router.push({
        name: "ShoesEdit", //页面名字
        path: "/ShoesEdit", //页面路劲 和上面名字任意一个都可以
        query: { id: row.shoesid }
      });
      console.log(row);
    },

    pagecheck(page = 1,pageSize=3) {
      if (page < 1) page = 1;
      var params = new URLSearchParams();
      params.append("page", page);
      params.append("pageSize", pageSize);
      params.append("key", this.key);
      this.$http
        .post("/shoes/pagecheck", params)
        .then(response => {
          this.pageInfo = response.data;
          console.log(this.pageInfo);
        })
        .catch(error => {});
    },
    //根据id查询
    findid(row) {
      this.dialogVisible = true;
      var params = new FormData();
      params.append("shoesid", row.shoesid);
      console.log(row.shoesid);
      this.$http
        .post("/shoes/findid", params)
        .then(response => {
          this.pageInfos = response.data;
          console.log(this.pageInfos);
        })
        .catch(error => {});
    },
    //修改物流信息
    updatespi(formName) {
      var dialogVisible = this.dialogVisible;
      this.$refs[formName].validate(valid => {
        if (valid) {
          var params = new FormData();
          params.append("shoesid", this.pageInfos.shoesid);
          params.append("shoesname", this.pageInfos.shoesname);
          params.append("introduce", this.pageInfos.introduce);
          params.append("price", this.pageInfos.price);
          params.append("purchasingprice", this.pageInfos.purchasingprice);
          params.append("status", this.pageInfos.status);
          params.append("detail", this.pageInfos.detail);
          // params.append("image1", this.pageInfos.image1);
          this.$http
            .post("/shoes/updates", params)
            .then(response => {
              this.pagecheck();
              this.dialogVisible = false;
            })
            .catch(error => {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    insertdvb() {
      this.dialogVisiblei = true;
    },
    insertspi(formName) {
      var dialogVisible = this.dialogVisible;

      this.$refs[formName].validate(valid => {
        if (valid) {
          var params = new FormData();
          params.append("shoesid", this.pageInfoi.shoesid);
          params.append("shoesname", this.pageInfoi.shoesname);
          params.append("introduce", this.pageInfoi.introduce);
          params.append("price", this.pageInfoi.price);
          params.append("purchasingprice", this.pageInfoi.purchasingprice);
          params.append("status", this.pageInfoi.status);
          params.append("detail", this.pageInfoi.detail);
          // params.append("image1", this.pageInfoi.image1);
          // params.append("image2", this.pageInfoi.image2);
          // params.append("image3", this.pageInfoi.image3);
          // params.append("image4", this.pageInfoi.image4);
          // params.append("image5", this.pageInfoi.image5);
          this.$http
            .post("/shoes/save", params)
            .then(response => {
              this.dialogVisiblei = false;
              this.pagecheck();
            })
            .catch(error => {});
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //图片上传
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.error("最多只能上传" + fileList.length + "个文件");
    },
    //在上传之前回调，返回false终止上传
    handleBeforeUpload(file) {
      let extNames = ["jpg", "png"];
      let name = file.name;
      let ext = name.substring(name.lastIndexOf(".") + 1);

      if (!extNames.includes(ext)) {
        this.$message.error("只能上传jpg|png");
        return false;
      }

      if (file.size > 1024 * 50) {
        this.$message.error("文件不能大于50k");
        return false;
      }
    },
    //上传成功回调
    handleSuccess(response, file, fileList) {
      //第二个例子的
      this.imageUrl1 = this.host + response;
// console.log(response, file, fileList)
// console.log(response.substring(response.lastIndexOf('/')+1,response.lastIndexOf('.')))
      this.pageInfoi.image1=response.substring(response.substring(response.lastIndexOf('/')+1,response.lastIndexOf('.')));
    },


    //图片修改
  handleAvatarSuccess(response, file, fileList) {
        this.imageUrls1 = this.host + response;
        
        this.pageInfos.image1=response.substring(response.substring(response.lastIndexOf('/')+1,response.lastIndexOf('.')));

      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },

    //分页
    handleChangePage(val) {
      this.pagecheck(val, this.pageInfo.pageSize);
    },
    handleChangeSize(val) {
      this.pagecheck(this.pageInfo.pageNum, val);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  created() {
    this.pagecheck();
  }
};
</script>

<style scope>
.details {
  height: 50;
}
.box-table tbody .cell {
  max-height: 150px;
}
.el-textarea__inner {
  height: 100px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>