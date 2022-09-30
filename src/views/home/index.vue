<template>
  <h2>
    <component :is="Child"></component>
  </h2>
</template>

<script setup lang="ts" name="home">
console.log('home')
import Child from './Child.vue'
</script>