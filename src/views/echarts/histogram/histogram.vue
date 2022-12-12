<template>
  <el-card :body-style="{height:'100%'}" shadow="hover" style="height: 100%;">
    <div class="histogram"/>
  </el-card>

</template>

<script lang="ts" name="histogram" setup>
import { getOption } from './options'
import { useEcharts } from '@/hooks/useEcharts'

onMounted(async () => {
  const {setOption} = useEcharts('.histogram')
  const options = await getOption()
  setOption(options)
})
</script>

<style scoped>
.histogram {
  height: 85%;
  width: 100%;
}
</style>
