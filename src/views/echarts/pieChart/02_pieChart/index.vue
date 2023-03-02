<template>
  <el-card style="height: 100%;" :body-style="{height:'100%'}" shadow="hover">
    <div class="pieChart" id="pieChart2"/>
  </el-card>
</template>

<script lang="ts" name="pieChart" setup>
import { onClickOutside } from '@vueuse/core'
import {getOption} from './options2'
import {useEcharts} from "@/hooks/useEcharts";

const target = shallowRef(null)
onMounted(async () => {
  const {echartsInstance,setOption} = useEcharts('#pieChart2')
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
