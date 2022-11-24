<template>
  <el-card :body-style="{height:'100%'}" shadow="hover" style="height: 100%;">
    <template #header>
      VueUse常用工具函数
    </template>
    <el-collapse model-value="1">
      <el-collapse-item name="1" title="Consistency">

      </el-collapse-item>
      <el-collapse-item name="2" title="Feedback">

      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script lang="ts" name="VueUse" setup>
import { useWindowScroll } from '@vueuse/core'

const { x, y } = useWindowScroll({window})
</script>

<style lang="less" scoped>

</style>