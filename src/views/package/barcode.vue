<template>
  <el-card shadow="hover">
    <template #header>
      <nav class="flex justify-between">
        <strong>条形码</strong>
        <el-link type="primary" target="_blank" href="https://lindell.me/JsBarcode">jsbarcode</el-link>
      </nav>
    </template>
    <svg id="barcode"></svg>
  </el-card>
</template>
<script setup lang="ts" name="barcode">
// pnpm i JsBarcode
import JsBarcode from "jsbarcode";
onMounted(() => {
  JsBarcode("#barcode", "Hi world!")
})
</script>

<style scoped lang="less">

</style>