<template>
  <el-card shadow="hover">
    <template #header>
      <nav class="flex justify-between">
        <strong>数值滚动</strong>
        <el-link type="primary" target="_blank" href="https://github.com/inorganik/countUp.js">CountUp.js</el-link>
      </nav>
    </template>
    <h1 ref="domRef">1111</h1>
  </el-card>
</template>

<script setup lang="ts" name="countUp">
import { CountUp } from 'countup.js'
const domRef = shallowRef()

onMounted(() => {
  const countUp = new CountUp(unref(domRef), 20000, {startVal: 0,decimalPlaces:1})
  countUp.start()
})


</script>

<style scoped lang="less">

</style>
