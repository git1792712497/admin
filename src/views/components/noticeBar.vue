<template>
  <el-card shadow="hover">
    <template #header>
      <strong>通告栏</strong>
    </template>
    <NoticeBar text="已删除非当前页 tagsView 演示，后续有时间可以再加回来！，tagsview 支持多标签（参数不同）、单标签共用（参数不同）">

    </NoticeBar>
  </el-card>
</template>

<script setup lang="ts">
import NoticeBar from '@/components/noticeBar/index.vue'
</script>

<style scoped lang="less">

</style>