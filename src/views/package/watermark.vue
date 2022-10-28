<template>
  <div class="watermark">
    水印
  </div>
</template>

<script setup lang="ts" name="watermark">
import watermark from 'watermark-dom'

onMounted(() => {
 setTimeout(() => {
  watermark.init({ watermark_txt: "测试水印"});
 }, 2000);
});

onBeforeUnmount(() => {
  nextTick(() => {
    try {
      watermark.remove();
    } catch (error) { }
  });
});
</script>

<style scoped lang="less">

</style>