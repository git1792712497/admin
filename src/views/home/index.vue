<template>
  <el-card shadow="hover">
    <template #header>

    </template>

    <div contenteditable="true">
        aa
    </div>
  </el-card>
</template>
<script lang="ts" setup>
const observe = new MutationObserver((mutationsList) => {
  console.log(mutationsList)
})
</script>


<style scoped lang="less">

</style>

