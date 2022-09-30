<template>
  <h2>
    <keep-alive>
      <Child></Child>
    </keep-alive>
  </h2>
</template>

<script setup lang="ts" name="home">
console.log('home')
import Child from './Child.vue'
</script>