<template>
  <el-card shadow="hover">
    <template #header>
      <nav class="flex justify-between">
        <strong>气泡提示</strong>
        <el-link type="primary" target="_blank" href="https://atomiks.github.io/tippyjs">tippyjs</el-link>
      </nav>
    </template>

    <el-button type="primary" id="button">移入提示</el-button>
  </el-card>
</template>

<script setup lang="ts" name="tippy">
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

onMounted(() => {
  tippy('#button', {
    content: "I'm a Tippy tooltip!",
    arrow: true,
    animation: 'scale',
  });
})
</script>

<style scoped lang="less">

</style>