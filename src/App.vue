<template>
  <main>

    <Suspense>
  <!-- 具有深层异步依赖的组件 -->
     <home></home>  
  <!-- 在 #fallback 插槽中显示 “正在加载中” -->
    <template #fallback>
      Loading...
    </template>
</Suspense>
  </main>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';

const home = defineAsyncComponent(() => import('./components/home.vue'))



</script>

<style lang="less">

</style>

