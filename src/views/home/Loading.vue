<template>
  <div>
<h2>子组件{{fooRef}}</h2>
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