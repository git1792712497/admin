<template>
  <el-card shadow="hover" style="height: 100%;" :body-style="{height:'100%'}">
    <template #header>
        <div class="flex justify-between">
          <span>hover.css</span>
          <el-link type="primary" target="_blank" href="https://ianlunn.github.io/Hover/">hover.css</el-link>
        </div>
    </template>
    
    <el-button type="primary" class="hvr-float-shadow">按钮</el-button>
  </el-card>
</template>

<script setup lang="ts" name="hover.css">
// pnpm i hover.css --save
import 'hover.css'
</script>

<style scoped lang="less">

</style>