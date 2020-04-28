<template>
    <div class="">
 <el-table
      :data="pageInfo.list"
      style="width: 100%"
      stripe
      
      height="250">
      <el-table-column
        v-for="column in columns" :key="column.prop"
        :prop="column.prop"
        :label="column.label"
        :width="column.width">
      </el-table-column>
    <el-table-column
      label="图片"
      width="100">
      <template slot-scope="scope">
       <img width="50" v-if="scope.row.photo!=undefined" :src="host+'/upload/'+scope.row.photo">
      </template>
    </el-table-column>
      <el-table-column
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button type="text" size="small">编辑</el-button>
        <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
 </el-table>
  <el-pagination
    :current-page.sync="pageInfo.pageNum"
    :page-size="pageInfo.pageSize"
    @current-change="handleChangePage"
    @size-change="handleChangeSize"
    :page-sizes="[3, 6, 9, 12]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="pageInfo.total">
  </el-pagination>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            pageInfo:{},
            columns:[
                {prop:'uid',label:'编号',width:'100'},
                {prop:'uname',label:'用户名',width:'100'},
                {prop:'sex',label:'性别',width:'100'},
                {prop:'birthdayString',label:'出生日期',width:'100'},
            ]
        }
    },
    components: {},
    methods: {
        del(row){console.log(row);},
        handleChange(val){this.find(val,this.pageInfo.pageSize);},
        handleChangeSize(val){this.find(this.pageInfo.pageNum,val);}
    }
}
</script>

<style  scoped>
</style>
