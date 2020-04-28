<template>
  <div class>
    <el-row>
      <el-col :span="1">开关</el-col>
      <el-col :span="10">
        <el-switch
          v-model="tag"
          active-color="#13ce66"
          inactive-color="#ff4949"
          @change="handleChange"
        ></el-switch>
      </el-col>
      <el-col>
        <el-switch
          v-model="sex"
          active-value="男"
          inactive-value="女"
          active-text="男"
          inactive-text="女"
          @change="handleChange"
        ></el-switch>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="1">滑动</el-col>
      <el-col :span="10">
        <el-slider v-model="value" @change="handleChange"
        ></el-slider>
      </el-col>
       <el-col :span="10" :offset="1">
        <el-slider v-model="value" @change="handleChange"
        :format-tooltip="format"></el-slider>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <el-slider v-model="value" @change="handleChange"
        :step="10"></el-slider>
      </el-col>
       <el-col :span="10" :offset="1">
        <el-slider v-model="value" @change="handleChange"
        :format-tooltip="format"
        :step="10"
        show-stops></el-slider>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <el-slider v-model="value" @change="handleChange"
        :step="10"
        show-input></el-slider>
      </el-col>
       <el-col :span="10" :offset="1">
        <el-slider v-model="value2" @change="handleChange"
        :format-tooltip="format"
        show-stops
        range
        :step="5"
        :max="60"
        :min="20"></el-slider>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
       <el-date-picker
      v-model="birthday"
      type="date"
      placeholder="选择日期"
      format="yyyy/MM/dd">
    </el-date-picker>
      </el-col>
       <el-col :span="10">
      <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      @change="handleChange">
    </el-date-picker>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      tag: true,
      sex: "男",
      value:30,
      value2:[30,40],
      birthday:"1998-8-17"
    };
  },
  components: {},
  methods: {
    handleChange(val) {
        console.log(val)
    },
    format(value){
        return value/100;
    }
  }
};
</script>

<style  scoped>
</style>
