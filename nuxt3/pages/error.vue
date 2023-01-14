<template>
<h1 @click="handleToHome">
  {{error}}
</h1>
</template>

<script setup lang="ts" name="error">
defineProps({
  error:Object
})

const handleToHome = () => {
  clearError({redirect:'/'})
}
</script>

<style scoped lang="less">

</style>
