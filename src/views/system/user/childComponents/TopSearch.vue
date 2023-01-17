<template>
  <el-row :gutter="15">
    <el-col :span="2">
      <el-button style="width: 100%;" type="primary" @click="emit('addRole')">新增用户</el-button>
    </el-col>
    <el-col :span="4">
      <el-input v-model="input" placeholder="请输入用户名称" clearable/>
    </el-col>
    <el-col :span="2" :offset="16">
      <el-button type="primary" style="width: 100%;">查询</el-button>
    </el-col>
  </el-row>
</template>

<script setup lang="ts" name="TopSearch">
import { shallowRef } from "vue";
let input = shallowRef()

const emit = defineEmits(['addRole'])
</script>

<style scoped lang="less">

</style>
