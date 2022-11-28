<template>
  <el-card :body-style="{height:'100%'}" shadow="hover" style="height: 100%;">
    <template #header>
      lodash常用工具函数
    </template>
    <el-collapse model-value="1">
      <el-collapse-item name="1" title="isEqual 比较两个值完全相等">
        <h1>
          <div>let object1 = {a:1,b:{c:2}}</div>
          <div> let object2 = {a:1,b:{c:2}}</div>
        </h1>
        <h1>{{isEqual(object1,object2)}}</h1>
      </el-collapse-item>
      <el-collapse-item name="2" title="Feedback">

      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script lang="ts" name="lodash" setup>
import {isEqual} from 'lodash-es'

let object1 = {a:1,b:{c:2}}
let object2 = {a:1,b:{c:2}}

import {pullAllBy} from 'lodash-es'
let array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);

</script>

<style lang="less" scoped>

</style>