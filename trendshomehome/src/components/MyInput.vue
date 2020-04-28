<template>
  <div class>
    <el-row>
      <el-col :span="6">
        复合型输入框：
        <el-input placeholder="请输入内容" v-model="site">
          <template slot="prepend">Http://</template>
          <spen slot="append">.com</spen>
        </el-input>
      </el-col>
      <el-col :span="6">
        合型输入框：(select)
        <el-input placeholder="请输入内容" v-model="site" class="input-with-select">
          <el-select v-model="seleId" slot="prepend" placeholder="请选择" @change="handleChange">
            <el-option v-for="item in siteList" :label="item.name" :value="item.id" :key="item.id"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        带入建议
        <div>激活即列出输入建议</div>
        <el-autocomplete
          class="inline-input"
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          @select="handleSelect"
        ></el-autocomplete>
      </el-col>
      <el-col :span="6">
        <div class="sub-title">输入后匹配输入建议</div>
        <el-autocomplete
          class="inline-input"
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete>
      </el-col>
      <el-col :span="6">
        <div class="sub-title">自定义模板</div>
        <el-autocomplete
          class="inline-input"
          v-model="state1"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          @select="handleSelect"
        >
          <template slot-scope="{ item }">
            <span>{{ item.id }} ==> {{ item.name }} ==> {{ item.value }}</span>
          </template>
        </el-autocomplete>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        远程加载
        <div>激活即列出输入建议</div>
        <el-autocomplete
          class="inline-input"
          v-model="state1"
          :fetch-suggestions="querySearch2"
          placeholder="请输入内容"
          value-key="uname"
          @select="handleSelect"
          :trigger-on-focus="false"
        ></el-autocomplete>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      site: "",
      siteList: [
        { id: 1, name: "QQ", value: "http://www.qq.com" },
        { id: 2, name: "牛耳", value: "http://www.newer.com" },
        { id: 3, name: "新浪", value: "http://www.sina.com" }
      ],
      seleId: "2",
      state1: ""
    };
  },
  components: {},
  methods: {
    handleChange(val) {
      console.log(val);
    },
    querySearch(val, callback) {
      console.log();
      let  result = [];
      result = val ? this.doFilter(val) : this.siteList;
      callback(result);
    },
    doFilter(val) {
      return this.siteList.filter(item => {
        return item.name.includes(val);
      });
    },
    handleSelect(item) {
      console.log(itme);
    },
    querySearch2(val, callback){

    }
  }
};
</script>

<style  scoped>
.el-input .el-select {
  widows: 130px;
}
</style>
