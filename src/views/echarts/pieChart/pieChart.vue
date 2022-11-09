<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <div class="pieChart" ref="target">

    </div>
  </el-card>
</template>

<script setup lang="ts" name="pieChart">
import { onClickOutside } from '@vueuse/core'
import echarts from "@/settings/echarts";
import {getOption} from './options'

const target = shallowRef(null)
onMounted(async ()=>{
  //初始化echarts,init接收三个参数:1是DOM元素,2是主题,3是渲染器
  const echartsInstance = echarts.init(document.querySelector('.pieChart'),'',{renderer:'svg'})
  const options = await getOption()
  echartsInstance.setOption(options)

  echartsInstance.on('click', function (params) {
    console.log(params);
  });
})

onClickOutside(target, (event) => console.log(event))

</script>

<style scoped lang="less">
.pieChart{
  width: 100%;
  height: 90%;
}
</style>