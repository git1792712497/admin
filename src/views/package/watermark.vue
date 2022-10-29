<template>
  <el-card shadow="hover" :body-style="{height:'100%'}" style="height: 100%;">
    <template #header>
      <nav class="flex justify-between">
        <strong>水印</strong>
        <el-link type="primary" target="_blank" href="https://www.naiveui.com/zh-CN/light/components/watermark">NaiveUi</el-link>
      </nav>
    </template>
    <n-watermark
        content="大家艰苦一下，一切都会有的"
        cross
        fullscreen
        :font-size="16"
        :line-height="16"
        :width="384"
        :height="384"
        :x-offset="12"
        :y-offset="60"
        :rotate="-15"/>
  </el-card>
</template>

<script setup lang="ts" name="watermark">
import {NWatermark} from 'naive-ui'
</script>

<style scoped lang="less">

</style>