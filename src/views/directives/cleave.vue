<template>
  <el-card shadow="hover">
    <template #header>
      输入格式化
    </template>
    <el-input name="text" v-model="ccMonth" v-cleave="{date: true,datePattern: ['m']}"/>
  </el-card>
</template>

<script setup lang="ts" name="cleave">
let ccMonth = shallowRef()
</script>

<style scoped lang="less">

</style>