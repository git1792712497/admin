<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <div class="mapChart">

    </div>
  </el-card>
</template>

<script setup lang="ts" name="mapChart">
import echarts from "@/settings/echarts";
import {mapData} from './mapData'
import {options} from './options'


onMounted(() => {
  const instance = echarts.init(document.querySelector('.mapChart'))
  echarts.registerMap('china',mapData)
  instance.setOption(options)
})
</script>

<style scoped lang="less">
.mapChart{
  width: 100%;
  height:90%;
}
</style>