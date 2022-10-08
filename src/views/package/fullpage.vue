<template>
  <el-card shadow="hover">
    <template #header>
      <nav class="flex justify-between">
        <strong>全屏滚动</strong>
        <el-link type="primary" target="_blank" href="https://github.com/alvarotrigo/vue-fullpage.js">vue-fullpage.js</el-link>
      </nav>
    </template>
    <div>
      <VueFullPage ref="fullpage" :options="options" id="fullpage">
        <div class="section">First section ...</div>
        <div class="section">Second section ...</div>
      </VueFullPage>
    </div>
  </el-card>
</template>

<script setup lang="ts" name="fullpage">
import 'vue-fullpage.js/dist/style.css'
import VueFullPage from 'vue-fullpage.js'

const options = {
  licenseKey: 'YOUR_KEY_HEERE',
  menu: '#menu',
  anchors: ['page1', 'page2', 'page3'],
  sectionsColor: ['#41b883', '#ff5f45', '#0798ec'],
}
</script>

<style scoped lang="less">

</style>