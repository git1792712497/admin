<template>
<div>
水印
</div>
</template>

<script setup lang="ts" name="watermark">
import watermark from 'watermark-dom'

onMounted(() => {
  console.log(watermark);
})
</script>

<style scoped lang="less">

</style>