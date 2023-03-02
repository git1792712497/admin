<template>
  <el-card style="height: 100%;" :body-style="{height:'100%'}" shadow="hover">
    <div class="pieChart" id="pieChart1"/>
  </el-card>
</template>

<script lang="ts" name="pieChart" setup>
import { onClickOutside } from '@vueuse/core'
import { getOption} from './options'
import {useEcharts} from "@/hooks/useEcharts";

const target = shallowRef(null)
onMounted(async () => {
  //初始化echarts,init接收三个参数:1是DOM元素,2是主题,3是渲染器
  const {echartsInstance,setOption} = useEcharts('#pieChart1')
  setOption(getOption())
  echartsInstance.on('click', function (params) {
    console.log(params);
  });
})

onClickOutside(target, (event) => console.log(event))

</script>

<style lang="less" scoped>
.pieChart {
  width: 100%;
  height: 100%;
}
</style>
