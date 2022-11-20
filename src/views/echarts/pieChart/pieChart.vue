<template>
  <el-card :body-style="{height:'100%'}" shadow="hover">
   <section>
     <div class="pieChart" id="pieChart1"/>
     <div class="pieChart" id="pieChart2"/>
   </section>
  </el-card>
</template>

<script lang="ts" name="pieChart" setup>
import { onClickOutside } from '@vueuse/core'
import { getOption1} from './options1'
import {getOption2} from './options2'
import {useEcharts} from "@/hooks/useEcharts";

const target = shallowRef(null)
onMounted(async () => {
  //初始化echarts,init接收三个参数:1是DOM元素,2是主题,3是渲染器
  const {echartsInstance:echartsInstance1,setOption:setOption1} = useEcharts('#pieChart1')
  setOption1(getOption1())
  echartsInstance1.on('click', function (params) {
    console.log(params);
  });

  const {echartsInstance:echartsInstance2,setOption:setOption2} = useEcharts('#pieChart2')
  setOption2(getOption2())
  echartsInstance2.on('click', function (params) {
    console.log(params);
  });
})

onClickOutside(target, (event) => console.log(event))

</script>

<style lang="less" scoped>
.pieChart {
  width: 100%;
  height: 800px;
}
</style>