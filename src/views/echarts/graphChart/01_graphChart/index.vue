<template>
  <el-card :body-style="{height:'100%'}" shadow="hover" style="height: 100%;">
    <div class="graphChart-1"/>
  </el-card>

</template>

<script lang="ts" name="histogram" setup>
import { getOption } from './options'
import { useEcharts } from '@/hooks/useEcharts'

onMounted(() => {
  const {setOption} = useEcharts('.graphChart-1')
  setOption(getOption())
})
</script>

<style scoped>
.graphChart-1 {
  height: 100%;
  width: 100%;
}
</style>
