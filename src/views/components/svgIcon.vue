<template>
  <el-card shadow="hover">
    <template #header>
       <nav class="flex justify-between">
         <strong>svgIcon</strong>
         <div><el-link type="primary" target="_blank" href="https://github.com/vbenjs/vite-plugin-svg-icons">github地址</el-link></div>
       </nav>
    </template>
    <SvgIcon name="red"/>
  </el-card>
</template>

<script setup lang="ts" name="svgIcon">
import SvgIcon from "@/components/svgIcon/index.vue";
</script>

<style scoped lang="less">

</style>
