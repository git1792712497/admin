<template>
  <el-card :body-style="{height:'100%'}" shadow="hover" style="height: 100%;">
    <div class="wordcloud">

    </div>
  </el-card>
</template>

<script lang="ts" name="wordcloud" setup>
import "echarts-wordcloud";
import { useEcharts } from "@/hooks/useEcharts";
import {getOption} from './options'

onMounted(() => {
  const {setOption} = useEcharts('.wordcloud')
  setOption(getOption())
});
</script>

<style lang="less" scoped>
.wordcloud {
  width: 100%;
  height: 100%;
}
</style>
