<template>
  <el-card :body-style="{height:'100%'}" shadow="hover" style="height: 100%;">
    <template #header>
      VueUse常用工具函数
    </template>
    <el-collapse model-value="1">
      <el-collapse-item name="1" title="窗口大小改变">
        <h1>宽{{width}}</h1>
        <h1>高{{height}}</h1>
      </el-collapse-item>
      <el-collapse-item name="2" title="创建一个URL链接">
        <input type="file" @change="onFileChange" />
        <el-link type="primary" target="_blank" :href="url">url</el-link>
      </el-collapse-item>
      <el-collapse-item name="3" title="Blob转Base64">
        <input type="file" @change="onBlobToBase64" />
        <el-link type="primary" target="_blank" :href="url">url</el-link>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script lang="ts" name="VueUse" setup>
import { shallowRef } from "vue";

import { useWindowSize } from '@vueuse/core'
const {width, height} = useWindowSize()


import { useObjectUrl } from '@vueuse/core'
const url = shallowRef()
const onFileChange = (event) => url.value = unref(useObjectUrl(event.target.files[0]))


import { useBase64 } from '@vueuse/core'
const onBlobToBase64 = async (event) => {
  const {execute} = useBase64(event.target.files[0])
  const res = await execute()
  console.log(res)
}

</script>

<style lang="less" scoped>

</style>
