<template>
  <el-card shadow="hover">
    <template #header>

    </template>

    <div contenteditable="true">

    </div>
  </el-card>
</template>
<script lang="ts" setup>
import { getOrderList } from "@/api/upload";

const observe = new MutationObserver((mutationsList) => {
  console.log(mutationsList)
})

getOrderList().then(res => {
  console.log(res)
})
</script>


<style scoped lang="less">

</style>

