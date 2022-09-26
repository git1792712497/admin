<template>
  <section class="detail">
  {{id}}
  </section>
</template>

<script setup lang="ts" name="detail">
const props = defineProps({
  id:{
    type:[String,Number]
  }
})
</script>

<style scoped lang="less">

</style>