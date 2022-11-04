<template>
 <div>
   <demo></demo>
 </div>
</template>
<script setup lang="ts">
import demo from './demo.tsx'
import { useGeolocation } from '@vueuse/core'
const {
  coords, // 经纬度
  locatedAt, // 时间
  error
} = useGeolocation()


console.log(coords.value)
</script>