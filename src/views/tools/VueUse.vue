<template>
  <el-card :body-style="{height:'100%'}" shadow="hover" style="height: 100%;">
    <template #header>
      VueUse常用工具函数
    </template>
    <el-collapse model-value="1">
      <el-collapse-item name="1" title="窗口大小改变">
        <h1>宽{{width}}</h1>
        <h1>高{{height}}</h1>
      </el-collapse-item>
      <el-collapse-item name="2" title="Feedback">

      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script lang="ts" name="VueUse" setup>
import { useWindowSize } from '@vueuse/core'
const {width, height} = useWindowSize()




</script>

<style lang="less" scoped>

</style>