<template>
  <el-row :gutter="15">
    <el-col :span="2">
      <el-button style="width: 100%;" type="primary" @click="emit('addMenu')">新增菜单</el-button>
    </el-col>
    <el-col :span="4">
      <el-input v-model="input" placeholder="请输入菜单名称" clearable/>
    </el-col>
    <el-col :span="2" :offset="16">
      <el-button type="primary" style="width: 100%;">查询</el-button>
    </el-col>
  </el-row>
</template>

<script setup lang="ts" name="TopSearch">
import { shallowRef } from "vue";

const emit = defineEmits(['addMenu'])
let input = shallowRef()
</script>

<style scoped lang="less">

</style>
