<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>
        <nav class="flex justify-between">
          <strong>时间处理</strong>
          <el-link type="primary" target="_blank" href="https://dayjs.fenxianglu.cn/">dayjs</el-link>
        </nav>
    </template>

    <h1>当前时间 : {{dayjs(now).format('YYYY-MM-DD-HH-mm-ss')}}</h1>
  </el-card>
</template>

<script setup lang="ts" name="dayjs">
import { useNow } from '@vueuse/core'
import dayjs from "dayjs";
const { now, pause, resume } = useNow({ controls: true,interval:'requestAnimationFrame' })
</script>

<style scoped lang="less">

</style>
