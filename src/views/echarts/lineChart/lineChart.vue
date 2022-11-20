<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <div class="lineChart">

    </div>
  </el-card>
</template>

<script setup lang="ts" name="lineChart">
import {getOption} from './options'
import {useEcharts} from "@/hooks/useEcharts";

onMounted(async ()=>{
  const {setOption} = useEcharts('.lineChart')
  const options = await getOption()
  setOption(options)
})
</script>

<style scoped>
.lineChart{
  width: 100%;
  height: 90%;
}
</style>
