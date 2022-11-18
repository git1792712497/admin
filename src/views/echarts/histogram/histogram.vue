<template>
  <el-card :body-style="{height:'100%'}" shadow="hover" style="height: 100%;">
    <div class="histogram"/>
  </el-card>

</template>

<script lang="ts" name="histogram" setup>
import echarts from "@/settings/echarts";
import { getOption } from './options'

onMounted(async () => {
  //初始化echarts,init接收三个参数:1是DOM元素,2是主题,3是渲染器
  const echartsInstance = echarts.init(document.querySelector('.histogram'), '', {renderer: 'svg'})
  const options = await getOption()
  echartsInstance.setOption(options)
})
</script>

<style scoped>
.histogram {
  height: 85%;
  width: 100%;
}
</style>
