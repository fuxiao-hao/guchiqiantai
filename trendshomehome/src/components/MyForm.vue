<template>
  <div class>
    <el-row>
      <el-col :span="6">
        性别
        <el-radio-group v-model="sex">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="0">女</el-radio>
        </el-radio-group>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div>
          <el-radio-group v-model="radio1">
            <el-radio-button label="上海"></el-radio-button>
            <el-radio-button label="北京"></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
          </el-radio-group>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="上海"></el-checkbox>
          <el-checkbox label="北京"></el-checkbox>
          <el-checkbox label="广州"></el-checkbox>
          <el-checkbox label="深圳"></el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-checkbox-group v-model="checkList" @change="handleChecked">
          <el-checkbox v-for="item in cities" :label="item" :key="item"></el-checkbox>
        </el-checkbox-group>
        <div style="margin: 15px 0;">
          <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll"
            @change="handleCheckChange"
          >全选</el-checkbox>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        用户名：
        <el-input
          v-model="uname"
          placeholder="请输入内容"
          clearable
          suffix-icon="el-icon-user"
          prefix-icon="el-icon-star-on"
        ></el-input>
      </el-col>
      <el-col :span="6">
        密码：
        <el-input
          v-model="uname"
          placeholder="请输入密码"
          clearable
          suffix-icon="el-icon-user"
          prefix-icon="el-icon-star-on"
          show-password
        ></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="intro"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input type="textarea" autosize placeholder="请输入内容" v-model="intro"></el-input>
        <div style="margin: 20px 0;"></div>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="intro"
        ></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      sex: 0,
      radio1: "上海",
      checkList: ["北京"],
      cities: ["北京", "北京", "北京", "北京"],
      isIndeterminate: true,
      checkAll: false,
      uname: "",
      intro: "sdfsd"
    };
  },
  components: {},
  methods: {
    handleCheckChange(val) {
      console.log(val);
      this.checkList = val ? this.cities : [];
      this.isIndeterminate = false;
    },
    handleChecked() {
      this.checkAll = val.length === this.citiex.length;
      this.isIndeterminate = val.length > 0 && val.length < this.cities.length;
    }
  }
};
</script>

<style  scoped>
</style>
