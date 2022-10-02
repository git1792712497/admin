<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <div class="about" ref="divRef">

    </div>
  </el-card>

</template>

<script setup lang="ts">
import echarts from "@/settings/echarts";
import {getOption} from './options'

const divRef = shallowRef()
onMounted(async ()=>{
  //初始化echarts,init接收三个参数:1是DOM元素,2是主题,3是渲染器
  const echartsInstance = echarts.init(divRef.value,'',{renderer:'svg'})
  const options = await getOption()
  echartsInstance.setOption(options)
})
</script>

<style scoped>
.about{
  width: 100%;
  height: 100%;
}
</style>
