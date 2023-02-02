<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>
      <nav class="flex justify-between">
        <el-button type="primary" @click="handleGetValue">富文本编辑器</el-button>
        <el-link type="primary" target="_blank" href="https://www.wangeditor.com/">wangEditor官网</el-link>
      </nav>
    </template>
    <main style="border: 1px solid #ccc;height: 100%;">
      <wangEditor v-model:value="htmlValue"/>
    </main>
  </el-card>
</template>

<script setup lang="ts" name="wangEditor">
import WangEditor from '@/components/WangEditor/index.vue'
import { shallowRef } from "vue";

const htmlValue = shallowRef('')

const handleGetValue = () => {
  console.log(htmlValue.value)
}
</script>

<style scoped lang="less">

</style>
