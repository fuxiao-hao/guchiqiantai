<template>
  <div class>
    <el-row>
      <el-col :span="6" class="font1">
          类别
           <el-cascader
    v-model="type"
    :options="types"
    @change="handleChange"></el-cascader>
      </el-col>
      <el-col :span="6">
          悬浮
           <el-cascader
    v-model="type"
    :options="types"
    :props="{expandTrigger:'hover',multiple:true}"
    clearable 
    show-all-levels
    filterable
    @change="handleChange"></el-cascader>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
          <el-cascader
    v-model="user"
    :options="users"
    :props="props"
    @change="handleChange"></el-cascader>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        type:'',
        type2:[],
        types:[
            {value:'1',label:'计算机',children:[
                {value:'11',label:'java',children:[
                {value:'111',label:'jsp'},
                {value:'112',label:'spring'},
                {value:'113',label:'mybatis'}
            ]},{value:'11',label:'java',children:[
                {value:'111',label:'jsp'},
                {value:'112',label:'spring'},
                {value:'113',label:'mybatis'}
            ]}
            ]},{value:'1',label:'计算机',children:[
                {value:'11',label:'java'}
            ]}
        ],
        user:'',
        users:[
            {uid:'01',uname:'男'},
            {uid:'02',uname:'女'},
        ],
        props:{
            value:'uname',label:'uname',
            lazy:true,lazyLoad:this.lazyLoad
        }
    };
  },
  components: {},
  methods: {
      handleChange(val){
          console.log(val)
      },
      lazyLoad(node,resolve){
console.log(node);
      }
  }
};
</script>

<style  scoped>
</style>
