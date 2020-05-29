<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-button @click="insertdvb()">添加物流信息</el-button>
      </el-col>
      <el-col :span="6">
        <el-input v-model="key" placeholder="物流公司名称或物流公司联系人"></el-input>
      </el-col>
      <el-col :span="3">
        <el-button type="primary" @click="pagecheck()">查询</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table :data="pageInfo.list" style="width: 100%" max-height="550">
          <el-table-column fixed prop="shipid" label="物流公司编号" width="160"></el-table-column>
          <el-table-column prop="shipname" label="物流公司名称" width="160"></el-table-column>
          <el-table-column prop="shipcontact" label="物流公司联系人" width="160"></el-table-column>
          <el-table-column prop="telephone" label="物流公司联系电话" width="160"></el-table-column>
          <el-table-column prop="price" label="配送价格" width="160"></el-table-column>
          <el-table-column prop="modifiedtime" label="最后修改时间" width="160"></el-table-column>
          <el-table-column fixed="right" label="操作" width="110">
            <template slot-scope="scope">
              <el-button type="text" @click="findid(scope.row)">修改物流信息</el-button>
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
      <el-col :span="12">
        <el-dialog
          title="添加物流信息"
          :visible.sync="dialogVisiblei"
          width="30%"
          :before-close="handleClose"
        >
          <el-form
            :model="pageInfoi"
            :rules="rules"
            ref="pageInfoi"
            label-width="140px"
            class="demo-ruleForm"
          >
            <el-form-item label="物流公司名称" prop="shipname">
              <el-input v-model="pageInfoi.shipname"></el-input>
            </el-form-item>
            <el-form-item label="物流公司联系人" prop="shipcontact">
              <el-input v-model="pageInfoi.shipcontact"></el-input>
            </el-form-item>
            <el-form-item label="物流公司联系电话" prop="telephone">
              <el-input v-model="pageInfoi.telephone"></el-input>
            </el-form-item>
            <el-form-item label="配送价格" prop="price">
              <el-input v-model="pageInfoi.price"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="insertspi('pageInfoi')">立即创建</el-button>
              <el-button @click="resetForm('pageInfoi')">重置</el-button>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer"></span>
        </el-dialog>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-dialog
          title="修改物流信息"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <el-form
            :model="pageInfos"
            :rules="rules"
            ref="pageInfos"
            label-width="140px"
            class="demo-ruleForm"
          >
            <el-form-item label="物流公司编号" prop="shipid">
              <el-input v-model="pageInfos.shipid"></el-input>
            </el-form-item>
            <el-form-item label="物流公司名称" prop="shipname">
              <el-input v-model="pageInfos.shipname"></el-input>
            </el-form-item>
            <el-form-item label="物流公司联系人" prop="shipcontact">
              <el-input v-model="pageInfos.shipcontact"></el-input>
            </el-form-item>
            <el-form-item label="物流公司联系电话" prop="telephone">
              <el-input v-model="pageInfos.telephone"></el-input>
            </el-form-item>
            <el-form-item label="配送价格" prop="price">
              <el-input v-model="pageInfos.price"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="updatespi('pageInfos')">立即创建</el-button>
              <el-button @click="resetForm('pageInfos')">重置</el-button>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer"></span>
        </el-dialog>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageInfo: {},
      key: "",
      dialogVisible: false,
      dialogVisiblei: false,
      pageInfos: {
        shipid: "",
        shipname: "",
        shipcontact: "",
        telephone: "",
        price: ""
      },
      pageInfoi: {
        shipname: "",
        shipcontact: "",
        telephone: "",
        price: ""
      },
      rules: {
        shipname: [
          { required: true, message: "请输入物流公司名称", trigger: "blur" }
        ],
        shipcontact: [
          { required: true, message: "请输入物流公司联系人", trigger: "blur" }
        ],
        telephone: [
          { required: true, message: "请输入物流公司联系电话", trigger: "blur" }
        ],
        price: [{ required: true, message: "请输入配送价格", trigger: "blur" }]
      }
    };
  },
  methods: {
    // handleClick(row) {
    //   console.log(row);
    // },
    //查询分页
    pagecheck(page = 1, pageSize = 3) {
      if (page < 1) page = 1;
      var params = new URLSearchParams();
      params.append("page", page);
      params.append("key", this.key);
      params.append("pageSize", pageSize);
      this.$http
        .post("/shippinginfo/pagecheck", params)
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
      params.append("shipid", row.shipid);
      this.$http
        .post("/shippinginfo/findid", params)
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
          params.append("shipid", this.pageInfos.shipid);
          params.append("shipname", this.pageInfos.shipname);
          params.append("shipcontact", this.pageInfos.shipcontact);
          params.append("telephone", this.pageInfos.telephone);
          params.append("price", this.pageInfos.price);
          this.$http
            .post("/shippinginfo/updates", params)
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
          params.append("shipname", this.pageInfoi.shipname);
          params.append("shipcontact", this.pageInfoi.shipcontact);
          params.append("telephone", this.pageInfoi.telephone);
          params.append("price", this.pageInfoi.price);
          this.$http
            .post("/shippinginfo/save", params)
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

<style>
</style>