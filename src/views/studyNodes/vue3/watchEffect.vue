<template>
  <el-card>
    <template #header>
      watchEffect使用
    </template>
    <el-button type="primary" @click="handleClick">按钮</el-button>
    <el-button type="primary" @click="stop">停止监听</el-button>
  </el-card>
</template>

<script setup lang="ts" name="watchEffect">
let number = ref(0)

const stop = watchEffect((onCleanup) => {
  console.log(number.value)
  onCleanup(() => {
    console.log('副作用')
  })
},{flush: 'pre'})
// flush: 'pre' | 'post' | 'sync'

const handleClick = () => {
  number.value += 1
}
</script>

<style scoped lang="less">

</style>