<template>
  <div>
      <slot name="icon"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  data:{
    type:Number
  }
})

const fooRef = toRef(props, 'data')


</script>

<style scoped>

</style>