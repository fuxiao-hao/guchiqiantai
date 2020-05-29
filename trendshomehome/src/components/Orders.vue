<template>
  <div class>
    <el-row>
      <el-col :span="6">
        <el-input v-model="key" placeholder="订单编号或物流单号"></el-input>
      </el-col>
      <el-col :span="3">
        <el-button type="primary" @click="pagecheck()">查询</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table :data="pageInfo.list" style="width: 100%" max-height="550">
          <el-table-column fixed prop="orderId" label="订单编号" width="150"></el-table-column>
          <el-table-column prop="accountid" label="账户编号" width="120"></el-table-column>
          <el-table-column prop="shipid" label="物流公司编号" width="120"></el-table-column>
          <el-table-column prop="ordertime" label="创建时间" width="120"></el-table-column>
          <el-table-column prop="orderprice" label="订单价格" width="120"></el-table-column>
          <el-table-column prop="orderstatus" label="订单状态" width="120"></el-table-column>
          <el-table-column prop="paymentway" label="支付方式" width="120"></el-table-column>
          <el-table-column prop="payaccount" label="支付账号" width="120"></el-table-column>
          <el-table-column prop="paytime" label="支付时间" width="120"></el-table-column>
          <el-table-column prop="deliverytime" label="发货时间" width="120"></el-table-column>
          <el-table-column prop="deliveryperson" label="发货人" width="120"></el-table-column>
          <el-table-column prop="Receiptconfirmationtime" label="收货确认时间" width="120"></el-table-column>
          <el-table-column prop="Receiptaddress" label="收货地址" width="120"></el-table-column>
          <el-table-column prop="consignee" label="收货人" width="120"></el-table-column>
          <el-table-column prop="paystatus" label="支付状态" width="120"></el-table-column>
          <el-table-column prop="settlementdate" label="结算时间" width="120"></el-table-column>
          <el-table-column prop="trackingnumber" label="物流单号" width="120"></el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button @click="pagecheckshippinginfo(scope.row)">确认发货</el-button>
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
          title="修改物流信息"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="140px"
            class="demo-ruleForm"
          >
            <el-form-item label="物流公司编号" prop="shipid">
              <el-select v-model="ruleForm.shipid" placeholder="请选择物流公司">
                <el-option
                  v-for="pages in pageInfos"
                  :key="pages.shipid"
                  :label="pages.shipname"
                  :value="pages.shipid"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="订单状态" prop="orderstatus">
              <el-input v-model="ruleForm.orderstatus"></el-input>
            </el-form-item>
            <el-form-item label="发货人" prop="deliveryperson">
              <el-input v-model="ruleForm.deliveryperson"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="update('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
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
      pageInfos: {},
      orderstatus:"已发货",
      key: "",
      dialogVisible: false,
      row: "",
      ruleForm: {
        shipid: "",
        orderstatus: "",
        deliveryperson: ""
      },
      rules: {
        shipid: [
          { required: true, message: "请输入物流公司编号", trigger: "blur" }
        ],
        orderstatus: [
          { required: true, message: "请输入订单状态", trigger: "blur" }
        ],
        deliveryperson: [
          { required: true, message: "请输入发货人", trigger: "blur" }
        ],
        trackingnumber: [
          { required: true, message: "请输入物流单号", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //orders分页查询
    pagecheck(page = 1, pageSize = 3) {
      if (page < 1) page = 1;
      var params = new URLSearchParams();
      params.append("page", page);
      params.append("key", this.key);
      params.append("pageSize", pageSize);
      this.$http
        .post("/orders/pagecheck", params)
        .then(response => {
          this.pageInfo = response.data;
          console.log(this.pageInfo);
        })
        .catch(error => {});
    },
    //shippinginfo查询
    pagecheckshippinginfo(row) {
      this.dialogVisible = true;
      this.row = row;
      this.$http
        .post("/shippinginfo/find")
        .then(response => {
          this.pageInfos = response.data;
          console.log(this.pageInfos);
        })
        .catch(error => {});
    },
    //orders确认发货
    update(formName) {
     var dialogVisible=this.dialogVisible;
      this.$refs[formName].validate(valid => {
        if (valid) {
          var member = new FormData();
          member.append("shipid", this.ruleForm.shipid);
          member.append("deliveryperson", this.ruleForm.deliveryperson);
          member.append("orderId", this.row.orderId);
          member.append("orderstatus",this.orderstatus);
          this.$http
            .post("/orders/update", member)
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
    resetForm(formName) {
      if (this.$refs[formName] !== undefined) {
        this.$refs[formName].resetFields();
      }
    }
  },
  created() {
    this.pagecheck();
  }
};
</script>

<style>
</style>
