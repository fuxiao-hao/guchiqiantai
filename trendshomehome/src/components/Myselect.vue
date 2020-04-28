<template>
  <div class>
    <el-row>
      <el-col :span="6">
        网址
        <el-select v-model="site" clearable placeholder="请选择">
          <el-option
            v-for="item in siteList"
            :key="item.id"
            :label="item.name"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        网址
        <el-select v-model="site" clearable multiple placeholder="请选择">
          <el-option
            v-for="item in siteList"
            :key="item.id"
            :label="item.name"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        网址
        <el-select v-model="site1" clearable multiple collapse-tags placeholder="请选择">
          <el-option
            v-for="item in siteList"
            :key="item.id"
            :label="item.name"
            :value="item.value"
            :disabled="item.disabled"
            @change="handChange"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        多选
        <el-select v-model="site" clearable multiple placeholder="请选择">
          <el-option
            v-for="item in siteList"
            :key="item.id"
            :label="item.name"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-select v-model="site" filterable placeholder="请选择">
          <el-option v-for="item in siteList" 
          :key="item.id"
            :label="item.name"
            :value="item.value"
            :disabled="item.disabled"></el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-select
          v-model="site"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签"
        >
          <el-option
            v-for="item in siteList"
            :key="item.id"
            :label="item.name"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
<el-select
          v-model="site"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签"
        >
        <el-option-group
            v-for="group in users"
            :key="group.sex"
            :label="group.sex"
          >
          <el-option
            v-for="item in group.list"
            :key="item.id"
            :label="item.name"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-option-group>
        </el-select>
      </el-col>
      <el-col :span="6">
          远程加载
          <el-select
          v-model="site"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="请选择文章标签"
        >
          <el-option
            v-for="item in userList"
            :key="item.id"
            :label="item.name"
            :value="item.value"
            :disabled="item.disabled"
          ></el-option>
        </el-select>
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
      site1: [],
      siteList: [
        { id: 1, name: "QQ", value: "http://www.qq.com" },
        { id: 2, name: "牛耳", value: "http://www.newer.com" },
        { id: 3, name: "新浪", value: "http://www.sina.com", disabled: true },
        { id: 3, name: "新浪", value: "http://www.sina.com" }
      ],
      value: "",
      users:[
          {name:"男",list:[
              {id:1,name:"jack"},
              {id:2,name:"tom"},
          ]},
          {name:"女",list:[
              {id:3,name:"mary"},
              {id:4,name:"rose"},
              {id:5,name:"andy"},
          ]}
      ],
      userList:{},
    };
  },
  components: {},
  methods: {
    handChange(item) {
      console.log(item);
    }
  },
  watch: {
    site1: function(value) {
      console.log(value);
    }
  }
};
</script>

<style  scoped>
</style>
