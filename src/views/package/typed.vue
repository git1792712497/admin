<template>
  <el-card shadow="hover">
    <template #header>
        <nav class="flex justify-between">
          <strong>打字效果</strong>
          <el-link type="primary" target="_blank" href="https://mattboldt.com/demos/typed-js/">typed.js</el-link>
        </nav>
    </template>
    <h1 class="element"></h1>
  </el-card>
</template>

<script setup lang="ts" name="typed">
import Typed from 'typed.js'
onMounted(() => {
  const typed = new Typed('.element', {
    strings: ["Driver.js是一个轻量级（约4kb gzip），并且无任何依赖，但功能强大的JavaScript引擎。Driver.js可以提高用户对页面的关注度，，也可以创建强大的分部引导介绍功能，号召性用语组件，焦点移位器等。更重要的是Driver.js支持所有的主流浏览器。系统引导页使用。", "Second sentence."],
    typeSpeed: 30
  });
})
</script>

<style scoped lang="less">

</style>