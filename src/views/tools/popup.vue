<template>
<div>
  <Popup v-model="isOpen">
    aaa
  </Popup>
</div>
</template>

<script setup lang="ts">
import Popup from '@/components/popup/index.vue'

let isOpen = shallowRef(true)
</script>

<style scoped lang="less">

</style>
